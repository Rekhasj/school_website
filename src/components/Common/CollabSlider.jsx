import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import "./CollabSlider.css";

import innostem from "../../assets/Photos/poster/innostem-collab.jpeg";
import viswam from "../../assets/Photos/poster/viswam-edutech.jpeg";
import allen from "../../assets/Photos/poster/allen-online.png";

const posters = [
    {
    src: allen,
    alt: "Hawkings International School ALLEN Online academic excellence program",
    title: "ALLEN Online academic excellence program",
    description:
      "Printed ALLEN study material, recorded lectures, regular tests on the latest syllabus, round-the-clock AI doubt support, and IIT foundation classes taught by Hawkings staff.",
  },
  {
    src: innostem,
    alt: "Hawkings International School in collaboration with InnoSTEM Robotics Academy",
    title: "Robotics & STEM, by a certified master trainer",
    description:
      "Hands-on robotics and STEM sessions led by an internationally certified master trainer, helping students build problem-solving and engineering skills from an early age.",
  },
  {
    src: viswam,
    alt: "Hawkings International School in collaboration with Viswam Edutech",
    title: "A skill-based English curriculum",
    description:
      "Viswam Edutech brings experiential English learning to Hawkings, covering listening, speaking, reading and writing alongside phonetics, grammar and a dedicated spell-bee program.",
  },

];

const CollabSlider = ({
  title = "Our Collaborations",
  subtitle = "Specialized programs we've brought into the Hawkings classroom.",
}) => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + posters.length) % posters.length);
  const next = () => setCurrent((c) => (c + 1) % posters.length);

  const active = posters[current];

  return (
    <div className="collab-slider-wrap">
      <Container>
        <motion.div
          className="collab-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {title && <h2>{title}</h2>}
          {subtitle && <p>{subtitle}</p>}
        </motion.div>

        <div className="collab-card">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="collab-card-inner"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
            >
              <div className="collab-poster">
                <img src={active.src} alt={active.alt} loading="lazy" />
              </div>
              <div className="collab-text">
                <h3>{active.title}</h3>
                <p>{active.description}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="collab-controls">
          <button className="collab-btn" onClick={prev} aria-label="Previous">
            &larr;
          </button>
          <span className="collab-counter">
            {current + 1} / {posters.length}
          </span>
          <button className="collab-btn" onClick={next} aria-label="Next">
            &rarr;
          </button>
        </div>
      </Container>
    </div>
  );
};

export default CollabSlider;
