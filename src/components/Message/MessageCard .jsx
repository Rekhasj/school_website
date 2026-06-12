import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "./MessageCard.css"

const MessageCard = ({
  title,
  name,
  designation,
  image,
  reverse = false,
  children,
}) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  return (
    <div
     className="director-wrapper my-4 my-md-5"
     >        {/* ✅ plain div, no Container */}
      <Row className="align-items-center g-3 g-md-4 mx-0"> {/* ✅ mx-0 kills Row's negative margins */}

        {/* TEXT — on mobile always shows first */}
        <Col
          xs={12}                                      // ✅ Added xs
          md={6}
          order={reverse ? 2 : 1}                      // ✅ desktop order
          className={`director-text ${reverse ? "order-md-2" : "order-md-1"}`}
          data-aos={reverse ? "fade-right" : "fade-left"}
        >
          <h4 className="fw-bold text-dark">{title}</h4>
          <div className="section-heading-line-left mb-3" />
          {children}
        </Col>

        {/* IMAGE — on mobile always shows second */}
        <Col
          xs={12}                                      // ✅ Added xs
          md={6}
          order={reverse ? 1 : 2}
          className={`director-image text-center ${reverse ? "order-md-1" : "order-md-2"}`}
          data-aos={reverse ? "fade-left" : "fade-right"}
        >
          <img
            src={image}
            alt={name}
            className="img-fluid rounded shadow-lg"
            style={{ maxWidth: "clamp(200px, 60vw, 350px)" }} // ✅ Was fixed 350px
          />
          <h4 className="mt-3" style={{ fontSize: "clamp(16px, 2.5vw, 20px)" }}>
            {name}
          </h4>
          <h6 className="text-muted" style={{ fontSize: "clamp(12px, 2vw, 14px)" }}>
            {designation}
          </h6>
        </Col>

      </Row>
    </div>
  );
};
export default MessageCard;