import React from 'react'

import "../../pages/Academics.css"
import TopHighlightTicker from './TopHighlightTicker ';

const CardView = ({ sections, onSelect }) => (
  <div>
    {/* <div className="ac-page-header">
      <h1 className="ac-page-title">Academics</h1>
      <div className="ac-page-bar" />
      <p className="ac-page-sub">
        Every stage of learning at Hawkings is crafted to nurture curiosity,
        build character, and prepare young scholars for the world ahead.
      </p>
    </div> */}

            <TopHighlightTicker />


    {["early", "school"].map(group => (
      <div key={group} className="ac-group">
        <div className={`ac-group-label ${group}`}>
          {group === "early" ? 
        //   "Early Years"
          "Kindergarten"
          : "School Programme"}
        </div>
        <div className="ac-cards-grid">
          {sections.filter(s => s.group === group).map(s => (
            <div
              key={s.id}
              className="ac-card"
              onClick={() => onSelect(s)}
            >
              <img src={s.image} alt={s.title} className="ac-card-img" />
              <div className="ac-card-always-overlay" />
              <div className="ac-card-always-text">
                <h3>{s.title}</h3>
                <span>{s.subtitle}</span>
              </div>
              <div
                className="ac-card-hover-bg"
                style={{ background: s.color }}
              />
              <div className="ac-card-hover-content">
                <span className="ac-card-tag">{s.tag}</span>
                <div className="ac-card-hover-title">{s.title}</div>
                <div className="ac-card-hover-sub">{s.subtitle}</div>
                <div className="ac-card-cta">
                  Explore programme
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);



export default CardView