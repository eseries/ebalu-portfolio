export const portfolio = {
  email: "ebaluandy@gmail.com",
  github: "https://github.com/eseries",
  linkedin: "https://www.linkedin.com/in/ebalumen-ibhafidon/",
  whatsapp: "https://wa.me/2348034522004",
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

export const projects = [
  { name: "WORKNOON AI — AI-Powered Customer Support Refund System", description: "AI-enabled e-commerce refund platform that processes, approves, denies, or escalates refund requests based on order data and defined business rules. Built with synthetic CRM data (15+ customer profiles), policy engine (final sale, time windows, $500+ human review), LLM integration for classification/reasoning, and safeguards against prompt injection.", technologies: ["Next.js", "NestJS", "PostgreSQL", "OpenAI API", "Docker"], features: "Customer chat UI + Admin dashboard with audit logs", github: "https://github.com/eseries/refund-ai", live: "#contact" },
  { name: "Solar Energy Project — Meter Management System", description: "Meter management system for solar energy operations — tracks meters, monitors usage, manages customer installations, and handles billing / energy consumption data.", technologies: ["Vue.js / Next.js", "React Native", "Node.js", "PostgreSQL"], features: "Meter tracking, usage monitoring, installations, and billing", github: "#contact", live: "#contact" },
  { name: "WordPress SEO Plugin — JSON-LD Schema Plugin", description: "Custom WordPress plugin that auto-generates JSON-LD structured data for SEO — Article, Product, FAQ, Organization schemas for Google rich snippets.", technologies: ["WordPress", "PHP", "JSON-LD", "Schema.org"], features: "Article, Product, FAQ, and Organization schemas", github: "https://plugins.svn.wordpress.org/eba-seo/", live: "https://wordpress.org/plugins/eba-seo/" },
] as const;
