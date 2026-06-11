import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./FooterBanner.css";

const FooterBanner = () => {
  const navigate = useNavigate();

  return (
    <div className="common-banner-wrapper">
      <Container className="px-3 px-md-4">  {/* ✅ Responsive container padding */}
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
            className="banner-btn flex-shrink-0"
            onClick={() => navigate("/login")}
          >
            Enquire now
          </button>

        </div>


        
      </Container>
    </div>
  );
};

export default FooterBanner;