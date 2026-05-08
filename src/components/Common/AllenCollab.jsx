import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import allenLogo from "../../assets/Photos/allen-logo.png";
import hawLogo from "../../assets/Photos/haw_logo.png";
import { useEffect, useState } from "react";


const features = [
  "🚀 NEET & JEE Coaching",
  "👨‍🏫 Expert Faculty",
  "📊 Performance Tests",
  "💻 Digital Learning",
];

const AllenCollab = () => {

  const [active, setActive] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setActive((prev) => (prev + 1) % features.length);
  }, 2000);

  return () => clearInterval(interval);
}, []);
  return (
    <div className="allen-premium">
      <Container>
        <motion.div
  className="allen-card-premium elite-card"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9 }}
  whileHover={{ rotateX: 4, rotateY: -4 }}
>
        {/* <div className="allen-card-premium"> */}
          <div className="border-glow"></div>

          <Row className="align-items-center">

            {/* LEFT SIDE → LOGOS */}
            <Col md={5}>
              <motion.div
                className="allen-logos side"
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <img src={hawLogo} alt="Hawkings" className="logo hawk" />
                {/* <span className="cross">×</span> */}
                <div className="cross">Powered By</div>
                <img src={allenLogo} alt="Allen" className="logo allen" />
              </motion.div>
            </Col>

            {/* RIGHT SIDE → CONTENT */}
            <Col md={7}>
              <motion.div
                className="allen-content"
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <strong className="allen-tag">
                  Official Academic Collaboration
                </strong>


                <h2>HAWKINGS × ALLEN</h2>

                <p className="allen-tagline primary">
                  Shaping the Future with Confidence
                </p>

                <p className="allen-tagline secondary">
                  Built on Trust • Proven by Results
                </p>

                <p>
                  Combining school education with India’s top coaching ecosystem
                  for competitive exam excellence.
                </p>

           <div className="allen-features">
  {features.map((item, index) => (
    <span
      key={index}
      className="feature-chip"
      animate={{
        scale: active === index ? 1.05 : 1,
        opacity: active === index ? 1 : 0.5,
      }}
      transition={{ duration: 0.4 }}
    >
      {item}
    </span>
  ))}
</div>

                <a
                  href="https://www.allen.ac.in/"
                  target="_blank"
                  className="allen-btn"
                >
                  Explore ALLEN →
                </a>
              </motion.div>
            </Col>

          </Row>
        {/* </div> */}
        </motion.div>
      </Container>
    </div>
  );
};

export default AllenCollab;