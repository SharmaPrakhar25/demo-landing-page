import { contactSubmissions, type ContactSubmission, type InsertContactSubmission } from "@shared/schema";
import { MongoStorage } from "./utils/mongoStorage";

export interface IStorage {
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
}

export class MemStorage implements IStorage {
  private contactSubmissions: Map<string, ContactSubmission>;
  private currentId: number;

  constructor() {
    this.contactSubmissions = new Map();
    this.currentId = 1;
  }

  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = (this.currentId++).toString(); // Convert to string properly
    const submission: ContactSubmission = {
      ...insertSubmission,
      id,
      company: insertSubmission.company || null,
      createdAt: new Date(),
    };
    this.contactSubmissions.set(id, submission);
    return submission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }
}

// Initialize storage based on environment
const initializeStorage = async (): Promise<IStorage> => {
  const mongoUri = process.env.MONGODB_URI;
  
  if (mongoUri && mongoUri.startsWith('mongodb')) {
    // Use MongoDB if a valid URI is provided
    try {
      const mongoStorage = new MongoStorage(mongoUri);
      await mongoStorage.connect();
      console.log('✅ Using MongoDB storage');
      return mongoStorage;
    } catch (error) {
      console.warn('⚠️ Failed to connect to MongoDB, falling back to memory storage:', error);
      return new MemStorage();
    }
  } else {
    // Use memory storage for development
    console.log('📝 Using memory storage (development mode)');
    return new MemStorage();
  }
};

// Export a promise that resolves to the initialized storage
export const storagePromise = initializeStorage();

// For backward compatibility, export a storage instance
// Note: This will be memory storage initially, but will be replaced with MongoDB if available
export const storage = new MemStorage();
