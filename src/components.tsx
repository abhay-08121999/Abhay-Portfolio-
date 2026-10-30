import { useEffect, useMemo, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  ArrowUpRight, BrainCircuit, BriefcaseBusiness, Code2, Database,
  Github, GraduationCap, Linkedin, Mail, Menu, Moon, MousePointer2,
  Send, Sparkles, Terminal, X, Zap
} from "lucide-react";
import { Link } from "react-router-dom";
import { achievements, education, experience, projects, skills, social, type Project } from "./data";

const nav = ["Home", "About", "Skills", "Experience", "Projects", "Achievements", "Coding", "Education", "Contact"];

export function BackgroundEffects() {
  return (
    <div className="background-effects" aria-hidden>
      <div className="grid-plane" />
      <div className="orb orb-a" />
      <div className="orb orb-b" />
      <div className="orb orb-c" />
      <div className="noise" />
    </div>
  );
}

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-100); const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 400, damping: 35 });
  const sy = useSpring(y, { stiffness: 400, damping: 35 });
  useEffect(() => {
    const media = window.matchMedia("(pointer:fine)");
    setEnabled(media.matches);
    const move = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY); };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x,y]);
  if (!enabled) return null;
  return <>
    <motion.div className="cursor-dot" style={{ x, y }} />
    <motion.div className="cursor-ring" style={{ x: sx, y: sy }} />
  </>;
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = nav.map(n => document.getElementById(n.toLowerCase()));
      const current = sections.reverse().find(s => s && s.getBoundingClientRect().top < 180);
      if (current) setActive(current.id.replace("coding", "Coding").replace(/\b\w/g, c => c.toUpperCase()));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const go = (n: string) => {
    document.getElementById(n.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };
  return <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
    <button className="brand" onClick={() => go("Home")} aria-label="Go home"><span>AS</span><b>Abhay<span>.</span></b></button>
    <nav className={open ? "nav-open" : ""}>
      {nav.map(n => <button key={n} className={active === n ? "active" : ""} onClick={() => go(n)}>{n}</button>)}
    </nav>
    <button className="menu-button" onClick={() => setOpen(v=>!v)} aria-label="Toggle menu">{open ? <X/> : <Menu/>}</button>
  </header>;
}

const roles = ["AI/ML Engineer", "Full-Stack Developer", "Generative AI Developer", "Machine Learning Enthusiast", "Problem Solver"];

export function Hero() {
  const [role, setRole] = useState(0);
  useEffect(() => { const t = setInterval(() => setRole(r => (r+1)%roles.length), 2200); return () => clearInterval(t); }, []);
  return <section id="home" className="hero section">
    <div className="hero-copy">
      <motion.div className="eyebrow" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.2}}>
        <span className="status-dot"/> AVAILABLE FOR BUILDING
      </motion.div>
      <motion.h1 initial={{opacity:0,y:35}} animate={{opacity:1,y:0}} transition={{delay:.35}}>
        Hi, I'm <em>Abhay Singh.</em><br/><span>I Build Intelligent</span><br/>Digital Experiences.
      </motion.h1>
      <motion.div className="role-line" key={role} initial={{opacity:0, y:12, filter:"blur(8px)"}} animate={{opacity:1,y:0,filter:"blur(0)"}}>
        <Sparkles size={18}/> {roles[role]}
      </motion.div>
      <motion.p className="hero-text" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.8}}>
        I build AI-powered applications, intelligent recommendation systems, modern web platforms, and scalable software solutions using machine learning, Generative AI, React, Node.js, Flask and modern cloud technologies.
      </motion.p>
      <motion.div className="hero-actions" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:1}}>
        <a className="button primary" href="#projects">View My Work <ArrowUpRight size={17}/></a>
        <a className="button ghost" href="/Abhay-Singh-Resume.pdf">Download Resume</a>
        <a className="button ghost" href="#contact">Let's Connect</a>
      </motion.div>
      <div className="social-row">
        <a href={social.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github/></a>
        <a href={social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin/></a>
        <span className="social-placeholder" title="LeetCode URL not provided"><Code2/></span>
        <span className="social-placeholder" title="Email not provided"><Mail/></span>
      </div>
    </div>
    <div className="hero-visual">
      <div className="scan-ring ring-one"/><div className="scan-ring ring-two"/>
      <motion.div className="core" animate={{rotate:360}} transition={{duration:18,repeat:Infinity,ease:"linear"}}>
        <div className="core-inner"><BrainCircuit size={76}/><span>AI<br/>ENGINE</span></div>
      </motion.div>
      <div className="floating-code code-one">const intelligence = build();</div>
      <div className="floating-code code-two">RAG · ML · GenAI</div>
      <div className="floating-code code-three">React / Node / Flask</div>
    </div>
  </section>;
}

export function SectionHeading({kicker,title,text}:{kicker:string,title:string,text?:string}) {
  return <div className="section-heading"><div className="section-kicker">{kicker}</div><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

export function About() {
  const cards = [
    [BrainCircuit,"AI/ML","Machine Learning & Generative AI"],
    [Code2,"Full Stack","React + Node.js + Flask"],
    [Terminal,"Problem Solving","DSA & Competitive Coding"],
    [Zap,"Builder","Real-world AI-powered products"]
  ] as const;
  return <section id="about" className="section"><SectionHeading kicker="01 / ABOUT" title="Turning Ideas Into Intelligent Products" text="I work at the intersection of artificial intelligence and software engineering, transforming ideas into practical products with clean interfaces and scalable architectures."/>
    <div className="about-grid">
      <div className="about-copy"><p>I'm an AI/ML-focused developer with experience building machine learning systems, Generative AI applications, full-stack web applications, and data-driven products.</p><p>My experience spans machine learning, deep learning, RAG systems, Generative AI, React, Node.js, Flask, databases, APIs, and modern web development.</p><div className="location-pill">● Jaipur, Rajasthan, India</div></div>
      <div className="stat-grid">{cards.map(([Icon,a,b],i)=><motion.div whileHover={{y:-7}} className="glass-card stat-card" key={a}><Icon/><small>0{i+1}</small><h3>{a}</h3><p>{b}</p></motion.div>)}</div>
    </div>
  </section>;
}

export function Skills() {
  return <section id="skills" className="section"><SectionHeading kicker="02 / STACK" title="Tools I Use To Build" text="A practical toolkit spanning AI, application development, data and deployment."/>
    <div className="skill-groups">{Object.entries(skills).map(([group,list],gi)=><div className="skill-group" key={group}><div className="group-title"><span>0{gi+1}</span>{group}</div><div className="skill-cloud">{list.map((s,i)=><motion.div whileHover={{scale:1.04,rotateX:4,rotateY:-4}} className="skill-card" key={s}><span>{s}</span><i>{String(i+1).padStart(2,"0")}</i></motion.div>)}</div></div>)}</div>
  </section>;
}

export function Experience() {
  return <section id="experience" className="section"><SectionHeading kicker="03 / EXPERIENCE" title="Building In The Real World"/>
    <div className="timeline">{experience.map((e,i)=><motion.article className="timeline-item" initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true,margin:"-80px"}} transition={{delay:i*.1}} key={e.role}><div className="timeline-node"/><div className="timeline-card"><span className="period">{e.period}</span><h3>{e.role}</h3><h4>{e.company}</h4><ul>{e.bullets.map(b=><li key={b}>{b}</li>)}</ul></div></motion.article>)}</div>
  </section>;
}

export function Projects() {
  return <section id="projects" className="section"><SectionHeading kicker="04 / SELECTED WORK" title="Products, Not Just Projects" text="Explore the systems and interfaces I've been building across AI and full-stack development."/>
    <div className="project-grid">{projects.map((p,i)=><motion.article className={`project-card project-${i}`} whileHover={{y:-10}} key={p.id}><div className="project-number">0{i+1}</div><div className="project-icon"><BrainCircuit size={28}/></div><h3>{p.title}</h3><p>{p.description}</p><div className="tags">{p.stack.map(t=><span key={t}>{t}</span>)}</div><Link to={`/project/${p.id}`} className="project-link">Explore project <ArrowUpRight size={17}/></Link></motion.article>)}</div>
  </section>;
}

export function Achievements() {
  return <section id="achievements" className="section"><SectionHeading kicker="05 / ACHIEVEMENTS" title="Signals Of Building & Shipping"/>
    <div className="achievement-grid">{achievements.map((a,i)=><motion.div className="achievement-card" whileInView={{opacity:1,y:0}} initial={{opacity:0,y:25}} viewport={{once:true}} transition={{delay:i*.07}} key={a}><span>0{i+1}</span><Sparkles size={18}/><p>{a}</p></motion.div>)}</div>
  </section>;
}

export function Coding() {
  return <section id="coding" className="section"><SectionHeading kicker="06 / CODING" title="Coding & Problem Solving" text="Live statistics are intentionally not fabricated. Connect the profile APIs when the usernames and endpoints are available."/>
    <div className="coding-grid">
      <div className="profile-card"><div className="profile-top"><Code2/><span>LEETCODE</span></div><h3>Profile integration pending</h3><p>Username: <b>[ADD LEETCODE USERNAME]</b></p><div className="metric-grid">{["Problems Solved","Contest Rating","Global Rank","Easy / Medium / Hard"].map(m=><div key={m}><strong>—</strong><small>{m}</small></div>)}</div><div className="api-note">Live coding statistics will be connected through API.</div></div>
      <div className="profile-card"><div className="profile-top"><Github/><span>GITHUB</span></div><h3>abhay-08121999</h3><p>Public profile connected; live repository/contribution metrics can be wired through GitHub's API.</p><div className="metric-grid">{["Repositories","Contributions","Stars","Followers"].map(m=><div key={m}><strong>—</strong><small>{m}</small></div>)}</div><a className="inline-link" href={social.github} target="_blank" rel="noreferrer">Open GitHub <ArrowUpRight size={15}/></a></div>
      <div className="profile-card"><div className="profile-top"><TrophyIcon/><span>CONTESTS</span></div><h3>Contest history</h3><p>Contest names, ranks, ratings and dates will appear here once verified data is connected.</p><div className="api-note">No invented ranks or ratings.</div></div>
    </div>
  </section>;
}
function TrophyIcon(){return <span className="trophy">★</span>}

export function Education() {
  return <section id="education" className="section"><SectionHeading kicker="07 / EDUCATION" title="Academic Foundation"/>
    <div className="education-timeline">{education.map((e,i)=><div className="education-item" key={e.title}><div className="edu-node"><GraduationCap size={17}/></div><div><span>{e.period}</span><h3>{e.title}</h3><p>{e.institution}</p>{e.score && <b>{e.score}</b>}</div></div>)}</div>
  </section>;
}

export function ResumeCTA() {
  return <section className="section resume-section"><div className="resume-card"><div><div className="section-kicker">NEXT CHAPTER</div><h2>Want to know more about my journey?</h2><p>Explore my complete experience, projects, technical skills and achievements.</p></div><div className="hero-actions"><a className="button primary" href="/Abhay-Singh-Resume.pdf">Download Resume <ArrowUpRight size={17}/></a><a className="button ghost" href={social.linkedin} target="_blank" rel="noreferrer">View LinkedIn</a></div></div></section>;
}

export function Contact() {
  const [sent,setSent] = useState(false);
  const submit = (e: React.FormEvent) => { e.preventDefault(); setSent(true); setTimeout(()=>setSent(false),3500); };
  return <section id="contact" className="section"><SectionHeading kicker="08 / CONTACT" title="Let's Build Something Intelligent." text="Have an idea, project, collaboration opportunity, or just want to talk about AI and technology?"/>
    <div className="contact-grid"><div className="contact-info">
      <a className="contact-card" href={social.github} target="_blank" rel="noreferrer"><Github/><span><small>GITHUB</small><b>abhay-08121999</b></span><ArrowUpRight/></a>
      <a className="contact-card" href={social.linkedin} target="_blank" rel="noreferrer"><Linkedin/><span><small>LINKEDIN</small><b>abhay-singh-2261602b</b></span><ArrowUpRight/></a>
      <div className="contact-card disabled"><Mail/><span><small>EMAIL</small><b>[ADD EMAIL ADDRESS]</b></span></div>
      <div className="contact-card disabled"><MousePointer2/><span><small>PHONE</small><b>[ADD PHONE NUMBER]</b></span></div>
      <div className="contact-card disabled"><Code2/><span><small>LEETCODE</small><b>[ADD LEETCODE URL]</b></span></div>
    </div><form className="contact-form" onSubmit={submit}><label>Name<input required name="name" placeholder="Your name"/></label><label>Email<input required type="email" name="email" placeholder="you@example.com"/></label><label>Subject<input required name="subject" placeholder="Project / collaboration"/></label><label>Message<textarea required name="message" rows={6} placeholder="Tell me what you're building..."/></label><button className="button primary" type="submit">{sent ? "Message ready ✓" : "Send Message"} <Send size={16}/></button>{sent && <motion.div initial={{opacity:0}} animate={{opacity:1}} className="form-note">Frontend validation passed. Connect this form to an email/API provider to send messages.</motion.div>}</form></div>
  </section>;
}

export function Footer() {
  return <footer><div><div className="brand footer-brand"><span>AS</span><b>Abhay<span>.</span></b></div><p>AI/ML Engineer & Full-Stack Developer</p></div><div className="footer-links">{nav.map(n=><a href={`#${n.toLowerCase()}`} key={n}>{n}</a>)}</div><div className="footer-bottom"><span>© 2026 Abhay Singh. All rights reserved.</span><span>AI + Software + Product Building</span></div></footer>;
}

export function ProjectDetail({project}:{project:Project}) {
  return <main className="detail-page"><Link to="/#projects" className="back-link">← Back to projects</Link><div className="detail-hero"><div className="section-kicker">PROJECT / {project.id.toUpperCase()}</div><h1>{project.title}</h1><p>{project.description}</p><div className="tags">{project.stack.map(t=><span key={t}>{t}</span>)}</div></div><div className="detail-grid">{[["Problem",project.problem],["Solution",project.solution],["Architecture",project.architecture],["Challenges",project.challenges],["Results",project.results]].map(([a,b])=><article className="detail-card" key={a}><h2>{a}</h2><p>{b}</p></article>)}<article className="detail-card wide"><h2>Features</h2><ul>{project.features.map(f=><li key={f}>{f}</li>)}</ul></article></div><div className="detail-actions">{project.github ? <a className="button primary" href={project.github}>GitHub</a> : <span className="button ghost disabled-button">GitHub — placeholder</span>}{project.live ? <a className="button ghost" href={project.live}>Live Demo</a> : <span className="button ghost disabled-button">Live Demo — placeholder</span>}</div></main>;
}

export function HomePage() {
  return <><BackgroundEffects/><CustomCursor/><Navbar/><main><Hero/><About/><Skills/><Experience/><Projects/><Achievements/><Coding/><Education/><ResumeCTA/><Contact/></main><Footer/></>;
}

export function ProjectPage({project}:{project:Project}) {
  return <><BackgroundEffects/><CustomCursor/><ProjectDetail project={project}/></>;
}

export function findProject(id:string){ return projects.find(p=>p.id===id); }
