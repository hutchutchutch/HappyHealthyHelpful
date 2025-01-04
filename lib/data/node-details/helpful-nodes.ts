import { NodeDetails } from '../../types/node-details';

export const helpfulNodeDetails: Record<string, NodeDetails> = {
  Contribute: {
    id: 'Contribute',
    description: 'Share skills and resources to benefit others and communities.',
    goals: [
      { title: 'Regular Service', description: 'Consistent contribution to meaningful projects' },
      { title: 'Skill Sharing', description: 'Teaching and mentoring others' },
      { title: 'Impact Tracking', description: 'Measure and improve contribution impact' }
    ]
  },
  Give: {
    id: 'Give',
    description: 'Practice generosity through various forms of giving.',
    goals: [
      { title: 'Regular Giving', description: 'Establish consistent giving practices' },
      { title: 'Thoughtful Gifts', description: 'Create meaningful giving experiences' },
      { title: 'Resource Sharing', description: 'Share abundance with others' }
    ]
  },
  Support: {
    id: 'Support',
    description: 'Nurture and strengthen relationships and community connections.',
    goals: [
      { title: 'Active Listening', description: 'Practice deep listening and presence' },
      { title: 'Regular Check-ins', description: 'Maintain consistent communication' },
      { title: 'Practical Help', description: 'Offer tangible support when needed' }
    ]
  },
  Connect: {
    id: 'Connect',
    description: 'Build meaningful relationships within various communities.',
    goals: [
      { title: 'Network Building', description: 'Expand and nurture professional connections' },
      { title: 'Community Engagement', description: 'Active participation in group activities' },
      { title: 'Relationship Depth', description: 'Develop deeper connections' }
    ]
  }
};