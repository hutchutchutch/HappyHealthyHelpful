import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { RunnableSequence } from "@langchain/core/runnables";

export class ChainService {
  private model: ChatOpenAI;

  constructor() {
    this.model = new ChatOpenAI({
      modelName: "gpt-3.5-turbo",
      temperature: 0.7,
    });
  }

  public createChain(template: string) {
    const prompt = PromptTemplate.fromTemplate(template);
    
    return RunnableSequence.from([
      prompt,
      this.model,
      new StringOutputParser(),
    ]);
  }
}