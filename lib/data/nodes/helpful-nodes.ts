import { Node } from '@/lib/types/graph';

export const helpfulNodes: Node[] = [
  { id: 'Helpful', group: 'main' },
  
  // Contribute nodes
  { id: 'Contribute', group: 'secondary', parent: 'Helpful' },
  { id: 'Software', group: 'tertiary', parent: 'Contribute' },
  { id: 'Food Share', group: 'tertiary', parent: 'Contribute' },
  { id: 'Design', group: 'tertiary', parent: 'Contribute' },
  { id: 'Facilitation', group: 'tertiary', parent: 'Contribute' },

  // Give nodes
  { id: 'Give', group: 'secondary', parent: 'Helpful' },
  { id: 'Food', group: 'tertiary', parent: 'Give' },
  { id: 'Labor', group: 'tertiary', parent: 'Give' },
  { id: 'Gifts', group: 'tertiary', parent: 'Give' },

  // Support nodes
  { id: 'Support', group: 'secondary', parent: 'Helpful' },
  { id: 'Family', group: 'tertiary', parent: 'Support' },
  { id: 'Friends', group: 'tertiary', parent: 'Support' },
  { id: 'Community', group: 'tertiary', parent: 'Support' },
  { id: 'Exemplars', group: 'tertiary', parent: 'Support' },

  // Connect nodes
  { id: 'Connect', group: 'secondary', parent: 'Helpful' },
  { id: 'Creatives', group: 'tertiary', parent: 'Connect' },
  { id: 'Wellness', group: 'tertiary', parent: 'Connect' },
  { id: 'Entrepreneurs', group: 'tertiary', parent: 'Connect' },
  { id: 'Inspiration', group: 'tertiary', parent: 'Connect' },
];