import type { Express } from "express";
import { createServer, type Server } from "http";
import { storagePromise } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { logger } from "./utils/logger";
import { emailService } from "./utils/emailService";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get the initialized storage instance
  const storage = await storagePromise;

  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      
      // Send email notification in the background
      emailService.sendContactNotification(submission).catch((emailError) => {
        logger.error("Failed to send email notification", emailError as Error);
        // Don't fail the request if email fails
      });
      
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

  // Health check endpoint
  app.get("/api/health", async (req, res) => {
    try {
      // Test email service connection
      const emailHealthy = await emailService.testConnection();
      
      res.json({
        status: "healthy",
        timestamp: new Date().toISOString(),
        services: {
          email: emailHealthy ? "connected" : "disconnected",
          storage: "connected"
        }
      });
    } catch (error) {
      logger.error("Health check failed", error as Error);
      res.status(500).json({
        status: "unhealthy",
        timestamp: new Date().toISOString(),
        error: "Service health check failed"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
