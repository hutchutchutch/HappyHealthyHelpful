import { NodeDetails } from '../../types/node-details';

export const healthyNodeDetails: Record<string, NodeDetails> = {
  Nourish: {
    id: 'Nourish',
    description: 'Support physical and mental wellbeing through mindful nourishment practices.',
    goals: [
      { title: 'Balanced Diet', description: 'Maintain nutritious and balanced eating habits' },
      { title: 'Rest Quality', description: 'Optimize sleep and recovery routines' },
      { title: 'Natural Connection', description: 'Regular exposure to nature and fresh air' }
    ]
  },
  Mindfulness: {
    id: 'Mindfulness',
    description: 'Cultivate awareness and presence in daily life.',
    goals: [
      { title: 'Daily Practice', description: 'Regular meditation and mindfulness exercises' },
      { title: 'Emotional Awareness', description: 'Track and process emotions mindfully' },
      { title: 'Present Living', description: 'Practice presence in daily activities' }
    ]
  },
  Eustress: {
    id: 'Eustress',
    description: 'Engage in positive stress that promotes growth and adaptation.',
    goals: [
      { title: 'Movement Practice', description: 'Regular challenging physical activity' },
      { title: 'Skill Development', description: 'Progressive improvement in body control' },
      { title: 'Recovery Balance', description: 'Maintain optimal stress/recovery ratio' }
    ]
  },
  Cleanse: {
    id: 'Cleanse',
    description: 'Support body\'s natural detoxification and renewal processes.',
    goals: [
      { title: 'Regular Practice', description: 'Maintain consistent cleansing routines' },
      { title: 'Body Awareness', description: 'Listen and respond to body\'s needs' },
      { title: 'Holistic Health', description: 'Integrate various cleansing practices' }
    ]
  }
};