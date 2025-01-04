import { NodeDetails } from '../types/node-details';

export const nodeDetails: Record<string, NodeDetails> = {
  Happy: {
    id: 'Happy',
    description: 'Cultivate joy through personal growth, creativity, play, and exploration.',
    goals: [
      { title: 'Daily Joy', description: 'Engage in at least one joy-bringing activity each day' },
      { title: 'Creative Expression', description: 'Dedicate time weekly to creative pursuits' },
      { title: 'Continuous Learning', description: 'Explore one new interest or skill monthly' }
    ]
  },
  Healthy: {
    id: 'Healthy',
    description: 'Maintain optimal physical and mental wellbeing through mindful practices.',
    goals: [
      { title: 'Physical Wellness', description: 'Exercise and move mindfully each day' },
      { title: 'Mental Balance', description: 'Practice daily meditation and reflection' },
      { title: 'Nourishment', description: 'Maintain healthy eating and sleeping patterns' }
    ]
  },
  Helpful: {
    id: 'Helpful',
    description: "Make positive contributions to communities and support others\' growth.",
    goals: [
      { title: 'Community Impact', description: 'Contribute meaningfully to community projects' },
      { title: 'Knowledge Sharing', description: 'Share skills and experiences with others' },
      { title: 'Support Network', description: 'Actively maintain and grow support networks' }
    ]
  }
};