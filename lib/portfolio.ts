export const portfolio = {
  email: "ebaluandy@gmail.com",
  github: "https://github.com/eseries",
  linkedin: "https://www.linkedin.com/in/ebalumen-ibhafidon/",
  whatsapp: "https://wa.me/2348034522004",
  projectUrl: "#",
} as const;

export const skills = {
  Frontend: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  "PHP / WordPress": ["PHP", "Custom WordPress plugin development", "WordPress customization"],
  Mobile: ["React Native", "Expo"],
  Backend: ["Node.js", "Express.js", "NestJS", "REST APIs"],
  Databases: ["PostgreSQL", "SQLite", "Prisma"],
  SEO: ["Technical SEO", "JSON-LD structured data and schema markup", "Search engine indexing and crawlability", "On-page SEO optimization"],
} as const;

export const services = [
  { name: "Custom WordPress development", description: "Purpose-built plugins and WordPress customizations for the workflows your site needs." },
  { name: "Technical SEO foundations", description: "Technical SEO, structured data, and crawlability improvements that make content easier for search engines to understand." },
] as const;

export const refundAiProject = {
  name: "Refund AI",
  description: "An AI-assisted customer-support refund system combining a React frontend, Express.js REST API, deterministic refund-policy evaluation, Google Gemini classification, SQLite persistence, and audit logging.",
  technologies: ["React", "Express.js", "Node.js", "SQLite", "Google Gemini"],
  url: "https://github.com/eseries/refund-ai",
} as const;

export const ebaSeoProject = {
  name: "Eba SEO",
  description: "A lightweight WordPress SEO plugin that automatically outputs JSON-LD structured data for posts, pages, and custom post types with minimal setup.",
  technologies: ["PHP", "WordPress Plugin API", "JSON-LD", "Schema.org"],
  listingUrl: "https://wordpress.org/plugins/eba-seo/",
  sourceUrl: "https://plugins.svn.wordpress.org/eba-seo/",
} as const;
