import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./FooterBanner.css";

const FooterBanner = () => {
  const navigate = useNavigate();

  return (
    <div className="common-banner-wrapper">
      <Container>
        <div className="common-banner-card">
          
          <div className="banner-text">
            <h2>
              Talk to our Admission Counsellors               and explore your options.
            </h2>
                     <p className="mb-3">
                  Enroll your child today and secure a bright future
                </p>
       
            <p className="admission-text">Admissions Open 2026–27</p>
          </div>

          <button
            className="banner-btn"
            onClick={() => navigate("/contact")}
          >
            Enquire now
          </button>

        </div>


        
      </Container>
    </div>
  );
};

export default FooterBanner;