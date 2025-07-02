# ServiceNex IT Solutions

## Overview

ServiceNex IT Solutions is a full-stack, modern IT consulting and ServiceNow solutions platform. Built with a robust React frontend and a scalable Express.js backend, ServiceNex empowers businesses with expert ServiceNow implementation, IT staffing, and digital transformation services. The platform features a sleek, responsive design, dynamic service showcases, team profiles, client testimonials, and a secure contact form system tailored for enterprise IT needs.

---

## Table of Contents
- [System Architecture](#system-architecture)
- [Key Features](#key-features)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Changelog](#changelog)
- [License](#license)

---

## System Architecture

### Frontend
- **Framework:** React 18 + TypeScript
- **UI:** Shadcn/UI (Radix UI primitives), Tailwind CSS
- **Routing:** Wouter
- **State Management:** TanStack React Query
- **Animations:** Framer Motion
- **Build Tool:** Vite

### Backend
- **Runtime:** Node.js (Express.js, TypeScript, ES modules)
- **API:** RESTful endpoints for contact and admin
- **Database:** Neon serverless PostgreSQL (Drizzle ORM)
- **Session:** In-memory (dev), ready for Redis

### Shared
- **Schema:** Centralized with Zod validation
- **Types:** TypeScript interfaces for end-to-end type safety

---

## Key Features
- **Modern, Responsive UI:** Mobile-first, accessible, and fast
- **ServiceNow Focus:** Specialized forms and content for ServiceNow consulting and IT staffing
- **Reusable Components:** Buttons, cards, forms, navigation, and more
- **Contact System:** Validated, secure, and extensible
- **Admin API:** Retrieve and manage contact submissions
- **Easy Theming:** Tailwind CSS with custom business theme
- **Smooth Animations:** Framer Motion for delightful UX

---

## Getting Started

### Prerequisites
- Node.js 20+
- PostgreSQL 16+ (Neon or local)
- pnpm / npm / yarn

### Installation
```bash
# Clone the repo
$ git clone https://github.com/apple/CharanWebsite.git
$ cd CharanWebsite

# Install dependencies
$ npm install

# Copy and configure environment variables
$ cp env.example .env
# Edit .env with your database and email credentials
```

### Running Locally
```bash
# Start the backend (Express server)
$ npm run dev:server

# Start the frontend (Vite dev server)
$ npm run dev:client
```

### Database Migrations
```bash
# Run Drizzle migrations
$ npm run db:migrate
```

---

## Development Workflow
- **Frontend:** Edit files in `client/src/` (React, TypeScript, Tailwind)
- **Backend:** Edit files in `server/` (Express, TypeScript)
- **Shared Types/Schemas:** Edit in `shared/`
- **Hot Reload:** Both client and server support HMR for rapid development
- **Testing:** Add your preferred testing tools (Jest, React Testing Library, etc.)

---

## Deployment
- **Production Build:**
  - Client: `npm run build:client` (outputs to `dist/public`)
  - Server: `npm run build:server` (outputs to `dist/index.js`)
- **Platforms:**
  - Netlify, Vercel, or Replit (see `netlify.toml`, `vercel.json`)
- **Environment:**
  - Set `DATABASE_URL` and other secrets in your deployment platform

---

## Contributing

All contributions are welcome! Whether you're a junior or senior developer, you can:
- Open issues for bugs or feature requests
- Submit pull requests for improvements
- Update documentation
- Suggest new features or UI enhancements

**Development Tips:**
- Use clear commit messages
- Write type-safe, well-documented code
- Keep UI/UX accessible and responsive
- Follow the existing code style (Prettier, ESLint recommended)

---

## Changelog
- **June 2025:** Initial release as ServiceNex IT Solutions (formerly R K Ads)
- See previous changelog in old README for legacy details

---

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

## Contact

For business inquiries, partnership, or support:
- Email: info@servicenexit.com (update as needed)
- Location: Hyderabad, India

---

*Empowering your IT journey with ServiceNow expertise and next-gen consulting.*