import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import {
  ArrowDownRight, ArrowUpRight, Building2, ExternalLink,
  Mail, MapPin, Menu, Ruler, X, Layers3, DraftingCompass,
  ScanLine, BookOpen, Linkedin
} from "lucide-react";
import "./styles.css";
import "./v3.css";

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
  const floors = Array.from({ length: 14 });
  return <div className={`building ${system}`}>
    <div className="building-glow" />
    <div className="structural-axis axis-x">GRID A — D</div>
    <div className="structural-axis axis-y">1 — 27</div>
    <div className="building-crown"><span>G+27</span><small>STRUCTURAL MODEL</small></div>
    <div className="tower">
      {floors.map((_, i) => <div className="floor" key={i}>
        <span className="column c1" /><span className="column c2" /><span className="column c3" /><span className="column c4" />
        <div className="core" /><div className="slab" />
        {steel && <><i className="brace b1" /><i className="brace b2" /></>}
        {composite && <><i className="composite-ring" /><i className="composite-ring ring2" /></>}
        <em>LEVEL {String((i * 2) + 1).padStart(2,"0")}</em>
      </div>)}
    </div>
    <div className="foundation"><b /><b /><b /><span>FOUNDATION / LOAD PATH</span></div>
    <div className="system-label">{steel ? "STEEL FRAME + BRACING" : composite ? "COMPOSITE FRAME + CORE" : "REINFORCED CONCRETE FRAME + CORE"}</div>
  </div>;
}

function App() {
  const [system, setSystem] = useState("rc");
  const [floor, setFloor] = useState(27);
  const [zone, setZone] = useState("II");
  const [caseStudy, setCaseStudy] = useState("analysis");
  const [assembly, setAssembly] = useState("structure");
  const [loadPath, setLoadPath] = useState(true);
  const [metric, setMetric] = useState("system");
  const [milestone, setMilestone] = useState(2);
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
        <div className="engineering-dashboard">
          <div className="dashboard-head"><div><p className="mini-label">LIVE STRUCTURAL EXPLORER</p><h3>Engineering system / <span>{system.toUpperCase()}</span></h3></div><div className="dashboard-status"><i /> MODEL READY</div></div>
          <div className="dashboard-grid">
            <div className="dashboard-metric"><span>FLOORS</span><strong>{floor}</strong><input type="range" min="1" max="27" value={floor} onChange={e => setFloor(Number(e.target.value))} /></div>
            <div className="dashboard-metric"><span>SYSTEM</span><strong>{system === "rc" ? "RC FRAME" : system === "steel" ? "STEEL FRAME" : "COMPOSITE"}</strong><small>Interactive comparison</small></div>
            <div className="dashboard-metric"><span>SEISMIC</span><strong>ZONE II / IV</strong><small>Comparative study</small></div>
            <div className="dashboard-metric"><span>TOOLS</span><strong>ETABS + STAAD</strong><small>Analysis workflow</small></div>
          </div>
        </div>
        <div className="project-panel"><div className="project-visual"><div className="visual-top"><span>STRUCTURAL STUDY / 01</span><span>G+27</span></div><BlueprintBuilding system={system} /><div className="visual-bottom"><span>SCHEMATIC VISUALIZATION</span><span>LEVEL 01 — LEVEL ${floor}</span></div></div>
          <div className="project-info"><p className="project-number">01 — HIGH-RISE STRUCTURAL STUDY</p><h3>One tower.<br /><strong>Three systems.</strong></h3><p>Comparative analysis and design of a G+27 high-rise building using reinforced concrete, steel and composite structural systems across different seismic conditions.</p>
            <div className="switcher">{[["rc", "RC"], ["steel", "STEEL"], ["composite", "COMPOSITE"]].map(([key, label]) => <button className={system === key ? "active" : ""} onClick={() => setSystem(key)} key={key}>{label}</button>)}</div>
            <div className="project-facts"><div><span>Building</span><b>G+27</b></div><div><span>Conditions</span><b>Zones II / IV</b></div><div><span>Analysis</span><b>STAAD.Pro / ETABS</b></div><div><span>Focus</span><b>RC / Steel / Composite</b></div></div>
            <div className="project-note"><ScanLine size={18} /><span>Academic thesis & research project. Numerical design results are intentionally not presented here without source calculations.</span></div>
          </div></div></section>
      <section className="assembly-section">
        <div className="section-head"><div><p className="section-kicker">05 / STRUCTURAL ASSEMBLY</p><h2>Follow the <span>load path.</span></h2></div><p className="section-intro">Explore the building from foundation to roof and see how the primary structural components connect into a continuous system.</p></div>
        <div className="assembly-wrap">
          <div className={"assembly-visual " + assembly}>
            <div className="assembly-grid" />
            <div className={"load-path " + (loadPath ? "on" : "")}><i /><i /><i /><i /><i /></div>
            <div className="assembly-foundation"><span>FOUNDATION</span><b /><b /><b /></div>
            <div className="assembly-tower">{Array.from({length:9}).map((_,i)=><div key={i} className={"assembly-floor " + (assembly==="floors" && i<4 ? "focus" : "")}><span /><span /><span /><div /></div>)}</div>
            <div className="assembly-core">CORE</div><div className="assembly-roof"><span>ROOF / CROWN</span></div><div className="assembly-caption">G+27 / SCHEMATIC STRUCTURAL SECTION</div>
          </div>
          <div className="assembly-controls"><div className="assembly-toggle"><span>LOAD PATH</span><button className={loadPath?"on":""} onClick={()=>setLoadPath(v=>!v)}>{loadPath?"ON":"OFF"}</button></div>
            <div className="assembly-tabs">{[["foundation","FOUNDATION","Transfers gravity and lateral actions into the ground."],["structure","PRIMARY FRAME","Columns, beams and core form the principal load-resisting system."],["floors","FLOOR SYSTEM","Floor plates distribute gravity actions and connect the frame."],["lateral","LATERAL SYSTEM","Core, frame and bracing respond to lateral demand."],["roof","ROOF","Upper-level framing completes the structural load path."]].map(([k,t,d])=><button key={k} className={assembly===k?"active":""} onClick={()=>setAssembly(k)}><span>{t}</span><b>{d}</b><i>↗</i></button>)}</div>
          </div>
        </div>
      </section>
      <section className="insights-section">
        <div className="section-head"><div><p className="section-kicker">06 / ENGINEERING INSIGHTS</p><h2>Read the project<br/><span>like an engineer.</span></h2></div><p className="section-intro">A compact technical dashboard connecting the structural system, analysis environment, design standards and delivery workflow.</p></div>
        <div className="insights-grid">
          <div className="insight-main">
            <div className="insight-tabs">{[["system","SYSTEM"],["analysis","ANALYSIS"],["codes","CODES"],["delivery","DELIVERY"]].map(([k,t])=><button className={metric===k?"active":""} onClick={()=>setMetric(k)} key={k}>{t}</button>)}</div>
            {metric==="system" && <><span className="panel-tag">STRUCTURAL SYSTEM</span><h3>Three systems.<br/><em>One comparison.</em></h3><div className="bar-set">{[["RC FRAME",82],["STEEL FRAME",68],["COMPOSITE",91]].map(([x,n])=><div className="insight-bar" key={x}><div><span>{x}</span><b>{n}</b></div><i style={{width:n+"%"}} /></div>)}</div></>}
            {metric==="analysis" && <><span className="panel-tag">ANALYSIS ENVIRONMENT</span><h3>Model → response<br/><em>→ verification.</em></h3><div className="process-strip">{["MODEL","LOAD","ANALYZE","CHECK"].map((x,i)=><div key={x}><span>0{i+1}</span><b>{x}</b></div>)}</div></>}
            {metric==="codes" && <><span className="panel-tag">DESIGN FRAMEWORK</span><h3>Codes become<br/><em>design constraints.</em></h3><div className="code-matrix">{codes.map(x=><div key={x}><b>{x}</b><span>REFERENCED IN WORKFLOW</span></div>)}</div></>}
            {metric==="delivery" && <><span className="panel-tag">DIGITAL DELIVERY</span><h3>Drawings + BIM<br/><em>+ coordination.</em></h3><div className="delivery-chain">{["AutoCAD","Revit","Navisworks","ACC / BIM 360"].map((x,i)=><div key={x}><span>{String(i+1).padStart(2,"0")}</span><b>{x}</b></div>)}</div></>}
          </div>
          <div className="insight-side"><div><span>PROJECT</span><strong>G+27</strong><small>HIGH-RISE STUDY</small></div><div><span>SEISMIC</span><strong>II / IV</strong><small>COMPARATIVE CONDITIONS</small></div><div><span>DISCIPLINE</span><strong>STRUCTURAL</strong><small>ANALYSIS + DESIGN + BIM</small></div><div><span>LOCATION</span><strong>HYDERABAD</strong><small>INDIA</small></div></div>
        </div>
      </section>
      <section className="timeline-section">
        <div className="section-head"><div><p className="section-kicker">07 / PROJECT TIMELINE</p><h2>From brief<br/><span>to research.</span></h2></div><p className="section-intro">A structured project story showing how a high-rise study moves from definition through analysis, design, coordination and publication.</p></div>
        <div className="milestone-layout">
          <div className="milestone-nav">{[["01","DEFINE","Scope / geometry / criteria"],["02","MODEL","Structural idealization"],["03","ANALYZE","Response / comparison"],["04","DESIGN","Member verification"],["05","DOCUMENT","Drawings / BIM"],["06","PUBLISH","Research / presentation"]].map(([n,t,d],i)=><button key={n} className={milestone===i?"active":""} onClick={()=>setMilestone(i)}><span>{n}</span><b>{t}</b><small>{d}</small></button>)}</div>
          <div className="milestone-detail">
            <div className="milestone-number">0{milestone+1}</div>
            <span className="panel-tag">PROJECT MILESTONE</span>
            <h3>{[["Define the engineering question.","Establish the geometry, structural scope, loading assumptions and comparison criteria before analysis begins."],["Build a model that can be interrogated.","Translate the architectural and structural intent into a consistent analytical model with clear connectivity and supports."],["Compare structural response.","Evaluate the selected systems under the study conditions and interpret how the structural response changes."],["Verify the structural members.","Carry analysis outputs into member design, code checks and engineering documentation."],["Coordinate the information.","Connect drawings, BIM models and coordination workflows so structural intent remains clear across deliverables."],["Turn the study into knowledge.","Present the comparative findings through research, technical writing and publication-ready documentation."]][milestone][0]}<em>{[["Define the engineering question.","Establish the geometry, structural scope, loading assumptions and comparison criteria before analysis begins."],["Build a model that can be interrogated.","Translate the architectural and structural intent into a consistent analytical model with clear connectivity and supports."],["Compare structural response.","Evaluate the selected systems under the study conditions and interpret how the structural response changes."],["Verify the structural members.","Carry analysis outputs into member design, code checks and engineering documentation."],["Coordinate the information.","Connect drawings, BIM models and coordination workflows so structural intent remains clear across deliverables."],["Turn the study into knowledge.","Present the comparative findings through research, technical writing and publication-ready documentation."]][milestone][1]}</em>
            <div className="milestone-progress"><i style={{width:((milestone+1)/6*100)+"%"}} /></div><div className="milestone-meta"><span>STAGE {String(milestone+1).padStart(2,"0")} / 06</span><span>G+27 STUDY</span></div>
          </div>
        </div>
      </section>
      <section className="case-study-section">
        <div className="section-head"><div><p className="section-kicker">04 / CASE STUDY</p><h2>Inside the <span>analysis.</span></h2></div><p className="section-intro">A visual breakdown of the engineering workflow behind the G+27 study, from structural idealization through seismic comparison and design documentation.</p></div>
        <div className="case-study-nav">{[["analysis","01 / ANALYSIS","Structural idealization and response"],["seismic","02 / SEISMIC","Zone II / IV comparison"],["design","03 / DESIGN","Member design and verification"],["document","04 / DOCUMENT","Drawings, BIM and coordination"]].map(([k,t,d])=><button key={k} className={caseStudy===k?"active":""} onClick={()=>setCaseStudy(k)}><span>{t}</span><b>{d}</b><i>↗</i></button>)}</div>
        <div className="case-study-panel">
          {caseStudy==="analysis" && <><div><span className="panel-tag">STRUCTURAL IDEALIZATION</span><h3>Model the load path<br/><em>before the numbers.</em></h3><p>The study begins with geometry, member connectivity, supports, load cases and combinations. The objective is to establish a model that can be checked, interpreted and carried into design.</p></div><div className="technical-list"><div><span>01</span><b>Geometry</b><small>G+27 structural grid</small></div><div><span>02</span><b>Load cases</b><small>Gravity + lateral actions</small></div><div><span>03</span><b>Response</b><small>Analysis → review → design</small></div></div></>}
          {caseStudy==="seismic" && <><div><span className="panel-tag">SEISMIC COMPARISON</span><h3>Same building.<br/><em>Different demand.</em></h3><p>Switch the study condition to see how the portfolio communicates the comparison between Seismic Zone II and Zone IV without presenting unsupported numerical results.</p><div className="zone-switch"><button className={zone==="II"?"active":""} onClick={()=>setZone("II")}>ZONE II</button><button className={zone==="IV"?"active":""} onClick={()=>setZone("IV")}>ZONE IV</button></div></div><div className="response-graphic"><div className={zone==="IV"?"response-bar high":"response-bar"} /><span>RELATIVE DEMAND</span><b>{zone==="II"?"COMPARATIVE BASE CASE":"COMPARATIVE HIGHER-SEISMIC-DEMAND CASE"}</b></div></>}
          {caseStudy==="design" && <><div><span className="panel-tag">DESIGN VERIFICATION</span><h3>Members become<br/><em>engineering decisions.</em></h3><p>RC and steel elements are checked against applicable design requirements, with analysis outputs translated into member sizing, detailing and documentation.</p></div><div className="technical-list"><div><span>01</span><b>RC members</b><small>Columns / beams / slabs</small></div><div><span>02</span><b>Steel members</b><small>Sections / connections</small></div><div><span>03</span><b>Codes</b><small>IS 456 / IS 800 / IS 1893</small></div></div></>}
          {caseStudy==="document" && <><div><span className="panel-tag">DIGITAL DELIVERY</span><h3>From model to<br/><em>coordinated output.</em></h3><p>Technical drawings and BIM workflows connect structural intent with coordination, review and site communication.</p></div><div className="technical-list"><div><span>01</span><b>Draft</b><small>AutoCAD / technical drawings</small></div><div><span>02</span><b>Model</b><small>Revit / Tekla</small></div><div><span>03</span><b>Coordinate</b><small>Navisworks / ACC</small></div></div></>}
        </div>
      </section>
      <section className="method-section"><div className="section-head"><div><p className="section-kicker">03 / ENGINEERING METHOD</p><h2>Think in <span>systems.</span></h2></div><p className="section-intro">A structured workflow connects analysis, design decisions, documentation and coordination instead of treating each tool as a separate skill.</p></div><div className="method-track">{[["01","DEFINE","Geometry / loads / constraints"],["02","ANALYZE","Model / actions / response"],["03","DESIGN","Members / systems / checks"],["04","COORDINATE","Drawings / BIM / site"]].map(([n,t,d],i)=><Reveal key={n} delay={i*.06} className="method-card"><span>{n}</span><h3>{t}</h3><p>{d}</p><div className="method-line" /></Reveal>)}</div></section>
      <section id="expertise" className="expertise"><div className="section-head"><div><p className="section-kicker">09 / CAPABILITIES</p><h2>Engineering,<br /><span>in detail.</span></h2></div></div><div className="skill-grid">{skills.map(({ title, text, icon: Icon }, i) => <Reveal key={title} delay={i * 0.05} className="skill-card"><span className="skill-index">0{i + 1}</span><Icon size={25} strokeWidth={1.4} /><h3>{title}</h3><p>{text}</p><ArrowUpRight className="card-arrow" size={18} /></Reveal>)}</div>
        <div className="tool-band"><div><p className="mini-label">SOFTWARE</p><div className="pill-list">{software.map(x => <span key={x}>{x}</span>)}</div></div><div><p className="mini-label">DESIGN CODES</p><div className="pill-list">{codes.map(x => <span key={x}>{x}</span>)}</div></div></div></section>
      <section id="experience" className="experience"><div className="section-head"><div><p className="section-kicker">10 / EXPERIENCE</p><h2>Built through<br /><span>practice.</span></h2></div></div><Reveal className="timeline-item"><div className="timeline-date">AUG 2025<br />— JUL 2026</div><div className="timeline-line"><span /></div><div className="timeline-content"><p className="mini-label">GRADUATE ENGINEER</p><h3>Manik Projects & Consultancy Pvt. Ltd.</h3><p>Hyderabad, India</p><ul><li>Prepared structural design calculations and structural drawings for residential and commercial building projects.</li><li>Supported reinforced concrete and steel member design in accordance with applicable building codes.</li><li>Supported structural analysis and design verification using STAAD.Pro and ETABS.</li><li>Coordinated with on-site engineers and contractors and conducted site inspections to verify implementation and compliance.</li></ul></div></Reveal>
        <div className="bim-card"><div className="bim-copy"><p className="mini-label">DIGITAL ENGINEERING / IN PROGRESS</p><h3>From drawing<br />to <span>coordination.</span></h3><p>Building BIM capability through Revit, Navisworks and ACC/BIM 360, with emphasis on modeling, coordination and clash detection.</p></div><div className="bim-flow">{["2D DRAFT", "3D MODEL", "COORDINATE", "CLASH CHECK"].map((x, i) => <div key={x} className="bim-step"><span>0{i + 1}</span><b>{x}</b><i /></div>)}</div></div></section>
      <section id="research" className="research"><div className="section-head"><div><p className="section-kicker">11 / RESEARCH</p><h2>Questions that<br /><span>become structures.</span></h2></div><BookOpen size={34} strokeWidth={1} /></div><div className="publication-list">{publications.map((p, i) => <Reveal className="publication" delay={i * 0.08} key={p.doi}><div className="pub-year">{p.year}</div><div className="pub-main"><h3>{p.title}</h3><p>{p.source}</p></div><div className="pub-doi">DOI<br /><strong>{p.doi}</strong></div><ExternalLink size={18} /></Reveal>)}</div></section>
      <section id="about" className="about"><div className="about-number">13</div><div><p className="section-kicker">12 / ABOUT ANISH</p><h2>Civil engineer.<br /><em>Structural thinker.</em></h2></div><div className="about-copy"><p>Anish is a Structural Engineer with a Master's degree in Structural Engineering and hands-on experience in the analysis and design of steel and concrete structures.</p><p>His work spans structural calculations, design verification, drawings, site coordination and digital modeling, with a growing focus on BIM workflows.</p><div className="education"><div><span>2025</span><b>M.Tech — Structural Engineering</b><small>Gokaraju Rangaraju Institute of Engineering and Technology · CGPA 7.63/10</small></div><div><span>2022</span><b>B.Tech — Civil Engineering</b><small>Mallareddy Institute of Technology · CGPA 6.54/10</small></div></div></div></section>
      <section className="contact"><div className="contact-grid" /><p className="section-kicker">13 / CONTACT</p><h2>Let's build<br /><em>something strong.</em></h2><div className="contact-links"><a href="mailto:anishdevireddy07@gmail.com"><Mail size={19} /> anishdevireddy07@gmail.com <span>↗</span></a><a href="https://linkedin.com/in/anish-devireddy-a488b6247" target="_blank" rel="noreferrer"><Linkedin size={19} /> LinkedIn <span>↗</span></a><span><MapPin size={19} /> Hyderabad, India</span></div></section>
    </main>
    <footer><span>© {new Date().getFullYear()} DEVIREDDY ANISH</span><span>CIVIL & STRUCTURAL DESIGN ENGINEER</span><a href="#">BACK TO TOP <span>↗</span></a></footer>
  </div>;
}
createRoot(document.getElementById("root")).render(<App />);
