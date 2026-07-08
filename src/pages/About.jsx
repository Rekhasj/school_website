import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";

import MessageCard  from "../components/Message/MessageCard ";
import hawLogo      from '../assets/Photos/logo_footer.png'
import independence from '../assets/Photos/independence_day/independence_6.webp'
import { StaffSection } from "../components/TT/StaffSection";
import StatCard from "../components/About/StatCard";

import Hafeez from "../assets/Photos/board_members/hafeez.jpeg"
import Shabir from "../assets/Photos/board_members/shabir.jpeg"
import Rafeek from "../assets/Photos/board_members/rafeek.jpeg"

// ─── DATA ────────────────────────────────────────────────────────────────────

const statData = [
  { number: 100,  suffix: "%", label: "Results"  },
  { number: 7,    suffix: "+", label: "Years"    },
  { number: 1000, suffix: "+", label: "Students" },
  { number: 100,  suffix: "+", label: "Staff"  },
];

// Single flat nav — Vision/Mission/Goal/Dream elevated to top level
const navItems = [
  { id: "about",      label: "About Us"   },
  { id: "vision",     label: "Vision"     },
  { id: "mission",    label: "Mission"    },
  { id: "goal",       label: "Goal"       },
  { id: "dream",      label: "Dream"      },
  { id: "leadership", label: "Leadership" },
];

const BRAND = "rgb(24,55,105)";

const fadeUp = {
  initial:    { opacity: 0, y: 24 },
  animate:    { opacity: 1, y: 0  },
  exit:       { opacity: 0, y: -16 },
  transition: { duration: 0.38 },
};

// ─── SECTIONS ────────────────────────────────────────────────────────────────

const sections = () => ({

  // ── ABOUT ──────────────────────────────────────────────────────────────────
  about: (
    <div>
      <Row className="g-3 mb-4">
        {statData.map((item, i) => <StatCard key={i} index={i} {...item} />)}
      </Row>

      {/* Intro card */}
      <div style={s.splitCard}>
        <Row className="align-items-center g-0">
          <Col xs={12} md={4}>
            <div style={s.splitImgWrap}>
              <motion.img src={hawLogo} alt="Hawkings School logo" style={s.splitImg} whileHover={{ scale: 1.04 }} />
            </div>
          </Col>
          <Col xs={12} md={8}>
            <div style={s.splitBody}>
              <div style={s.tagRow}>
                {["CBSE Affiliated", "Founded 2017", "Kuppam, A.P."].map(t => <span key={t} style={s.tag}>{t}</span>)}
              </div>
              <h2 style={s.h2}>About Our School — A Quest for CBSE Syllabus</h2>
              <p style={s.bodyText}>
                Hawkings is a magnificent CBSE school — a Board of Education for public and private schools under
                the Union Government of India. The CBSE curriculum is organised, highly foreseen and precise. We
                make sure that everyone will be educated without any sorts of negligence. Education is Liberation.
                All the people of Kuppam town should be ignited with knowledge and wisdom, in order to see a new
                just world for the future fruitful endeavour of our country.
              </p>
              <p style={s.bodyText}>
                Academics is the hallmark of the CBSE School. Our priority is excellence in academics — there is
                no compromise. Our purpose is to impart CBSE syllabus, which is fundamental preparation for national
                level competitive exams to secure official government jobs as well as positions in multi-national
                companies globally.
              </p>
              <div style={s.tagRow}>
                {["Holistic Education", "CBSE Curriculum", "Career Building", "Service Mindedness"].map(t => <span key={t} style={s.tag}>{t}</span>)}
              </div>
            </div>
          </Col>
        </Row>
      </div>

      {/* Why Hawkings */}
      <h3 style={s.sectionLabel}>Why Hawkings?</h3>
      <Row className="g-3">
        {[
          { icon: "🏆", title: "Academic Excellence",      desc: "Consistent 100% board results — academics is the hallmark of our school."                             },
          { icon: "🔬", title: "STEM & Robotics",          desc: "State-of-the-art labs and hands-on technology learning for real-world problem solving."               },
          { icon: "📋", title: "CBSE Syllabus",            desc: "Rigorous CBSE curriculum preparing students for JEE, NEET and national-level competitive exams."      },
          { icon: "🤝", title: "Inclusive Community",      desc: "We educate without any sorts of negligence — every child belongs and thrives here."                   },
          { icon: "🌱", title: "Holistic Development",     desc: "Decoding learning methodology that develops professionals in their respective fields."                 },
          { icon: "⚽", title: "Sports & Soft Skills",     desc: "Career building through sports, orator development and a rich extracurricular environment."            },
        ].map((c, i) => (
          <Col xs={12} sm={6} md={4} key={i}>
            <motion.div style={s.featureCard} whileHover={{ y: -6, boxShadow: "0 12px 30px rgba(24,55,105,0.13)" }}>
              <div style={s.featureIconCircle}>{c.icon}</div>
              <h4 style={s.featureTitle}>{c.title}</h4>
              <p  style={s.featureDesc}>{c.desc}</p>
            </motion.div>
          </Col>
        ))}
      </Row>
    </div>
  ),

  // ── VISION ─────────────────────────────────────────────────────────────────
  vision: (
    <div>
      <div style={{ ...s.sectionBanner, backgroundImage: `linear-gradient(135deg, ${BRAND} 0%, #2563a8 100%)` }}>
        <motion.div
          style={s.bannerIcon}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
        >🌐</motion.div>
        <motion.h2
          style={s.bannerTitle}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.45 }}
        >Our Vision</motion.h2>
        <motion.p
          style={s.bannerSub}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.4 }}
        >Universal academic excellence with service mindedness</motion.p>
      </div>

      <motion.div
        style={s.quoteBlock}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.45 }}
      >
        <div style={s.quoteBar} />
        <p style={s.quoteText}>
          "To be an outstanding CBSE institution of universal academic excellence in pursuit of imparting a holistic
          wisdom for building our nation with service mindedness."
        </p>
      </motion.div>

      <Row className="g-3 mt-2">
        {[
          { num: "01", title: "Outstanding CBSE Institution",  desc: "To stand as a beacon of CBSE excellence — setting the highest academic standards in Kuppam and beyond."           },
          { num: "02", title: "Universal Academic Excellence", desc: "Delivering quality education that is foreseen, precise and leaves no student behind, regardless of background."   },
          { num: "03", title: "Service Mindedness",            desc: "Building young citizens who contribute to the nation and the world with wisdom, humility and purpose."             },
        ].map((p, i) => (
          <Col xs={12} md={4} key={i}>
            <motion.div
              style={s.pillarCard}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.13, duration: 0.45 }}
              whileHover={{ y: -6, boxShadow: "0 14px 32px rgba(24,55,105,0.15)" }}
            >
              <span style={s.pillarNum}>{p.num}</span>
              <h4   style={s.pillarTitle}>{p.title}</h4>
              <p    style={s.pillarDesc}>{p.desc}</p>
            </motion.div>
          </Col>
        ))}
      </Row>
    </div>
  ),

  // ── MISSION ────────────────────────────────────────────────────────────────
  mission: (
    <div>
      <div style={{ ...s.sectionBanner, backgroundImage: "linear-gradient(135deg, #0f6e56 0%, #1d9e75 100%)" }}>
        <motion.div
          style={s.bannerIcon}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
        >🎯</motion.div>
        <motion.h2
          style={s.bannerTitle}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.45 }}
        >Our Mission</motion.h2>
        <motion.p
          style={s.bannerSub}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.4 }}
        >Enlightening young minds for long-term career excellence</motion.p>
      </div>

      <motion.div
        style={s.quoteBlock}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.45 }}
      >
        <div style={{ ...s.quoteBar, background: "#1d9e75" }} />
        <p style={s.quoteText}>
          "Enlightening young minds for a long term challenging task for career building with decoding learning
          methodology to become professionals in their respective fields."
        </p>
      </motion.div>

      <Row className="g-3 mt-2">
        {[
          { icon: "💡", title: "Enlighten Young Minds",      desc: "Ignite every student with knowledge and wisdom — Education is Liberation."                                       },
          { icon: "🎯", title: "Career Building Focus",      desc: "Academics focused on career building and soft skills, producing confident orators and future professionals."      },
          { icon: "📋", title: "Decoded Learning",           desc: "Moving away from rote methods — our decoding methodology makes complex concepts clear and applicable."            },
          { icon: "🌍", title: "National Competitive Edge",  desc: "Preparing students for JEE, NEET and national-level exams to secure positions in government and MNCs globally."  },
          { icon: "🔧", title: "Hands-on & Practical",      desc: "Quality education with highly dignified standards, imparted through experiential and application-based activities."},
          { icon: "🏅", title: "Professionals in the Field", desc: "Every student becomes a confident professional in their respective field, ready for the world."                   },
        ].map((m, i) => (
          <Col xs={12} sm={6} key={i}>
            <motion.div
              style={s.missionCard}
              initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
              whileHover={{ x: 6, boxShadow: "0 8px 24px rgba(29,158,117,0.15)" }}
            >
              <motion.span
                style={s.missionIcon}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2.5, delay: i * 0.4, ease: "easeInOut" }}
              >{m.icon}</motion.span>
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

  // ── GOAL ───────────────────────────────────────────────────────────────────
  goal: (
    <div>
      <div style={{ ...s.sectionBanner, backgroundImage: "linear-gradient(135deg, #854f0b 0%, #ef9f27 100%)" }}>
        <motion.div
          style={s.bannerIcon}
          animate={{ y: [0, -12, 0], rotate: [0, 6, -6, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >🚀</motion.div>
        <motion.h2
          style={s.bannerTitle}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.45 }}
        >Our Goal</motion.h2>
        <motion.p
          style={s.bannerSub}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.4 }}
        >Generating tomorrow's leaders — not hundreds, but millions</motion.p>
      </div>

      <motion.div
        style={s.quoteBlock}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.45 }}
      >
        <div style={{ ...s.quoteBar, background: "#ef9f27" }} />
        <p style={s.quoteText}>
          "The task is to generate a long term challenging career formation. The purpose is not to make some hundreds
          of students prosper — rather those millions will be instrumental in imparting a holistic wisdom.
          Today's Children are Tomorrow's Leaders."
        </p>
      </motion.div>

      <h3 style={s.sectionLabel}>How We Get There</h3>
      <div style={s.timeline}>
        {[
          { step: "1", label: "CBSE-Aligned Teaching",      desc: "Following the CBSE method of teaching approach — a curriculum that evolves with the times and prepares students for the real world." },
          { step: "2", label: "Competitive Exam Readiness", desc: "Preparing students for JEE Main, NEET and national-level entrance exams through rigorous CBSE syllabus and focused coaching."         },
          { step: "3", label: "Career Formation",            desc: "Long-term career building is the primary focus — academics, soft skills and orator development that translate into professional excellence." },
          { step: "4", label: "Holistic Wisdom",             desc: "Imparting wisdom that is not restricted by boundaries — a philosophy of learning that will persist as long as the human spirit endures."  },
        ].map((t, i) => (
          <motion.div
            key={i}
            style={s.timelineRow}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35 + i * 0.13, duration: 0.4 }}
          >
            <motion.div
              style={s.timelineDot}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4 + i * 0.13, duration: 0.3, type: "spring", stiffness: 200 }}
            >{t.step}</motion.div>
            <div style={s.timelineContent}>
              <h4 style={s.timelineTitle}>{t.label}</h4>
              <p  style={s.timelineDesc}>{t.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  ),

  // ── DREAM ──────────────────────────────────────────────────────────────────
  dream: (
    <div>
      <div style={{ ...s.sectionBanner, backgroundImage: "linear-gradient(135deg, #257a8f 0%, #4daeae 100%)" }}>
        <motion.div
          style={s.bannerIcon}
          animate={{ y: [0, -10, 0], rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
        >✨</motion.div>
        <motion.h2
          style={s.bannerTitle}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.45 }}
        >Our Dream</motion.h2>
        <motion.p
          style={s.bannerSub}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.4 }}
        >Building Hawkings into a group of institutions for all Indians</motion.p>
      </div>

      <motion.div
        style={s.quoteBlock}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.45 }}
      >
        <div style={{ ...s.quoteBar, background: "#4daeae" }} />
        <p style={s.quoteText}>
          "A steadfast hardwork will result in accomplishing HAWKINGS (CBSE) group of Institutions — for the benefit
          of all the Indians. Today's Children are Tomorrow's Leaders."
        </p>
      </motion.div>

      <Row className="g-3 mt-2">
        {[
          { icon: "🏫", title: "HAWKINGS Group of Institutions", desc: "The dream is to expand into a CBSE group of institutions that serves millions of students across India."        },
          { icon: "🇮🇳", title: "For Every Indian",              desc: "The purpose is not hundreds of students, but millions — instrumental in imparting holistic wisdom nationally." },
          { icon: "🌟", title: "Tomorrow's Leaders",             desc: "Every child who walks through our doors carries the potential to become a leader of tomorrow's India."          },
          { icon: "🤝", title: "Steadfast Hardwork",             desc: "A culture of dedication, discipline and relentless effort — the values that will make this dream a reality."    },
        ].map((d, i) => (
          <Col xs={12} sm={6} key={i}>
            <motion.div
              style={s.dreamCard}
              initial={{ opacity: 0, scale: 0.88, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.35 + i * 0.13, duration: 0.45, type: "spring", stiffness: 120 }}
              whileHover={{ y: -6, boxShadow: "0 16px 36px rgba(37,122,143,0.18)" }}
            >
              <motion.span
                style={s.dreamIcon}
                animate={{ rotate: [0, 8, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay: i * 0.9, ease: "easeInOut" }}
              >{d.icon}</motion.span>
              <h4  style={s.dreamTitle}>{d.title}</h4>
              <p   style={s.dreamDesc}>{d.desc}</p>
            </motion.div>
          </Col>
        ))}
      </Row>

      <motion.div
        style={s.dreamCta}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.4 }}
      >
        <span style={{ fontSize: "22px" }}>🌟</span>
        <p style={{ margin: 0, fontWeight: 600, color: "#257a8f", fontSize: "clamp(13px,1.8vw,15px)" }}>
          Be part of something bigger — join the Hawkings family today
        </p>
      </motion.div>
    </div>
  ),

  // ── LEADERSHIP ─────────────────────────────────────────────────────────────
  leadership: (
    <div>
      <MessageCard title="Chairman's Message" name="S D Hafeez" designation="M.B.A." image={Hafeez} reverse>
        <p><strong>Dear Parents,</strong><br />
          We believe in providing <strong>holistic education</strong> that nurtures academic excellence, creativity
          and strong values.
        </p>
        <p>Our focus is to develop students into confident individuals ready to face <strong>global challenges</strong>.</p>
      </MessageCard>

      <MessageCard title="Director's Message" name="B.C. SHABIR" designation="B.Tech., M.B.A., B.Ed., LL.B." image={Shabir}>
        <p><strong>Dear Parents,</strong><br />
          We have implemented a <strong>360-degree education</strong> system including academics, sports and
          extracurricular activities.
        </p>
        <p>We emphasise innovative learning while instilling moral values, helping students lead a <strong>successful life</strong>.</p>
        <p>Hawkings School transforms parents' dreams into reality.</p>
        <p className="highlight-text">The Vision of a Parent is our Mission</p>
      </MessageCard>

      <MessageCard title="Board Member Message" name="S.D. RAFEEK" designation="Ex.Army, NCC C.T.O." image={Rafeek} reverse>
        <p><strong>Dear Parents,</strong><br />
          We have implemented a <strong>360-degree education</strong> system including academics, sports and
          extracurricular activities.
        </p>
        <p>We emphasise innovative learning while instilling moral values, helping students lead a <strong>successful life</strong>.</p>
        <p>Hawkings School transforms parents' dreams into reality.</p>
        <p className="highlight-text">The Vision of a Parent is our Mission</p>
      </MessageCard>

      <div style={s.divider} />
      <h3 style={s.sectionLabel}>Our Staff</h3>
      <StaffSection />
    </div>
  ),
});

// ─── COMPONENT ───────────────────────────────────────────────────────────────

const About = () => {
  const [active, setActive] = useState("about");
  const allSections = sections();

  return (
    <div>
      {/* ── SHORT HERO ── */}
      <div style={s.hero}>
        <motion.h1
          style={s.heroTitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          About Us
        </motion.h1>
        <motion.p
          style={s.heroSub}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.45 }}
        >
          "The Vision of a Parent is our Mission"
        </motion.p>
      </div>

      {/* ── SINGLE FLAT STICKY NAV ── */}
      <div style={s.tabStrip}>
        <div style={s.tabStripInner}>
          {navItems.map(item => {
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                style={{
                  ...s.tabBtn,
                  color:        isActive ? "#fff"                  : "rgba(255,255,255,0.7)",
                  fontWeight:   isActive ? "700"                   : "400",
                  background:   "transparent",
                  borderBottom: isActive ? "3px solid #fec903"     : "3px solid transparent",
                }}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="active-pill"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── PAGE CONTENT ── */}
      <div style={s.pageWrap}>
        <Container fluid="lg">
          <AnimatePresence mode="wait">
            <motion.div key={active} {...fadeUp}>
              {allSections[active]}
            </motion.div>
          </AnimatePresence>
        </Container>
      </div>
    </div>
  );
};

export default About;

// ─── STYLES ──────────────────────────────────────────────────────────────────

const BRAND_COLOR = "rgb(24,55,105)";

const s = {
  hero: {
    height: "clamp(160px, 20vw, 220px)",
    backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${independence})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 20px",
    textAlign: "center",
  },
  heroTitle: {
    color: "#fff",
    fontWeight: 800,
    fontSize: "clamp(26px, 5vw, 46px)",
    margin: 0,
    textShadow: "0 2px 12px rgba(0,0,0,0.3)",
  },
  heroSub: {
    color: "rgba(255,255,255,0.88)",
    fontSize: "clamp(13px, 2vw, 17px)",
    marginTop: "8px",
    fontStyle: "italic",
  },

  // ── Sticky flat tab strip ──
  tabStrip: {
    background: BRAND_COLOR,
    position: "sticky",
    top: "62px",
    zIndex: 120,
    boxShadow: "0 3px 14px rgba(0,0,0,0.22)",
  },
  tabStripInner: {
    display: "flex",
    overflowX: "auto",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 8px",
  },
  tabBtn: {
    position: "relative",
    flexShrink: 0,
    border: "none",
    padding: "15px 22px",
    fontSize: "clamp(12px, 1.6vw, 14px)",
    cursor: "pointer",
    whiteSpace: "nowrap",
    transition: "all 0.22s",
    letterSpacing: "0.3px",
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },

  // ── Page content ──
  pageWrap: {
    background: "#f2f5fb",
    minHeight: "70vh",
    padding: "32px 12px 56px",
  },

  // ── Section label ──
  sectionLabel: {
    fontSize: "clamp(15px,2vw,18px)",
    fontWeight: "700",
    color: BRAND_COLOR,
    marginBottom: "18px",
    marginTop: "36px",
    letterSpacing: "0.4px",
  },

  // ── Split card ──
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
    minHeight: "240px",
  },
  splitImg: {
    maxWidth: "100%",
    maxHeight: "240px",
    objectFit: "contain",
    borderRadius: "12px",
  },
  splitBody: { padding: "28px 24px" },

  // ── Tags ──
  tagRow: { display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "14px" },
  tag: {
    padding: "4px 13px",
    background: "#e8f0fb",
    color: BRAND_COLOR,
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "600",
  },

  // ── Typography ──
  h2: { fontWeight: 700, fontSize: "clamp(18px,3vw,24px)", color: BRAND_COLOR, marginBottom: "12px" },
  h3: { fontWeight: 700, fontSize: "clamp(16px,2.5vw,20px)", color: BRAND_COLOR, marginBottom: "12px" },
  bodyText: { color: "#555", lineHeight: "1.85", fontSize: "clamp(13px,1.8vw,15px)" },

  // ── Feature cards ──
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
    width: "50px",
    height: "50px",
    borderRadius: "14px",
    background: "#eef2fb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    marginBottom: "14px",
  },
  featureTitle: { fontSize: "14px", fontWeight: "700", color: BRAND_COLOR, marginBottom: "6px" },
  featureDesc:  { fontSize: "13px", color: "#666", lineHeight: "1.65", margin: 0 },

  // ── Section banner ──
  sectionBanner: {
    borderRadius: "18px",
    padding: "40px 32px",
    marginBottom: "24px",
    textAlign: "center",
    color: "white",
  },
  bannerIcon:  { fontSize: "48px", marginBottom: "12px" },
  bannerTitle: { fontWeight: "800", fontSize: "clamp(24px,4vw,38px)", margin: 0 },
  bannerSub:   { fontSize: "clamp(13px,1.8vw,16px)", opacity: 0.85, marginTop: "8px" },

  // ── Quote block ──
  quoteBlock: {
    display: "flex",
    gap: "16px",
    background: "white",
    borderRadius: "14px",
    padding: "24px",
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
    lineHeight: "1.9",
    margin: 0,
    fontStyle: "italic",
  },

  // ── Pillar cards ──
  pillarCard: {
    background: "white",
    borderRadius: "16px",
    padding: "28px 22px",
    height: "100%",
    boxShadow: "0 4px 14px rgba(0,0,0,0.07)",
    borderTop: `4px solid ${BRAND_COLOR}`,
  },
  pillarNum:   { fontSize: "32px", fontWeight: "800", color: "#dce4f5", display: "block", lineHeight: 1 },
  pillarTitle: { fontSize: "15px", fontWeight: "700", color: BRAND_COLOR, margin: "10px 0 8px" },
  pillarDesc:  { fontSize: "13px", color: "#666", lineHeight: "1.65", margin: 0 },

  // ── Mission cards ──
  missionCard: {
    background: "white",
    borderRadius: "14px",
    padding: "20px",
    display: "flex",
    gap: "16px",
    alignItems: "flex-start",
    boxShadow: "0 3px 12px rgba(0,0,0,0.06)",
    height: "100%",
    transition: "all 0.2s",
  },
  missionIcon:  { fontSize: "28px", flexShrink: 0, marginTop: "2px" },
  missionTitle: { fontSize: "14px", fontWeight: "700", color: "#0f6e56", marginBottom: "5px" },
  missionDesc:  { fontSize: "13px", color: "#555", lineHeight: "1.65", margin: 0 },

  // ── Timeline ──
  timeline: { display: "flex", flexDirection: "column" },
  timelineRow: {
    display: "flex",
    gap: "20px",
    alignItems: "flex-start",
    paddingBottom: "24px",
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
  timelineContent: { flex: 1 },
  timelineTitle:   { fontSize: "15px", fontWeight: "700", color: "#854f0b", marginBottom: "4px" },
  timelineDesc:    { fontSize: "13px", color: "#666", lineHeight: "1.65", margin: 0 },

  // ── Dream cards ──
  dreamCard: {
    background: "white",
    borderRadius: "16px",
    padding: "26px 22px",
    height: "100%",
    boxShadow: "0 4px 14px rgba(0,0,0,0.07)",
    borderLeft: "4px solid #4daeae",
    transition: "all 0.25s",
  },
  dreamIcon:  { fontSize: "32px", display: "block", marginBottom: "14px" },
  dreamTitle: { fontSize: "14px", fontWeight: "700", color: "#257a8f", marginBottom: "6px" },
  dreamDesc:  { fontSize: "13px", color: "#666", lineHeight: "1.65", margin: 0 },
  dreamCta: {
    marginTop: "28px",
    background: "linear-gradient(135deg, #e8f7f7, #d6f0f0)",
    borderRadius: "14px",
    padding: "18px 24px",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    border: "1px solid #b0dede",
  },

  // ── Divider ──
  divider: {
    height: "2px",
    background: "linear-gradient(90deg, transparent, rgba(24,55,105,0.2), transparent)",
    margin: "36px 0 8px",
    borderRadius: "4px",
  },
};
