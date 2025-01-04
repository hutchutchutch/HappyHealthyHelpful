export interface Node {
  id: string;
  group: 'main' | 'secondary' | 'tertiary';
  parent?: string;
  x?: number;
  y?: number;
  fx?: number | null;
  fy?: number | null;
}

export interface Link {
  source: string | Node;
  target: string | Node;
  value: number;
}

export interface GraphData {
  nodes: Node[];
  links: Link[];
}

export interface GraphDTO {
  data: GraphData;
  status: 'success' | 'error';
  message?: string;
}