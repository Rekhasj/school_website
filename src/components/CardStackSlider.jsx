import React, { useState } from "react";
import { motion } from "framer-motion";
import "./CardStackSlider.css";

import sports from "../assets/Photos/sports_meet/sports_4.webp";
import teluguday from "../assets/Photos/telugu_day/telugu_day.jpeg";
import robotics from "../assets/Photos/robotics/r3.jpeg";
import karate from "../assets/Photos/karate/karate_2.webp";
import scienceExpo from "../assets/Photos/science_expo_photos/science_expo_1.webp";
import annual_day from "../assets/Photos/annual_day.jpeg";
import skating from "../assets/Photos/skating.jpeg";
import yoga from "../assets/Photos/yoga_day/yoga_1.jpeg";
import shooting from "../assets/Photos/shooting/shooting_4.webp";
import sports2 from "../assets/Photos/sports_meet/sports_2.webp";
import christmas from "../assets/Photos/christmas_day/christmas_2.webp";
import independence from "../assets/Photos/independence_day/independence_5.webp";
import color from "../assets/Photos/colors_day/color_14.webp";
import kidsExpo from "../assets/Photos/kids_expo/4.webp";
import scienceExpo1 from "../assets/Photos/science_expo_photos/science_expo_5.JPG";

const slides = [
    { src: teluguday, label: "Telugu Day" },
  { src: sports, label: "Sports Meet" },
  { src: robotics, label: "Robotics" },
  { src: karate, label: "Karate" },
  // { src: scienceExpo, label: "Science Expo" },
  { src: annual_day, label: "Annual Day" },
      { src: color, label: "Color" },

  { src: skating, label: "Skating" },

  { src: independence, label: "Independence Day" },
  { src: shooting, label: "Shooting" },
  { src: sports2, label: "Sports" },
  { src: christmas, label: "Christmas" },
  { src: scienceExpo1, label: "Science Expo" },
    { src: kidsExpo, label: "Kids Expo" },

];

const CardStackSlider = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  const getIndex = (offset) => (current + offset + slides.length) % slides.length;

  const leftIdx = getIndex(-1);
  const rightIdx = getIndex(1);

  return (
    <div className="card-stack-section">
      <div className="card-stack-container">
        <motion.div
          className="card-stack-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>Welcome to Hawkings School</h2>
          <p>Providing quality education for future leaders.</p>
        </motion.div>

        <div className="card-stack-viewport">
          {/* Left card */}
          <motion.div
            className="card-stack-card card-left"
            key={`left-${leftIdx}`}
            animate={{ opacity: 0.7, rotate: -8 }}
            transition={{ duration: 0.35 }}
          >
            <img src={slides[leftIdx].src} alt={slides[leftIdx].label} />
          </motion.div>

          {/* Center card */}
          <motion.div
            className="card-stack-card card-center"
            key={`center-${current}`}
            initial={{ opacity: 0.6, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
          >
            <img src={slides[current].src} alt={slides[current].label} />
          </motion.div>

          {/* Right card */}
          <motion.div
            className="card-stack-card card-right"
            key={`right-${rightIdx}`}
            animate={{ opacity: 0.7, rotate: 8 }}
            transition={{ duration: 0.35 }}
          >
            <img src={slides[rightIdx].src} alt={slides[rightIdx].label} />
          </motion.div>
        </div>

        {/* Controls */}
        <div className="card-stack-controls">
          <button className="card-stack-btn" onClick={prev} aria-label="Previous">
            &larr;
          </button>
          <span className="card-stack-counter">
            {current + 1} / {slides.length}
          </span>
          <button className="card-stack-btn" onClick={next} aria-label="Next">
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardStackSlider;
