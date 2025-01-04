import { NodeDetails } from '../../types/node-details';

export const happyNodeDetails: Record<string, NodeDetails> = {
  Grow: {
    id: 'Grow',
    description: 'Expand knowledge and understanding through continuous learning and exploration.',
    goals: [
      { title: 'Daily Learning', description: 'Dedicate time each day to learning something new' },
      { title: 'Knowledge Sharing', description: 'Create content to share insights with others' },
      { title: 'Skill Development', description: 'Focus on developing specific skills each month' }
    ]
  },
  Create: {
    id: 'Create',
    description: 'Express creativity through various mediums and artistic pursuits.',
    goals: [
      { title: 'Regular Practice', description: 'Set aside dedicated creation time each week' },
      { title: 'Portfolio Building', description: 'Document and showcase creative works' },
      { title: 'Skill Mastery', description: 'Deep dive into specific creative techniques' }
    ]
  },
  Play: {
    id: 'Play',
    description: 'Engage in activities that bring joy, challenge, and physical engagement.',
    goals: [
      { title: 'Regular Activity', description: 'Participate in playful activities weekly' },
      { title: 'Skill Progress', description: 'Track and improve performance in chosen activities' },
      { title: 'Social Connection', description: 'Engage with others through shared interests' }
    ]
  },
  Explore: {
    id: 'Explore',
    description: 'Discover new experiences, perspectives, and ways of understanding the world.',
    goals: [
      { title: 'New Experiences', description: 'Try something new each month' },
      { title: 'Cultural Immersion', description: 'Deeply engage with different cultures and ideas' },
      { title: 'Documentation', description: 'Record and reflect on explorations' }
    ]
  }
};