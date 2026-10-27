"use client";

import { ArrowUpRight, BriefcaseBusiness, Code2, Database, Github, Handshake, Linkedin, Menu, MessageCircle, Smartphone, X, Zap } from "lucide-react";
import { useState } from "react";
import { ebaSeoProject, portfolio, refundAiProject, services, skills } from "../lib/portfolio";

const navItems = ["About", "Projects", "Skills", "Services", "Contact"];

export function PortfolioPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <main>
    <nav className="nav shell" aria-label="Main navigation">
      <a className="wordmark" href="#top" aria-label="Ebalu&apos;s Portfolio home"><span>Ebalu</span> / Portfolio</a>
      <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
        {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
        <a className="nav-contact" href={`mailto:${portfolio.email}`}>Let&apos;s talk <ArrowUpRight size={15} /></a>
      </div>
      <button className="menu-button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
    </nav>

    <section className="hero shell" id="top">
      <div className="hero-copy"><p className="eyebrow"><span className="status-dot" /> Available for select opportunities</p>
        <h1>Full-Stack<br /><em>JavaScript</em> Developer.</h1>
        <p className="hero-lede">I build cross-platform web and mobile applications with thoughtful interfaces, dependable APIs, and the infrastructure to support real-world work.</p>
        <div className="actions"><a className="button button-primary" href="#projects">View featured work <ArrowUpRight size={17} /></a><a className="button button-ghost" href="#contact">Let&apos;s work together</a></div>
      </div>
      <div className="architecture" aria-label="A visual showing web, mobile, and backend engineering connected together">
        <div className="arch-grid" /><div className="arch-line line-one" /><div className="arch-line line-two" />
        <div className="arch-card web-card"><Code2 size={20} /><span>web</span><small>Next.js</small></div>
        <div className="arch-card mobile-card"><Smartphone size={20} /><span>mobile</span><small>React Native</small></div>
        <div className="arch-card data-card"><Database size={20} /><span>systems</span><small>Node.js · SQL</small></div>
        <div className="arch-core"><Zap size={20} /></div>
      </div>
    </section>

    <section className="opportunity-strip shell" aria-label="Ways to work together">
      <div className="opportunity-item"><BriefcaseBusiness size={19} /><div><strong>For hiring teams</strong><span>Bring a full-stack builder onto your product team.</span></div></div>
      <div className="opportunity-item"><Handshake size={19} /><div><strong>For freelance clients</strong><span>Turn a product idea or workflow into a reliable experience.</span></div></div>
    </section>

    <section className="section shell" id="projects"><div className="section-heading"><p className="eyebrow">01 / Featured project</p><h2>Building for the <span>real world.</span></h2></div>
      <article className="project-card"><div className="project-visual" aria-label="Illustration of an energy operations dashboard"><div className="visual-top"><span>ENERGY / OVERVIEW</span><span className="visual-live"><i /> platform</span></div><div className="meter"><span>Operations at a glance</span><strong>Energy <small>management</small></strong><div className="bars" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /><i /></div></div><div className="visual-panels"><div><small>Metering</small><b>Connected</b></div><div><small>Workflows</small><b>Organised</b></div></div></div><div className="project-info"><p className="eyebrow">Solar Energy Management Platform</p><h3>Making energy operations easier to see and manage.</h3><p>A platform spanning energy metering, billing, customer workflows, and payment integration—designed across web, mobile, and backend systems.</p><div className="case-study-grid"><div><small>Product surface</small><b>Web · mobile · backend</b></div><div><small>Backend framework</small><b>NestJS</b></div></div><div className="tag-list">{["Next.js", "React Native / Expo", "NestJS", "Prisma", "PostgreSQL"].map(t => <span key={t}>{t}</span>)}</div><span className="project-note">Project details available on request.</span></div></article>
      <article className="project-card refund-card"><div className="project-visual refund-visual" aria-label="Illustration of a refund support workflow"><div className="visual-top"><span>REFUND / WORKFLOW</span><span className="visual-live"><i /> AI-assisted</span></div><div className="refund-flow"><span>Customer request</span><i /><span>Policy evaluation</span><i /><strong>Decision</strong></div><div className="refund-outcomes"><span>APPROVED</span><span>DENIED</span><span>ESCALATED</span></div></div><div className="project-info"><p className="eyebrow">Full-Stack Project</p><h3>{refundAiProject.name}</h3><p>{refundAiProject.description}</p><div className="case-study-grid"><div><small>Core principle</small><b>Policy-first AI assistance</b></div><div><small>System concerns</small><b>Persistence · audit logs</b></div></div><div className="tag-list">{refundAiProject.technologies.map(t => <span key={t}>{t}</span>)}</div><a className="text-link" href={refundAiProject.url} target="_blank" rel="noopener noreferrer">View on GitHub <ArrowUpRight size={15} /></a></div></article>
      <article className="project-card eba-card"><div className="project-visual eba-visual" aria-label="Illustration of structured data markup"><div className="visual-top"><span>WORDPRESS / SEO</span><span className="visual-live"><i /> published</span></div><div className="schema-visual"><span>&lt;script type=&quot;application/ld+json&quot;&gt;</span><b>Schema.org</b><span>&quot;@type&quot;: &quot;Article&quot;</span><span>&quot;@context&quot;: &quot;https://schema.org&quot;</span></div><div className="schema-badge">JSON-LD</div></div><div className="project-info"><p className="eyebrow">Published WordPress Plugin</p><h3>{ebaSeoProject.name}</h3><p>{ebaSeoProject.description}</p><div className="case-study-grid"><div><small>Plugin focus</small><b>Automatic schema output</b></div><div><small>Author</small><b>eddymurphy</b></div></div><div className="tag-list">{ebaSeoProject.technologies.map(t => <span key={t}>{t}</span>)}</div><div className="project-links"><a className="text-link" href={ebaSeoProject.listingUrl} target="_blank" rel="noopener noreferrer">View Plugin <ArrowUpRight size={15} /></a><a className="source-link" href={ebaSeoProject.sourceUrl} target="_blank" rel="noopener noreferrer">View source <ArrowUpRight size={14} /></a></div></div></article>
    </section>

    <section className="section shell skills-section" id="skills"><div className="section-heading"><p className="eyebrow">02 / The toolkit</p><h2>Tools for thoughtful <span>products.</span></h2></div><div className="skill-grid">{Object.entries(skills).map(([group, items]) => <div className="skill-group" key={group}><h3>{group}</h3><ul>{items.map(item => <li key={item}>{item}</li>)}</ul></div>)}</div></section>

    <section className="section shell services-section" id="services"><div className="section-heading"><p className="eyebrow">03 / Additional specialties</p><h2>More ways I can help <span>your product.</span></h2></div><div className="service-grid">{services.map(service => <article className="service-card" key={service.name}><p className="eyebrow">Specialty</p><h3>{service.name}</h3><p>{service.description}</p></article>)}</div></section>

    <section className="about-section" id="about"><div className="shell about-grid"><p className="eyebrow">04 / A little about me</p><div><h2>From interface to infrastructure, <span>I like seeing the whole picture.</span></h2><p>I&apos;m a Full-Stack JavaScript Developer focused on building connected applications across web, mobile, and backend systems. I also bring PHP, WordPress development, and technical SEO into the toolkit when a project needs a strong content platform or discoverable web experience.</p></div></div></section>

    <section className="contact-section shell" id="contact"><p className="eyebrow">04 / Start a conversation</p><h2>Let&apos;s build something<br /><span>useful together.</span></h2><p className="contact-copy">Whether you&apos;re hiring for a full-stack role or shaping a new product, I&apos;d be glad to hear what you&apos;re working on.</p><a className="contact-email" href={`mailto:${portfolio.email}`}>{portfolio.email}</a><div className="contact-actions"><a className="button button-primary" href={`mailto:${portfolio.email}?subject=Full-stack%20opportunity`}>Email me about a role <ArrowUpRight size={17} /></a><a className="button button-ghost" href={`mailto:${portfolio.email}?subject=Freelance%20project`}>Start a freelance project <ArrowUpRight size={17} /></a></div><div className="contact-profiles"><span>Find me online</span><a className="contact-profile" href={portfolio.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Contact me on WhatsApp"><MessageCircle size={17} aria-hidden="true" /><span>WhatsApp</span></a><a className="contact-profile" href={portfolio.github} target="_blank" rel="noopener noreferrer" aria-label="Visit my GitHub profile"><Github size={17} aria-hidden="true" /><span>GitHub</span></a><a className="contact-profile" href={portfolio.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Visit my LinkedIn profile"><Linkedin size={17} aria-hidden="true" /><span>LinkedIn</span></a></div></section>

    <footer className="footer shell"><a className="wordmark" href="#top"><span>Ebalu</span> / Portfolio</a><div className="footer-links"><a href="#about">About</a><a href="#projects">Projects</a><a href="#skills">Skills</a><a href="#contact">Contact</a></div><div className="socials"><a href={portfolio.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile"><Github size={18} /></a><a href={portfolio.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile"><Linkedin size={18} /></a><span>© {new Date().getFullYear()}</span></div></footer>
  </main>;
}
