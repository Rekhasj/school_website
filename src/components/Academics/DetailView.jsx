import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import "../../pages/Academics.css"

const DetailView = ({ section, onBack }) => (
  <motion.div
    className="ac-detail"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4, ease: [0.25, 0.8, 0.25, 1] }}
  >
    {/* Hero */}
    <div className="ac-detail-hero" style={{ background: section.color }}>
      <img src={section.image} alt={section.title} className="ac-detail-hero-img" />
      <div className="ac-detail-hero-overlay">
        <button className="ac-back-btn" onClick={onBack}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Back to Academics
        </button>
        <span
          className="ac-detail-tag"
          style={{ background: "rgba(255,255,255,0.2)", color: "#fff" }}
        >
          {section.tag}
        </span>
        <h2 className="ac-detail-title">{section.title}</h2>
        <p className="ac-detail-subtitle">{section.subtitle}</p>
      </div>
    </div>

    {/* Body */}
    <div className="ac-detail-body">

      {/* Gallery */}
      {/* <div className="ac-gallery">
        {section.gallery.map((img, i) => (
          <div key={i} className="ac-gallery-img">
            <img src={img} alt={`${section.title} ${i + 1}`} />
          </div>
        ))}
      </div> */}

      <p className="ac-detail-desc">{section.description}</p>

      <div className="ac-detail-cols">
        <div>
          <p className="ac-detail-section-label">Subjects & Focus Areas</p>
          <div className="ac-subjects-grid">
            {section.subjects.map((s, i) => (
              <div
                key={i}
                className="ac-subject-pill"
                style={{ borderLeftColor: section.color }}
              >
                {s}
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="ac-detail-section-label">Programme Highlights</p>
          <div className="ac-highlights">
            {section.highlights.map((h, i) => (
              <div key={i} className="ac-highlight-item">
                <div
                  className="ac-highlight-dot"
                  style={{ background: section.color }}
                />
                {h}
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  </motion.div>
);
export default DetailView