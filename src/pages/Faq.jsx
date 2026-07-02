import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import FooterBanner from "../components/Common/FooterBanner";
import { motion, AnimatePresence } from "framer-motion";
import independence from "../assets/Photos/independence_day/independence_6.webp";

const faqCategories = [
  {
    category: "Admissions",
    icon: "📋",
    items: [
      {
        q: "When do admissions begin?",
        a: "The academic year begins in June. Admissions generally open in April and remain open throughout the year subject to seat availability. Walk-in visits are welcome Monday to Saturday.",
      },
      {
        q: "What grades are available for admission?",
        a: "Admissions are open from Nursery to Grade X (10th Standard). Please visit the campus or contact us to confirm seat availability for the specific grade you need.",
      },
      {
        q: "How do I get the application form?",
        a: "You can collect the application form by visiting our campus, or contact us via email at hawkingsintlschool@gmail.com or WhatsApp at +91 99523 21179 / +91 96769 41786.",
      },
    ],
  },
  {
    category: "School Hours & Schedule",
    icon: "🕘",
    items: [
      {
        q: "What are the school hours?",
        a: "The school functions from 9:00 A.M to 4:10 P.M on weekdays. The 1st bell rings at 9:00 A.M and the 2nd bell (assembly) at 9:10 A.M. Students are expected to be present before the 1st bell.",
      },
      {
        q: "Are there classes on Saturdays?",
        a: "The second Saturday of each month is a holiday. All other Saturdays are engaged with extracurricular activities — sports, clubs, and enrichment programmes.",
      },
      {
        q: "When can parents visit the school?",
        a: "Parents are most welcome to visit the school and give valuable suggestions or discuss their ward's academic performance only on Saturdays between 10:00 AM and 3:00 PM, except on public holidays.",
      },
    ],
  },
  {
    category: "Curriculum & Language",
    icon: "📚",
    items: [
      {
        q: "Which board is Hawkings International School affiliated with?",
        a: "The school is affiliated with the Central Board of Secondary Education (CBSE) under the Union Government of India. Affiliation No: 130722.",
      },
      {
        q: "What curriculum and syllabus does the school follow?",
        a: "The syllabus and curriculum followed are those of the Central Board of Secondary Education (CBSE). The CBSE curriculum is organised, highly structured and prepares students for national-level competitive exams.",
      },
      {
        q: "What is the language pattern?",
        a: "The school follows the three-language formula: 1st Language — English is compulsory for all Standards from I to X. 2nd Language — Telugu, Tamil & Kannada (students may choose). 3rd Language — Hindi (I to VIII Standard).",
      },
    ],
  },
  {
    category: "Activities & Special Features",
    icon: "⭐",
    items: [
      {
        q: "What extracurricular activities are offered?",
        a: "We offer a rich set of activities: Skating, Karate, Archery, Shooting, Dance (Classical & Western), Keyboard, Yoga, Table Tennis, Debate, Elocution, Spell Bee & Spell Well, and Essay Writing.",
      },
      {
        q: "What are the special features of the school?",
        a: "Hawkings offers several special features: Art & Craft, Food Festival, Music & Dance, Shooting/Firing, Green House Campus, Kids Play Park, Mid-day Meal, Digital Smart Classroom, Yoga & Meditation, and Extra Care for Slow Learners.",
      },
      {
        q: "Does the school provide transport?",
        a: "Yes, the school provides safe and reliable transport across Kuppam Municipality and surrounding areas. Every school bus is equipped with GPS tracking, allowing parents to monitor their child's bus location in real time for complete peace of mind. Contact the school office for route details and timings.",
      },
    ],
  },
  {
    category: "Rules & Conduct",
    icon: "📌",
    items: [
      {
        q: "What is the minimum attendance requirement?",
        a: "Students must maintain a minimum of 90% attendance as expected by the school. A doctor's certificate must be produced for absence due to sickness for more than 3 days. Parents should plan family trips on holidays and not on regular working days.",
      },
      {
        q: "What is the uniform policy?",
        a: "Students must wear the uniform as prescribed by the school. They should wear clean, washed socks every day. Wearing expensive ornaments to school is to be avoided — the school will not be responsible for any loss of the same.",
      },
      {
        q: "What are the spoken language expectations?",
        a: "Students are expected to be polite, courteous and respectful while talking to teachers, friends and visitors. Students should always maintain conversation in English to enhance fluency and vocabulary.",
      },
    ],
  },
];

const BRAND = "rgb(24,55,105)";

const Faq = () => {
  const [openKey, setOpenKey] = useState("0-0");

  const toggle = (key) => setOpenKey(openKey === key ? "" : key);

  return (
    <div>
      {/* ── HERO ── */}
      <div style={styles.hero}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={styles.heroTitle}
        >
          FAQ's
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={styles.heroSub}
        >
          Answers to the questions parents ask us most
        </motion.p>
      </div>

      <div style={{ background: "#f2f5fb", padding: "40px 0 60px" }}>
        <Container style={{ maxWidth: "980px" }}>

          {faqCategories.map((cat, ci) => (
            <motion.div
              key={ci}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: ci * 0.08 }}
              style={styles.categoryBlock}
            >
              {/* Category heading */}
              <div style={styles.catHeader}>
                <span style={styles.catIcon}>{cat.icon}</span>
                <h3 style={styles.catTitle}>{cat.category}</h3>
              </div>

              {/* FAQ items */}
              <div style={styles.faqList}>
                {cat.items.map((item, qi) => {
                  const key = `${ci}-${qi}`;
                  const isOpen = openKey === key;
                  return (
                    <div
                      key={qi}
                      style={{
                        ...styles.card,
                        ...(isOpen ? styles.cardOpen : {}),
                      }}
                    >
                      <button
                        onClick={() => toggle(key)}
                        style={styles.question}
                        aria-expanded={isOpen}
                      >
                        <span style={{ ...styles.qText, color: isOpen ? BRAND : "#1f2d3d" }}>
                          {item.q}
                        </span>
                        <motion.span
                          animate={{ rotate: isOpen ? 45 : 0 }}
                          transition={{ duration: 0.22 }}
                          style={{
                            ...styles.icon,
                            background: isOpen ? BRAND : "#eef4f8",
                            color: isOpen ? "#fff" : BRAND,
                          }}
                        >
                          +
                        </motion.span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="answer"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            style={{ overflow: "hidden" }}
                          >
                            <div style={styles.answer}>{item.a}</div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}

          {/* Contact CTA */}
          <motion.div
            style={styles.ctaBox}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div style={styles.ctaIcon}>💬</div>
            <h4 style={styles.ctaTitle}>Still have questions?</h4>
            <p style={styles.ctaText}>
              Visit us on Saturdays (10:00 AM – 3:00 PM) or reach us anytime via WhatsApp.
            </p>
            <Row className="justify-content-center g-3 mt-2">
              <Col xs="auto">
                <a href="tel:+919952321179" style={styles.ctaBtn}>
                  📞 +91 99523 21179
                </a>
              </Col>
              <Col xs="auto">
                <a href="https://wa.me/919952321179" target="_blank" rel="noreferrer" style={{ ...styles.ctaBtn, background: "#25d366" }}>
                  💬 WhatsApp Us
                </a>
              </Col>
            </Row>
          </motion.div>

        </Container>
      </div>

      <FooterBanner />
    </div>
  );
};

export default Faq;

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
  },
  categoryBlock: {
    marginBottom: "32px",
  },
  catHeader: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "14px",
    paddingLeft: "4px",
  },
  catIcon: {
    fontSize: "22px",
  },
  catTitle: {
    fontSize: "clamp(15px, 2.2vw, 18px)",
    fontWeight: 700,
    color: "rgb(24,55,105)",
    margin: 0,
    letterSpacing: "0.3px",
  },
  faqList: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  card: {
    background: "#fff",
    borderRadius: "14px",
    border: "1px solid #e2eaf0",
    boxShadow: "0 2px 8px rgba(24,55,105,0.05)",
    overflow: "hidden",
    transition: "box-shadow 0.3s, border-color 0.3s",
  },
  cardOpen: {
    boxShadow: "0 8px 24px rgba(24,55,105,0.12)",
    borderColor: "rgb(24,55,105)",
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
    padding: "18px 20px",
    textAlign: "left",
  },
  qText: {
    fontSize: "clamp(13px, 1.8vw, 15px)",
    fontWeight: 600,
    transition: "color 0.3s",
    lineHeight: 1.5,
  },
  icon: {
    flexShrink: 0,
    width: "28px",
    height: "28px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.2rem",
    fontWeight: 500,
    lineHeight: 1,
    transition: "background 0.3s, color 0.3s",
  },
  answer: {
    padding: "0 20px 18px",
    color: "#516170",
    fontSize: "clamp(12px, 1.7vw, 14px)",
    lineHeight: 1.75,
  },
  ctaBox: {
    background: "linear-gradient(135deg, rgb(24,55,105), #1d9e75)",
    borderRadius: "20px",
    padding: "36px 28px",
    textAlign: "center",
    color: "white",
    marginTop: "12px",
  },
  ctaIcon: { fontSize: "40px", marginBottom: "12px" },
  ctaTitle: { fontWeight: 700, fontSize: "clamp(16px,2.5vw,22px)", margin: "0 0 8px" },
  ctaText:  { fontSize: "clamp(13px,1.8vw,15px)", opacity: 0.9, margin: 0 },
  ctaBtn: {
    display: "inline-block",
    padding: "10px 22px",
    background: "rgb(24,55,105)",
    color: "#fff",
    borderRadius: "50px",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: 600,
    border: "2px solid rgba(255,255,255,0.3)",
    transition: "transform 0.2s",
  },
};
