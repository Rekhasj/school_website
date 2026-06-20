import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import "./PosterShowcase.css";

import innostem from "../../assets/Photos/poster/innostem-collab.jpeg";
import viswam from "../../assets/Photos/poster/viswam-edutech.jpeg";
import allen from "../../assets/Photos/poster/allen-online.png";



const posters = [
  {
    src: innostem,
    alt: "Hawkings International School in collaboration with InnoSTEM Robotics Academy",
    title: "Robotics & STEM, by a certified master trainer",
    description: "Hands-on robotics and STEM sessions led by an internationally certified master trainer, helping students build problem-solving and engineering skills from an early age.",
  },
  {
    src: viswam,
    alt: "Hawkings International School in collaboration with Viswam Edutech",
    title: "A skill-based English curriculum",
    description: "Viswam Edutech brings experiential English learning to Hawkings, covering listening, speaking, reading and writing alongside phonetics, grammar and a dedicated spell-bee program.",
  },
  {
    src: allen,
    alt: "Hawkings International School ALLEN Online academic excellence program",
    title: "ALLEN Online academic excellence program",
    description: "Printed ALLEN study material, recorded lectures, regular tests on the latest syllabus, round-the-clock AI doubt support, and IIT foundation classes taught by Hawkings staff.",
  },
];

const rowVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fromLeft = {
  hidden: { x: -120, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const fromRight = {
  hidden: { x: 120, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const shine = {
  hidden: { x: "-120%" },
  visible: {
    x: "220%",
    transition: { duration: 0.8, delay: 0.25, ease: "easeInOut" },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const PosterShowcase = ({
  title = "Our Collaborations",
  subtitle = "Specialized programs we've brought into the Hawkings classroom.",
}) => {
  return (
    <div className="poster-showcase-wrap">
      <Container>
        {(title || subtitle) && (
          <motion.div
            className="ps-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={headingVariants}
          >
            {title && <h2>{title}</h2>}
            {subtitle && <p>{subtitle}</p>}
          </motion.div>
        )}
        {posters.map((poster, idx) => {
          const reversed = idx % 2 === 1; // alternate poster side each row
          const posterVariant = reversed ? fromRight : fromLeft;
          const textVariant = reversed ? fromLeft : fromRight;

          const PosterBlock = (
            <motion.div className="ps-poster" variants={posterVariant}>
              <motion.div className="ps-flash" variants={shine} />
              <img src={poster.src} alt={poster.alt} loading="lazy" />
            </motion.div>
          );

          const TextBlock = (
            <motion.div className="ps-text" variants={textVariant}>
              <h3>{poster.title}</h3>
              <p>{poster.description}</p>
            </motion.div>
          );

          return (
            <motion.div
              className="ps-row"
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={rowVariants}
            >
              {reversed ? (
                <>
                  {TextBlock}
                  {PosterBlock}
                </>
              ) : (
                <>
                  {PosterBlock}
                  {TextBlock}
                </>
              )}
            </motion.div>
          );
        })}
      </Container>
    </div>
  );
};

export default PosterShowcase;