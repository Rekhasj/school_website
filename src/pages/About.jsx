import React, { useState } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";

import MessageCard from "../components/Message/MessageCard ";
import r2           from '../assets/Photos/robotics/r2.jpeg'
import hawLogo      from '../assets/Photos/logo_footer.png'
import independence from '../assets/Photos/independence_day/independence_6.webp'
import { StaffSection, TrainingSection } from "../components/TT/StaffSection";
import StatCard from "../components/About/StatCard";

// ─── DATA ────────────────────────────────────────────────────────────────────

const statData = [
  { number: 100,  suffix: "%", label: "Results"  },
  { number: 7,    suffix: "+", label: "Years"    },
  { number: 1000, suffix: "+", label: "Students" },
  { number: 100,  suffix: "+", label: "Faculty"  },
];

// 3 nav items only
const navItems = [
  { id: "about",      label: "About"      },
  { id: "leadership", label: "Leadership" },
  { id: "training",   label: "Workshops"  },
];

// Inner tabs inside "About"
const innerTabs = [
  { id: "about",   label: "About"   },
  { id: "vision",  label: "Vision"  },
  { id: "mission", label: "Mission" },
  { id: "goal",    label: "Goal"    },
  { id: "dream",   label: "Dream"   },
];

const BRAND = "rgb(24,55,105)";

const fadeUp = {
  initial:    { opacity: 0, y: 30 },
  animate:    { opacity: 1, y: 0  },
  exit:       { opacity: 0, y: -20 },
  transition: { duration: 0.45 },
};

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

const About = () => {
  const [active,      setActive]      = useState("about");
  const [innerActive, setInnerActive] = useState("about");

  // ── inner About tab sections ──────────────────────────────────────────────
  const innerSections = {

    // ── ABOUT ──
    about: (
      <div>
        {/* Stats */}
        <Row className="g-3 mb-5">
          {statData.map((item, i) => <StatCard key={i} index={i} {...item} />)}
        </Row>

        {/* Intro split */}
        <div style={s.splitCard}>
          <Row className="align-items-center g-0">
            <Col xs={12} md={5}>
              <div style={s.splitImgWrap}>
                <motion.img
                  src={hawLogo}
                  alt="Hawkings School logo"
                  style={s.splitImg}
                  whileHover={{ scale: 1.04 }}
                />
              </div>
            </Col>
            <Col xs={12} md={7}>
              <div style={s.splitBody}>
                <div style={s.tagRow}>
                  {["CBSE Affiliated","Founded 2017","Kuppam"].map(t =>
                    <span key={t} style={s.tag}>{t}</span>)}
                </div>
                <h2 style={s.h2}>Hawkings School</h2>
                <p style={s.bodyText}>
                  At Hawkings School every child gets the opportunity to develop
                  their potential to the optimum level. Our campus blends rigorous
                  academics with rich co-curricular experiences — robotics, arts,
                  sports and leadership — creating an environment where curiosity
                  is celebrated and confidence is built for life.
                </p>
                <p style={s.bodyText}>
                  Backed by seven years of 100 % board results and a faculty of
                  over 100 dedicated educators, we have earned the trust of more
                  than 1000 families across Kuppam.
                </p>
                <div style={s.tagRow}>
                  {["Holistic Education","Global Standards","Strong Values","Innovation"].map(t =>
                    <span key={t} style={s.tag}>{t}</span>)}
                </div>
              </div>
            </Col>
          </Row>
        </div>

        {/* Why us */}
        <h3 style={s.sectionLabel}>Why Hawkings?</h3>
        <Row className="g-3">
          {[
            { icon:"🏆", title:"Academic Excellence",  desc:"Consistent 100 % board results year after year."                   },
            { icon:"🔬", title:"STEM & Robotics",      desc:"State-of-the-art labs and hands-on technology learning."           },
            { icon:"🌍", title:"Global Curriculum",    desc:"Aligned with national and international education standards."      },
            { icon:"🤝", title:"Inclusive Community",  desc:"A safe, supportive campus for every background and ability."       },
            { icon:"🎨", title:"Arts & Culture",       desc:"Music, dance, visual arts and stage performances."                 },
            { icon:"⚽", title:"Sports & Fitness",     desc:"Structured sports programmes and inter-school competitions."       },
          ].map((c, i) => (
            <Col xs={12} sm={6} md={4} key={i}>
              <motion.div style={s.featureCard} whileHover={{ y: -6, boxShadow:"0 12px 30px rgba(24,55,105,0.13)" }}>
                <div style={s.featureIconCircle}>{c.icon}</div>
                <h4 style={s.featureTitle}>{c.title}</h4>
                <p  style={s.featureDesc}>{c.desc}</p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </div>
    ),

    // ── VISION ──
    vision: (
      <div>
        {/* Banner */}
        <div style={{ ...s.sectionBanner, backgroundImage:`linear-gradient(135deg, ${BRAND} 0%, #2563a8 100%)` }}>
          <div style={s.bannerIcon}>🌐</div>
          <h2 style={s.bannerTitle}>Our Vision</h2>
          <p  style={s.bannerSub}>Shaping global citizens, one student at a time</p>
        </div>

        {/* Quote block */}
        <div style={s.quoteBlock}>
          <div style={s.quoteBar} />
          <p style={s.quoteText}>
            "To equip children coming from different backgrounds with quality
            education and skills required to become good citizens — competing
            confidently at the Global Level."
          </p>
        </div>

        {/* 3 pillar cards */}
        <Row className="g-3 mt-2">
          {[
            { num:"01", title:"Quality Education",  desc:"Rigorous academics aligned to CBSE and beyond, ensuring every student achieves their personal best."       },
            { num:"02", title:"Global Standards",   desc:"Adopting national and international benchmarks so our graduates are ready for universities worldwide."    },
            { num:"03", title:"Good Citizenship",   desc:"Instilling values, empathy and civic responsibility alongside academic and technical skills."              },
          ].map((p, i) => (
            <Col xs={12} md={4} key={i}>
              <motion.div style={s.pillarCard} whileHover={{ y:-6 }}>
                <span style={s.pillarNum}>{p.num}</span>
                <h4   style={s.pillarTitle}>{p.title}</h4>
                <p    style={s.pillarDesc}>{p.desc}</p>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Photo + detail split */}
        <div style={{ ...s.splitCard, marginTop:28 }}>
          <Row className="align-items-center g-0">
            <Col xs={12} md={5}>
              <div style={s.splitImgWrap}>
                <motion.img src={r2} alt="Robotics" style={s.splitImg} whileHover={{ scale:1.04 }} />
              </div>
            </Col>
            <Col xs={12} md={7}>
              <div style={s.splitBody}>
                <h3 style={s.h3}>Powered by Innovation</h3>
                <p style={s.bodyText}>
                  A series of innovative methods and the latest educational
                  technology are integrated into everyday learning. Our teachers
                  are trained facilitators who guide students to discover,
                  question and create — not just memorise.
                </p>
                <p style={s.bodyText}>
                  From robotics competitions to inter-school debate championships,
                  Hawkings students demonstrate global competence both inside and
                  outside the classroom.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    ),

    // ── MISSION ──
    mission: (
      <div>
        <div style={{ ...s.sectionBanner, backgroundImage:"linear-gradient(135deg, #0f6e56 0%, #1d9e75 100%)" }}>
          <div style={s.bannerIcon}>🎯</div>
          <h2 style={s.bannerTitle}>Our Mission</h2>
          <p  style={s.bannerSub}>Six pillars that guide everything we do</p>
        </div>

        <Row className="g-3 mt-3">
          {[
            { icon:"💡", title:"Inspire Creativity",     desc:"Foster imagination and original thinking across every subject and activity."     },
            { icon:"🛡️", title:"Safe & Inclusive",       desc:"Maintain a secure, welcoming environment where every student belongs."           },
            { icon:"📚", title:"Global Curriculum",      desc:"Deliver content aligned with national and international education standards."    },
            { icon:"🌱", title:"Personalised Growth",    desc:"Track and nurture each student's unique strengths and learning pace."            },
            { icon:"🔧", title:"Hands-on Learning",      desc:"Prioritise practical, experiential activities over rote memorisation."          },
            { icon:"🏅", title:"Values & Leadership",    desc:"Build moral character, resilience, and the confidence to lead."                 },
          ].map((m, i) => (
            <Col xs={12} sm={6} key={i}>
              <motion.div style={s.missionCard} whileHover={{ x:6 }}>
                <span style={s.missionIcon}>{m.icon}</span>
                <div>
                  <h4 style={s.missionTitle}>{m.title}</h4>
                  <p  style={s.missionDesc}>{m.desc}</p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </div>
    ),

    // ── GOAL ──
    goal: (
      <div>
        <div style={{ ...s.sectionBanner, backgroundImage:"linear-gradient(135deg, #854f0b 0%, #ef9f27 100%)" }}>
          <div style={s.bannerIcon}>🚀</div>
          <h2 style={s.bannerTitle}>Our Goal</h2>
          <p  style={s.bannerSub}>Building strong foundations for every career path</p>
        </div>

        <div style={s.quoteBlock}>
          <div style={{ ...s.quoteBar, background:"#ef9f27" }} />
          <p style={s.quoteText}>
            "To build a strong foundation for the sound development of all
            faculties in children — essential to upgrading their career in a
            rapidly changing world."
          </p>
        </div>

        {/* Roadmap timeline */}
        <h3 style={s.sectionLabel}>How We Get There</h3>
        <div style={s.timeline}>
          {[
            { step:"1", label:"Latest EdTech",       desc:"Students engage with current digital tools, simulation software and smart classrooms."  },
            { step:"2", label:"Expert Interaction",   desc:"Regular sessions with external educators, industry professionals and resource persons." },
            { step:"3", label:"Workshops & Seminars", desc:"Practical, immersive events that deepen subject knowledge and build soft skills."       },
            { step:"4", label:"Guest Lectures",       desc:"Inspiring talks from achievers across domains that spark ambition and direction."       },
          ].map((t, i) => (
            <div key={i} style={s.timelineRow}>
              <div style={s.timelineDot}>{t.step}</div>
              <div style={s.timelineContent}>
                <h4 style={s.timelineTitle}>{t.label}</h4>
                <p  style={s.timelineDesc}>{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),

    // ── DREAM ──
    dream: (
      <div>
        <div style={{ ...s.sectionBanner, backgroundImage:"linear-gradient(135deg, #534ab7 0%, #7f77dd 100%)" }}>
          <div style={s.bannerIcon}>✨</div>
          <h2 style={s.bannerTitle}>Our Dream</h2>
          <p  style={s.bannerSub}>A modern institution built for every child</p>
        </div>

        <div style={s.quoteBlock}>
          <div style={{ ...s.quoteBar, background:"#7f77dd" }} />
          <p style={s.quoteText}>
            "A modern institution where every student develops their potential
            to the optimum level through enrichment programmes — bringing quality
            improvement to the entire Curricular and Co-Curricular atmosphere."
          </p>
        </div>

        <Row className="g-3 mt-2">
          {[
            { icon:"🏫", title:"Modern Infrastructure", desc:"Smart classrooms, advanced labs and open spaces designed for 21st-century learning."         },
            { icon:"📈", title:"Quality Improvement",   desc:"Continuous review of both curricular and co-curricular programmes to raise the bar each year." },
            { icon:"🌟", title:"Enrichment Programmes", desc:"Targeted activities for every class level that stretch students beyond the syllabus."         },
            { icon:"🤸", title:"Holistic Campus Life",  desc:"Sports, arts, clubs and community service woven into the daily rhythm of school life."       },
          ].map((d, i) => (
            <Col xs={12} sm={6} key={i}>
              <motion.div style={s.dreamCard} whileHover={{ y:-6 }}>
                <span style={s.dreamIcon}>{d.icon}</span>
                <h4  style={s.dreamTitle}>{d.title}</h4>
                <p   style={s.dreamDesc}>{d.desc}</p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </div>
    ),
  };

  // ── main nav sections ─────────────────────────────────────────────────────
  const sections = {

    about: (
      <div>
        {/* Inner pill tab bar */}
        <div style={s.pillBar}>
          {innerTabs.map(t => (
            <button
              key={t.id}
              onClick={() => setInnerActive(t.id)}
              style={{
                ...s.pill,
                background:  innerActive === t.id ? BRAND : "white",
                color:       innerActive === t.id ? "#fff" : BRAND,
                borderColor: innerActive === t.id ? BRAND  : "rgba(24,55,105,0.3)",
                fontWeight:  innerActive === t.id ? "600"  : "400",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={innerActive} {...fadeUp}>
            {innerSections[innerActive]}
          </motion.div>
        </AnimatePresence>
      </div>
    ),

    // Leadership  +  Staff  merged
    leadership: (
      <div>
        {/* Messages */}
        <h3 style={s.sectionLabel}>Leadership Messages</h3>

        <MessageCard
          title="Chairman's Message"
          name="Chairman Name"
          designation="CHAIRMAN"
          image="https://via.placeholder.com/300"
          reverse
        >
          <p><strong>Dear Parents,</strong><br />
            We believe in providing <strong>holistic education</strong> that nurtures
            academic excellence, creativity and strong values.
          </p>
          <p>Our focus is to develop students into confident individuals ready to
            face <strong>global challenges</strong>.</p>
        </MessageCard>

        <MessageCard
          title="Director's Message"
          name="B.C. SHABIR"
          designation="B.Tech., M.B.A., LL.B. B.Ed. | DIRECTOR"
          image="https://www.hawkingschool.com/img/shabeer.jpeg"
          reverse
        >
          <p><strong>Dear Parents,</strong><br />
            We have implemented a <strong>360-degree education</strong> system
            including academics, sports and extracurricular activities.
          </p>
          <p>We emphasise innovative learning while instilling moral values, helping
            students lead a <strong>successful life</strong>.</p>
          <p>Hawkings School transforms parents' dreams into reality.</p>
          <p className="highlight-text">The Vision of a Parent is our Mission</p>
        </MessageCard>

        {/* Divider */}
        <div style={s.divider} />

        {/* Staff section inline */}
        <h3 style={s.sectionLabel}>Our Staff</h3>
        <StaffSection />
      </div>
    ),

    training: <TrainingSection />,
  };

  // ── render ────────────────────────────────────────────────────────────────
  return (
    <div>
      {/* Hero */}
      <div style={s.hero}>
        <div style={s.heroOverlay}>
          <motion.h1 style={s.heroTitle} initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}>
            About Us
          </motion.h1>
          <motion.p  style={s.heroSub}  initial={{ opacity:0 }}       animate={{ opacity:1, transition:{ delay:0.3 } }}>
            Inspiring Excellence • Building Futures
          </motion.p>
        </div>
      </div>

      <Container fluid className="p-0">
        <Row className="g-0">

          {/* SIDEBAR desktop */}
          <Col md={3} className="d-none d-md-block p-4" style={s.sidebar}>
            <Nav className="flex-column">
              {navItems.map(item => (
                <motion.div key={item.id} whileHover={{ x:5 }}>
                  <Nav.Link
                    onClick={() => setActive(item.id)}
                    style={{
                      ...s.navItem,
                      background: active === item.id ? "rgba(255,255,255,0.18)" : "transparent",
                      fontWeight: active === item.id ? "700" : "400",
                      borderLeft: active === item.id ? "4px solid #fec903" : "4px solid transparent",
                    }}
                  >
                    {item.label}
                  </Nav.Link>
                </motion.div>
              ))}
            </Nav>
          </Col>

          {/* MOBILE TAB BAR */}
          <Col xs={12} className="d-md-none" style={s.mobileTabBar}>
            <div style={s.tabScroller}>
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => setActive(item.id)}
                  style={{
                    ...s.mobileTab,
                    background:   active === item.id ? "rgba(255,255,255,0.15)" : "transparent",
                    fontWeight:   active === item.id ? "700" : "400",
                    borderBottom: active === item.id ? "3px solid #fec903" : "3px solid transparent",
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </Col>

          {/* CONTENT */}
          <Col xs={12} md={9} className="p-3 p-md-4" style={s.content}>
            <AnimatePresence mode="wait">
              <motion.div key={active} {...fadeUp}>
                {sections[active]}
              </motion.div>
            </AnimatePresence>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default About;

// ─── STYLES ──────────────────────────────────────────────────────────────────

const BRAND_COLOR = "rgb(24,55,105)";

const s = {
  // Hero
  hero: {
    height: "400px",
    backgroundImage: `linear-gradient(rgba(0,0,0,0.58), rgba(0,0,0,0.58)), url(${independence})`,
    backgroundAttachment: "scroll",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 20px",
  },
  heroOverlay: { textAlign:"center", width:"100%" },
  heroTitle:  { color:"#fff", fontWeight:800, fontSize:"clamp(26px,5vw,48px)", margin:0 },
  heroSub:    { color:"rgba(255,255,255,0.85)", fontSize:"clamp(13px,2vw,18px)", marginTop:10 },

  // Sidebar / nav
  sidebar: {
    background: `linear-gradient(180deg, ${BRAND_COLOR} 0%, rgba(24,55,105,0.88) 100%)`,
    color: "white",
    minHeight: "100vh",
    position: "sticky",
    top: 0,
    alignSelf: "flex-start",
  },
  navItem: {
    color: "white",
    padding: "13px 16px",
    borderRadius: "10px",
    marginBottom: "6px",
    cursor: "pointer",
    fontSize: "15px",
    transition: "all 0.2s",
    paddingLeft: "14px",
  },
  mobileTabBar: {
    background: BRAND_COLOR,
    position: "sticky",
    top: "64px",
    zIndex: 100,
    overflowX: "auto",
  },
  tabScroller: {
    display: "flex",
    overflowX: "auto",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
    padding: "0 8px",
  },
  mobileTab: {
    flexShrink: 0,
    color: "white",
    border: "none",
    padding: "12px 18px",
    fontSize: "13px",
    cursor: "pointer",
    whiteSpace: "nowrap",
    transition: "all 0.2s",
    background: "transparent",
  },
  content: {
    background: "#f2f5fb",
    minHeight: "100vh",
  },

  // Pill tab bar (inner)
  pillBar: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginBottom: "28px",
  },
  pill: {
    padding: "7px 20px",
    borderRadius: "50px",
    fontSize: "13px",
    cursor: "pointer",
    transition: "all 0.2s",
    border: "1.5px solid",
  },

  // Section label (small uppercase heading above content)
  sectionLabel: {
    fontSize: "clamp(15px,2vw,18px)",
    fontWeight: "700",
    color: BRAND_COLOR,
    marginBottom: "18px",
    marginTop: "36px",
    letterSpacing: "0.4px",
  },

  // Split card (white card with image + text side by side)
  splitCard: {
    background: "white",
    borderRadius: "18px",
    overflow: "hidden",
    boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
    marginBottom: "28px",
  },
  splitImgWrap: {
    background: "#eef2f9",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "32px 24px",
    minHeight: "260px",
  },
  splitImg: {
    maxWidth: "100%",
    maxHeight: "260px",
    objectFit: "contain",
    borderRadius: "12px",
  },
  splitBody: {
    padding: "32px 28px",
  },

  // Tags
  tagRow: { display:"flex", flexWrap:"wrap", gap:"8px", marginBottom:"14px" },
  tag: {
    padding: "4px 13px",
    background: "#e8f0fb",
    color: BRAND_COLOR,
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "600",
  },

  // Typography
  h2: { fontWeight:700, fontSize:"clamp(18px,3vw,26px)", color:BRAND_COLOR, marginBottom:"12px" },
  h3: { fontWeight:700, fontSize:"clamp(16px,2.5vw,22px)", color:BRAND_COLOR, marginBottom:"12px" },
  bodyText: { color:"#555", lineHeight:"1.85", fontSize:"clamp(13px,1.8vw,15px)" },

  // Feature cards (Why Hawkings)
  featureCard: {
    background: "white",
    borderRadius: "16px",
    padding: "24px 20px",
    height: "100%",
    boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
    transition: "all 0.25s",
    cursor: "default",
  },
  featureIconCircle: {
    width: "52px",
    height: "52px",
    borderRadius: "14px",
    background: "#eef2fb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "26px",
    marginBottom: "14px",
  },
  featureTitle: { fontSize:"15px", fontWeight:"700", color:BRAND_COLOR, marginBottom:"6px" },
  featureDesc:  { fontSize:"13px", color:"#666", lineHeight:"1.65", margin:0 },

  // Section banner (colored top strip for Vision/Mission/Goal/Dream)
  sectionBanner: {
    borderRadius: "18px",
    padding: "36px 32px",
    marginBottom: "28px",
    textAlign: "center",
    color: "white",
  },
  bannerIcon:  { fontSize:"44px", marginBottom:"10px" },
  bannerTitle: { fontWeight:"800", fontSize:"clamp(22px,4vw,36px)", margin:0 },
  bannerSub:   { fontSize:"clamp(13px,1.8vw,16px)", opacity:0.85, marginTop:"6px" },

  // Quote block
  quoteBlock: {
    display: "flex",
    gap: "16px",
    background: "white",
    borderRadius: "14px",
    padding: "24px 24px",
    marginBottom: "24px",
    boxShadow: "0 3px 12px rgba(0,0,0,0.06)",
    alignItems: "flex-start",
  },
  quoteBar: {
    width: "5px",
    minWidth: "5px",
    borderRadius: "4px",
    background: BRAND_COLOR,
    alignSelf: "stretch",
  },
  quoteText: {
    fontSize: "clamp(14px,1.8vw,16px)",
    color: "#444",
    lineHeight: "1.85",
    margin: 0,
    fontStyle: "italic",
  },

  // Pillar cards (Vision)
  pillarCard: {
    background: "white",
    borderRadius: "16px",
    padding: "26px 22px",
    height: "100%",
    boxShadow: "0 4px 14px rgba(0,0,0,0.07)",
    borderTop: `4px solid ${BRAND_COLOR}`,
  },
  pillarNum:   { fontSize:"32px", fontWeight:"800", color:"#dce4f5", display:"block", lineHeight:1 },
  pillarTitle: { fontSize:"16px", fontWeight:"700", color:BRAND_COLOR, margin:"10px 0 8px" },
  pillarDesc:  { fontSize:"13px", color:"#666", lineHeight:"1.65", margin:0 },

  // Mission cards (horizontal)
  missionCard: {
    background: "white",
    borderRadius: "14px",
    padding: "20px 20px",
    display: "flex",
    gap: "16px",
    alignItems: "flex-start",
    boxShadow: "0 3px 12px rgba(0,0,0,0.06)",
    height: "100%",
    transition: "all 0.2s",
  },
  missionIcon:  { fontSize:"28px", flexShrink:0, marginTop:"2px" },
  missionTitle: { fontSize:"15px", fontWeight:"700", color:"#0f6e56", marginBottom:"5px" },
  missionDesc:  { fontSize:"13px", color:"#555", lineHeight:"1.65", margin:0 },

  // Timeline (Goal)
  timeline: { display:"flex", flexDirection:"column", gap:"0px" },
  timelineRow: {
    display: "flex",
    gap: "20px",
    alignItems: "flex-start",
    paddingBottom: "24px",
    position: "relative",
  },
  timelineDot: {
    width: "42px",
    height: "42px",
    minWidth: "42px",
    borderRadius: "50%",
    background: "#ef9f27",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "800",
    fontSize: "16px",
    flexShrink: 0,
    marginTop: "2px",
    boxShadow: "0 4px 12px rgba(239,159,39,0.35)",
  },
  timelineContent: { flex:1 },
  timelineTitle:   { fontSize:"16px", fontWeight:"700", color:"#854f0b", marginBottom:"4px" },
  timelineDesc:    { fontSize:"13px", color:"#666", lineHeight:"1.65", margin:0 },

  // Dream cards
  dreamCard: {
    background: "white",
    borderRadius: "16px",
    padding: "26px 22px",
    height: "100%",
    boxShadow: "0 4px 14px rgba(0,0,0,0.07)",
    borderLeft: "4px solid #7f77dd",
    transition: "all 0.25s",
  },
  dreamIcon:  { fontSize:"32px", display:"block", marginBottom:"14px" },
  dreamTitle: { fontSize:"15px", fontWeight:"700", color:"#534ab7", marginBottom:"6px" },
  dreamDesc:  { fontSize:"13px", color:"#666", lineHeight:"1.65", margin:0 },

  // Divider between Leadership messages and Staff
  divider: {
    height: "2px",
    background: "linear-gradient(90deg, transparent, rgba(24,55,105,0.2), transparent)",
    margin: "36px 0 8px",
    borderRadius: "4px",
  },
};