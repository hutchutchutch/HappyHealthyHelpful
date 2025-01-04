import { Node } from '@/lib/types/graph';

export const happyNodes: Node[] = [
  { id: 'Happy', group: 'main' },
  
  // Grow nodes
  { id: 'Grow', group: 'secondary', parent: 'Happy' },
  { id: 'Read', group: 'tertiary', parent: 'Grow' },
  { id: 'Facilitate', group: 'tertiary', parent: 'Grow' },
  { id: 'Podcast', group: 'tertiary', parent: 'Grow' },
  { id: 'Documentary', group: 'tertiary', parent: 'Grow' },

  // Create nodes
  { id: 'Create', group: 'secondary', parent: 'Happy' },
  { id: '3D Model', group: 'tertiary', parent: 'Create' },
  { id: 'Songwriting', group: 'tertiary', parent: 'Create' },
  { id: 'Sauce', group: 'tertiary', parent: 'Create' },
  { id: 'Fashion', group: 'tertiary', parent: 'Create' },
  { id: 'UX', group: 'tertiary', parent: 'Create' },

  // Play nodes
  { id: 'Play', group: 'secondary', parent: 'Happy' },
  { id: 'Guitar', group: 'tertiary', parent: 'Play' },
  { id: 'Harmonica', group: 'tertiary', parent: 'Play' },
  { id: 'Sing', group: 'tertiary', parent: 'Play' },
  { id: 'Disc Golf', group: 'tertiary', parent: 'Play' },
  { id: 'Basketball', group: 'tertiary', parent: 'Play' },
  { id: 'Shooting', group: 'tertiary', parent: 'Play' },

  // Explore nodes
  { id: 'Explore', group: 'secondary', parent: 'Happy' },
  { id: 'Comedy', group: 'tertiary', parent: 'Explore' },
  { id: 'Music', group: 'tertiary', parent: 'Explore' },
  { id: 'Food Culture', group: 'tertiary', parent: 'Explore' },
  { id: 'Travel', group: 'tertiary', parent: 'Explore' },
  { id: 'Technology', group: 'tertiary', parent: 'Explore' },
  { id: 'History', group: 'tertiary', parent: 'Explore' },
  { id: 'Unique', group: 'tertiary', parent: 'Explore' },
];