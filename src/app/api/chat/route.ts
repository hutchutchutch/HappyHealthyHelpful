import { NextResponse } from 'next/server';
import { AgentService } from '@/lib/langchain/agents';
import { GraphService } from '@/lib/langchain/graphs';

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    
    const agent = new AgentService();
    const graph = new GraphService();
    
    const workflow = graph.setupGraph();
    const result = await workflow.invoke({
      input: message,
    });

    return NextResponse.json({ result });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}