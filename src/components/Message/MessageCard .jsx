import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

const MessageCard = ({
  title,
  name,
  designation,
  image,
  reverse = false,
  children, // 👈 IMPORTANT
}) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <Container className="my-5 director-wrapper">
      <Row className="align-items-center">

        {/* TEXT */}
        <Col
          md={6}
          sm={12}
          data-aos={reverse ? "fade-right" : "fade-left"}
          className="director-text"
        >
          <h4 className="fw-bold text-dark">{title}</h4>
          <div className="section-heading-line-left mb-3"></div>

          {/* 👇 Dynamic content */}
          {children}
        </Col>

        {/* IMAGE */}
        <Col
          md={6}
          sm={12}
          data-aos={reverse ? "fade-left" : "fade-right"}
          className="director-image text-center"
        >
          <img
            src={image}
            alt={name}
            className="img-fluid rounded shadow-lg"
            style={{ maxWidth: "350px" }}
          />
          <h4 className="mt-3">{name}</h4>
          <h6 className="text-muted">{designation}</h6>
        </Col>

      </Row>
    </Container>
  );
};

export default MessageCard;