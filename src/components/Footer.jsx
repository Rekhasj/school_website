import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Disclosure from "../data/disclosure.pdf";

import {
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

import "./Footer.css";
import { Link } from "react-router-dom";

// 🔧 Single source of truth — change once, updates everywhere
const PHONE = "+919952321179";
const PHONE_DISPLAY = "(+91) 99523 21179";
const WHATSAPP = "919952321179";

const Footer = () => {
  return (
    <footer className="footer-modern">
      {/* 🌊 Waves */}
      <div className="wave-container">
        <svg viewBox="0 0 1200 120" className="wave wave1">
          <path
            d="M0,0V46.29c47.79,22,103.59,29,158,17,70-15,136-60,207-63C438,0,512,31,583,53c69,21,138,24,207,2,73-24,141-76,210-75,72,1,140,54,200,77V0Z"
            fill="#fff"
            opacity="0.2"
          />
        </svg>
      </div>

      {/* 📦 Content */}
      <Container fluid className="footer-content px-3 px-md-4 px-lg-5">
        <Row className="g-4 text-center text-md-start">
          {/* Logo */}
          <Col
            xs={12}
            md={3}
            className="d-flex flex-column align-items-center align-items-md-start"
          >
            <img
              src="https://www.hawkingschool.com/img/logos/logo_footer1.png"
              alt="Hawkings International School logo"
              className="footer-logo"
            />
            <p className="mt-3 small mb-0 copyright">
              © {new Date().getFullYear()} Hawkings School. All rights reserved.
            </p>
          </Col>

          {/* About / Contact */}
          <Col xs={12} md={3} className="footer-contact">
            <h5 className="footer-heading">Hawkings International School</h5>
            <p className="small mb-2 muted">
              CBSE Affiliated · Affiliation No: 130722
            </p>
            <p className="small muted">
              A modern institution focused on academic excellence, values, and
              holistic student development.
            </p>
            <div className="contact-info">
              <p className="small mb-2 address">
                <FaMapMarkerAlt className="ci-icon" />
                <span>
                  Palaripalle, Vendugampalle Post,
                  <br />
                  Kuppam Mandal, Chittoor Dist,
                  <br />
                  Andhra Pradesh - 517425
                </span>
              </p>
              <a href={`tel:${PHONE}`} className="contact-phone">
                <FaPhone className="ci-icon" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </Col>

          {/* Quick Links */}
          <Col xs={6} md={3}>
            <h5 className="footer-heading">Quick Links</h5>
            <div className="footer-links">
              <Link to="/about">About</Link>
              <Link to="/facilities">Facilities</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/news">News</Link>
              <Link to="/login">Contact</Link>
              <a
                href={Disclosure}
                target="_blank"
                rel="noreferrer"
                className="highlight-link"
              >
                Mandatory Disclosure
              </a>
            </div>
          </Col>

          {/* Social */}
          <Col xs={6} md={3} className="text-center text-md-start">
            <h5 className="footer-heading">Connect With Us</h5>
            <div className="social-container justify-content-center justify-content-md-start">
              <a
                href={`tel:${PHONE}`}
                className="social-icon phone"
                aria-label="Call us"
              >
                <FaPhone />
              </a>
              <a
                href="https://www.facebook.com/Hawkings-International-school-106662441994500/"
                target="_blank"
                rel="noreferrer"
                className="social-icon facebook"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noreferrer"
                className="social-icon whatsapp"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.instagram.com/hawkings_school_cbse_kuppam/reels/"
                target="_blank"
                rel="noreferrer"
                className="social-icon instagram"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
                className="social-icon youtube"
                aria-label="YouTube"
              >
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