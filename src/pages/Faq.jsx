import React, { useState } from "react";
import { Container } from "react-bootstrap";
import FooterBanner from "../components/Common/FooterBanner";
import { motion } from "framer-motion";
import independence from "../assets/Photos/independence_day/independence_6.webp";

const faqData = [
  {
    q: "When do admissions begin?",
    a: "The academic year starts in June. Admissions generally begin in April and remain open throughout the year, depending on seat availability.",
  },
  {
    q: "Which Board is Hawkings International School affiliated with?",
    a: "The school follows the CBSE designed by the Ministry of Education, Government of India.",
  },
  {
    q: "What are the grades for which admission can be sought?",
    a: "Admission is available from Kinder Garden to Grade XII. Please visit the campus to check seat availability.",
  },
  {
    q: "Where can I get the application form?",
    a: (
      <>
        You can request the application form via email at{" "}
        <a
          href="mailto:admissions@hawkingsinternationalschool.edu"
          style={{ color: "#0f4c5c", fontWeight: 600 }}
        >
          admissions@hawkingsinternationalschool.edu
        </a>{" "}
        or visit our campus.
      </>
    ),
  },
  {
    q: "Does the school provide transport facilities?",
    a: "Yes, the school provides transport with GPS tracking.",
  },
  {
    q: "What is the student-teacher ratio?",
    a: "The student-teacher ratio is 20:1 for Kinder Garden and 30:1 for Grade I onwards.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex(openIndex === i ? -1 : i);

  return (
    <div>
      {/* 🔥 PARALLAX HERO */}
      <div style={styles.parallaxHero}>
        <div style={styles.overlay}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={styles.heroTitle}
          >
            FAQ
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={styles.heroSub}
          >
            Answers to the questions parents ask us most
          </motion.p>
        </div>
      </div>

      <Container className="mt-5" style={{ maxWidth: "920px" }}>
        <div style={styles.faqWrap}>
          {faqData.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                style={{
                  ...styles.card,
                  ...(isOpen ? styles.cardOpen : {}),
                }}
              >
                <button
                  onClick={() => toggle(i)}
                  style={styles.question}
                  aria-expanded={isOpen}
                >
                  <span
                    style={{
                      ...styles.qText,
                      color: isOpen ? "#0f4c5c" : "#1f2d3d",
                    }}
                  >
                    {item.q}
                  </span>
                  <span
                    style={{
                      ...styles.icon,
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      background: isOpen ? "#0f4c5c" : "#eef4f5",
                      color: isOpen ? "#fff" : "#0f4c5c",
                    }}
                  >
                    +
                  </span>
                </button>

                <div
                  style={{
                    ...styles.answerWrap,
                    maxHeight: isOpen ? "260px" : "0px",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div style={styles.answer}>{item.a}</div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </Container>
              <FooterBanner />

    </div>
  );
};

export default Faq;

const styles = {
  parallaxHero: {
    height: "400px",
    backgroundImage: `linear-gradient(rgba(15,76,92,0.65), rgba(0,0,0,0.55)), url(${independence})`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    color: "white",
    textAlign: "center",
  },
  heroTitle: {
    fontSize: "3rem",
    fontWeight: 700,
    letterSpacing: "1px",
    margin: 0,
  },
  heroSub: {
    fontSize: "1.05rem",
    fontWeight: 300,
    marginTop: "10px",
    opacity: 0.9,
  },
  faqWrap: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },
  card: {
    background: "#fff",
    borderRadius: "14px",
    border: "1px solid #e7edee",
    boxShadow: "0 2px 10px rgba(15,76,92,0.05)",
    overflow: "hidden",
    transition: "box-shadow 0.3s ease, border-color 0.3s ease",
  },
  cardOpen: {
    boxShadow: "0 8px 24px rgba(15,76,92,0.12)",
    borderColor: "#0f4c5c",
  },
  question: {
    width: "100%",
    background: "transparent",
    border: "none",
    outline: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "16px",
    padding: "20px 22px",
    textAlign: "left",
  },
  qText: {
    fontSize: "1.02rem",
    fontWeight: 600,
    transition: "color 0.3s ease",
  },
  icon: {
    flexShrink: 0,
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.3rem",
    fontWeight: 500,
    lineHeight: 1,
    transition: "transform 0.3s ease, background 0.3s ease, color 0.3s ease",
  },
  answerWrap: {
    overflow: "hidden",
    transition: "max-height 0.35s ease, opacity 0.35s ease",
  },
  answer: {
    padding: "0 22px 22px",
    color: "#516170",
    fontSize: "0.97rem",
    lineHeight: 1.7,
  },
};