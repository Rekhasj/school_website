import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Form, Row, Col, Button, Spinner } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import "./Contact.css";
import { colors } from "../data/colors";
import FooterBanner from "../components/Common/FooterBanner";
import independence from '../assets/Photos/independence_day/independence_6.webp'
import { motion } from "framer-motion";


const QueryForm = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const schema = yup.object().shape({
    subject: yup.string().required("Subject is required"),
    name: yup.string().required("Name is required"),
    email: yup.string().email().required("Email is required"),
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
        "XJK74PlnQ1if7IzRA"  // publice key
      );

      setSuccess("Message sent successfully!");
      resetForm();
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
        <div>
      {/* 🔥 PARALLAX HERO */}
      <div style={styles.parallaxHero}>
        <div style={styles.overlay}>
          <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Contact Us
          </motion.h1>
          {/* <p>Inspiring Excellence • Building Futures</p> */}
        </div>
      </div>

    
    <div className="container-fluid contact-page">
      {/* <h2 className="contact-title">Contact Us</h2> */}

      <Row className="g-4" >
        {/* FORM */}
        <Col md={6}>
          <div className="form-card">
            {error && <div className="alert alert-danger">{error}</div>}
            {success && <div className="alert alert-success">{success}</div>}

            <Formik
              validationSchema={schema}
              onSubmit={handleSubmit}
              initialValues={{
                subject: "",
                name: "",
                email: "",
                mobile: "",
                message: "",
              }}
            >
              {({ handleSubmit, handleChange, values, touched, errors }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control
                          name="subject"
                          value={values.subject}
                          onChange={handleChange}
                          isInvalid={touched.subject && errors.subject}
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Mobile</Form.Label>
                        <Form.Control
                          name="mobile"
                          value={values.mobile}
                          onChange={handleChange}
                          isInvalid={touched.mobile && errors.mobile}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          name="name"
                          value={values.name}
                          onChange={handleChange}
                          isInvalid={touched.name && errors.name}
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          isInvalid={touched.email && errors.email}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      isInvalid={touched.message && errors.message}
                    />
                  </Form.Group>

                  <Button type="submit" className="w-100" disabled={loading} style={{ backgroundColor: colors.green, borderWidth: 0 }}>
                    {loading ? (
                      <Spinner size="sm" animation="border" />
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
        </Col>

        {/* GOOGLE MAP */}
        <Col md={6}>
          <div className="map-card">
            <iframe
              title="school-location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.6527816173516!2d78.31931567358465!3d12.736059820001609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3badb9f388742ccb%3A0xdf71c028cec3e5d7!2sHawkings%20International%20school!5e0!3m2!1sen!2sin!4v1776049083110!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </Col>
      </Row>

      
      <FooterBanner />
    </div>
    </div>
  );
};

export default QueryForm;


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