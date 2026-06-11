import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AnimatePresence, motion } from "framer-motion";
import "./Result.css";

const rewards = [
  { rank: "1st Rank", value: "50%", icon: "🥇", color: "#FFD700" },
  { rank: "2nd Rank", value: "25%", icon: "🥈", color: "#C0C0C0" },
  { rank: "3rd Rank", value: "15%", icon: "🥉", color: "#CD7F32" },
];

const yearResults = [
  '100% Result in 10th State Board Exam 2023-24',
  '100% Result in 10th & 12th CBSE Board Exam 2024-25',
  '100% Result in 10th CBSE Board Exam 2025-26'
];

/* 🔥 container animation */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25, // delay each card
    },
  },
};

/* 🔥 card animation (alternate directions) */
const cardVariants = {
  hidden: (i) => ({
    opacity: 0,
    x: i % 2 === 0 ? -80 : 80, // left/right
    y: 40,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const Result = () => {

    const [index, setIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prev) => (prev + 1) % yearResults.length);
  }, 2500); // change every 2.5 sec

  return () => clearInterval(interval);
}, []);

  return (
    <div className="excellence-wrapper my-4 my-md-5">

      <Container className="text-center">

        {/* TITLE */}
        <motion.h2
          className="excellence-title"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Academic Excellence
        </motion.h2>

       <AnimatePresence mode="wait">
  <motion.p
    key={index}
    className="excellence-subtitle"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
  >
    {yearResults[index]}
  </motion.p>
</AnimatePresence>

        {/* 🔥 REWARDS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }} // animate once
        >
          <Row className="justify-content-center mt-4 g-5">
            {rewards.map((item, i) => (
                 <Col xs={6} md={3} key={i}>
                <motion.div
                  custom={i}
                  variants={cardVariants}
                  className="reward-card"
                  whileHover={{ y: -12, scale: 1.06 }}
                >
                  <div
                    className="reward-icon"
                    style={{ background: item.color }}
                  >
                    {item.icon}
                  </div>

                  <h4>{item.rank}</h4>
                  <p>{item.value} Scholarship</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>

      </Container>
    </div>
  );
};

export default Result;