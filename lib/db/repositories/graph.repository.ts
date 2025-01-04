import { Surreal } from 'surrealdb.js';
import { db } from '../index';
import { GraphDataSchema } from '../schemas';
import { graphData } from '@/lib/data/graph-data';

export class GraphRepository {
  private db: Surreal;

  constructor() {
    this.db = db.getClient();
  }

  async initialize() {
    // Store graph data
    await this.db.query('DELETE FROM graph_data');
    await this.db.create('graph_data', graphData);
  }

  async getGraphData(): Promise<GraphDataSchema> {
    const result = await this.db.select('graph_data');
    return result[0] as GraphDataSchema;
  }
}