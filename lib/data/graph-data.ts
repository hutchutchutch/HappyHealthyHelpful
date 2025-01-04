import { GraphData } from '../types/graph';
import { happyNodes } from './nodes/happy-nodes';
import { healthyNodes } from './nodes/healthy-nodes';
import { helpfulNodes } from './nodes/helpful-nodes';

// Combine all nodes
const nodes = [...happyNodes, ...healthyNodes, ...helpfulNodes];

// Generate links
const generateLinks = () => {
  const links = [];
  
  // Helper function to create links
  const createLinks = (parentId: string) => {
    const childNodes = nodes.filter(node => node.parent === parentId);
    childNodes.forEach(child => {
      links.push({ source: parentId, target: child.id, value: child.group === 'secondary' ? 2 : 1 });
    });
  };

  // Create links for main nodes and their children
  ['Happy', 'Healthy', 'Helpful'].forEach(mainNode => {
    // Get secondary nodes
    const secondaryNodes = nodes.filter(node => node.parent === mainNode);
    secondaryNodes.forEach(secondary => {
      links.push({ source: mainNode, target: secondary.id, value: 2 });
      createLinks(secondary.id);
    });
  });

  return links;
};

export const graphData: GraphData = {
  nodes,
  links: generateLinks(),
};