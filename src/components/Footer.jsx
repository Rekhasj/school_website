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
        <Container fluid className="footer-content px-3 px-md-4 px-lg-5">  {/* ✅ Responsive padding */}
    <Row className="g-4 text-center text-md-start">  {/* ✅ center on mobile, left on desktop */}


          {/* Logo */}
      <Col xs={12} md={3} className="d-flex flex-column align-items-center align-items-md-start">
            <img
              src="https://www.hawkingschool.com/img/logos/logo_footer1.png"
              alt="logo"
              className="footer-logo"
            />
        <p className="mt-2 small mb-0">
              © 2025 Hawkings School. All rights reserved.
            </p>
          </Col>

          {/* About */}

<Col xs={12} md={3} className="footer-contact">
        <h5 className="footer-heading">Hawkings International School</h5>
        <p className="small mb-2">CBSE Affiliated · Affiliation No: 130722</p>
        <p className="small">
          A modern institution focused on academic excellence,
          values, and holistic student development.
        </p>
        <div className="contact-info">
          <p className="small mb-1">
            📍 Palaripalle, Vendugampalle Post,<br />
            Kuppam Mandal, Chittoor Dist,<br />
            Andhra Pradesh - 517425
          </p>
          <a href="tel:9952321179" className="contact-phone">
            📞 (+91) 9952321179
          </a>
        </div>
      </Col>

          {/* Quick Links */}
 <Col xs={6} md={3}>  {/* ✅ xs=6 so links + social sit side by side on mobile */}
        <h5 className="footer-heading">Quick Links</h5>
        <div className="footer-links">
          <a href="/about">About</a>
          <a href="/facilities">Facilities</a>
          <a href="/gallery">Gallery</a>
          <a href="/news">News</a>
          <a href="/login">Contact</a>
          <a href={Disclosure} target="_blank" rel="noreferrer" className="highlight-link">
            Mandatory Disclosure
          </a>
        </div>
      </Col>

      {/* Social */}
      <Col xs={6} md={3} className="text-center text-md-start">  {/* ✅ xs=6 pairs with links */}
        <h5 className="footer-heading">Connect With Us</h5>
        <div className="social-container justify-content-center justify-content-md-start">
          <a href="tel:+919441880054" className="social-icon phone"><FaPhone /></a>
          <a href="https://www.facebook.com/Hawkings-International-school-106662441994500/" className="social-icon facebook"><FaFacebook /></a>
          <a href="https://wa.me/919441880054" className="social-icon whatsapp"><FaWhatsapp /></a>
          <a href="https://www.instagram.com/hawkings_school_cbse_kuppam/reels/" className="social-icon instagram"><FaInstagram /></a>
          <a href="#" className="social-icon youtube"><FaYoutube /></a>
        </div>
      </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;