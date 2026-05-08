// src/components/News.js
import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { events } from "../data/data";
import independence from '../assets/Photos/independence_day/independence_6.webp'
import { motion } from "framer-motion";

const News = () => {
  return (
     <div>
          {/* 🔥 PARALLAX HERO */}
          <div style={styles.parallaxHero}>
            <div style={styles.overlay}>
              <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                News & Events
              </motion.h1>
            </div>
          </div>
    
    <Container className="my-4 mt-5">
      {/* <h2 className="text-center mb-4 text-primary fw-bold">News & Events</h2> */}
      <Row>
        {events.map((event) => (
          <Col md={6} key={event.id} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={event.mainImage} />
              <Card.Body>
                <Card.Title>{event.title}</Card.Title>
                <Card.Text>{event.shortDescription}</Card.Text>
                <Link to={`/events/${event.id}`}>
                  <Button variant="outline-primary">More Details</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </div>
  );
};

export default News;



const styles = {
  parallaxHero: {
    height: "400px",
      backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${independence})`,

    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    // background: "rgba(15,76,92,0.75)",
    color: "white",
    // padding: "40px",
    // borderRadius: "12px",
    textAlign: "center",
  },
};