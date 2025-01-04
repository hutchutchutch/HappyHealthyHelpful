import { NodeRepository } from '../repositories/node.repository';
import { GraphRepository } from '../repositories/graph.repository';

export class DataService {
  private nodeRepo: NodeRepository;
  private graphRepo: GraphRepository;

  constructor() {
    this.nodeRepo = new NodeRepository();
    this.graphRepo = new GraphRepository();
  }

  async initializeDatabase() {
    await this.nodeRepo.initialize();
    await this.graphRepo.initialize();
  }

  async getGraphData() {
    return this.graphRepo.getGraphData();
  }

  async getNodeDetails(id: string) {
    return this.nodeRepo.getNodeDetails(id);
  }

  async getChildNodes(parentId: string) {
    return this.nodeRepo.getNodesByParent(parentId);
  }
}