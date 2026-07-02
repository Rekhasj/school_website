import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { events } from "../data/data";
import independence from "../assets/Photos/independence_day/independence_6.webp";
import { motion } from "framer-motion";
import FooterBanner from "../components/Common/FooterBanner";

const cardVariants = {
  hidden:  { opacity: 0, y: 36 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.52, delay: i * 0.12, ease: [0.25, 0.8, 0.25, 1] },
  }),
};

const News = () => {
  return (
    <div style={{ background: "#f4f7fb", minHeight: "80vh" }}>
      {/* ── HERO ── */}
      <div style={styles.hero}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={styles.heroTitle}
        >
          News & Events
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={styles.heroSub}
        >
          Celebrating milestones, moments, and memories at Hawkings
        </motion.p>
      </div>

      <Container className="py-5" style={{ maxWidth: "1100px" }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={styles.sectionLabel}
        >
          Latest Events
        </motion.div>

        <Row className="g-4">
          {events.map((event, i) => (
            <Col xs={12} sm={6} lg={6} key={event.id}>
              <motion.div
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                style={styles.card}
              >
                {/* Image */}
                <div style={styles.imgWrap}>
                  <img
                    src={event.mainImage}
                    alt={event.title}
                    style={styles.img}
                  />
                  <div style={styles.imgOverlay} />
                  <span style={styles.badge}>Event</span>
                </div>

                {/* Body */}
                <div style={styles.body}>
                  <h3 style={styles.title}>{event.title}</h3>
                  <p style={styles.desc}>{event.shortDescription}</p>

                  <div style={styles.footer}>
                    <Link
                      to={`/events/${event.id}`}
                      style={styles.btn}
                    >
                      View Gallery →
                    </Link>
                  </div>
                </div>

                {/* Accent bar */}
                <div style={styles.accentBar} />
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* CTA */}
        <motion.div
          style={styles.cta}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p style={{ margin: 0, fontSize: "clamp(13px, 2vw, 15px)", opacity: 0.9 }}>
            Want to stay updated on all school events?
          </p>
          <Link to="/login" style={{ ...styles.ctaBtn }}>
            Contact Us
          </Link>
        </motion.div>
      </Container>

      <FooterBanner />
    </div>
  );
};

export default News;

const BRAND = "rgb(24,55,105)";

const styles = {
  hero: {
    height: "clamp(180px, 24vw, 280px)",
    backgroundImage: `linear-gradient(rgba(15,76,92,0.65), rgba(0,0,0,0.55)), url(${independence})`,
    backgroundAttachment: "scroll",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "0 20px",
  },
  heroTitle: {
    fontSize: "clamp(28px, 5vw, 48px)",
    fontWeight: 800,
    color: "#fff",
    letterSpacing: "1px",
    margin: 0,
  },
  heroSub: {
    fontSize: "clamp(13px, 2vw, 16px)",
    fontWeight: 300,
    marginTop: "10px",
    color: "rgba(255,255,255,0.9)",
    margin: "10px 0 0",
  },
  sectionLabel: {
    display: "inline-block",
    background: `${BRAND}18`,
    color: BRAND,
    fontWeight: 700,
    fontSize: "clamp(11px, 1.5vw, 13px)",
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    padding: "6px 14px",
    borderRadius: "50px",
    marginBottom: "24px",
  },
  card: {
    background: "#fff",
    borderRadius: "18px",
    overflow: "hidden",
    boxShadow: "0 4px 20px rgba(24,55,105,0.08)",
    border: "1px solid #e8eff6",
    position: "relative",
    cursor: "pointer",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  imgWrap: {
    position: "relative",
    overflow: "hidden",
    height: "clamp(180px, 22vw, 240px)",
    flexShrink: 0,
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    transition: "transform 0.4s ease",
  },
  imgOverlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to top, rgba(15,30,60,0.45) 0%, transparent 60%)",
  },
  badge: {
    position: "absolute",
    top: "14px",
    left: "14px",
    background: BRAND,
    color: "#fff",
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "1px",
    padding: "4px 12px",
    borderRadius: "50px",
    textTransform: "uppercase",
  },
  body: {
    padding: "20px 22px 16px",
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontSize: "clamp(15px, 2vw, 18px)",
    fontWeight: 700,
    color: "#1a2340",
    margin: "0 0 8px",
    lineHeight: 1.3,
  },
  desc: {
    fontSize: "clamp(12px, 1.6vw, 14px)",
    color: "#516170",
    lineHeight: 1.65,
    margin: "0 0 16px",
    flex: 1,
  },
  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "auto",
    paddingTop: "12px",
    borderTop: "1px solid #eef2f8",
  },
  btn: {
    color: BRAND,
    fontWeight: 700,
    fontSize: "13px",
    textDecoration: "none",
    letterSpacing: "0.3px",
  },
  accentBar: {
    height: "3px",
    background: `linear-gradient(90deg, ${BRAND}, #1d9e75)`,
    borderRadius: "0 0 18px 18px",
  },
  cta: {
    marginTop: "48px",
    background: `linear-gradient(135deg, ${BRAND}, #1d9e75)`,
    borderRadius: "20px",
    padding: "28px 24px",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "16px",
  },
  ctaBtn: {
    display: "inline-block",
    padding: "10px 24px",
    background: "#fff",
    color: BRAND,
    borderRadius: "50px",
    fontWeight: 700,
    fontSize: "14px",
    textDecoration: "none",
    whiteSpace: "nowrap",
  },
};
