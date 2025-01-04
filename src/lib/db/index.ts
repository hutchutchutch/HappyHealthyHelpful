import { Surreal } from 'surrealdb.js';

class Database {
  private static instance: Database;
  private db: Surreal;

  private constructor() {
    this.db = new Surreal();
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  public async connect() {
    try {
      await this.db.connect('http://127.0.0.1:8000/rpc');
      await this.db.signin({
        username: 'root',
        password: 'root',
      });
      await this.db.use({ ns: 'myapp', db: 'mydb' });
    } catch (error) {
      console.error('Database connection error:', error);
      throw error;
    }
  }

  public getClient() {
    return this.db;
  }
}

export const db = Database.getInstance();