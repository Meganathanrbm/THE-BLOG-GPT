# Blog GPT

[Live Demo](https://the-blog-gpt.vercel.app)

A production-ready, AI-powered blogging platform leveraging **Next.js 14**, **Tailwind CSS**, **Redux Toolkit**, and **Google Generative AI**. Built for scalability, performance, and developer ergonomics.

---

## Overview

Blog GPT combines a modern frontend architecture with AI-driven content generation. The platform supports:

- Server-side rendering and dynamic routing for SEO optimization
- Real-time AI content generation via Google Generative AI API
- Persistent data storage with **MongoDB** and **Mongoose**
- State management and predictable data flow with **Redux Toolkit**
- Modular, reusable components for maintainable UI
- Responsive and accessible UI using Tailwind CSS

---

## Key Features

- **AI-Powered Content:** Generate blog posts and summaries dynamically.
- **Authentication & Authorization:** Integrated with **NextAuth.js** for secure user sessions.
- **CMS-Like Structure:** MongoDB schema-driven storage for posts, authors, and metadata.
- **Frontend Performance:** Optimized with React 18 concurrent features and Tailwind CSS.
- **SEO & Social Sharing:** Structured metadata, Open Graph, and `react-share` integration.
- **Interactive Components:** Loading states with `react-loader-spinner` and dynamic UI toggles.
- **Scalable State Management:** Redux Toolkit slices for predictable and maintainable state.

---


## Getting Started

Clone the repository:

```bash
git clone https://github.com/yourusername/blog.git
cd blog

Install dependencies:

npm install
# or
yarn install


Create a .env.local file:
NEXTAUTH_URL=https://the-blog-gpt.vercel.app
NEXTAUTH_URL_INTERNAL=https://the-blog-gpt.vercel.app
NEXTAUTH_SECRET=your_nextauth_secret_here

GOOGLE_GENERATIVE_AI_KEY=your_google_gen_ai_key_here
GOOGLE_CLIENT_ID=your_google_oauth_client_id
GOOGLE_CLIENT_SECRET=your_google_oauth_client_secret

MONGODB_URI=your_mongodb_connection_uri
DB_USER=your_db_username
DB_PASSWORD=your_db_password