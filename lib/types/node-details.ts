export interface NodeGoal {
  title: string;
  description: string;
}

export interface NodeDetails {
  id: string;
  description: string;
  goals: NodeGoal[];
}