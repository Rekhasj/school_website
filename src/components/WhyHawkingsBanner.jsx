import React from "react";
import { motion } from "framer-motion";
import "./WhyHawkingsBanner.css";

import kids_expo from "../assets/Photos/kids_expo/srkg.jpg";
import skating from "../assets/Photos/skating.jpeg";
import sports from "../assets/Photos/sports_meet/sports_4.webp";
import shooting from "../assets/Photos/shooting/shooting_2.webp";
import karate from "../assets/Photos/karate/karate_3.webp";
import robotics from "../assets/Photos/robotics/r2.jpeg";
import van from "../assets/Photos/van1.jpeg";

const photos = [
  { src: kids_expo, label: "Kids Expo" },
  { src: skating, label: "Skating" },
  { src: van, label: "Transport" },
  { src: shooting, label: "Shooting" },
  { src: karate, label: "Karate" },
  { src: robotics, label: "Robotics" },
];

const WhyHawkingsBanner = () => {
  return (
    <div className="why-banner-section">
      {/* Torn paper edge */}
      <div className="why-banner-tear" />

      <div className="why-banner-inner">
        {/* Left diagonal text area */}
        <div className="why-banner-left">
          <motion.div
            className="why-banner-text"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>
              Why <span className="why-brand-name">Hawkings</span>
            </h2>
            <div className="why-brand-underline" />
          </motion.div>
        </div>

        {/* Right photo collage area */}
        <div className="why-banner-right">
          <motion.p
            className="why-banner-tagline"
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Excellence in Academics, Sports and Beyond
          </motion.p>

          <div className="why-photo-collage">
            {photos.map((photo, i) => (
              <motion.div
                key={i}
                className={`why-photo-card why-photo-${i}`}
                initial={{ opacity: 0, y: 30, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.1 + i * 0.08 }}
              >
                <img src={photo.src} alt={photo.label} />
              </motion.div>
            ))}
          </div>

          <div className="why-banner-scroll-hint">
            <span className="why-scroll-arrow">&#x2193;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyHawkingsBanner;
