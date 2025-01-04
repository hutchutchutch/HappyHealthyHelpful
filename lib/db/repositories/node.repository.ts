import { Surreal } from 'surrealdb.js';
import { db } from '../index';
import { NodeSchema, NodeDetailsSchema } from '../schemas';
import { happyNodes } from '@/lib/data/nodes/happy-nodes';
import { healthyNodes } from '@/lib/data/nodes/healthy-nodes';
import { helpfulNodes } from '@/lib/data/nodes/helpful-nodes';
import { nodeDetails } from '@/lib/data/node-details';

export class NodeRepository {
  private db: Surreal;

  constructor() {
    this.db = db.getClient();
  }

  async initialize() {
    // Create nodes
    const allNodes = [...happyNodes, ...healthyNodes, ...helpfulNodes];
    await this.db.query('DELETE FROM nodes');
    
    for (const node of allNodes) {
      await this.db.create('nodes', node);
    }

    // Create node details
    await this.db.query('DELETE FROM node_details');
    
    for (const [id, details] of Object.entries(nodeDetails)) {
      await this.db.create('node_details', details);
    }
  }

  async getAllNodes(): Promise<NodeSchema[]> {
    const result = await this.db.select('nodes');
    return result as NodeSchema[];
  }

  async getNodeDetails(id: string): Promise<NodeDetailsSchema | null> {
    const result = await this.db.select(`node_details:${id}`);
    return result?.[0] as NodeDetailsSchema | null;
  }

  async getNodesByParent(parentId: string): Promise<NodeSchema[]> {
    const result = await this.db.query(
      'SELECT * FROM nodes WHERE parent = $parentId',
      { parentId }
    );
    return result[0].result as NodeSchema[];
  }
}