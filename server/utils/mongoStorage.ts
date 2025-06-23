import { MongoClient, Db, Collection, ObjectId } from 'mongodb';
import type { ContactSubmission, InsertContactSubmission } from '@shared/schema';
import type { IStorage } from '../storage';

export interface MongoContactSubmission extends Omit<ContactSubmission, 'id'> {
  _id: ObjectId;
}

export class MongoStorage implements IStorage {
  private client: MongoClient;
  private db: Db | null = null;
  private contactSubmissions: Collection<MongoContactSubmission> | null = null;

  constructor(mongoUri: string = process.env.MONGODB_URI || 'mongodb://localhost:27017/rkads') {
    this.client = new MongoClient(mongoUri);
  }

  async connect(): Promise<void> {
    try {
      await this.client.connect();
      this.db = this.client.db();
      this.contactSubmissions = this.db.collection('contact_submissions');
      
      // Create indexes for better performance
      await this.contactSubmissions.createIndex({ email: 1 });
      await this.contactSubmissions.createIndex({ createdAt: -1 });
      
      console.log('✅ Connected to MongoDB successfully');
    } catch (error) {
      console.error('❌ Failed to connect to MongoDB:', error);
      throw error;
    }
  }

  async disconnect(): Promise<void> {
    try {
      await this.client.close();
      console.log('✅ Disconnected from MongoDB');
    } catch (error) {
      console.error('❌ Error disconnecting from MongoDB:', error);
    }
  }

  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    if (!this.contactSubmissions) {
      throw new Error('MongoDB not connected. Call connect() first.');
    }

    try {
      const mongoSubmission: Omit<MongoContactSubmission, '_id'> = {
        ...insertSubmission,
        company: insertSubmission.company || null,
        createdAt: new Date(),
      };

      const result = await this.contactSubmissions.insertOne(mongoSubmission as MongoContactSubmission);
      
      if (!result.insertedId) {
        throw new Error('Failed to insert contact submission');
      }

      // Convert MongoDB document back to our schema format
      const submission: ContactSubmission = {
        id: result.insertedId.toString(),
        ...mongoSubmission,
      };

      console.log(`✅ Contact submission created with ID: ${submission.id}`);
      return submission;
    } catch (error) {
      console.error('❌ Failed to create contact submission:', error);
      throw error;
    }
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    if (!this.contactSubmissions) {
      throw new Error('MongoDB not connected. Call connect() first.');
    }

    try {
      const mongoSubmissions = await this.contactSubmissions
        .find({})
        .sort({ createdAt: -1 })
        .toArray();

      // Convert MongoDB documents to our schema format
      const submissions: ContactSubmission[] = mongoSubmissions.map((doc) => ({
        id: doc._id.toString(),
        firstName: doc.firstName,
        lastName: doc.lastName,
        email: doc.email,
        company: doc.company,
        service: doc.service,
        message: doc.message,
        createdAt: doc.createdAt,
      }));

      console.log(`✅ Retrieved ${submissions.length} contact submissions`);
      return submissions;
    } catch (error) {
      console.error('❌ Failed to get contact submissions:', error);
      throw error;
    }
  }

  async getContactSubmissionById(id: string): Promise<ContactSubmission | null> {
    if (!this.contactSubmissions) {
      throw new Error('MongoDB not connected. Call connect() first.');
    }

    try {
      const objectId = new ObjectId(id);
      const doc = await this.contactSubmissions.findOne({ _id: objectId });
      
      if (!doc) {
        return null;
      }

      const submission: ContactSubmission = {
        id: doc._id.toString(),
        firstName: doc.firstName,
        lastName: doc.lastName,
        email: doc.email,
        company: doc.company,
        service: doc.service,
        message: doc.message,
        createdAt: doc.createdAt,
      };

      return submission;
    } catch (error) {
      console.error('❌ Failed to get contact submission by ID:', error);
      return null;
    }
  }

  async deleteContactSubmission(id: string): Promise<boolean> {
    if (!this.contactSubmissions) {
      throw new Error('MongoDB not connected. Call connect() first.');
    }

    try {
      const objectId = new ObjectId(id);
      const result = await this.contactSubmissions.deleteOne({ _id: objectId });
      
      const success = result.deletedCount === 1;
      if (success) {
        console.log(`✅ Contact submission ${id} deleted successfully`);
      } else {
        console.log(`⚠️ Contact submission ${id} not found for deletion`);
      }
      
      return success;
    } catch (error) {
      console.error('❌ Failed to delete contact submission:', error);
      return false;
    }
  }

  // Health check method
  async isConnected(): Promise<boolean> {
    try {
      await this.client.db().admin().ping();
      return true;
    } catch (error) {
      return false;
    }
  }
} 