import React from "react";
import Slider from "../components/Slider";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import Marquee from "../components/Common/Marquee";
import Activity from "../components/Activity/Activity";
import Video from "../assets/video/school_video.mp4";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import Result from "../components/Common/Result";
import InstagramSlider from "../components/Common/InstagramSlider";
import CtaSlider from "../components/Common/CtaSlider";
import ParentsFB from "../components/Feedback/ParentsFB";
import StudentsFB from "../components/Feedback/StudentsFB";
import Disclosure from "../data/disclosure.pdf";
import LabSection from "../components/Facilities/LabSection";
import FooterBanner from "../components/Common/FooterBanner";
import TeacherTraining from "../components/TT/TeacherTraining";
import PosterShowcase from "../components/Common/PosterShowcase";
import CollabSlider from "../components/Common/CollabSlider";
import CardStackSlider from "../components/CardStackSlider";
import WhyHawkingsBanner from "../components/WhyHawkingsBanner";
import CampusFacilities from "../components/CampusFacilities";
import Hafeez from "../assets/Photos/board_members/hafeez.webp";
import Shabir from "../assets/Photos/board_members/shabir.webp";
import Rafeek from "../assets/Photos/board_members/rafeek.webp";

// Gallery photos — real Hawkings moments
import galIndependence  from "../assets/Photos/independence_day/independence_5.webp";
import galKarate        from "../assets/Photos/karate/karate_2.webp";
import annual_day        from "../assets/Photos/annual_day.jpeg";
import galKrishna       from "../assets/Photos/krishnaDay/krishnaDay.webp";
import galRobotics      from "../assets/Photos/robotics/r3.jpeg";
import annualday2      from "../assets/Photos/annual_day2.jpeg";
import galScienceExpo   from "../assets/Photos/science_expo_photos/science_expo_1.webp";
import kidsScienceExpo   from "../assets/Photos/kids_expo/srkg.jpg";
import onam   from "../assets/Photos/onam/1.webp";
import sankranti   from "../assets/Photos/sankranti/pongal_9.webp";
import skating   from "../assets/Photos/skating.jpeg";
import cyclerally   from "../assets/Photos/cyclerally.jpeg";
import srkg   from "../assets/Photos/kids_expo/srkg1.JPG";


const BRAND = "rgb(24,55,105)";
const GREEN = "#00594c";

const FACILITIES = [
  {
    icon: "🏥",
    title: "Health Care",
    color: "#1d9e75",
    points: [
      // "Regular health check-ups",
      // "First-aid trained staff on campus",
      "Wellness & yoga programme",
      "Sick room / medical room available on campus"
    ],
  },
  {
    icon: "🚌",
    title: "Transport",
    color: "#257a8f",
    points: [
      "GPS-tracked school buses",
      "Routes across Kuppam Municipality",
      "Safe morning & evening pick-up",
    ],
  },
  {
    icon: "🛡️",
    title: "Safety & Security",
    color: "rgb(24,55,105)",
    points: [
      "24×7 CCTV surveillance",
      "Controlled campus access",
      "Dedicated security personnel",
    ],
  },
  {
    icon: "🥗",
    title: "Nutrition",
    color: "#f26724",
    points: [
      // "Mid-day nutritious meal daily",
      // "Hygienic kitchen facility",
      "Nutritious Food Entertained",
      "Junk Food Prohibited"
      // "Balanced diet for all students",
    ],
  },
];

const PROGRAMS = [
  {
    grade: "Pre-Primary",
    range: "Playgroup · Nursery · LKG · UKG",
    icon: "🌱",
    color: "#78c078",
    desc: "Play-based learning through Montessori and Play-Way methods that spark curiosity from day one.",
  },
  {
    grade: "Primary",
    range: "Grade I – V",
    icon: "📖",
    color: "#4daeae",
    desc: "Strong foundation in literacy, numeracy and environmental science with activity-led lessons.",
  },
  {
    grade: "Middle School",
    range: "Grade VI – VIII",
    icon: "🔬",
    color: "#257a8f",
    desc: "Conceptual learning with smart classrooms, science labs and project-based assignments.",
  },
  {
    grade: "Secondary",
    range: "Grade IX – X",
    icon: "🎓",
    color: "rgb(24,55,105)",
    desc: "Rigorous CBSE board preparation that readies students for competitive exams and beyond.",
  },
];

const LEADERS = [
  {
    name: "S D Hafeez",
    title: "Chairman",
    designation: "M.B.A.",
    img: Hafeez,
    quote:
      "We believe in providing holistic education that nurtures academic excellence, creativity and strong values in every child.",
  },
  {
    name: "B.C. Shabir",
    title: "Director",
    designation: "B.Tech., M.B.A., B.Ed., LL.B.",
    img: Shabir,
    quote:
      "Hawkings transforms parents' dreams into reality. The Vision of a Parent is our Mission.",
  },
  {
    name: "S.D. Rafeek",
    title: "Board Member",
    designation: "Ex. Army · NCC C.T.O.",
    img: Rafeek,
    quote:
      "Discipline, dedication and duty — these are the values we instil in every Hawkings student to prepare them for life.",
  },
];

const STATS = [
  { value: "7+", label: "Years of Excellence", icon: "🏆" },
  { value: "1000+", label: "Students Enrolled", icon: "👩‍🎓" },
  { value: "50+", label: "Faculty Members", icon: "👨‍🏫" },
  { value: "100%", label: "Board Results", icon: "📊" },
  { value: "CBSE", label: "Affiliated — No: 130722", icon: "🎓" },
];

const WHY = [
  {
    icon: "📚",
    title: "CBSE Excellence",
    desc: "100% board results with a structured, activity-based curriculum.",
    // desc: "100% board results every year with a structured, activity-based curriculum.",
    color: BRAND,
  },
  {
    icon: "🔬",
    title: "Modern Infrastructure",
    desc: "Digital classrooms, science labs, library and a green house campus.",
    color: "#1d9e75",
  },
  {
    icon: "⚽",
    title: "Holistic Development",
    desc: "Skating, karate, yoga, archery, dance, debate and 10+ extracurriculars.",
    color: "#f26724",
  },
  {
    icon: "🛡️",
    title: "Safe & Caring",
    desc: "24×7 CCTV, transport and dedicated extra care for every child.",
    color: "#257a8f",
  },
];

const Home = () => {
  return (
    <div style={{ overflowX: "hidden", width: "100%" }}>

      {/* ── VIDEO HERO ── */}
      <div className="video-hero">
        <video autoPlay muted loop playsInline className="video-bg">
          <source src={Video} type="video/mp4" />
        </video>

        <motion.div
          className="video-overlay"
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.18 } } }}
        >
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65 } } }}
          >
            Hawkings International School
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } }}
          >
            Building Tomorrow's Leaders
          </motion.p>

          <motion.h5
            className="mt-2"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } }}
          >
            Supporting Every Child to Grow and Shine
          </motion.h5>

          <motion.p
            className="mt-2"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5 } } }}
          >
            Admissions Open | CBSE Curriculum
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } } }}
          >
            <Link to="/contact-us">
              <Button variant="success" className="mt-3 px-4 py-2 fw-bold">
                Enquire Now →
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* ── MARQUEE ── */}
      <Marquee displayText={"ADMISSIONS OPEN FOR ACADEMIC YEAR 2026-27 FOR NURSERY TO GRADE X."} />

      {/* ── STATS STRIP ── */}
      {/* <div style={styles.statsStrip}>
        <Container>
          <Row className="g-3 justify-content-center">
            {STATS.map((s, i) => (
              <Col xs={6} sm={4} md="auto" key={i}>
                <motion.div
                  style={styles.statCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <span style={styles.statIcon}>{s.icon}</span>
                  <span style={styles.statValue}>{s.value}</span>
                  <span style={styles.statLabel}>{s.label}</span>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </div> */}

      {/* ── SLIDER ── */}
      {/* <Slider /> */}

  
      {/* ── ADMISSION BANNER ── */}
      <div className="container-fluid px-2 px-sm-3 px-md-5 my-4 my-md-4">
        <Row className="g-0">
          <Col md={12}>
            <div className="admission-card">
              <img
                src="https://www.hawkingschool.com/img/admission-updt.jpg"
                className="img-fluid w-100"
                alt="admission-banner"
              />
            </div>
          </Col>
        </Row>
      </div>

          {/* ── NEW: CARD STACK SLIDER (compare with Slider above) ── */}
      <CardStackSlider />


      {/* ── ACADEMIC EXCELLENCE ── */}
      <Result />

      {/* ── NEW: WHY HAWKINGS BANNER (compare with Why Choose Us below) ── */}
      <WhyHawkingsBanner />

      {/* ── WHY CHOOSE US ── */}
      <div style={styles.whySection}>
        <Container>
          <motion.div
            style={styles.whyHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span style={styles.eyebrow}>Why Parents Choose Us</span>
            <h2 style={styles.whyTitle}>The Hawkings Difference</h2>
            <p style={styles.whySub}>
              We go beyond academics — building confidence, character, and capability in every child.
            </p>
          </motion.div>

          <Row className="g-3 g-md-4">
            {WHY.map((item, i) => (
              <Col xs={12} sm={6} lg={3} key={i}>
                <motion.div
                  style={styles.whyCard}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(24,55,105,0.14)" }}
                >
                  <div style={{ ...styles.whyIcon, background: `${item.color}15`, color: item.color }}>
                    {item.icon}
                  </div>
                  <div style={{ ...styles.whyBar, background: item.color }} />
                  <h5 style={styles.whyCardTitle}>{item.title}</h5>
                  <p style={styles.whyCardDesc}>{item.desc}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* ── PROGRAMS OFFERED ── */}
      {/* <div style={styles.programsSection}>
        <Container>
          <motion.div
            style={styles.whyHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span style={{ ...styles.eyebrow, background: "#4daeae18", color: "#257a8f" }}>Academic Programs</span>
            <h2 style={styles.whyTitle}>Programs We Offer</h2>
            <p style={styles.whySub}>
              A structured CBSE journey from early childhood through secondary — every stage thoughtfully designed.
            </p>
          </motion.div>

          <Row className="g-3 g-md-4">
            {PROGRAMS.map((p, i) => (
              <Col xs={12} sm={6} md={3} key={i}>
                <motion.div
                  style={{ ...styles.programCard, borderTop: `4px solid ${p.color}` }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  whileHover={{ y: -6, boxShadow: "0 16px 36px rgba(24,55,105,0.13)" }}
                >
                  <div style={{ ...styles.programIcon, background: `${p.color}18`, color: p.color }}>
                    {p.icon}
                  </div>
                  <h5 style={styles.programGrade}>{p.grade}</h5>
                  <span style={{ ...styles.programRange, color: p.color }}>{p.range}</span>
                  <p style={styles.programDesc}>{p.desc}</p>
                </motion.div>
              </Col>
            ))}
          </Row>

          <motion.div
            style={{ textAlign: "center", marginTop: "28px" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <Link to="/academics" style={styles.leaderLink}>Explore Our Academics →</Link>
          </motion.div>
        </Container>
      </div> */}

      {/* ── ACTIVITIES ── */}
      <Activity />

      {/* ── LEADERSHIP ── */}
      <div style={styles.leaderSection}>
        <Container>
          <motion.div
            style={styles.whyHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span style={styles.eyebrow}>Our Leadership</span>
            <h2 style={styles.whyTitle}>Message from Our Founders</h2>
            <p style={styles.whySub}>
              Guiding every student with vision, discipline and a deep belief in their potential.
            </p>
          </motion.div>

          <Row className="g-4 justify-content-center">
            {LEADERS.map((l, i) => (
              <Col xs={12} sm={10} md={5} key={i}>
                <motion.div
                  style={styles.leaderCard}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  whileHover={{ y: -5, boxShadow: "0 18px 44px rgba(24,55,105,0.15)" }}
                >
                  <img src={l.img} alt={l.name} style={styles.leaderPhoto} />
                  <div style={styles.leaderBody}>
                    <span style={styles.leaderQuoteMark}>"</span>
                    <p style={styles.leaderQuoteText}>{l.quote}</p>
                    <div style={styles.leaderDivider} />
                    <h5 style={styles.leaderName}>{l.name}</h5>
                    <span style={styles.leaderRole}>{l.title} · {l.designation}</span>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>

          <motion.div
            style={{ textAlign: "center", marginTop: "28px" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <Link to="/about" style={styles.leaderLink}>Meet All Our Leaders →</Link>
          </motion.div>
        </Container>
      </div>

      {/* ── LAB / FACILITIES PREVIEW ── */}
      <LabSection />

      {/* ── NEW: IMAGE-BASED CAMPUS FACILITIES (compare with original below) ── */}
      <CampusFacilities />

      {/* ── CAMPUS FACILITIES (original) ── */}
      {/* <div style={styles.facilitiesSection}>
        <Container>
          <motion.div
            style={styles.whyHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span style={{ ...styles.eyebrow, background: "#f267241a", color: "#f26724" }}>Campus Life</span>
            <h2 style={styles.whyTitle}>Campus Facilities</h2>
            <p style={styles.whySub}>
              Everything a child needs to learn, grow and thrive — all within our safe and nurturing campus.
            </p>
          </motion.div>

          <Row className="g-3 g-md-4">
            {FACILITIES.map((f, i) => (
              <Col xs={12} sm={6} md={3} key={i}>
                <motion.div
                  style={{ ...styles.facilityCard, borderBottom: `4px solid ${f.color}` }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  whileHover={{ y: -6, boxShadow: `0 16px 36px ${f.color}30` }}
                >
                  <div style={{ ...styles.facilityIconWrap, background: `${f.color}18` }}>
                    <span style={styles.facilityIcon}>{f.icon}</span>
                  </div>
                  <h5 style={{ ...styles.facilityTitle, color: f.color }}>{f.title}</h5>
                  <ul style={styles.facilityList}>
                    {f.points.map((pt, j) => (
                      <li key={j} style={styles.facilityPoint}>
                        <span style={{ color: f.color, marginRight: "6px", fontWeight: 700 }}>✓</span>{pt}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </div> */}

      {/* ── GALLERY PREVIEW ── */}
      <div style={styles.gallerySection}>
        <Container>
          <motion.div
            style={styles.whyHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span style={{ ...styles.eyebrow, background: "#4daeae18", color: "#257a8f" }}>Life at Hawkings</span>
            <h2 style={styles.whyTitle}>Gallery</h2>
            <p style={styles.whySub}>
              Celebrations, sports, science and culture — a glimpse into every day at Hawkings.
            </p>
          </motion.div>

          {/* Mosaic grid */}
          <div style={styles.galleryGrid}>
            {[
              { src: galIndependence, label: "Independence Day",  style: styles.galCell },
              { src: galKarate,       label: "Karate",            style: styles.galCell },
            { src: annual_day,       label: "Annual Day",       style: styles.galCell },
          
              { src: sankranti,       label: "Sankranti",         style: styles.galCellTall },
              // { src: galScienceExpo,  label: "Science Expo",      style: styles.galCell },
                                          { src: srkg,       label: "Graduation Day",       style: styles.galCellTall },

              { src: cyclerally,      label: "Cycle Rally",       style: styles.galCell },
               { src: skating,         label: "Skating",           style: styles.galCellTall },
        
              { src: annualday2,     label: "Annual Day",          style: styles.galCell },
              { src: onam,      label: "Onam",  style: styles.galCell },
  
            ].map((item, i) => (
              <motion.div
                key={i}
                style={{ ...styles.galItem, ...item.style }}
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                whileHover="hover"
              >
                <img src={item.src} alt={item.label} style={styles.galImg} />
                <motion.div
                  style={styles.galOverlay}
                  variants={{ hover: { opacity: 1 } }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <span style={styles.galLabel}>{item.label}</span>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            style={{ textAlign: "center", marginTop: "28px" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link to="/gallery" style={styles.leaderLink}>View Full Gallery →</Link>
          </motion.div>
        </Container>
      </div>

      {/* ── INSTAGRAM / GALLERY ── */}
      <InstagramSlider />

      {/* ── PARENT FEEDBACK ── */}
      <ParentsFB />

      {/* ── STUDENT FEEDBACK ── */}
      <StudentsFB />

      {/* ── CTA SLIDER ── */}
      <CtaSlider />

      {/* ── NEW: COLLAB SLIDER (compare with Poster Showcase below) ── */}
      <CollabSlider />

      {/* ── POSTER SHOWCASE (original) ── */}
      {/* <PosterShowcase /> */}

      {/* ── TEACHER TRAINING ── */}
      <TeacherTraining />

      {/* ── FOOTER BANNER ── */}
      <FooterBanner />
    </div>
  );
};

export default Home;

const styles = {
  statsStrip: {
    background: "#fff",
    borderBottom: "1px solid #eef2f8",
    padding: "28px 16px",
  },
  statCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "4px",
    padding: "16px 20px",
    background: "#f8fafd",
    borderRadius: "14px",
    border: "1px solid #e8eef8",
    textAlign: "center",
    minWidth: "110px",
    transition: "box-shadow 0.3s",
  },
  statIcon: { fontSize: "22px" },
  statValue: {
    fontSize: "clamp(18px, 3vw, 24px)",
    fontWeight: 800,
    color: BRAND,
    lineHeight: 1.1,
  },
  statLabel: {
    fontSize: "clamp(10px, 1.5vw, 12px)",
    color: "#7a8b9a",
    fontWeight: 500,
    letterSpacing: "0.2px",
    lineHeight: 1.3,
  },
  whySection: {
    background: "#f4f7fb",
    padding: "56px 16px 32px",
  },
  whyHeader: {
    textAlign: "center",
    marginBottom: "16px",
  },
  eyebrow: {
    display: "inline-block",
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: "#1d9e75",
    background: "#1d9e7515",
    padding: "5px 14px",
    borderRadius: "50px",
    marginBottom: "12px",
  },
  whyTitle: {
    fontSize: "clamp(22px, 4vw, 32px)",
    fontWeight: 800,
    color: BRAND,
    margin: "8px 0 10px",
  },
  whySub: {
    fontSize: "clamp(13px, 2vw, 15px)",
    color: "#6a7b8c",
    maxWidth: "560px",
    margin: "0 auto",
    lineHeight: 1.7,
  },
  whyCard: {
    background: "#fff",
    borderRadius: "18px",
    padding: "28px 22px 24px",
    border: "1px solid #e8eef8",
    boxShadow: "0 4px 16px rgba(24,55,105,0.06)",
    height: "100%",
    position: "relative",
    overflow: "hidden",
    transition: "box-shadow 0.3s, transform 0.3s",
  },
  whyIcon: {
    width: "52px",
    height: "52px",
    borderRadius: "14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    marginBottom: "16px",
  },
  whyBar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "4px",
    borderRadius: "18px 18px 0 0",
  },
  whyCardTitle: {
    fontSize: "clamp(14px, 2vw, 16px)",
    fontWeight: 700,
    color: "#1a2340",
    marginBottom: "8px",
  },
  whyCardDesc: {
    fontSize: "clamp(12px, 1.7vw, 13px)",
    color: "#6a7b8c",
    lineHeight: 1.65,
    margin: 0,
  },

  // ── Programs section ──
  programsSection: {
    background: "linear-gradient(135deg, #f0f6ff 0%, #e8f4f4 100%)",
    padding: "32px 16px",
  },
  programCard: {
    background: "#fff",
    borderRadius: "18px",
    padding: "28px 22px 24px",
    borderLeft: "1px solid #e8eef8",
    borderRight: "1px solid #e8eef8",
    borderBottom: "1px solid #e8eef8",
    boxShadow: "0 4px 16px rgba(24,55,105,0.06)",
    height: "100%",
    transition: "box-shadow 0.3s, transform 0.3s",
  },
  programIcon: {
    width: "52px",
    height: "52px",
    borderRadius: "14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    marginBottom: "14px",
  },
  programGrade: {
    fontSize: "clamp(15px, 2vw, 17px)",
    fontWeight: 700,
    color: "#1a2340",
    marginBottom: "4px",
  },
  programRange: {
    display: "block",
    fontSize: "clamp(11px, 1.5vw, 12px)",
    fontWeight: 600,
    letterSpacing: "0.3px",
    textTransform: "uppercase",
    marginBottom: "12px",
  },
  programDesc: {
    fontSize: "clamp(12px, 1.6vw, 13px)",
    color: "#6a7b8c",
    lineHeight: 1.65,
    margin: 0,
  },

  // ── Leadership section ──
  leaderSection: {
    background: "#fff",
    padding: "32px 16px",
    borderTop: "1px solid #eef2f8",
  },
  leaderCard: {
    display: "flex",
    alignItems: "flex-start",
    gap: "20px",
    background: "#f8fafd",
    borderRadius: "20px",
    padding: "24px",
    border: "1px solid #e4eaf6",
    boxShadow: "0 4px 18px rgba(24,55,105,0.07)",
    height: "100%",
    transition: "box-shadow 0.3s, transform 0.3s",
  },
  leaderPhoto: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    objectFit: "cover",
    flexShrink: 0,
    border: "3px solid rgb(24,55,105)",
    boxShadow: "0 4px 12px rgba(24,55,105,0.2)",
  },
  leaderBody: {
    flex: 1,
    minWidth: 0,
  },
  leaderQuoteMark: {
    fontSize: "42px",
    lineHeight: 1,
    color: "rgb(24,55,105)",
    opacity: 0.2,
    fontFamily: "Georgia, serif",
    display: "block",
    marginBottom: "-10px",
  },
  leaderQuoteText: {
    fontSize: "clamp(13px, 1.7vw, 14px)",
    color: "#3d4f62",
    lineHeight: 1.7,
    fontStyle: "italic",
    marginBottom: "14px",
  },
  leaderDivider: {
    width: "36px",
    height: "2px",
    background: "rgb(254,201,3)",
    borderRadius: "2px",
    marginBottom: "10px",
  },
  leaderName: {
    fontSize: "clamp(14px, 1.8vw, 16px)",
    fontWeight: 700,
    color: "rgb(24,55,105)",
    margin: "0 0 2px",
  },
  leaderRole: {
    fontSize: "clamp(11px, 1.4vw, 12px)",
    color: "#7a8b9a",
    fontWeight: 500,
  },
  leaderLink: {
    display: "inline-block",
    padding: "10px 26px",
    background: "rgb(24,55,105)",
    color: "#fff",
    borderRadius: "50px",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: 600,
    transition: "background 0.2s",
  },

  // ── Campus Facilities ──
  facilitiesSection: {
    background: "linear-gradient(135deg, #fff9f0, #fff3e6)",
    padding: "32px 16px",
  },
  facilityCard: {
    background: "#fff",
    borderRadius: "18px",
    padding: "28px 22px 24px",
    borderLeft: "1px solid #eef2f8",
    borderRight: "1px solid #eef2f8",
    borderTop: "1px solid #eef2f8",
    boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
    height: "100%",
    transition: "box-shadow 0.3s, transform 0.3s",
  },
  facilityIconWrap: {
    width: "60px",
    height: "60px",
    borderRadius: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "16px",
  },
  facilityIcon: { fontSize: "28px" },
  facilityTitle: {
    fontSize: "clamp(15px, 2vw, 17px)",
    fontWeight: 700,
    marginBottom: "12px",
  },
  facilityList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  facilityPoint: {
    fontSize: "clamp(12px, 1.6vw, 13px)",
    color: "#6a7b8c",
    lineHeight: 1.7,
    marginBottom: "4px",
  },

  // ── Gallery ──
  gallerySection: {
    background: "#f4f7fb",
    padding: "32px 16px",
  },
  galleryGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridAutoRows: "180px",
    gap: "10px",
  },
  galCell: {},
  galCellTall: { gridRow: "span 2" },
  galItem: {
    position: "relative",
    borderRadius: "14px",
    overflow: "hidden",
    cursor: "pointer",
  },
  galImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    transition: "transform 0.4s ease",
  },
  galOverlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to top, rgba(24,55,105,0.82) 0%, rgba(24,55,105,0.2) 60%, transparent 100%)",
    display: "flex",
    alignItems: "flex-end",
    padding: "16px",
  },
  galLabel: {
    color: "#fff",
    fontSize: "13px",
    fontWeight: 600,
    letterSpacing: "0.3px",
  },
};
