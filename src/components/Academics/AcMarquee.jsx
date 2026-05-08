import React from 'react'
import './AcMarquee.css'


const AcMarquee = () => {
  const text =
    "100% Result in 10th CBSE Board Exam 2025-26  • Candidates can choose Telugu/ Tamil/ Kannada as second language  • HAWKINGS × ALLEN • Shaping the Future with Confidence • Integrated NEET & JEE Program ";

  return (
    <div className="ac-bar">
      <div className="ac-track">
        
        {/* FIRST COPY */}
        <div className="ac-item">
          <span className="new-badge-text">New</span>
          <span>{text}</span>
        </div>

        {/* SECOND COPY (CRITICAL FOR LOOP) */}
        <div className="ac-item">
          <span className="new-badge-text">New</span>
          <span>{text}</span>
        </div>

      </div>
    </div>
  );
};

export default AcMarquee