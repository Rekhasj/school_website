import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./TopHighlightTicker.css";
import { heroHighlights } from "../../data/academicsData";

const TopHighlightTicker = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroHighlights.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const current = heroHighlights[index];

  return (
    <div className="hero-modern">

      {/* Background Image */}
      <div
        className="hero-bg-image"
        style={{
          backgroundImage: `url(${current.image})`,
        }}
      />

      {/* 🔥 Dynamic Gradient Overlay */}
      <div
        className="hero-overlay"
        style={{
          background: `linear-gradient(135deg, ${current.gradient[0]}CC, ${current.gradient[1]}CC)`
        }}
      />

      <div className="hero-content">

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.5 }}
            className="hero-main"
          >
            <span className="hero-icon">{current.icon}</span>
            <h2 className="hero-text">
              {current.text}
            </h2>
          </motion.div>
        </AnimatePresence>

        <p className="hero-sub">
          Empowering young minds with excellence in academics, values, and life skills.
        </p>

        <div className="hero-dots">
          {heroHighlights.map((_, i) => (
            <div
              key={i}
              className={`hero-dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopHighlightTicker;