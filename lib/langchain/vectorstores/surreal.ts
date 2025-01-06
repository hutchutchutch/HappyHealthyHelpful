import { Embeddings } from "@langchain/core/embeddings";
import { OpenAIEmbeddings } from "@langchain/openai";
import { Document } from "@langchain/core/documents";
import Surreal from "surrealdb.js";

export class SurrealVectorStore {
  private db: Surreal;
  private embeddings: Embeddings;

  constructor() {
    this.db = new Surreal();
    this.embeddings = new OpenAIEmbeddings();
  }

  async initialize() {
    await this.db.connect('http://localhost:8000/rpc');
    await this.db.signin({
      username: 'root',
      password: 'root',
    });
    await this.db.use('test', 'test');
  }

  async addDocuments(documents: Document[]) {
    const vectors = await this.embeddings.embedDocuments(
      documents.map((doc) => doc.pageContent)
    );

    const records = documents.map((doc, i) => ({
      content: doc.pageContent,
      metadata: doc.metadata,
      embedding: vectors[i],
    }));

    await this.db.query(
      'CREATE documents CONTENT $data RETURN id',
      { data: records }
    );
  }

  async similaritySearch(query: string, k = 4) {
    const queryEmbedding = await this.embeddings.embedQuery(query);

    // Using vector similarity search in SurrealDB
    const result = await this.db.query(`
      SELECT *,
        vector::similarity(embedding, $embedding) as score
      FROM documents
      ORDER BY score DESC
      LIMIT $limit
    `, {
      embedding: queryEmbedding,
      limit: k,
    });

    return result[0].result as Array<{
      content: string;
      metadata: Record<string, any>;
      score: number;
    }>;
  }
} 