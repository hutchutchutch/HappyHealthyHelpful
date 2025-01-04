import { Node } from '../types/graph';
import { nodeColors } from '../constants/colors';

export function getNodeColor(node: Node): string {
  const getMainGroup = (node: Node): 'happy' | 'healthy' | 'helpful' => {
    if (node.group === 'main') return node.id.toLowerCase() as 'happy' | 'healthy' | 'helpful';
    if (!node.parent) return 'happy'; // fallback
    
    const parentNode = node.parent.split(' ')[0];
    if (parentNode === 'Happy' || ['Grow', 'Create', 'Play', 'Explore'].includes(parentNode)) return 'happy';
    if (parentNode === 'Healthy' || ['Nourish', 'Cleanse', 'Eustress', 'Mindfulness'].includes(parentNode)) return 'healthy';
    return 'helpful';
  };

  const mainGroup = getMainGroup(node);
  const colors = nodeColors[mainGroup];

  switch (node.group) {
    case 'main':
      return colors.main;
    case 'secondary':
      return colors.secondary;
    case 'tertiary': {
      // Get index based on position in parent's children
      const siblings = node.parent ? 
        [node.id].filter(n => n !== node.id) : 
        [];
      const index = Math.min(siblings.length, colors.tertiary.length - 1);
      return colors.tertiary[index];
    }
    default:
      return colors.main;
  }
}