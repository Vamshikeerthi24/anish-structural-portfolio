import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import {
  ArrowDownRight, ArrowUpRight, Building2, ExternalLink,
  Mail, MapPin, Menu, Ruler, X, Layers3, DraftingCompass,
  ScanLine, BookOpen, Linkedin
} from "lucide-react";
import "./styles.css";

const skills = [
  { title: "Structural Analysis", text: "Analysis and design verification using STAAD.Pro and ETABS.", icon: Ruler },
  { title: "RC & Steel Design", text: "Reinforced concrete members, steel members and structural connections.", icon: Layers3 },
  { title: "BIM & Coordination", text: "Developing BIM capability across Revit, Navisworks and ACC/BIM 360.", icon: Building2 },
  { title: "Drafting & Detailing", text: "2D/3D drafting, detailing and technical documentation with AutoCAD and related tools.", icon: DraftingCompass },
];

const software = ["STAAD.Pro", "ETABS", "Tekla Structures", "AutoCAD", "Revit", "Navisworks", "SketchUp", "Excel"];
const codes = ["IS 456", "IS 800", "IS 875", "IS 1893"];

const publications = [
  { year: "2026", title: "Comparative Seismic Analysis and Design of (G+27) High-Rise Buildings: Reinforced Concrete, Steel, and Composite Systems in Zones II and IV", source: "Advances in Materials and Manufacturing Technology", doi: "10.1007/978-981-95-2828-8_29" },
  { year: "2025", title: "Analysis and Design of High-Rise Building (G+27) Structure Using Composite Systems in Seismic Zone II", source: "16th International Conference on Materials Processing and Characterization", doi: "10.1063/5.0261565" },
];

function Reveal({ children, delay = 0, className = "" }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

function BlueprintBuilding({ system }) {
  const steel = system === "steel", composite = system === "composite";
  return <div className={`building ${system}`}><div className="building-glow" /><div className="building-crown"><span>G+27</span></div><div className="tower">{Array.from({ length: 14 }).map((_, i) => <div className="floor" key={i}><span /><span /><span /><span /><i /><i /></div>)}</div><div className="foundation"><b /><b /><b /></div><div className="system-label">{steel ? "STEEL FRAME" : composite ? "COMPOSITE SYSTEM" : "RC FRAME"}</div></div>;
}

function App() {
  const [system, setSystem] = useState("rc");
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = [["Work", "#work"], ["Expertise", "#expertise"], ["Experience", "#experience"], ["Research", "#research"], ["About", "#about"]];

  return <div className="site"><div className="grain" />
    <header className="nav"><a href="#" className="brand" onClick={() => setMenuOpen(false)}><span className="brand-mark">DA</span><span>DEVIREDDY ANISH</span></a>
      <nav className={menuOpen ? "nav-links open" : "nav-links"}>{nav.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}<a className="nav-contact" href="mailto:anishdevireddy07@gmail.com">Contact <ArrowUpRight size={15} /></a></nav>
      <button className="menu" onClick={() => setMenuOpen(v => !v)} aria-label="Menu">{menuOpen ? <X /> : <Menu />}</button>
    </header>
    <main>
      <section className="hero"><div className="hero-grid" /><div className="hero-copy"><Reveal><div className="eyebrow"><span className="dot" /> CIVIL & STRUCTURAL DESIGN ENGINEER</div></Reveal><Reveal delay={0.08}><h1>Designing<br /><em>strength</em> into<br />every structure.</h1></Reveal><Reveal delay={0.16}><p className="hero-text">Structural engineering graduate focused on analysis, design and BIM — from reinforced concrete and steel systems to high-rise seismic studies.</p></Reveal><Reveal delay={0.22} className="hero-actions"><a href="#work" className="button dark">Explore engineering work <ArrowDownRight size={18} /></a><a href="mailto:anishdevireddy07@gmail.com" className="button light">Get in touch <ArrowUpRight size={17} /></a></Reveal></div>
        <div className="hero-art" aria-label="Abstract structural frame"><div className="dimension dim-v">G+27</div><div className="dimension dim-h">STRUCTURAL FRAME / 01</div><div className="hero-building">{Array.from({ length: 9 }).map((_, i) => <div className="hero-floor" key={i}><span /><span /><span /><span /></div>)}<div className="hero-diagonal d1" /><div className="hero-diagonal d2" /></div><div className="hero-coordinate">17.0° N&nbsp;&nbsp;78.5° E</div></div>
        <div className="hero-bottom"><span>HYDERABAD, INDIA</span><span>STRUCTURAL ENGINEERING / BIM</span><a href="#work">SCROLL TO EXPLORE <ArrowDownRight size={15} /></a></div>
      </section>
      <section className="statement"><Reveal><p className="section-kicker">01 / APPROACH</p><h2>From civil foundations<br />to structural <span>systems.</span></h2></Reveal><Reveal delay={0.1} className="statement-side"><p>With a Master's specialization in Structural Engineering and professional experience in structural design, Anish combines analytical thinking with practical coordination across drawings, models and construction sites.</p><a href="#about" className="text-link">More about Anish <ArrowUpRight size={15} /></a></Reveal></section>
      <section id="work" className="project-section"><div className="section-head"><div><p className="section-kicker">02 / FEATURED WORK</p><h2>G+27 <span>high-rise.</span></h2></div><p className="section-intro">A comparative structural analysis and design study across reinforced concrete, steel and composite systems, evaluated in Seismic Zones II and IV.</p></div>
        <div className="project-panel"><div className="project-visual"><div className="visual-top"><span>STRUCTURAL STUDY / 01</span><span>G+27</span></div><BlueprintBuilding system={system} /><div className="visual-bottom"><span>SCHEMATIC VISUALIZATION</span><span>NOT TO SCALE</span></div></div>
          <div className="project-info"><p className="project-number">01 — HIGH-RISE STRUCTURAL STUDY</p><h3>One tower.<br /><strong>Three systems.</strong></h3><p>Comparative analysis and design of a G+27 high-rise building using reinforced concrete, steel and composite structural systems across different seismic conditions.</p>
            <div className="switcher">{[["rc", "RC"], ["steel", "STEEL"], ["composite", "COMPOSITE"]].map(([key, label]) => <button className={system === key ? "active" : ""} onClick={() => setSystem(key)} key={key}>{label}</button>)}</div>
            <div className="project-facts"><div><span>Building</span><b>G+27</b></div><div><span>Conditions</span><b>Zones II / IV</b></div><div><span>Analysis</span><b>STAAD.Pro / ETABS</b></div><div><span>Focus</span><b>RC / Steel / Composite</b></div></div>
            <div className="project-note"><ScanLine size={18} /><span>Academic thesis & research project. Numerical design results are intentionally not presented here without source calculations.</span></div>
          </div></div></section>
      <section id="expertise" className="expertise"><div className="section-head"><div><p className="section-kicker">03 / CAPABILITIES</p><h2>Engineering,<br /><span>in detail.</span></h2></div></div><div className="skill-grid">{skills.map(({ title, text, icon: Icon }, i) => <Reveal key={title} delay={i * 0.05} className="skill-card"><span className="skill-index">0{i + 1}</span><Icon size={25} strokeWidth={1.4} /><h3>{title}</h3><p>{text}</p><ArrowUpRight className="card-arrow" size={18} /></Reveal>)}</div>
        <div className="tool-band"><div><p className="mini-label">SOFTWARE</p><div className="pill-list">{software.map(x => <span key={x}>{x}</span>)}</div></div><div><p className="mini-label">DESIGN CODES</p><div className="pill-list">{codes.map(x => <span key={x}>{x}</span>)}</div></div></div></section>
      <section id="experience" className="experience"><div className="section-head"><div><p className="section-kicker">04 / EXPERIENCE</p><h2>Built through<br /><span>practice.</span></h2></div></div><Reveal className="timeline-item"><div className="timeline-date">AUG 2025<br />— JUL 2026</div><div className="timeline-line"><span /></div><div className="timeline-content"><p className="mini-label">GRADUATE ENGINEER</p><h3>Manik Projects & Consultancy Pvt. Ltd.</h3><p>Hyderabad, India</p><ul><li>Prepared structural design calculations and structural drawings for residential and commercial building projects.</li><li>Supported reinforced concrete and steel member design in accordance with applicable building codes.</li><li>Supported structural analysis and design verification using STAAD.Pro and ETABS.</li><li>Coordinated with on-site engineers and contractors and conducted site inspections to verify implementation and compliance.</li></ul></div></Reveal>
        <div className="bim-card"><div className="bim-copy"><p className="mini-label">DIGITAL ENGINEERING / IN PROGRESS</p><h3>From drawing<br />to <span>coordination.</span></h3><p>Building BIM capability through Revit, Navisworks and ACC/BIM 360, with emphasis on modeling, coordination and clash detection.</p></div><div className="bim-flow">{["2D DRAFT", "3D MODEL", "COORDINATE", "CLASH CHECK"].map((x, i) => <div key={x} className="bim-step"><span>0{i + 1}</span><b>{x}</b></div>)}</div></div></section>
      <section id="research" className="research"><div className="section-head"><div><p className="section-kicker">05 / RESEARCH</p><h2>Questions that<br /><span>become structures.</span></h2></div><BookOpen size={34} strokeWidth={1} /></div><div className="publication-list">{publications.map((p, i) => <Reveal className="publication" delay={i * 0.08} key={p.doi}><div className="pub-year">{p.year}</div><div className="pub-main"><h3>{p.title}</h3><p>{p.source}</p></div><div className="pub-doi">DOI<br /><strong>{p.doi}</strong></div><ExternalLink size={18} /></Reveal>)}</div></section>
      <section id="about" className="about"><div className="about-number">06</div><div><p className="section-kicker">ABOUT ANISH</p><h2>Civil engineer.<br /><em>Structural thinker.</em></h2></div><div className="about-copy"><p>Anish is a Structural Engineer with a Master's degree in Structural Engineering and hands-on experience in the analysis and design of steel and concrete structures.</p><p>His work spans structural calculations, design verification, drawings, site coordination and digital modeling, with a growing focus on BIM workflows.</p><div className="education"><div><span>2025</span><b>M.Tech — Structural Engineering</b><small>Gokaraju Rangaraju Institute of Engineering and Technology · CGPA 7.63/10</small></div><div><span>2022</span><b>B.Tech — Civil Engineering</b><small>Mallareddy Institute of Technology · CGPA 6.54/10</small></div></div></div></section>
      <section className="contact"><div className="contact-grid" /><p className="section-kicker">07 / CONTACT</p><h2>Let's build<br /><em>something strong.</em></h2><div className="contact-links"><a href="mailto:anishdevireddy07@gmail.com"><Mail size={19} /> anishdevireddy07@gmail.com <span>↗</span></a><a href="https://linkedin.com/in/anish-devireddy-a488b6247" target="_blank" rel="noreferrer"><Linkedin size={19} /> LinkedIn <span>↗</span></a><span><MapPin size={19} /> Hyderabad, India</span></div></section>
    </main>
    <footer><span>© {new Date().getFullYear()} DEVIREDDY ANISH</span><span>CIVIL & STRUCTURAL DESIGN ENGINEER</span><a href="#">BACK TO TOP <span>↗</span></a></footer>
  </div>;
}
createRoot(document.getElementById("root")).render(<App />);
