import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import "./CampusFacilities.css";

import yoga from "../assets/Photos/yoga_day/yoga_1.jpeg";
import van from "../assets/Photos/van.jpeg";
import cctv from "../assets/Photos/cctv.jpg";
import firstDay from "../assets/Photos/firstDay/firstDayMain.webp";
import sandwich from "../assets/Photos/academics/sandwich.jpeg";

const facilities = [
  {
    img: yoga,
    icon: "🏥",
    title: "Health Care",
    color: "#1d9e75",
    points: ["Wellness & yoga programme", "Sick room / medical room on campus"],
  },
  {
    img: van,
    icon: "🚌",
    title: "Transport",
    color: "#257a8f",
    points: ["GPS-tracked school buses", "Routes across Kuppam", "Safe pick-up & drop"],
  },
  {
    img: cctv,
    icon: "🛡️",
    title: "Safety & Security",
    color: "rgb(24,55,105)",
    points: ["24×7 CCTV surveillance", "Controlled campus access", "Dedicated security staff"],
  },
  {
    img: sandwich,
    icon: "🥗",
    title: "Nutrition",
    color: "#f26724",
    points: ["Nutritious food entertained", "Junk food prohibited"],
  },
];

const CampusFacilities = () => {
  return (
    <div className="campus-fac-section">
      <Container>
        <motion.div
          className="campus-fac-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="campus-fac-eyebrow">Campus Life</span>
          <h2 className="campus-fac-title">Campus Facilities</h2>
          <p className="campus-fac-sub">
            Everything a child needs to learn, grow and thrive — all within our safe and nurturing campus.
          </p>
        </motion.div>

        <Row className="g-3 g-md-4 justify-content-center">
          {facilities.map((f, i) => (
            <Col xs={12} sm={6} md={3} key={i}>
              <motion.div
                className="campus-fac-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <img src={f.img} alt={f.title} className="campus-fac-bg" />
                <div className="campus-fac-overlay">
                  {/* <span className="campus-fac-icon">{f.icon}</span> */}
                  <h5 className="campus-fac-name" style={{ borderBottomColor: f.color }}>
                    {f.title}
                  </h5>
                  <ul className="campus-fac-points">
                    {f.points.map((pt, j) => (
                      <li key={j}>
                        <span className="campus-fac-check" style={{ color: f.color }}>✓</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default CampusFacilities;
