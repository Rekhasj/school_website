import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Facilities.css";
import { facilityData, labData } from "../data/lab";
import { colors } from "../data/colors";

const TAG_STYLES = [
  { color: colors.blue,       bg: "rgba(24,55,105,0.1)" },
  { color: colors.green,      bg: "rgba(0,89,76,0.1)" },
  { color: colors.lightblue,  bg: "rgba(37,122,143,0.1)" },
  { color: colors.red,        bg: "rgba(242,103,36,0.1)" },
  { color: colors.lightGreen, bg: "rgba(149,199,114,0.22)" },
  { color: colors.yellow,     bg: "rgba(254,201,3,0.15)" },
];

const CHECK_COLORS = [
  colors.blue, colors.red, colors.green,
  colors.lightblue, colors.red, colors.lightGreen,
];

const STATIC_HIGHLIGHTS = [
  "Green House Campus with lush open grounds",
  "Kids Play Park for early learners",
  "Mid-day Meal programme for all students",
  "Digital Smart Classroom with multimedia tools",
  "24×7 CCTV surveillance for campus safety",
  "Extra care & support for slow learners",
];

// ── Framer variants ──────────────────────────────────────────────
const panelVariants = {
  hidden:  { opacity: 0, scale: 0.97, y: 14 },
  visible: { opacity: 1, scale: 1,    y: 0,  transition: { duration: 0.42, ease: [0.25, 0.8, 0.25, 1] } },
  exit:    { opacity: 0, scale: 0.98, y: -10, transition: { duration: 0.22, ease: [0.25, 0.8, 0.25, 1] } },
};

const infoVariants = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0,   transition: { duration: 0.38, ease: [0.25, 0.8, 0.25, 1] } },
  exit:    { opacity: 0, y: -14, transition: { duration: 0.2 } },
};

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const listItem = {
  hidden:  { opacity: 0, x: -14 },
  visible: { opacity: 1, x: 0,  transition: { duration: 0.3, ease: "easeOut" } },
};

const headerItem = {
  hidden:  { opacity: 0, y: 22 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.8, 0.25, 1] },
  }),
};

const cardVariants = {
  hidden:  { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: [0.25, 0.8, 0.25, 1] },
  }),
};

// ── Sub-components ───────────────────────────────────────────────
const CheckItem = ({ text, index }) => (
  <motion.li className="fac-check-item" variants={listItem}>
    <span
      className="fac-check-icon"
      style={{ background: `${CHECK_COLORS[index % CHECK_COLORS.length]}18` }}
    >
      <svg viewBox="0 0 10 10" fill="none" width="9" height="9">
        <path
          d="M2 5.5l2 2 4-4"
          stroke={CHECK_COLORS[index % CHECK_COLORS.length]}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
    {text}
  </motion.li>
);

const AccentDots = () => (
  <div className="fac-accent-dots">
    {[colors.blue, colors.yellow, colors.red, colors.skyblue, colors.green].map((c, i) => (
      <motion.span
        key={i}
        className="fac-dot"
        style={{ background: c }}
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.3 + i * 0.07, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
      />
    ))}
  </div>
);

// ── Main Component ───────────────────────────────────────────────
const Facilities = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active      = labData[activeIndex];
  const tagStyle    = TAG_STYLES[activeIndex % TAG_STYLES.length];

  const highlights  = Object.values(facilityData).flat().filter((item) => item.highlight);
  const HCARD_COLORS = [colors.blue, colors.green, colors.lightblue, colors.red];

  return (
    <div className="fac-page">

      {/* ── Header ── */}
      <div className="fac-header">
        <motion.p className="fac-eyebrow" custom={0} variants={headerItem} initial="hidden" animate="visible">
          Campus Excellence
        </motion.p>

        <motion.h2 className="fac-title" custom={1} variants={headerItem} initial="hidden" animate="visible">
          Our            <span className="fac-title-accent">Facilities</span>
        </motion.h2>

        <motion.p className="fac-sub" custom={2} variants={headerItem} initial="hidden" animate="visible">
          Each child is different — at Hawkings International School we understand
          this and provide young scholars with the ideal learning environment.
        </motion.p>

        <AccentDots />
      </div>

      {/* ── Tabs ── */}
      <motion.div
        className="fac-tabs"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.45 }}
      >
        {labData.map((item, i) => (
          <motion.button
            key={i}
            className={`fac-tab ${i === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(i)}
            style={i === activeIndex ? { background: colors.blue, borderColor: colors.blue, color: "#fff" } : {}}
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 380, damping: 22 }}
          >
            {item.title}
          </motion.button>
        ))}
      </motion.div>

      {/* ── Panel ── */}
      <div className="fac-panel-shell">
        <AnimatePresence mode="wait">
          <motion.div
            key={`panel-${activeIndex}`}
            className="fac-panel"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* — Image side — */}
            <div className="fac-img-wrap">
              <motion.img
                key={active.image}
                src={active.image}
                alt={active.title}
                className="fac-img"
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1,   opacity: 1 }}
                transition={{ duration: 0.55, ease: [0.25, 0.8, 0.25, 1] }}
              />
              <div className="fac-img-glass" />

              <motion.div
                className="fac-img-badge"
                style={{ background: colors.yellow, color: colors.blue }}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0,   opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.35 }}
              >
                Lab
              </motion.div>

              <motion.div
                className="fac-img-bottom"
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0,  opacity: 1 }}
                transition={{ delay: 0.28, duration: 0.38 }}
              >
                <span className="fac-chip-tag">{active.tag}</span>
              </motion.div>
            </div>

            {/* — Content side — */}
            <div className="fac-right">
              <span className="fac-blob fac-blob-1" style={{ background: colors.skyblue }} />
              <span className="fac-blob fac-blob-2" style={{ background: colors.yellow }} />

              <AnimatePresence mode="wait">
                <motion.div
                  key={`info-${activeIndex}`}
                  className="fac-dynamic"
                  variants={infoVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <span
                    className="fac-tag"
                    style={{ background: tagStyle.bg, color: tagStyle.color }}
                  >
                    {active.tag}
                  </span>
                  <h3 className="fac-info-title">{active.title}</h3>
                  <p className="fac-info-desc">{active.description}</p>
                </motion.div>
              </AnimatePresence>

              <div className="fac-divider" />

              <div className="fac-static">
                <p className="fac-static-label">School Highlights</p>
                <motion.ul
                  className="fac-checklist"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  {STATIC_HIGHLIGHTS.map((item, i) => (
                    <CheckItem key={i} text={item} index={i} />
                  ))}
                </motion.ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Featured Programmes ── */}
      {highlights.length > 0 && (
        <div className="fac-highlights-section">
          <motion.div
            className="fac-highlights-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="fac-hl-title">
              Featured{" "}
              <em style={{ color: colors.red }}>Programmes</em>
            </h3>
            <p className="fac-hl-sub">Signature offerings that set Hawkings apart</p>
          </motion.div>

          <div className="fac-highlights-grid">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                className="fac-hcard"
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              >
                <img src={item.image} alt={item.title} className="fac-hcard-img" />
                <div
                  className="fac-hcard-bar"
                  style={{ background: HCARD_COLORS[i % HCARD_COLORS.length] }}
                />
                <div className="fac-hcard-overlay">
                  <motion.span
                    className="fac-star"
                    style={{ color: colors.yellow }}
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    ★ Featured
                  </motion.span>
                  <h4 className="fac-hcard-title">{item.title}</h4>
                  <p className="fac-hcard-desc">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Facilities;