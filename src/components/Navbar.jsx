import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { colors } from "../data/colors";

import Disclosure from '../data/disclosure.pdf'
import './Navbar.css'

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Navbar expand="lg"
      expanded={expanded}

      // bg="light"
      variant="dark" fixed="top"
      style={{
        backgroundColor: colors.blue,
        // opacity: 0.95
        
      }}
      onToggle={(isOpen) => setExpanded(isOpen)}

    >
      {/* <Container className="p-0"> */}
      <Container fluid className="px-4 m-1">
        {/* Left-aligned logo */}
        {/* <Navbar.Brand as={Link} to="/">
          <img
            src="https://www.hawkingschool.com/img/logos/logo_footer1.png"
            // src="https://www.hawkingschool.com/img/logos/HAW.png"
            alt="Hawkings School"
            // className="main-logo"
            width={60}
          />


        </Navbar.Brand> */}

        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src="https://www.hawkingschool.com/img/logos/logo_footer1.png"
            alt="Hawkings School"
            width={50}
          />

          <div className="ms-2 " style={{ color: '#cfc8c8' }}>
            <div className="brand-name">
              Hawkings International School
            </div>
            <div className="brand-sub">
              CBSE Affiliated,              Affiliation No: 130722

            </div>
          </div>
        </Navbar.Brand>

        {/* Toggle button for mobile view */}
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          {/* Right-aligned navigation links */}
          <Nav className="ms-auto custom-nav" >
            <Nav.Link    className="nav-item-custom"
 as={Link} to="/" onClick={() => setExpanded(false)}>
              Home
            </Nav.Link>
            <Nav.Link   className="nav-item-custom"
 as={Link} to="/about" onClick={() => setExpanded(false)}>
              About
            </Nav.Link>
            <Nav.Link    className="nav-item-custom"
 as={Link} to="/facilities" onClick={() => setExpanded(false)}>
              Facilities
            </Nav.Link>
            <Nav.Link    className="nav-item-custom"
 as={Link} to="/gallery" onClick={() => setExpanded(false)}>
              Gallery
            </Nav.Link>
            {/* <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link> */}


<Nav.Link  className="nav-item-custom" as={Link} to="/academics" onClick={() => setExpanded(false)}>
Academics
            </Nav.Link>
         
            {/* <NavDropdown title="Academics" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/kindergarten" onClick={() => setExpanded(false)}>
                Kinder Garden
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/cbse" onClick={() => setExpanded(false)}>
                CBSE
              </NavDropdown.Item> */}
              {/* <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/separated">
                Separated Link
              </NavDropdown.Item> */}
            {/* </NavDropdown> */}
            <Nav.Link className="nav-item-custom"  as={Link} to="/news" onClick={() => setExpanded(false)}>
              News And Events
            </Nav.Link>

{/* <Nav.Link
  style={{ fontWeight: "bold", color: colors.lightGreen }}
  onClick={() => {
    window.open(Disclosure, "_blank");
    setExpanded(false);
  }}
>
  Mandatory
   Disclosure
</Nav.Link> */}
            <Nav.Link  className="nav-item-custom" as={Link} to="/login" onClick={() => setExpanded(false)}>
              Contact
            </Nav.Link>
            <Nav.Link  className="nav-item-custom" as={Link} to="/faq" onClick={() => setExpanded(false)}>
              FAQ's
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
