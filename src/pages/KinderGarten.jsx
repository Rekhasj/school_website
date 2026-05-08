import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Kindergarten = () => {
  return (
    <Container className="py-5">
      {/* Top Section with Background Image */}
      <Row
        style={{
          backgroundImage:
            "url('https://www.hawkingschool.com/img/media1/8WhatsApp Image 2023-01-19 at 4.12.03 PM.webp.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          padding: "100px 100px",
          color: "white",
          textShadow: "1px 1px 2px rgba(0,0,0,0.7)",
          borderRadius: "10px",
        }}
        className="mb-5"
      >
        <Col>
          <h3 className="text-uppercase text-center pt-3">Kindergarten</h3>
          <p className="text-center">
            TIPS Kindergarten follows an integrated approach of early years
            learning for children between ages 1 ½ to 5 ½ years.{" "}
            <strong>
              Our KG programme is aligned with the CBSE national curriculum and
              effectively combines Play-Way and Montessori techniques.
            </strong>{" "}
            The world today poses numerous challenges, and traditional teaching
            methods may no longer be adequate. Our goal is to nurture children’s
            natural curiosity and passion for learning.
          </p>
        </Col>
      </Row>

      {/* Kindergarten Levels */}

      <h3 className="text-uppercase text-center mt-5">
        TIPS PRESCHOOL COMPRISES
      </h3>
      <Row className="text-center">
        <Col md={4} sm={12} className="mb-4">
          <div className="featured-item">
            <img
              src="https://tipserodecbse.org/wp-content/uploads/2020/11/icon-prekg.png"
              alt="PREKG"
              className="img-fluid"
            />
            <h4>PREKG</h4>
            <p>Age 3+ at the start of an academic year</p>
          </div>
        </Col>
        <Col md={4} sm={12} className="mb-4">
          <div className="featured-item">
            <img
              src="https://tipserodecbse.org/wp-content/uploads/2020/11/icon-kg.png"
              alt="KG 1"
              className="img-fluid"
            />
            <h4>KG 1</h4>
            <p>Age 4+ at the start of an academic year</p>
          </div>
        </Col>
        <Col md={4} sm={12} className="mb-4">
          <div className="featured-item">
            <img
              src="https://tipserodecbse.org/wp-content/uploads/2020/11/icon-kg2.png"
              alt="KG 2"
              className="img-fluid"
            />
            <h4>KG 2</h4>
            <p>Age 5+ at the start of an academic year</p>
          </div>
        </Col>
      </Row>

      {/* Overview & Curriculum */}
      <h3 className="text-uppercase text-center mt-5">
        OVERVIEW AND CURRICULUM
      </h3>

      <Row className="post-parallax parallax-prekg text-center py-5">
        <Col>
          <h3 className="light-txt text-uppercase">PRE KG</h3>
          <p>
            PreKG at TIPS starts with acclimatising and familiarising children
            with their new daily environment at school. After children settle
            in, which usually takes up to 3 weeks, they are introduced to EPL
            (Exercise of practical life) and sensorial materials. Apart from
            that children also spend time with open-ended materials which
            include materials from nature and also blocks. Nature walks on
            campus and collection of materials from nature is part of the
            regular curriculum. Rhyme time involves finger rhymes and also
            regular kindergarten themed songs. During circle time there is a lot
            of focus on children moving around in animal movements, etc.
          </p>
          <Button variant="outline-dark" href="">
            Learn More
          </Button>
        </Col>
      </Row>

      <Row className="post-parallax parallax-prekg text-center py-2">
        <Col>
          <h3 className="light-txt text-uppercase">JR KG</h3>
          <p>
            Jr KG at TIPS is marked by aggregate reinforcement of all that was
            introduced in PreKG along with a formal introduction to alphabet
            sounds and numbers through tracing using Montessori materials and
            small movables. Tracing is important because children are still very
            sensitive to touch till about 3 ½ to 4 years of age. Therefore, be
            it letters of the alphabet or numbers they can assimilate sensorial
            and muscular memory impressions. The rhymes and stories at circle
            time get a little more vocabulary-rich and impromptu role playing
            based on stories narrated are encouraged to bring about confidence
            and social interaction skills in children.
          </p>
          <Button variant="outline-dark" href="">
            Learn More
          </Button>
        </Col>
      </Row>

      <Row className="post-parallax parallax-prekg text-center py-5">
        <Col>
          <h3 className="light-txt text-uppercase">SR KG</h3>
          <p>
            SR KG at TIPS marks the phase when children can both read and write
            alphabet, numbers and short sentences. Social interaction skills and
            conversation are developed further as children get ready to leave
            kindergarten and enter grade 1 at the end of the academic year.
            Small movables for alphabet and numbers, Montessori EPL and
            sensorial materials, outdoor play and gardening form a good part of
            the KG 2 curriculum. Circle time, rhymes, music, drama and role play
            develop the children’s confidence, speaking skills and posture.
            Storytelling becomes a little more nuanced as kids can now
            understand the differences in story narrations.
          </p>
          <Button variant="outline-dark" href="">
            Learn More
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Kindergarten;
