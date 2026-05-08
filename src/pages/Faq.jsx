import React from "react";
import { Accordion, Container } from "react-bootstrap";
import FooterBanner from "../components/Common/FooterBanner";
import { motion } from "framer-motion";
import independence from '../assets/Photos/independence_day/independence_6.webp'

const Faq = () => {
  return (
          <div>
      {/* 🔥 PARALLAX HERO */}
      <div style={styles.parallaxHero}>
        <div style={styles.overlay}>
          <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            FAQ
          </motion.h1>
          {/* <p>Inspiring Excellence • Building Futures</p> */}
        </div>
      </div>

    <Container className="mt-5">
      {/* <h2 className="text-center">FAQ</h2> */}
      {/* <div
        className="bg-dark mx-auto mb-4"
        style={{ width: "50px", height: "3px" }}
      ></div> */}

      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>When do admissions begin?</Accordion.Header>
          <Accordion.Body className="custom-accordion-body">
            The academic year starts in June. Admissions generally begin in
            April and remain open throughout the year, depending on seat
            availability.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Which Board is Hawkings International School affiliated with?
          </Accordion.Header>
          <Accordion.Body className="custom-accordion-body">
            The school follows the CBSE designed by the Ministry of Education,
            Government of India.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>
            What are the grades for which admission can be sought?
          </Accordion.Header>
          <Accordion.Body className="custom-accordion-body">
            Admission is available from Kinder Garden to Grade XII. Please visit
            the campus to check seat availability.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>
            Where can I get the application form?
          </Accordion.Header>
          <Accordion.Body className="custom-accordion-body">
            You can request the application form via email at{" "}
            <a href="mailto:admissions@hawkingsinternationalschool.edu">
              admissions@hawkingsinternationalschool.edu
            </a>{" "}
            or visit our campus.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>
            Does the school provide transport facilities?
          </Accordion.Header>
          <Accordion.Body className="custom-accordion-body">
            Yes, the school provides transport with GPS tracking.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header>
            What is the student-teacher ratio?
          </Accordion.Header>
          <Accordion.Body className="custom-accordion-body">
            The student-teacher ratio is 20:1 for Kinder Garden and 30:1 for
            Grade I onwards.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      
      <FooterBanner />
    </Container>
    </div>
  );
};

export default Faq;



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