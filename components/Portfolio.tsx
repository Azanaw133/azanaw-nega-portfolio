'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, BrainCircuit, BriefcaseBusiness, Code2, Database, Download, FileText, Github, GraduationCap, Linkedin, Mail, Menu, MoveRight, Server, ShieldCheck, Sparkles, X } from 'lucide-react';

const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Journey', id: 'journey' },
  { label: 'Services', id: 'services' },
  { label: 'Contact', id: 'contact' },
];

const skills = [
  { title: 'Frontend Development', icon: Code2, items: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'] },
  { title: 'Backend Development', icon: Server, items: ['Node.js', 'Express.js', 'REST APIs'] },
  { title: 'Database', icon: Database, items: ['PostgreSQL', 'Database Design'] },
  { title: 'Programming & AI', icon: BrainCircuit, items: ['JavaScript', 'Python', 'Machine Learning', 'AI', 'NLP'] },
  { title: 'Tools', icon: BriefcaseBusiness, items: ['Git', 'GitHub', 'VS Code', 'Postman'] },
  { title: 'Other', icon: ShieldCheck, items: ['Authentication', 'RBAC', 'API Integration', 'Responsive Design'] },
];

const projects = [
  {
    number: '01',
    title: 'Smart Hospital Management System',
    description: 'A healthcare management platform for organizing patient data, appointments, and administrative workflows in a clear digital system.',
    tags: ['Next.js', 'TypeScript', 'Healthcare'],
    liveUrl: '',
    repoUrl: '',
  },
  {
    number: '02',
    title: 'E-Commerce Product Experience',
    description: 'A polished product showcase and shopping journey focused on a clean interface, conversion flow, and responsive customer experience.',
    tags: ['React', 'UI Design', 'Responsive'],
    liveUrl: '',
    repoUrl: '',
  },
  {
    number: '03',
    title: 'Learning Dashboard',
    description: 'A productivity-focused study dashboard that brings course progress, goals, and learning activity into one organized experience.',
    tags: ['Dashboard', 'Productivity', 'UX'],
    liveUrl: '',
    repoUrl: '',
  },
];

const services = [
  { title: 'Web Development', text: 'Thoughtful, responsive web experiences designed to feel crisp, modern, and easy to use.' },
  { title: 'Frontend Development', text: 'Clear interfaces, visual hierarchy, and polished interactions built with React and modern styling systems.' },
  { title: 'Backend Development', text: 'Practical server-side logic, API foundations, and data-driven workflows to support product features.' },
  { title: 'Full-Stack Product Work', text: 'End-to-end thinking for building digital products that connect interfaces, logic, and workflow.' },
];

const stats = [
  { value: '4+', label: 'Projects built' },
  { value: '7+', label: 'Tech skills' },
  { value: '3+', label: 'Years learning' },
];

function SectionHeading({ number, eyebrow, title, description }: { number: string; eyebrow: string; title: string; description: string }) {
  return (
    <div className="section-heading">
      <div className="section-kicker">
        <span>{number}</span>
        <i />
        {eyebrow}
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function ProjectLink({ href, children }: { href: string; children: React.ReactNode }) {
  if (!href) {
    return <span className="project-link project-link-disabled" title="Link to be added">{children}</span>;
  }

  return (
    <a className="project-link" href={href} target="_blank" rel="noreferrer">
      {children}
      <ArrowUpRight size={15} />
    </a>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <main className="portfolio-shell">
      <header className={`site-header ${scrolled ? 'site-header-scrolled' : ''}`}>
        <nav className="nav-shell" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="Azanaw Nega home">
            <span className="brand-mark">AN</span>
            <span className="brand-meta">
              <strong>Azanaw Nega</strong>
              <small>IT Student &amp; Developer</small>
            </span>
          </a>

          <div className="desktop-nav">
            {navItems.map((item, index) => (
              <a key={item.id} href={`#${item.id}`}>
                <span>0{index + 1}</span> / {item.label}
              </a>
            ))}
          </div>

          <a className="talk-link" href="#contact">
            Let&apos;s talk <MoveRight size={15} />
          </a>

          <button
            className="menu-button"
            type="button"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div className="mobile-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="mobile-menu-top">
              <span className="brand brand-mobile">
                <span className="brand-mark">AN</span>
              </span>
              <button type="button" aria-label="Close navigation" onClick={() => setMenuOpen(false)}>
                <X size={22} />
              </button>
            </div>
            <div className="mobile-nav">
              {navItems.map((item, index) => (
                <a key={item.id} href={`#${item.id}`} onClick={() => setMenuOpen(false)}>
                  <span>0{index + 1}</span>
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="top" className="hero section-grid">
        <div className="container hero-grid">
          <motion.div className="hero-copy" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
            <p className="eyebrow">Available for learning &amp; collaboration</p>
            <h1>
              Hi, I&apos;m <span>Azanaw Nega</span>
            </h1>
            <p className="hero-role">IT Student <b>&amp;</b> Web Developer</p>
            <p className="hero-description">
              I build clean, modern web experiences with JavaScript and practical software thinking. I enjoy turning ideas into responsive, useful products while learning continuously.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View my projects <ArrowDownRight size={17} />
              </a>
              <a className="button button-secondary" href="/documents/Azanaw-Nega-CV.pdf" download>
                <Download size={16} /> Download CV
              </a>
            </div>

            <div className="social-row" aria-label="Social links">
              <span>Find me on</span>
              <span className="social-placeholder"><Github size={16} /> GitHub</span>
              <span className="social-placeholder"><Linkedin size={16} /> LinkedIn</span>
              <a href="mailto:azanawnega1212@gmail.com">
                <Mail size={16} /> Email
              </a>
            </div>

            <div className="stat-list" aria-label="Quick statistics">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-item">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="hero-visual" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.12 }}>
            <div className="portrait-card">
              <div className="portrait-frame">
                <Image src="/images/profile.jpg" alt="Azanaw Nega working on a web development project" fill priority sizes="(max-width: 900px) 90vw, 43vw" className="portrait-image" />
              </div>
              <div className="floating-badge badge-top">
                <span className="tag-dot" /> IT Student
              </div>
              <div className="floating-badge badge-bottom">
                Web Developer <ArrowUpRight size={14} />
              </div>
            </div>
            <p className="portrait-caption">01 / A student developer in progress</p>
          </motion.div>
        </div>
      </section>

      <section id="about" className="section section-dark">
        <div className="container">
          <SectionHeading
            number="01"
            eyebrow="About"
            title="A fourth-year IT student building useful technology."
            description="I bring together web development, artificial intelligence, and practical problem-solving to create digital tools with real value."
          />

          <div className="about-grid">
            <div className="about-quote">
              Curious about technology.
              <span>Committed to useful solutions.</span>
            </div>

            <div className="about-body">
              <p>
                Hello! I’m <strong>Azanaw Nega</strong>, a fourth-year Information Technology student at <strong>Debre Berhan University</strong>, Ethiopia. I’m interested in software development, web technologies, artificial intelligence, and building practical technology solutions.
              </p>
              <p>
                Throughout my university journey, I have developed a foundation in computer science and information technology while continually improving my programming and software development skills. I enjoy turning ideas and real-world problems into useful, responsive, user-friendly digital solutions. My main focus is web development, building across both frontend and backend technologies.
              </p>
              <p>
                My technical toolkit includes <strong>HTML, CSS, JavaScript, React, Node.js, Express.js, Tailwind CSS, and database technologies</strong>. I’m interested in modern user interfaces, reliable backend systems, and RESTful APIs. I’m also growing my knowledge of software architecture, database design, authentication, API integration, and deployment, using tools such as <strong>Git and GitHub</strong>.
              </p>
              <p>
                I want to gain practical experience by working on real-world projects, not only theoretical work. I enjoy designing and developing systems that address practical needs in healthcare, education, business, and information management.
              </p>
              <p>
                I’m currently working on my major final-year project, an <strong>AI-Based Hospital Management System</strong>. It brings together modern web technologies, database management, role-based access control, and artificial intelligence to support hospital operations. Building it is teaching me how to integrate the frontend, backend APIs, databases, authentication, and AI services into one complete system.
              </p>
              <p>
                I’m also expanding my knowledge of <strong>Python, artificial intelligence, machine learning, natural language processing, and data processing</strong>. I believe combining web development and AI can make future applications more intelligent and useful.
              </p>
              <p>
                As I approach graduation, I plan to keep developing my technical skills, contribute to real-world software projects, collaborate with other developers, and gain professional experience in the technology industry. I’m especially interested in opportunities where I can contribute while learning new technologies and improving my problem-solving abilities.
              </p>
              <p>
                I’m a continuous learner who enjoys exploring technologies, solving programming challenges, and turning ideas into working applications. I’m always looking for opportunities to learn, build, experiment, and grow as a software developer.
              </p>

              <p className="about-manifesto"><strong>My goal is simple: to use technology, creativity, and continuous learning to build practical software solutions that create real value.</strong></p>

              <div className="fact-list">
                <div>
                  <span>Role</span>
                  <strong>Fourth-Year IT Student</strong>
                </div>
                <div>
                  <span>University</span>
                  <strong>Debre Berhan University</strong>
                </div>
                <div>
                  <span>Project</span>
                  <strong>AI-Based Hospital Management System</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="container">
          <SectionHeading
            number="02"
            eyebrow="Skills"
            title="A practical toolkit for building modern products."
            description="Frontend, backend, databases, AI, and the tools I use to build responsive, useful digital experiences."
          />

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <Reveal className="skill-panel" key={skill.title}>
                <div className="panel-top">
                  <skill.icon size={20} />
                  <span>0{index + 1}</span>
                </div>
                <h3>{skill.title}</h3>
                <ul>
                  {skill.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section section-projects">
        <div className="container">
          <SectionHeading
            number="03"
            eyebrow="Projects"
            title="Work that is still growing, but already meaningful."
            description="A selection of practical projects showing the direction of my learning, design thinking, and product-building process."
          />

          <div className="project-list">
            {projects.map((project) => (
              <Reveal className="project-card" key={project.number}>
                <div className="project-preview">
                  <div className="preview-top">
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className="preview-code">
                    <b>{'<'}{project.number === '01' ? 'system' : 'project'}{' />'}</b>
                    <span>building practical software</span>
                    <i />
                  </div>

                  <span className="preview-number">{project.number}</span>
                </div>

                <div className="project-content">
                  <span className="project-type">Web project</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="tag-row">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    <ProjectLink href={project.repoUrl}>GitHub</ProjectLink>
                    <ProjectLink href={project.liveUrl}>Live demo</ProjectLink>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="journey" className="section">
        <div className="container">
          <SectionHeading
            number="04"
            eyebrow="Journey"
            title="Learning by building, refining, and repeating."
            description="My timeline reflects a consistent process: study, practice, and steady steps toward better execution."
          />

          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-marker"><GraduationCap size={17} /></span>
              <div>
                <span className="timeline-label">Education</span>
                <h3>IT Student</h3>
                <p>Institution details and dates are being finalized.</p>
              </div>
            </div>

            <div className="timeline-item">
              <span className="timeline-marker"><Code2 size={17} /></span>
              <div>
                <span className="timeline-label">Projects</span>
                <h3>Building practical software</h3>
                <p>Focused on real product work, UX thinking, and implementation practice.</p>
              </div>
            </div>

            <div className="timeline-item">
              <span className="timeline-marker"><BriefcaseBusiness size={17} /></span>
              <div>
                <span className="timeline-label">Development</span>
                <h3>Open to first opportunities</h3>
                <p>Ready for internships, collaboration, and early professional growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section section-services">
        <div className="container">
          <SectionHeading
            number="05"
            eyebrow="Services"
            title="Useful work built with intent and structure."
            description="These are the areas I am developing as I grow from student projects into practical digital product work."
          />

          <div className="services-grid">
            {services.map((service, index) => (
              <Reveal className="service-item" key={service.title}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
                <ArrowUpRight size={18} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section section-contact">
        <div className="container">
          <div className="contact-panel">
            <p className="contact-eyebrow"><Mail size={14} /> Get in touch</p>
            <h2>Let&apos;s Build Something <span>Great Together.</span></h2>
            <p className="contact-description">
              Whether you want to collaborate on a project, discuss technology, or just say hello, my inbox is open.
            </p>

            <div className="contact-actions" aria-label="Contact and profile links">
              <button className="contact-action" type="button" disabled title="GitHub profile link will be added">
                <Github size={18} /> GitHub
              </button>
              <button className="contact-action" type="button" disabled title="LinkedIn profile link will be added">
                <Linkedin size={18} /> LinkedIn
              </button>
              <a className="contact-action contact-action-primary" href="mailto:azanawnega1212@gmail.com">
                <Mail size={18} /> Email Me
              </a>
              <a className="contact-action" href="/documents/Azanaw-Nega-CV.pdf" target="_blank" rel="noreferrer">
                <FileText size={18} /> View Resume
              </a>
              <a className="contact-action" href="/documents/Azanaw-Nega-CV.pdf" download>
                <Download size={18} /> Download Resume
              </a>
            </div>

            <div className="contact-divider"><span>or reach me directly</span></div>
            <a className="contact-email" href="mailto:azanawnega1212@gmail.com">azanawnega1212@gmail.com</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <a className="brand" href="#top">
            <span className="brand-mark">AN</span>
          </a>

          <div>
            <strong>Azanaw Nega</strong>
            <span>IT Student &amp; Web Developer</span>
          </div>

          <div className="footer-links">
            <a href="mailto:azanawnega1212@gmail.com">Email</a>
          </div>

          <span className="footer-year">© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </main>
  );
}
