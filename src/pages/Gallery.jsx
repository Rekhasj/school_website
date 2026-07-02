import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import "./Gallery.css";

import Ticker from "../components/Gallery/Ticker";
import BannerSlider from "../components/Banner/BannerSlider";

import {
  events,
  activities,
  specialEvents,
} from "../data/galleryData";

const Gallery = () => {
  const [selected, setSelected] = useState(null);

  const renderCards = (data, isFeatured = false) => {
    return data.map((item, index) => (
      <Col
        xs={12}
        sm={isFeatured && index === 0 ? 12 : 6}
        md={isFeatured && index === 0 ? 8 : 4}
        key={item.id}
        className="mb-4"
      >
        <motion.div
          className="gallery-card"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => setSelected(item)}
        >
          <img src={item.mainImage || item.image} alt={item.title} />
          <div className="overlay">
            <h5>{item.title}</h5>
          </div>
        </motion.div>
      </Col>
    ));
  };

  return (
    <section className="gallery-section">
      
        {/* 🔝 Banner */}
        <BannerSlider />

        {/* 🔥 Ticker */}
        <Ticker />
      <Container>


        {/* 🎉 EVENTS */}
        <h4 className="section-title">Events</h4>
        <Row>{renderCards(events, true)}</Row>

        {/* 🎯 ACTIVITIES */}
        <h4 className="section-title mt-5">Activities</h4>
        <Row>{renderCards(activities)}</Row>

        {/* 🌟 SPECIAL EVENTS */}
        <h4 className="section-title mt-5">Special Events</h4>
        <Row>{renderCards(specialEvents)}</Row>

      </Container>

      {/* 🔍 MODAL */}
      {selected && (
        <div className="gallery-modal" onClick={() => setSelected(null)}>
          <motion.div
            className="modal-content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
             <button className="modal-close" onClick={() => setSelected(null)}>✕</button>
            <h3>{selected.title}</h3>

            <div className="modal-images">
              {(selected.gallery || []).map((img, i) => (
                <img key={i} src={img} alt="" />
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Gallery;