import React, { useEffect, useState } from "react";
import Slider from "../components/Slider";
import { Container, Row, Col, Button, Nav } from "react-bootstrap";
import Marquee from "../components/Common/Marquee";
import Activity from "../components/Activity/Activity";
import Video from "../assets/video/video_2.mp4"
import "../styles/Home.css";
import { Link } from "react-router-dom";
import Result from "../components/Common/Result";
import Insta from "../components/Common/Insta";
import InstagramSlider from "../components/Common/InstagramSlider";
import CtaSlider from "../components/Common/CtaSlider";
import Director from "../components/Message/Director";
import ParentsFB from "../components/Feedback/ParentsFB";
import StudentsFB from "../components/Feedback/StudentsFB";

import Disclosure from '../data/disclosure.pdf'
import LabSection from "../components/Facilities/LabSection";
import FooterBanner from "../components/Common/FooterBanner";
import TeacherTraining from "../components/TT/TeacherTraining";
import AllenCollab from "../components/Common/AllenCollab";

const Home = () => {

  const [showVideo, setShowVideo] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowVideo(false); // hide after scroll
      } else {
        setShowVideo(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* <div className="bg-dark text-white py-3">
        <Container>
          <Row className="align-items-center">
            <Col md={9} className="d-flex flex-wrap align-items-center">
              <i className="fas fa-phone-alt me-2"></i> (+91) 99523 21179 &nbsp;
              | &nbsp;
              <i className="fas fa-envelope me-2"></i>{" "}
              hawkingsintlschool@gmail.com
            </Col>
            <Col md={3} className="text-md-end text-center">
              <a
                href="https://www.facebook.com/Hawkings-International-school-106662441994500/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white me-3"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-white me-3">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fab fa-instagram"></i>
              </a>
            </Col>
          </Row>
        </Container>
      </div> */}


      <div 
      className={`video-hero ${showVideo ? "show" : "hide"}`} 
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="video-bg"
        >
          <source src={Video} type="video/mp4" />
        </video>




        {/* <Container className="my-5">
          <Row className="text-center">
            <Col md={3}>
              <h5>100% Results</h5>
              <p>CBSE Board 2024-25</p>
            </Col>
            <Col md={3}>
              <h5>Nursery to 10th</h5>
              <p>Admissions Open</p>
            </Col>
            <Col md={3}>
              <h5>Transport</h5>
              <p>Facility Available</p>
            </Col>
            <Col md={3}>
              <h5>CBSE Affiliated</h5>
              <p>Aff No: 130722</p>
            </Col>
          </Row>
        </Container> */}



        {/* <Container className="my-5 text-center">
          <h3 className="fw-bold">Academic Excellence</h3>
          <p className="text-muted">
            100% Result in 10th & 12th CBSE Board Exam 2024-25
          </p>
        </Container> */}


        {/* Overlay Content */}
        <div className="video-overlay">
          <h1>Hawkings International School</h1>

          <p>
            {/* Shaping Young Minds for a Bright Future */}
            Building Tomorrow’s Leaders

            {/* Where Learning Begins with Care */}
          </p>



          <h5 className="mt-2">
            {/* A Caring Place for Learning and Growth */}

            {/* We create a safe and happy learning environment */}
            Supporting Every Child to Grow and Shine


          </h5>
          {/* <h5 className="mt-3">
            Helping students succeed in studies and life
          </h5> */}

          <p className="mt-2">
            Admissions Open | CBSE Curriculum
          </p>

          <Link to="/login" >

            <Button variant="success" className="mt-3">

              Experience Hawkings

            </Button>
          </Link>

        </div>
      </div>

      {/* CBSE Mandatory Disclosure Button */}
      {/* <div className="bg-light pt-1 text-center">
        <Container>
          <Row className="justify-content-center">
            <Col sm={12}>
              <Button
                variant="danger"
                size="lg"
                className="rounded-pill px-4 py-2"
                onClick={() => window.open(Disclosure, "_blank")}
              >
                CBSE MANDATORY DISCLOSURE
              </Button>
            </Col>
          </Row>
        </Container>
      </div> */}

      {/* Moving Marquee Text */}
      <Marquee displayText={"ADMISSIONS OPEN FOR ACADEMIC YEAR 2026-27 FOR NURSERY TO GRADE X."} />
      <Slider />

{/* <Container className="my-5 ">
  <Row 
  className="justify-content-center"
  >
    <Col md={12} >
      <div className="admission-card">
        <img
          src="https://www.hawkingschool.com/img/admission-updt.jpg"
          className="img-fluid"
          alt="admission-banner"
        />
      </div>
    </Col>
  </Row>
</Container> */}

<div className="container-fluid px-5 my-5">
  <Row className="g-0">
    <Col md={12}>
      <div className="admission-card">
        <img
          src="https://www.hawkingschool.com/img/admission-updt.jpg"
          className="img-fluid w-100"
          alt="admission-banner"
        />
      </div>
    </Col>
  </Row>
</div>

      {/* <Container className="my-5">
        <Row className="text-center">
          <Col md={3}>
            <h5>100% Results</h5>
            <p>CBSE Board 2024-25</p>
          </Col>
          <Col md={3}>
            <h5>Nursery to 10th</h5>
            <p>Admissions Open</p>
          </Col>
          <Col md={3}>
            <h5>Transport</h5>
            <p>Facility Available</p>
          </Col>
          <Col md={3}>
            <h5>CBSE Affiliated</h5>
            <p>Aff No: 130722</p>
          </Col>
        </Row>
      </Container> */}



      <Result />



      {/* <Container className="my-5">
        <h3 className="text-center fw-bold mb-4">Our Toppers</h3>
        <Row>
          <Col md={3} className="text-center">
            <img src="/images/topper1.jpg" className="img-fluid rounded" />
            <h6>1st Rank</h6>
            <p>V.D. Nikhil Vishnu</p>
          </Col>
        </Row>
      </Container> */}


      <Activity />

      {/* <Container className="my-5 text-center">
        <h3 className="fw-bold">Our Facilities</h3>
        <p>Modern classrooms, labs, and playground</p>
        <Button variant="primary" href="/facilities">
          View More
        </Button>
      </Container> */}
<LabSection />
      <InstagramSlider />



      {/* <Container className="my-5 text-center">
        <h3 className="fw-bold">What Parents Say</h3>
        <p>"Best school with quality education and care."</p>
      </Container> */}


      <ParentsFB />

      <StudentsFB />


      <CtaSlider />

      {/* Director's Message Section */}
      {/* <Director /> */}
      <TeacherTraining />




      <FooterBanner />

      {/* <div
        className="admission-cta text-white text-center py-4"
      >
        <h4 className="mb-2 fw-bold">
          Admissions Open 2026–27
        </h4>

        <p className="mb-3">
          Enroll your child today and secure a bright future
        </p>

        <Button variant="light" className="px-4">
          <span className="animated-button">
          Apply Now
          </span>
        </Button>
      </div> */}

      {/* <div className="text-white text-center py-4" style={{ backgroundColor: "rgba(53, 79, 140, 0.9)" }}
      >
        <h4>Admissions Open 2026-27</h4>
        <Button variant="light">Apply Now</Button>
      </div> */}
    </div >
  );
};

export default Home;
