export interface NodeSchema {
  id: string;
  group: 'main' | 'secondary' | 'tertiary';
  parent?: string;
}

export interface NodeDetailsSchema {
  id: string;
  description: string;
  goals: Array<{
    title: string;
    description: string;
  }>;
}

export interface GraphDataSchema {
  nodes: NodeSchema[];
  links: Array<{
    source: string;
    target: string;
    value: number;
  }>;
}