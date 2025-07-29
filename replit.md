# GreenCart - Sustainable E-commerce Platform

## Overview

GreenCart is a complete single-page React application built as an eco-friendly product finder platform showcasing sustainable products. The application features a modern, responsive frontend with beautiful eco-conscious design, interactive filtering, search functionality, and multiple content pages including Products, About, and Contact sections.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The client-side is built with React 18 using TypeScript and modern tooling:
- **Framework**: React with TypeScript for type safety
- **Build Tool**: Vite for fast development and optimized builds
- **UI Framework**: Radix UI components with shadcn/ui design system
- **Styling**: Tailwind CSS with custom eco-friendly design tokens
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing

### Backend Architecture
The server-side follows a modular Express.js structure:
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured via Neon Database)
- **Session Management**: Built-in session storage with PostgreSQL adapter
- **Development**: Hot-reload support with tsx

### Project Structure
```
├── client/           # React frontend application
├── server/           # Express.js backend API
├── shared/           # Shared types and schemas
├── migrations/       # Database migration files
└── dist/            # Production build output
```

## Key Components

### Frontend Components
1. **Layout Components**:
   - Navbar with active page highlighting and responsive mobile menu
   - Hero sections for each page with eco-friendly branding
   - Footer with company information and newsletter signup

2. **Product Components**:
   - FilterBar for categorizing products (reusable, organic, plastic-free)
   - ProductCard displaying sustainability scores and ratings
   - Product grid with sorting and view mode options (grid/list)

3. **Page Components**:
   - Home: Hero section, product filtering, and stats showcase
   - Products: Complete product catalog with advanced sorting
   - About: Company mission, team profiles, and sustainability journey
   - Contact: Contact form, company information, and FAQ section

4. **UI Components**:
   - Complete shadcn/ui component library (Select, Textarea, Form components)
   - Custom eco-themed design tokens and colors
   - Responsive design with mobile-first approach

### Backend Services
1. **Storage Interface**: Abstracted storage layer supporting both in-memory and database implementations
2. **User Management**: Basic user schema with authentication support
3. **API Routes**: RESTful endpoints with /api prefix convention
4. **Middleware**: Request logging, error handling, and development tooling

### Database Schema
- **Users Table**: Basic user authentication with username/password
- **Extensible Design**: Schema designed for easy addition of products, orders, and reviews

## Data Flow

1. **Product Display**: Static product data (JSON) → React components → Filtered/searched/sorted results
2. **User Interaction**: Search/filter/sort actions → State updates → Re-rendered product grid
3. **Navigation**: Wouter routing handles client-side navigation between pages
4. **External Links**: Product purchases redirect to external e-commerce platforms
5. **Form Handling**: Contact form with validation using React Hook Form and Zod schemas

## External Dependencies

### Frontend Dependencies
- **UI Framework**: Radix UI primitives for accessible components
- **Styling**: Tailwind CSS with PostCSS processing
- **State Management**: TanStack Query for server state
- **Form Handling**: React Hook Form with Zod validation
- **Date Handling**: date-fns for date manipulation
- **Icons**: Lucide React for consistent iconography

### Backend Dependencies
- **Database**: Neon Database (PostgreSQL) for production data storage
- **ORM**: Drizzle ORM with Zod schema validation
- **Session Storage**: connect-pg-simple for PostgreSQL session storage
- **Development**: tsx for TypeScript execution, Vite integration

### Development Tools
- **Replit Integration**: Custom plugins for development environment
- **Build Tools**: ESBuild for server bundling, Vite for client bundling
- **Type Checking**: TypeScript with strict configuration

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with Express.js backend
- **Hot Reload**: Both client and server support hot reloading
- **Database**: Neon Database with environment-based configuration

### Production Build
- **Frontend**: Vite builds to `dist/public` directory
- **Backend**: ESBuild bundles server code to `dist/index.js`
- **Static Serving**: Express serves built frontend in production
- **Database Migrations**: Drizzle handles schema migrations

### Environment Configuration
- **Database URL**: Required environment variable for PostgreSQL connection
- **Build Scripts**: Separate development and production build processes
- **Type Safety**: Full TypeScript coverage across frontend, backend, and shared code

The application is designed for easy deployment on platforms like Replit, Vercel, or traditional hosting providers, with clear separation between development and production configurations.