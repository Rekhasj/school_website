import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AOS from "aos";

import './Message.css';

const Director = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true
        });

        setTimeout(() => {
            AOS.refresh();
        }, 500);
    }, []);
    return (

        <Container className="my-5">
            <Row className="align-items-center ">
                {/* Text Content */}
                {/* <Col md={6} sm={12} className="pr-md-4"> */}
                <Col md={6} sm={12} data-aos="fade-left">
                    <div className="mb-4">
                        <h4 className="fw-bold text-dark">Director's Message</h4>
                        <div className="section-heading-line-left mb-3"></div>
                    </div>
                    <p className="text-dark">
                        <strong>Dear Parents,</strong>
                        <br />
                        With great pleasure, honor, and responsibility, we have
                        implemented a <strong>360-degree education</strong> system for the
                        future generation. This includes quality education, various
                        sports, and extracurricular activities to ensure the holistic
                        development of our students.
                    </p>
                    <p className="text-dark">
                        We emphasize innovative and creative learning while instilling
                        moral and traditional values. This approach equips students with
                        the skills needed to lead a <strong>successful life</strong>.
                    </p>
                    <p className="text-dark">
                        Hawkings School is designed with parents' aspirations in mind,
                        making their dreams for their children a reality.
                    </p>
                    <p className="text-dark fs-4 fw-bold text-center">
                        The Vision of a Parent is our Mission
                    </p>
                </Col>

                {/* Image & Director Info */}
                <Col md={6} sm={12} data-aos="fade-right">
                    <img
                        src="https://www.hawkingschool.com/img/shabeer.webp"
                        alt="Director"
                        className="img-fluid rounded shadow-lg"
                        style={{ width: "100%", maxWidth: "400px" }}
                    />
                    <h4 className="mt-3">B.C. SHABIR</h4>
                    <h6 className="text-muted">B.Tech., M.B.A., LL.B.</h6>
                    <h5 className="fw-bold text-primary">DIRECTOR</h5>
                </Col>
            </Row>
        </Container>

    );
}

export default Director;