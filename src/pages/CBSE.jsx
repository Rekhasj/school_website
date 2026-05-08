import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

const CBSE = () => {
  return (
    <Container fluid className="py-5 px-3 px-md-5 bg-light">
      {/* Page Title */}
      <Row className="text-center mb-2">
        <Col>
          <h1 className="text-uppercase fw-bold display-5 text-primary">
            CBSE
          </h1>
        </Col>
      </Row>

      {/* Introduction Section */}
      <Row className="justify-content-center mb-4">
        <Col lg={10}>
          <Card className="shadow-sm p-4 border-0 bg-white">
            <Card.Body>
              <p className="fs-5 fw-semibold text-secondary text-center">
                “The CBSE (Central Board of Secondary Education) envisions a
                robust, vibrant, and holistic school education that will
                engender excellence in every sphere of human endeavor...”
              </p>
              <p className="text-muted text-center">
                Grades I to V follow a unique thematic integrated
                transdisciplinary approach across all subject areas. Our
                programme emphasizes traditional education while adapting to
                modern educational needs.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Subjects Offered */}
      <Row className="text-center">
        <Col>
          <h3 className="text-uppercase fw-bold text-secondary">
            Subjects Offered
          </h3>
        </Col>
      </Row>

      <Row className="mt-1 g-4 justify-content-center">
        <Col md={5}>
          <Card className="p-4 shadow-sm border-0 h-100">
            <h4 className="fw-bold text-primary mb-3">Grade I – V</h4>
            <ul className="list-unstyled">
              <li>📘 English</li>
              <li>📝 Second Language: Hindi</li>
              <li>🔤 Third Language: Telugu/Tamil/Kannada</li>
              <li>🌱 EVS</li>
              <li>➗ Mathematics</li>
              <li>💻 Computer Science</li>
            </ul>
          </Card>
        </Col>
        <Col md={5}>
          <Card className="p-4 shadow-sm border-0 h-100">
            <h4 className="fw-bold text-primary mb-3">Grade VI – VIII</h4>
            <ul className="list-unstyled">
              <li>📘 English</li>
              <li>📝 Second Language: Hindi</li>
              <li>🔤 Third Language: Telugu/Tamil/Kannada</li>
              <li>🧪 Science (Physics, Chemistry, Biology)</li>
              <li>📖 Social Studies (History, Civics, Geography)</li>
              <li>➗ Mathematics</li>
              <li>💻 Computer Science</li>
            </ul>
          </Card>
        </Col>
      </Row>

      <Row className="mt-2 g-4 justify-content-center">
        <Col md={5}>
          <Card className="p-4 shadow-sm border-0 h-100">
            <h4 className="fw-bold text-primary mb-3">Grade IX – X</h4>
            <ul className="list-unstyled">
              <li>📘 English</li>
              <li>📝 Second Language: Hindi</li>
              <li>🧪 Science (Physics, Chemistry, Biology)</li>
              <li>📖 Social Studies (History, Civics, Geography)</li>
              <li>➗ Mathematics</li>
            </ul>
          </Card>
        </Col>
        {/* <Col md={5}>
          <Card className="p-4 shadow-sm border-0 h-100">
            <h4 className="fw-bold text-primary mb-3">Grade XI – XII</h4>
            <div className="mb-3">
              <h5 className="fw-bold text-success">Science Group</h5>
              <ul className="list-unstyled">
                <li>📘 English (Compulsory)</li>
                <li>⚛️ Physics</li>
                <li>🧪 Chemistry</li>
                <li>🔬 Biology</li>
                <li>➗ Mathematics</li>
                <li>💻 Computer Science</li>
              </ul>
            </div>
            <div>
              <h5 className="fw-bold text-success">Commerce Group</h5>
              <ul className="list-unstyled">
                <li>📘 English</li>
                <li>📊 Business Studies</li>
                <li>📑 Accountancy</li>
                <li>📈 Economics</li>
                <li>➗ Mathematics</li>
                <li>💻 Computer Science</li>
              </ul>
            </div>
          </Card>
        </Col> */}
      </Row>

      {/* Recognition */}
      <Row className="text-center mt-3 mb-3">
        <Col>
          <h3 className="text-uppercase fw-bold text-secondary">
            Recognition in India
          </h3>
        </Col>
      </Row>
      <Row className="justify-content-center mb-3">
        <Col md={10}>
          <Card className="p-4 shadow-sm border-0 bg-white">
            <p className="text-muted">
              Our school is affiliated with the Central Board of Secondary
              Education, New Delhi.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <Button
                variant="outline-primary"
                href="http://www.cbse.nic.in/"
                target="_blank"
              >
                🌐 CBSE Website
              </Button>
              {/* <Button variant="outline-success" href="#" target="_blank">
                📜 CBSE Documents
              </Button> */}
            </div>
          </Card>
        </Col>
      </Row>

      {/* Academic Resources */}
      {/* <Row className="text-center mb-3">
        <Col>
          <h3 className="text-uppercase fw-bold text-secondary">
            Academic Resources
          </h3>
        </Col>
      </Row>
      <Row className="justify-content-center mb-5">
        <Col md={10}>
          <Card className="p-4 shadow-sm border-0 bg-white">
            <h5>
              <a href="#" className="text-decoration-none">
                📅 Academic Calendar (Grade 1-12)
              </a>
            </h5>
            <h5>
              <a href="#" className="text-decoration-none">
                📜 Timetable (Grade 1-12)
              </a>
            </h5>
            <h5>
              <a href="#" className="text-decoration-none">
                📖 Year Plan (Grade 1-12)
              </a>
            </h5>
          </Card>
        </Col>
      </Row> */}
    </Container>
  );
};

export default CBSE;
