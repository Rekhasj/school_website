import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Form, Row, Col, Button, Spinner } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import "./Contact.css";
import FooterBanner from "../components/Common/FooterBanner";
import independence from "../assets/Photos/independence_day/independence_6.webp";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaWhatsapp,
} from "react-icons/fa";

const BRAND = "rgb(24,55,105)";

const INFO_CARDS = [
  {
    icon: <FaMapMarkerAlt />,
    label: "Address",
    lines: ["Near D.K.Palli, Kuppam Municipality,", "Chittoor Dt., Andhra Pradesh – 517 425"],
    color: "#f26724",
  },
  {
    icon: <FaPhone />,
    label: "Phone",
    lines: ["+91 99523 21179", "+91 96769 41786"],
    color: "rgb(24,55,105)",
    href: "tel:+919952321179",
  },
  {
    icon: <FaEnvelope />,
    label: "Email",
    lines: ["hawkingsintlschool@gmail.com"],
    color: "#1d9e75",
    href: "mailto:hawkingsintlschool@gmail.com",
  },
  {
    icon: <FaClock />,
    label: "School Hours",
    lines: ["Mon – Fri: 9:00 AM – 4:10 PM", "Sat: Extra-curricular activities"],
    color: "#257a8f",
  },
];

const QueryForm = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const schema = yup.object().shape({
    subject: yup.string().required("Subject is required"),
    name: yup.string().required("Name is required"),
    email: yup.string().email("Enter valid email").required("Email is required"),
    mobile: yup
      .string()
      .matches(/^[0-9]{10}$/, "Enter valid 10 digit number")
      .required("Mobile is required"),
    message: yup.string().required("Message is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    setLoading(true);
    setSuccess("");
    setError("");
    try {
      await emailjs.send(
        "service_kew8z6j",
        "template_nrpzyjf",
        { ...values, to_email: "rekhasj21@gmail.com" },
        "XJK74PlnQ1if7IzRA"
      );
      setSuccess("Message sent successfully! We'll get back to you soon.");
      resetForm();
    } catch {
      setError("Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div>
      {/* ── HERO ── */}
      <div style={styles.hero}>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={styles.heroTitle}
        >
          Contact Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={styles.heroSub}
        >
          We'd love to hear from you
        </motion.p>
      </div>

      {/* ── INFO STRIP ── */}
      <div style={styles.infoStrip}>
        <div style={styles.infoGrid}>
          {INFO_CARDS.map((card, i) => (
            <motion.div
              key={i}
              style={styles.infoCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.09 }}
              whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(24,55,105,0.14)" }}
            >
              <div style={{ ...styles.infoIconWrap, background: `${card.color}18`, color: card.color }}>
                {card.icon}
              </div>
              <div style={{ minWidth: 0, flex: 1 }}>
                <p style={styles.infoLabel}>{card.label}</p>
                {card.lines.map((line, li) =>
                  card.href && li === 0 ? (
                    <a key={li} href={card.href} style={{ ...styles.infoLine, color: card.color, textDecoration: "none" }}>
                      {line}
                    </a>
                  ) : (
                    <p key={li} style={styles.infoLine}>{line}</p>
                  )
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── FORM + MAP ── */}
      <div style={styles.mainSection}>
        <div style={styles.innerWrap}>
          <Row className="g-4 align-items-stretch">
            {/* Form */}
            <Col xs={12} md={6}>
              <motion.div
                style={styles.formCard}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div style={styles.formHeader}>
                  <span style={styles.formEyebrow}>Send a Message</span>
                  <h3 style={styles.formTitle}>Enquire Now</h3>
                  <p style={styles.formSub}>
                    Fill in the form and our admissions team will contact you within 24 hours.
                  </p>
                </div>

                {error && (
                  <div style={{ ...styles.alert, background: "#fff0f0", borderColor: "#f26724", color: "#c0392b" }}>
                    {error}
                  </div>
                )}
                {success && (
                  <div style={{ ...styles.alert, background: "#f0fff6", borderColor: "#1d9e75", color: "#1d7a5a" }}>
                    {success}
                  </div>
                )}

                <Formik
                  validationSchema={schema}
                  onSubmit={handleSubmit}
                  initialValues={{ subject: "", name: "", email: "", mobile: "", message: "" }}
                >
                  {({ handleSubmit, handleChange, values, touched, errors }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                      <Row>
                        <Col xs={12} sm={6}>
                          <Form.Group className="mb-3">
                            <Form.Label style={styles.label}>Your Name *</Form.Label>
                            <Form.Control
                              name="name"
                              placeholder="e.g. Rekha"
                              value={values.name}
                              onChange={handleChange}
                              isInvalid={touched.name && !!errors.name}
                              style={styles.input}
                            />
                            <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                        <Col xs={12} sm={6}>
                          <Form.Group className="mb-3">
                            <Form.Label style={styles.label}>Mobile Number *</Form.Label>
                            <Form.Control
                              name="mobile"
                              placeholder="10-digit number"
                              value={values.mobile}
                              onChange={handleChange}
                              isInvalid={touched.mobile && !!errors.mobile}
                              style={styles.input}
                            />
                            <Form.Control.Feedback type="invalid">{errors.mobile}</Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                      </Row>

                      <Row>
                        <Col xs={12} sm={6}>
                          <Form.Group className="mb-3">
                            <Form.Label style={styles.label}>Email Address *</Form.Label>
                            <Form.Control
                              name="email"
                              type="email"
                              placeholder="your@email.com"
                              value={values.email}
                              onChange={handleChange}
                              isInvalid={touched.email && !!errors.email}
                              style={styles.input}
                            />
                            <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                        <Col xs={12} sm={6}>
                          <Form.Group className="mb-3">
                            <Form.Label style={styles.label}>Subject *</Form.Label>
                            <Form.Control
                              name="subject"
                              placeholder="e.g. Admission Enquiry"
                              value={values.subject}
                              onChange={handleChange}
                              isInvalid={touched.subject && !!errors.subject}
                              style={styles.input}
                            />
                            <Form.Control.Feedback type="invalid">{errors.subject}</Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                      </Row>

                      <Form.Group className="mb-4">
                        <Form.Label style={styles.label}>Message *</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={4}
                          name="message"
                          placeholder="Tell us about your enquiry..."
                          value={values.message}
                          onChange={handleChange}
                          isInvalid={touched.message && !!errors.message}
                          style={{ ...styles.input, resize: "vertical" }}
                        />
                        <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
                      </Form.Group>

                      <Button
                        type="submit"
                        disabled={loading}
                        style={styles.submitBtn}
                        className="w-100"
                      >
                        {loading ? (
                          <><Spinner size="sm" animation="border" className="me-2" /> Sending…</>
                        ) : (
                          "Send Message →"
                        )}
                      </Button>
                    </Form>
                  )}
                </Formik>

                {/* WhatsApp shortcut */}
                <a
                  href="https://wa.me/919952321179"
                  target="_blank"
                  rel="noreferrer"
                  style={styles.waLink}
                >
                  <FaWhatsapp style={{ fontSize: "18px" }} />
                  Prefer WhatsApp? Chat with us directly
                </a>
              </motion.div>
            </Col>

            {/* Map */}
            <Col xs={12} md={6}>
              <motion.div
                style={styles.mapCard}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div style={styles.mapHeader}>
                  <FaMapMarkerAlt style={{ color: "#f26724", marginRight: "8px" }} />
                  <span style={{ fontWeight: 700, color: BRAND, fontSize: "15px" }}>
                    Find Us on the Map
                  </span>
                </div>
                <div style={styles.mapWrap}>
                  <iframe
                    title="school-location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.6527816173516!2d78.31931567358465!3d12.736059820001609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3badb9f388742ccb%3A0xdf71c028cec3e5d7!2sHawkings%20International%20school!5e0!3m2!1sen!2sin!4v1776049083110!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  />
                </div>
                <div style={styles.mapFooter}>
                  <p style={{ margin: 0, fontSize: "13px", color: "#516170" }}>
                    Near D.K.Palli, Kuppam Municipality, Chittoor Dt., A.P. – 517 425
                  </p>
                  <a
                    href="https://maps.google.com/?q=Hawkings+International+school+Kuppam"
                    target="_blank"
                    rel="noreferrer"
                    style={styles.directionsLink}
                  >
                    Get Directions →
                  </a>
                </div>
              </motion.div>
            </Col>
          </Row>
        </div>
      </div>

      <FooterBanner />
    </div>
  );
};

export default QueryForm;

const styles = {
  hero: {
    height: "clamp(180px, 24vw, 260px)",
    backgroundImage: `linear-gradient(rgba(15,76,92,0.65), rgba(0,0,0,0.55)), url(${independence})`,
    backgroundAttachment: "scroll",
    backgroundPosition: "center",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "0 20px",
  },
  heroTitle: {
    fontSize: "clamp(28px, 5vw, 48px)",
    fontWeight: 800,
    color: "#fff",
    margin: 0,
  },
  heroSub: {
    fontSize: "clamp(13px, 2vw, 16px)",
    color: "rgba(255,255,255,0.9)",
    margin: "10px 0 0",
    fontWeight: 300,
  },
  infoStrip: {
    background: "#fff",
    borderBottom: "1px solid #eef2f8",
    padding: "32px 20px",
  },
  infoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(220px, 100%), 1fr))",
    gap: "16px",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  infoCard: {
    display: "flex",
    alignItems: "flex-start",
    gap: "14px",
    background: "#f8fafc",
    borderRadius: "14px",
    padding: "18px 16px",
    border: "1px solid #eaf0f8",
    transition: "box-shadow 0.3s, transform 0.3s",
  },
  infoIconWrap: {
    width: "42px",
    height: "42px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
    flexShrink: 0,
  },
  infoLabel: {
    fontSize: "10px",
    fontWeight: 700,
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    color: "#9ba8b8",
    margin: "0 0 4px",
  },
  infoLine: {
    fontSize: "13px",
    fontWeight: 500,
    color: "#2d3a4a",
    margin: "0 0 2px",
    lineHeight: 1.5,
    display: "block",
    wordBreak: "break-word",
    overflowWrap: "break-word",
  },
  mainSection: {
    background: "#f2f5fb",
    padding: "48px 20px 60px",
  },
  innerWrap: {
    maxWidth: "1100px",
    margin: "0 auto",
  },
  formCard: {
    background: "#fff",
    borderRadius: "20px",
    padding: "32px 28px",
    boxShadow: "0 8px 32px rgba(24,55,105,0.08)",
    border: "1px solid #eaf0f8",
    height: "100%",
  },
  formHeader: {
    marginBottom: "24px",
  },
  formEyebrow: {
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: "#1d9e75",
  },
  formTitle: {
    fontSize: "clamp(20px, 3vw, 26px)",
    fontWeight: 800,
    color: BRAND,
    margin: "6px 0 8px",
  },
  formSub: {
    fontSize: "13px",
    color: "#7a8b99",
    margin: 0,
    lineHeight: 1.6,
  },
  alert: {
    padding: "12px 16px",
    borderRadius: "10px",
    border: "1px solid",
    fontSize: "14px",
    marginBottom: "16px",
    fontWeight: 500,
  },
  label: {
    fontSize: "12px",
    fontWeight: 700,
    color: "#3d4a5c",
    letterSpacing: "0.3px",
    marginBottom: "6px",
  },
  input: {
    borderRadius: "10px",
    border: "1.5px solid #dde6f0",
    fontSize: "14px",
    padding: "10px 14px",
    color: "#2d3a4a",
    background: "#fafcff",
    outline: "none",
  },
  submitBtn: {
    background: `linear-gradient(135deg, ${BRAND}, #1d9e75)`,
    border: "none",
    borderRadius: "12px",
    padding: "13px",
    fontSize: "15px",
    fontWeight: 700,
    letterSpacing: "0.3px",
    cursor: "pointer",
  },
  waLink: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginTop: "16px",
    color: "#25d366",
    fontWeight: 600,
    fontSize: "14px",
    textDecoration: "none",
    justifyContent: "center",
  },
  mapCard: {
    background: "#fff",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 8px 32px rgba(24,55,105,0.08)",
    border: "1px solid #eaf0f8",
    height: "100%",
    minHeight: "460px",
    display: "flex",
    flexDirection: "column",
  },
  mapHeader: {
    padding: "16px 20px",
    borderBottom: "1px solid #eef2f8",
    display: "flex",
    alignItems: "center",
  },
  mapWrap: {
    flex: 1,
    minHeight: "320px",
  },
  mapFooter: {
    padding: "14px 20px",
    borderTop: "1px solid #eef2f8",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "8px",
  },
  directionsLink: {
    color: BRAND,
    fontWeight: 700,
    fontSize: "13px",
    textDecoration: "none",
    whiteSpace: "nowrap",
  },
};
