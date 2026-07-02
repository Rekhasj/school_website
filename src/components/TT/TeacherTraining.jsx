import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import "./TeacherTraining.css";
import training from '../../assets/Photos/Training/1.jpeg'

const trainingPoints = [
  "Regular CBSE-oriented teacher training programs",
  "Workshops on modern teaching methodologies",
  "Digital classroom & smart teaching tools training",
  "Student psychology & classroom management sessions",
];

const TeacherTraining = () => {
  return (
    <section className="training-section">
      <Container>
        <Row className="align-items-center">

          {/* LEFT CONTENT */}
          <Col md={5}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="training-tag">Teacher Excellence</p>

              <h2 className="training-title">
                Empowering Teachers for Better Learning
              </h2>

              <p className="training-desc">
                Our educators undergo continuous professional development
                programs to stay updated with modern teaching techniques,
                ensuring every child receives the best learning experience.
              </p>

              <motion.ul
                className="training-list"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
              >
                {trainingPoints.map((item, i) => (
                  <motion.li
                    key={i}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
                    }}
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </Col>

          {/* RIGHT IMAGE */}
          <Col md={7}>
            <motion.div
              className="training-img-wrap"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={training}
                alt="teacher training"
                className="training-img"
              />
            </motion.div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default TeacherTraining;