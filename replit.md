# R K Ads - IT Consulting & ServiceNow Solutions Website

## Overview

This is a full-stack IT consulting website built with React frontend and Express.js backend. The application serves as a professional ServiceNow consulting platform with a modern, responsive design featuring IT service showcases, team information, client testimonials, and a contact form system specialized for ServiceNow implementations and IT staffing solutions.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **UI Library**: Shadcn/UI components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom business theme
- **State Management**: TanStack React Query for server state
- **Routing**: Wouter for client-side routing
- **Build Tool**: Vite for development and production builds
- **Animations**: Framer Motion for smooth interactions

### Backend Architecture  
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints for contact form submission
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: In-memory storage (development)
- **Development**: Hot module replacement via Vite middleware

### Database Schema
- **contact_submissions**: Stores contact form data with fields for personal info, company, service type, and message
- **Database Provider**: Neon serverless PostgreSQL (configured)
- **ORM**: Drizzle with type-safe queries and migrations

## Key Components

### Frontend Pages & Components
- **Home Page**: Single-page application with sections for hero, IT services, about R K Ads, team, testimonials, and contact
- **Navigation**: Smooth scrolling navigation with mobile-responsive menu branded as "R K Ads"
- **Contact Form**: Multi-field form with ServiceNow-specific service options and validation
- **UI Components**: Comprehensive set of reusable components (buttons, cards, forms, etc.)

### Backend Services
- **Contact API**: `/api/contact` - POST endpoint for IT consulting form submissions
- **Admin API**: `/api/contact-submissions` - GET endpoint to retrieve all submissions
- **Storage Layer**: Abstracted storage interface with in-memory implementation

### Shared Resources
- **Schema**: Centralized database schema definitions with Zod validation
- **Types**: TypeScript interfaces for data consistency across client/server

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form with personal and business information
   - Frontend validates data using Zod schema
   - Form data submitted to `/api/contact` endpoint
   - Backend validates and stores submission in database
   - Success/error response sent back to client
   - Toast notification displays result to user

2. **Content Rendering**:
   - Static content rendered from component definitions
   - Images served from external CDN (Unsplash)
   - Smooth scrolling navigation between sections

## External Dependencies

### Core Dependencies
- **Database**: Neon serverless PostgreSQL
- **UI Framework**: Radix UI component primitives
- **Styling**: Tailwind CSS framework
- **Icons**: Lucide React icons
- **Fonts**: Google Fonts (Inter)

### Development Tools
- **Replit Integration**: Runtime error overlay and cartographer plugins
- **Build Tools**: ESBuild for server bundling, Vite for client bundling
- **Database Tools**: Drizzle Kit for migrations and schema management

## Deployment Strategy

### Development Environment
- **Platform**: Replit with Node.js 20 and PostgreSQL 16 modules
- **Hot Reload**: Vite development server with HMR
- **Database**: Automatic provisioning via Replit environment

### Production Build
- **Client**: Vite builds React app to `dist/public`
- **Server**: ESBuild compiles TypeScript server to `dist/index.js`
- **Static Assets**: Served from build directory
- **Database**: Connection via DATABASE_URL environment variable

### Scaling Strategy
- **Deployment Target**: Autoscale configuration in Replit
- **Port Configuration**: Internal port 5000 mapped to external port 80
- **Session Storage**: Ready for Redis upgrade from in-memory storage

## Changelog

Changelog:
- June 16, 2025. Initial setup with Charan Sunday Team branding
- June 16, 2025. Complete rebrand to R K Ads - IT Consulting & ServiceNow Solutions
  - Updated all branding from "Charan Sunday Team" to "R K Ads"
  - Changed services from general business consulting to IT-specific services:
    * IT Staffing Solutions
    * ServiceNow Implementation  
    * ServiceNow Consulting
  - Updated contact information to R K Ads details (Hyderabad address, Indian phone number, rkads23@gmail.com)
  - Modified team profiles to reflect ServiceNow and IT expertise
  - Updated testimonials to showcase ServiceNow implementation success stories
  - Maintained original design theme and layout for easy client comparison

## User Preferences

Preferred communication style: Simple, everyday language.
Project focus: ServiceNow consulting and IT staffing solutions
Branding: R K Ads with professional IT consulting theme