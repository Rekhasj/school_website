import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./LabSection.css";
import { labData } from "../../data/lab";
import { Link } from "react-router-dom";

const CARD_W = 280;
const GAP = 16;
const STEP = CARD_W + GAP;

const LabSection = () => {
  const [offset, setOffset] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isManual, setIsManual] = useState(false);
  const [dotIndex, setDotIndex] = useState(0);
  const autoRef = useRef(null);

  // Auto-scroll: increment offset every 30ms when not paused
  useEffect(() => {
    if (paused) return;
    autoRef.current = setInterval(() => {
      setOffset(prev => {
        const next = prev - 0.6;
        // Reset after one full set scrolled
        const totalWidth = labData.length * STEP;
        return next <= -totalWidth ? 0 : next;
      });
    }, 16);
    return () => clearInterval(autoRef.current);
  }, [paused]);

  const handleArrow = (dir) => {
    // Pause auto, do a snapped step
    setPaused(true);
    setIsManual(true);
    setOffset(prev => {
      const totalWidth = labData.length * STEP;
      let next = prev - dir * STEP;
      // wrap
      if (next <= -totalWidth) next = 0;
      if (next > 0) next = -(totalWidth - STEP);
      return next;
    });
    setDotIndex(prev => (prev + dir + labData.length) % labData.length);
    // Resume after 2.5s
    setTimeout(() => {
      setPaused(false);
      setIsManual(false);
    }, 2500);
  };

  const handleDot = (i) => {
    setPaused(true);
    setIsManual(true);
    setDotIndex(i);
    setOffset(-(i * STEP));
    setTimeout(() => {
      setPaused(false);
      setIsManual(false);
    }, 2500);
  };

  const items = [...labData, ...labData];

  return (
    <section className="lab-section">
      <motion.h2
        className="lab-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Our Facilities
      </motion.h2>
      <motion.p
        className="lab-sub"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        Modern classrooms, labs, and spaces designed to inspire
      </motion.p>

      <div className="carousel-root">
        <button className="arrow left" onClick={() => handleArrow(-1)} aria-label="Previous">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <div className="carousel-viewport">
          <div
            className="carousel-track"
            style={{
              transform: `translateX(${offset}px)`,
              transition: isManual ? "transform 0.45s cubic-bezier(.25,.8,.25,1)" : "none",
            }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {items.map((item, i) => (
              <div className="lab-card" key={i}>
                <img src={item.image} alt={item.title} loading="lazy" />
                {/* <span className="card-tag">{item.tag}</span> */}
                <div className="card-overlay">
                  <h3>{item.title}</h3>
                  <span>{item.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="arrow right" onClick={() => handleArrow(1)} aria-label="Next">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
            <polyline points="9 6 15 12 9 18" />
          </svg>
        </button>
      </div>

      <div className="text-center mt-4">
        
       <Link  to={"/facilities"}  className="btn btn-primary"> View All Facilities
       </Link>
      </div>
    </section>
  );
};

export default LabSection;