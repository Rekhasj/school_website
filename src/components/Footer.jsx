import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { colors } from "../data/colors";
import Disclosure from '../data/disclosure.pdf';

import {
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
  FaPhone,
} from "react-icons/fa";

import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-modern">

      {/* 🌊 Waves */}
      <div className="wave-container">
        <svg viewBox="0 0 1200 120" className="wave wave1">
          <path d="M0,0V46.29c47.79,22,103.59,29,158,17,70-15,136-60,207-63C438,0,512,31,583,53c69,21,138,24,207,2,73-24,141-76,210-75,72,1,140,54,200,77V0Z" fill="#fff" opacity="0.2"/>
        </svg>

        {/* <svg viewBox="0 0 1200 120" className="wave wave2">
          <path d="M0,0V15.81C47.79,35,103.59,42,158,30c70-15,136-60,207-63C438,0,512,31,583,53c69,21,138,24,207,2,73-24,141-76,210-75,72,1,140,54,200,77V0Z" fill="#fff" opacity="0.1"/>
        </svg> */}
      </div>

      {/* 📦 Content */}
      <Container fluid className="footer-content">
        <Row className="align-items-start text-center">

          {/* Logo */}
          <Col md={3}>
            <img
              src="https://www.hawkingschool.com/img/logos/logo_footer1.png"
              alt="logo"
              className="footer-logo"
            />
            <p className="mt-2 small">
              © 2025 Hawkings School. All rights reserved.
            </p>
          </Col>

          {/* About */}

<Col md={3} className="footer-contact">
  <h4>Hawkings International School</h4>

  <p className="small mb-2">
    CBSE Affiliated · Affiliation No: 130722
  </p>

  <p className="small">
    A modern institution focused on academic excellence,
    values, and holistic student development.
  </p>

  <div className="contact-info">

    <p>
      📍 <strong>Address:</strong><br/>
      Palaripalle, Vendugampalle Post,<br/>
      Kuppam Mandal, Chittoor Dist,<br/>
      Andhra Pradesh - 517425
      <br />
            <a href="tel:9952321179"  className=""> 📞 (+91) 9952321179</a> 

    </p>

    {/* <p>
      📌 <strong>Location:</strong><br/>
      Near D K Palli, Paramasamudram Road
    </p>

    <p>
      🌐 <strong>Website:</strong><br/>
      <a href="https://hawkingschool.com" target="_blank" rel="noreferrer">
        hawkingschool.com
      </a>
    </p> */}

    {/* <p>
      📧 <strong>Email:</strong><br/>
      <a href="mailto:hawkingsintlschool@gmail.com">
        hawkingsintlschool@gmail.com
      </a>
    </p> */}

    {/* <p>
      📞 <strong>Phone : </strong>
      <a href="tel:9952321179">+9952321179</a> 
        </p> */}

  </div>
</Col>
          {/* Quick Links */}
          <Col md={3}>
            <h4 className="footer-heading">Quick Links</h4>

            <div className="footer-links">
              <a href="/about">About</a>
              <a href="/facilities">Facilities</a>
              <a href="/gallery">Gallery</a>
              <a href="/news-events">News</a>
              <a href="/login">Contact</a>
              <a href={Disclosure} target="_blank" rel="noreferrer" className="highlight-link">
                Mandatory Disclosure
              </a>
            </div>
          </Col>

          {/* Social */}

     
          <Col md={3} className="text-md-start text-center">
  <h4 className="footer-heading mb-4">Connect With Us</h4>

  <div className="social-container justify-content-md-start justify-content-center">
    <a href="tel:+919441880054" className="social-icon phone">
      <FaPhone />
    </a>

    <a href="https://www.facebook.com/Hawkings-International-school-106662441994500/" className="social-icon facebook">
      <FaFacebook />
    </a>

    <a href="https://wa.me/919441880054" className="social-icon whatsapp">
      <FaWhatsapp />
    </a>

    <a href="https://www.instagram.com/hawkings_school_cbse_kuppam/reels/" className="social-icon instagram">
      <FaInstagram />
    </a>

    <a href="#" className="social-icon youtube">
      <FaYoutube />
    </a>
  </div>
</Col>

        </Row>
      </Container>
    </footer>
  );
};

export default Footer;