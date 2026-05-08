import React, { useState } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";

import MessageCard from "../components/Message/MessageCard ";


// ✅ YOUR IMAGES
import r1 from '../assets/Photos/robotics/r1.jpeg'
import r2 from '../assets/Photos/robotics/r2.jpeg'
import r3 from '../assets/Photos/robotics/r3.jpeg'
import banner2 from '../assets/Photos/staff/2.webp'
import independence from '../assets/Photos/independence_day/independence_6.webp'
import hawLogo from '../assets/Photos/logo_footer.png'
import { StaffSection, TrainingSection } from "../components/TT/StaffSection";

const navItems = [
  { id: "about", label: "About" },
  { id: "vision", label: "Vision" },
  { id: "mission", label: "Mission" },
  { id: "goal", label: "Goal" },
  { id: "dream", label: "Dream" },
  { id: "leadership", label: "Leadership" },
  { id: "staff", label: "Staff" },
  { id: "training", label: "Workshops" },
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.6 }
};

const About = () => {
  const [active, setActive] = useState("about");

  const sections = {
    about: (
      <>
        <Stats />
        <Split
          title="About Hawkings School"
          text="It is our dream to build a modern institution where every student is given an opportunity to develop his/her potential to the optimum level with the help of enrichment Programs planned for various classes. Thus we propose to bring about quality improvement in the entire “Curricular” and “Co-Curricular” atmosphere in the campus.

We hope this will provide a platform for harnessing and showcasing the best of talents in our school."
          // text="We nurture young minds with global standards, strong values, and holistic development to prepare them for the future."
          img={hawLogo}
        />
      </>
    ),
    vision: (
      <Split
        title="Our Vision"
        reverse
        text="It is our vision and mission to equip children coming from different backgrounds/areas with quality education and skills required to become good citizens. Giving the most competitive environment we prove our sincere “commitment” to adopt “National and International Standards” in education and groom our students to reach for the face “Challenges” at the “Global Level”. To achieve this series of innovative methods and latest educational technology will be made use of."
        // text="To create confident global citizens through innovation, leadership, and excellence in education."
        img={r2}
      />
    ),
    mission: (
      <Cards
        title="Our Mission"
        items={[
          "Inspire creativity & innovation",
          "Ensure safe & inclusive learning",
          "Deliver global curriculum",
          "Personalized student growth",
          "Encourage hands-on learning",
          "Build strong values & leadership",
        ]}
      />
    ),
    goal:(
          <Split
          title="Our Goal" 
    text="Our goal is to build a “strong foundation” for a sound development of all facilities in children essential to upgrade their career. The focus will be on exposing students to the latest educational technology while learning. Further we would also like to foster their interest and involvement in the teaching-learning process by interaction with teachers, expert educators and resource persons. It is our sincere Endeavour to provide our students with practical learning experiences. Through Workshops, Seminars, Panel Discussions and Guest Lectures and thus equip them with wider knowledge and study skills."
   
        reverse
        img={hawLogo}
      />
    ),

    
    dream:(
          <Split
          title="Our Dream"
        reverse
        text="It is our dream to build a modern institution where every student is given an opportunity to develop his/her potential to the optimum level with the help of enrichment Programs planned for various classes. Thus we propose to bring about quality improvement in the entire “Curricular” and “Co-Curricular” atmosphere in the campus."
     img={hawLogo}
      />
    ),
    leadership: (
        <>
    <MessageCard
      title="Chairman's Message"
      name="Chairman Name"
      designation="CHAIRMAN"
      image="https://via.placeholder.com/300"
      reverse
    >
      <p>
        <strong>Dear Parents,</strong><br />
        We believe in providing <strong>holistic education</strong> that
        nurtures academic excellence, creativity, and strong values.
      </p>

      <p>
        Our focus is to develop students into confident individuals ready
        to face <strong>global challenges</strong>.
      </p>
    </MessageCard>

    <MessageCard
      title="Director's Message"
      name="B.C. SHABIR"
      designation="B.Tech., M.B.A., LL.B. B.Ed. | DIRECTOR"
      image="https://www.hawkingschool.com/img/shabeer.jpeg"
      reverse
    >
      <p>
        <strong>Dear Parents,</strong><br />
        We have implemented a <strong>360-degree education</strong> system
        including academics, sports, and extracurricular activities.
      </p>

      <p>
        We emphasize innovative learning while instilling moral values,
        helping students lead a <strong>successful life</strong>.
      </p>

      <p>
        Hawkings School transforms parents’ dreams into reality.
      </p>

      <p className="highlight-text">
        The Vision of a Parent is our Mission
      </p>
    </MessageCard>
  </>

      // <Split
      //   title="Leadership"
      //   text="Driven by visionary educators committed to excellence and student success."
      //   img={banner2}
      // />
    ),

    staff:( <StaffSection />),
training: (<TrainingSection />),
  };

  return (
    <div>
      {/* 🔥 PARALLAX HERO */}
      <div style={styles.parallaxHero}>
        <div style={styles.overlay}>
          <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            About Us
          </motion.h1>
          <p>Inspiring Excellence • Building Futures</p>
        </div>
      </div>

      <Container fluid>
        <Row>
          {/* SIDEBAR */}
          <Col md={3} className="p-4" style={styles.sidebar}>
            <Nav className="flex-column">
              {navItems.map((item) => (
                <motion.div key={item.id} whileHover={{ x: 5 }}>
                  <Nav.Link
                    onClick={() => setActive(item.id)}
                    style={{
                      ...styles.navItem,
                      background: active === item.id ? "rgba(255,255,255,0.15)" : "transparent",
                      fontWeight: active === item.id ? "600" : "400",
                    }}
                  >
                    {item.label}
                  </Nav.Link>
                </motion.div>
              ))}
            </Nav>
          </Col>

          {/* CONTENT */}
          <Col md={9} className="p-4" style={styles.content}>
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

// COMPONENTS

const Stats = () => (
  <Row className="mb-5">
    {["100% Results", "7+ Years", "1000+ Students", "100+ Faculty"].map((item, i) => (
      <Col md={3} sm={6} key={i}>
        <motion.div style={styles.statCard} whileHover={{ y: -5 }}>
          <h2>{item.split(" ")[0]}</h2>
          <p>{item.split(" ")[1]}</p>
        </motion.div>
      </Col>
    ))}
  </Row>
);

const Split = ({ title, text, img, reverse }) => (
  <Row className="align-items-center mb-5">
    <Col md={6} className={reverse ? "order-md-2" : ""}>
      <motion.img src={img} alt="" style={styles.image} whileHover={{ scale: 1.05 }} />
    </Col>
    <Col md={6}>
      <h2 style={styles.heading}>{title}</h2>
      <p style={styles.text}>{text}</p>
    </Col>
  </Row>
);

const Cards = ({ title, items }) => (
  <div>
    <h2 style={styles.heading} className="mb-4">{title}</h2>
    <Row>
      {items.map((item, i) => (
        <Col md={4} sm={6} key={i} className="mb-4">
          <motion.div style={styles.card} whileHover={{ y: -8 }}>
            {item}
          </motion.div>
        </Col>
      ))}
    </Row>
  </div>
);


const styles = {
  parallaxHero: {
    height: "400px",
      backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${independence})`,

    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    // background: "rgba(15,76,92,0.75)",
    color: "white",
    // padding: "40px",
    // borderRadius: "12px",
    textAlign: "center",
  },
  sidebar: {
    background: "linear-gradient(180deg,rgb(24, 55, 105),rgb(24, 55, 105,0.6))",
    color: "white",
    minHeight: "100vh",
  },
  navItem: {
    color: "white",
    padding: "12px 15px",
    borderRadius: "10px",
    marginBottom: "10px",
    cursor: "pointer",
    fontSize:"20px"
    
  },
  content: {
    background: "#f4f8fb",
    minHeight: "100vh",
  },
  statCard: {
    background: "white",
    padding: "25px",
    borderRadius: "16px",
    textAlign: "center",
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
  },
  card: {
    background: "white",
    padding: "20px",
    borderRadius: "16px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
    textAlign: "center",
  },
  image: {
    width: "80%",
    borderRadius: "16px",
  },
  heading: {
    fontWeight: "700",
    marginBottom: "15px",
  },
  text: {
    color: "#555",
    lineHeight: "1.7",
  },
};
