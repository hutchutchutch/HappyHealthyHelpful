import { StateGraph, END } from "@langchain/langgraph";
import { ChatOpenAI } from "@langchain/openai";
import { RunnableLambda } from "@langchain/core/runnables";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { SurrealVectorStore } from "../vectorstores/surreal";

export class GraphService {
  private workflow: StateGraph;
  private model: ChatOpenAI;
  private vectorStore: SurrealVectorStore;

  constructor() {
    this.model = new ChatOpenAI({
      modelName: "gpt-4-turbo-preview",
      temperature: 0.7,
    });
    this.workflow = new StateGraph();
    this.vectorStore = new SurrealVectorStore();
  }

  async initialize() {
    await this.vectorStore.initialize();
  }

  public setupGraph() {
    this.workflow.addNode("retrieve", new RunnableLambda({ func: this.retrieveStep.bind(this) }));
    this.workflow.addNode("process", new RunnableLambda({ func: this.processStep.bind(this) }));
    this.workflow.addNode("validate", new RunnableLambda({ func: this.validateStep.bind(this) }));
    this.workflow.addNode("store", new RunnableLambda({ func: this.storeStep.bind(this) }));

    // Update graph flow
    this.workflow.addEdge("retrieve", "process");
    this.workflow.addEdge("process", "validate");
    this.workflow.addEdge("validate", "store");
    this.workflow.addEdge("store", END);

    return this.workflow.compile();
  }

  private async retrieveStep(data: { message: string }) {
    const relevantDocs = await this.vectorStore.similaritySearch(data.message);
    return {
      ...data,
      context: relevantDocs.map(doc => doc.content).join('\n'),
    };
  }

  private async processStep(data: { message: string; context: string }) {
    const prompt = ChatPromptTemplate.fromTemplate(`
      You are an AI assistant helping users design their ideal life around three pillars: Happy, Healthy, and Helpful.
      Use the following context to provide more relevant guidance:

      Context: {context}

      User message: {message}

      Provide a response that:
      1. Identifies which pillar(s) the message relates to
      2. Offers specific, actionable advice based on the context
      3. Suggests relevant activities or habits
      4. References specific examples from the context when applicable
    `);

    const chain = prompt.pipe(this.model).pipe(new StringOutputParser());
    const response = await chain.invoke({ 
      message: data.message,
      context: data.context,
    });
    
    return { 
      ...data,
      response,
      timestamp: new Date().toISOString()
    };
  }

  private async validateStep(data: any) {
    // Add validation logic here
    return data;
  }

  private async storeStep(data: any) {
    // Store conversation and context
    return {
      response: data.response,
      success: true
    };
  }

  public async processMessage(message: string) {
    const graph = this.setupGraph();
    return await graph.invoke({ message });
  }
} 