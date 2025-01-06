import { NodeDetails } from '../../types/node-details';
import { happyNodeDetails } from './happy-nodes';
import { healthyNodeDetails } from './healthy-nodes';
import { helpfulNodeDetails } from './helpful-nodes';

export const nodeDetails: Record<string, NodeDetails> = {
  Happy: {
    id: 'Happy',
    description: 'Cultivate joy through personal growth, creativity, play, and exploration.'
  },
  Healthy: {
    id: 'Healthy',
    description: 'Maintain optimal physical and mental wellbeing through mindful practices.'
  },
  Helpful: {
    id: 'Helpful',
    description: "Make positive contributions to communities and support others\' growth."
  },
  ...happyNodeDetails,
  ...healthyNodeDetails,
  ...helpfulNodeDetails
};