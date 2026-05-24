import { useEffect, useState } from "react";


const NAV = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function App() {
  const [active, setActive] = useState("about");
  const [showResume, setShowResume] = useState(false);
  

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <a href="#about" className="logo">
            <span className="text-gradient">Chiranjeevi</span>
            <span className="muted">.dev</span>
          </a>

          <nav className="nav glass">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className={active === n.id ? "active" : ""}
              >
                {n.label}
              </a>
            ))}
       
         
          </nav>
          <div className="navbar-right">
          <button onClick={() => setShowResume(true)} className="resume-btn">Resume Preview</button></div>
          {showResume && (
          <div className="resume-modal">
          <div className="resume-content">
      
   
      <span className="close" onClick={() => setShowResume(false)}>✖️</span>

      <h2>My Resume</h2>

    
      <iframe
        src="/portfolio/resume.pdf"
        width="100%"
        height="400px"
        title="Resume Preview"
      ></iframe>
      

      <a href={`${import.meta.env.BASE_URL}resume.pdf`} download="Chiranjeevi_Resume.pdf">
  <button className="download-btn">Download Resume</button>
</a>

    </div>
  </div>
)}
          <a
            href="mailto:chiranjeevitellagorla2004@gmail.com"
            className="btn btn-primary hire-btn"
          >
            Hire me ↗
          </a>
        </div>
      </header>

      <main className="container">
        {/* Hero */}
        <section id="about" className="hero">
          <div className="fade-up">
            <span className="badge glass">
              <span className="dot" />
              Available for opportunities
            </span>
            <h1>
              Hi, I'm <span className="text-gradient">Chiranjeevi</span>.
              <br />
              I build scalable
              <br />
              web applications.
            </h1>
            <p className="lead">
              Final-year B.Tech IT student passionate about software development —
              crafting clean interfaces with React, robust APIs with FastAPI, and
              exploring intelligent systems with Python & deep learning.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                ✨ View my work
              </a>
              <a href="#contact" className="btn btn-ghost">
                Get in touch
              </a>
              <div className="icon-links">
                <a className="icon-link" href="https://github.com/adh-123" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <Icon name="github" />
                </a>
                <a className="icon-link" href="https://linkedin.com/in/chiranjeevi-tellagorla" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <Icon name="linkedin" />
                </a>
                <a className="icon-link" href="mailto:chiranjeevitellagorla2004@gmail.com" aria-label="Email">
                  <Icon name="mail" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills">
          <span className="section-eyebrow">Toolkit</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            <SkillCard icon="</>" title="Languages" items={["Python", "JavaScript"]} />
            <SkillCard icon="✦" title="Frontend" items={["HTML5", "CSS3", "React", "JavaScript"]} />
            <SkillCard icon="⌘" title="Backend & DB" items={["FastAPI", "MySQL", "REST APIs"]} />
            <SkillCard icon="⚙" title="Tools" items={["Git", "VS Code", "Colab", "Jupyter"]} />
          </div>
        </section>









        {/* Projects */}
        <section id="projects">
          <span className="section-eyebrow">Featured Work</span>
          <h2 className="section-title">Projects I've built</h2>
          <div className="projects-grid">
            <ProjectCard
              emoji="🩺"
              title="Skin Disease Detection & Classification"
              description="Multi-class image classification using a CNN model with augmentation, hyperparameter tuning, and a scalable architecture designed to assist dermatological diagnosis."
              tags={["Python", "CNN", "Deep Learning", "ML"]}
            />
           <ProjectCard
           emoji="💬"
           title="Burst — Real-Time Chat Application"
           description="A real-time chat application featuring instant messaging, room-based chats, responsive UI, and seamless communication between users."
           tags={["React", "JavaScript", "Python", "SQLite3", "Responsive"]}
           link="https://your-burst-link.vercel.app"
           accent
           />
          </div>
        </section>

        {/* Education */}
        <section id="education">
          <span className="section-eyebrow">Background</span>
          <h2 className="section-title">Education & Achievements</h2>
          <div className="edu-grid">
            <div className="edu-card glass">
              <div className="edu-icon">🎓</div>
              <h3>B.Tech in Information Technology</h3>
              <p className="school">Vasireddy Venkatadri Institute of Technology, Nambur</p>
              <p className="grade">
                <strong className="text-gradient">CGPA 7.76</strong> / 10.00
              </p>
            </div>
            <div className="edu-card glass">
              <div className="edu-icon">🎓</div>
              <h3>Pre-University (MPC)</h3>
              <p className="school">Oxford Vit Junior College, Narasaraopet</p>
              <p className="grade">
                <strong className="text-gradient">GPA 9.49</strong> / 10.00
              </p>
            </div>
            <div className="edu-card glass edu-full">
              <div className="edu-icon">🏆</div>
              <h3 style={{ marginBottom: "1rem" }}>Certifications & Achievements</h3>
              <ul className="cert-list">
                <li>Certified in Python Programming – CodeTantra</li>
                <li>Certified in SQL – Infosys Springboard</li>
                <li>Solved 30+ problems on LeetCode </li>
                <li>Student volunteer in academic & cultural events</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact">
          <div className="contact-card glass">
            <span className="section-eyebrow">Let's connect</span>
            <h2>
              Have an idea? <span className="text-gradient">Let's build it.</span>
            </h2>
          
            <div className="contact-pills">
              <a className="pill" href="mailto:chiranjeevitellagorla2004@gmail.com">
                <span className="icon"><Icon name="mail" /></span>
                chiranjeevitellagorla2004@gmail.com
              </a>
              <a className="pill" href="tel:+919059311637">
                <span className="icon"><Icon name="phone" /></span>
                +91 90593 11637
              </a>
              <span className="pill">
                <span className="icon"><Icon name="pin" /></span>
                Andhra Pradesh, India
              </span>
            </div>
          </div>
        </section>

        <footer>
          © {new Date().getFullYear()} Tellagorla Chiranjeevi Hanuman. Crafted with React & care.
        </footer>
      </main>
    </>
  );
}

function SkillCard({ icon, title, items }) {
  return (
    <div className="skill-card glass">
      <div className="skill-icon">{icon}</div>
      <h3>{title}</h3>
      <div className="tags">
        {items.map((i) => (
          <span key={i} className="tag">{i}</span>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ emoji, title, description, tags, link, accent }) {
  const Tag = link ? "a" : "div";
  const props = link ? { href: link, target: "_blank", rel: "noreferrer" } : {};
  return (
    <Tag {...props} className={`project-card glass ${accent ? "accent" : ""}`}>
      <div className="blob" />
      <div className="project-head">
        <div className="project-emoji">{emoji}</div>
        {link && <div className="external-icon"><Icon name="external" /></div>}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="tags">
        {tags.map((t) => (
          <span key={t} className="tag tag-primary">{t}</span>
        ))}
      </div>
    </Tag>
  );
}

function Icon({ name }) {
  const props = {
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  switch (name) {
    case "github":
      return (
        <svg {...props}>
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...props}>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    case "mail":
      return (
        <svg {...props}>
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      );
    case "phone":
      return (
        <svg {...props}>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      );
    case "pin":
      return (
        <svg {...props}>
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    case "external":
      return (
        <svg {...props}>
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      );
    default:
      return null;
  }
}
