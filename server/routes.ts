import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { logger } from "./utils/logger";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      
      logger.info("Contact form submission successful", { 
        submissionId: submission.id,
        email: submission.email 
      });
      
      res.json({ success: true, id: submission.id });
    } catch (error) {
      logger.error("Contact form submission failed", error as Error);
      
      res.status(400).json({ 
        success: false, 
        error: "Invalid form data. Please check all required fields." 
      });
    }
  });

  // Get all contact submissions (for admin purposes)
  app.get("/api/contact-submissions", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      logger.info("Contact submissions retrieved", { count: submissions.length });
      res.json(submissions);
    } catch (error) {
      logger.error("Failed to fetch contact submissions", error as Error);
      res.status(500).json({ error: "Failed to fetch submissions" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
