import { Surreal } from 'surrealdb.js';
import { db } from '../index';
import { DesignSchema, SuggestedItem } from '../schemas/design.schema';

const MOCK_DATA: DesignSchema = {
  pillars: [
    { id: 'health', name: 'Health' },
    { id: 'career', name: 'Career' },
    { id: 'relationships', name: 'Relationships' },
    { id: 'personal-growth', name: 'Personal Growth' },
    { id: 'finance', name: 'Finance' },
    { id: 'spirituality', name: 'Spirituality' }
  ],
  categories: {
    'Health': [
      { id: 'exercise', name: 'Exercise' },
      { id: 'nutrition', name: 'Nutrition' },
      { id: 'sleep', name: 'Sleep' },
      { id: 'mental-health', name: 'Mental Health' }
    ],
    'Career': [
      { id: 'skills', name: 'Skills' },
      { id: 'networking', name: 'Networking' },
      { id: 'projects', name: 'Projects' },
      { id: 'learning', name: 'Learning' }
    ]
  },
  activities: {
    'Exercise': [
      { id: 'running', name: 'Running' },
      { id: 'yoga', name: 'Yoga' },
      { id: 'weight-training', name: 'Weight Training' },
      { id: 'swimming', name: 'Swimming' }
    ],
    'Nutrition': [
      { id: 'meal-planning', name: 'Meal Planning' },
      { id: 'cooking', name: 'Cooking' },
      { id: 'tracking-macros', name: 'Tracking Macros' },
      { id: 'hydration', name: 'Hydration' }
    ]
  }
};

export class DesignRepository {
  private db: Surreal;

  constructor() {
    this.db = db.getClient();
  }

  async initialize() {
    await this.db.query('DELETE FROM design_data');
    await this.db.create('design_data', MOCK_DATA);
  }

  async getSuggestedPillars(): Promise<SuggestedItem[]> {
    const result = await this.db.query('SELECT pillars FROM design_data LIMIT 1');
    return result[0].result.pillars;
  }

  async getSuggestedCategories(pillar: string): Promise<SuggestedItem[]> {
    const result = await this.db.query(
      'SELECT categories[$pillar] FROM design_data LIMIT 1',
      { pillar }
    );
    return result[0].result.categories[pillar] || [];
  }

  async getSuggestedActivities(category: string): Promise<SuggestedItem[]> {
    const result = await this.db.query(
      'SELECT activities[$category] FROM design_data LIMIT 1',
      { category }
    );
    return result[0].result.activities[category] || [];
  }
}