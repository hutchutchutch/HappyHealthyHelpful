import { SurrealVectorStore } from "../lib/langchain/vectorstores/surreal";
import { Document } from "@langchain/core/documents";
import { graphData } from "../lib/data/graph-data";
import { nodeDetails } from "../lib/data/node-details";

async function seedVectorStore() {
  const vectorStore = new SurrealVectorStore();
  await vectorStore.initialize();

  const documents = graphData.nodes.map(node => {
    const details = nodeDetails[node.id];
    return new Document({
      pageContent: `
        Node: ${node.id}
        Type: ${node.group}
        Description: ${details?.description || ''}
        Activities: ${details?.activities ? JSON.stringify(details.activities) : ''}
      `,
      metadata: {
        nodeId: node.id,
        group: node.group,
      },
    });
  });

  await vectorStore.addDocuments(documents);
  console.log('Vector store seeded successfully');
}

seedVectorStore().catch(console.error); 