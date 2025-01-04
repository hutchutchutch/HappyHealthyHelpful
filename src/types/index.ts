export interface ChatMessage {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  createdAt: Date;
}

export interface WorkflowState {
  messages: ChatMessage[];
  context: Record<string, any>;
  metadata: Record<string, any>;
}

export interface AgentResponse {
  output: string;
  intermediateSteps: any[];
  metadata: Record<string, any>;
}