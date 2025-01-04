import { Node } from '@/lib/types/graph';

export const healthyNodes: Node[] = [
  { id: 'Healthy', group: 'main' },
  
  // Nourish nodes
  { id: 'Nourish', group: 'secondary', parent: 'Healthy' },
  { id: 'Gut', group: 'tertiary', parent: 'Nourish' },
  { id: 'Sleep', group: 'tertiary', parent: 'Nourish' },
  { id: 'Nature', group: 'tertiary', parent: 'Nourish' },
  { id: 'Stretch', group: 'tertiary', parent: 'Nourish' },

  // Mindfulness nodes
  { id: 'Mindfulness', group: 'secondary', parent: 'Healthy' },
  { id: 'CE5', group: 'tertiary', parent: 'Mindfulness' },
  { id: 'Oneness', group: 'tertiary', parent: 'Mindfulness' },
  { id: 'Reflection', group: 'tertiary', parent: 'Mindfulness' },
  { id: 'Feelings', group: 'tertiary', parent: 'Mindfulness' },
  { id: 'Senses', group: 'tertiary', parent: 'Mindfulness' },

  // Eustress nodes
  { id: 'Eustress', group: 'secondary', parent: 'Healthy' },
  { id: 'Body Control', group: 'tertiary', parent: 'Eustress' },
  { id: 'Range of Motion', group: 'tertiary', parent: 'Eustress' },
  { id: 'Plyometrics', group: 'tertiary', parent: 'Eustress' },
  { id: 'Coordination', group: 'tertiary', parent: 'Eustress' },
  { id: 'Balance', group: 'tertiary', parent: 'Eustress' },

  // Cleanse nodes
  { id: 'Cleanse', group: 'secondary', parent: 'Healthy' },
  { id: 'Sauna', group: 'tertiary', parent: 'Cleanse' },
  { id: 'Dry Brush', group: 'tertiary', parent: 'Cleanse' },
  { id: 'Fast', group: 'tertiary', parent: 'Cleanse' },
  { id: 'Oil Pull', group: 'tertiary', parent: 'Cleanse' },
  { id: 'Colonic', group: 'tertiary', parent: 'Cleanse' },
];