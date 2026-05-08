// src/components/EventDetail.js
import React from "react";
import { useParams, Link } from "react-router-dom";
import { events } from "../data/data";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const EventDetail = () => {
  const { id } = useParams();
  const event = events.find((e) => e.id === id);

  if (!event) {
    return (
      <Container className="mt-5">
        <p>Event not found.</p>
      </Container>
    );
  }

  return (
    <Container className="my-4 mt-5">
      <h2 className="fw-bold text-primary mb-3">{event.title}</h2>
      <Card className="mb-4 shadow-sm">
        <Card.Img variant="top" src={event.mainImage} />
        <Card.Body>
          <Card.Text>{event.fullDescription}</Card.Text>
        </Card.Body>
      </Card>

      <h4 className="mb-3">Gallery</h4>
      <Row>
        {event.gallery.map((img, index) => (
          <Col xs={12} sm={6} md={4} key={index} className="mb-3">
            <Card className="shadow-sm">
              <Card.Img variant="top" src={img} />
            </Card>
          </Col>
        ))}
      </Row>
      <Link to="/news">
        <Button variant="secondary" className="mt-3">
          ← Back to News
        </Button>
      </Link>
    </Container>
  );
};

export default EventDetail;
