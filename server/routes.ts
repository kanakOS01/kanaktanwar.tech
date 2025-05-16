import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint for serving resume if needed
  app.get('/resume.pdf', (req, res) => {
    res.sendStatus(404); // No actual resume file available
  });
  
  // Create HTTP server
  const httpServer = createServer(app);

  return httpServer;
}
