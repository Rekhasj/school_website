import { useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import training from '../../assets/Photos/Training/1.jpeg'
import training2 from '../../assets/Photos/Training/2.jpeg'
import training3 from '../../assets/Photos/Training/3.jpeg'
import training4 from '../../assets/Photos/Training/4.jpeg'
import './StaffSection.css'

const staffData = [
  {
    name: "Mr. Joseph Miller V",
    role: "Principal",
    image: "https://via.placeholder.com/300",
    bio: "10+ years of experience in academic leadership and CBSE curriculum."
  },
  {
    name: "Mr. Ravi Kumar",
    role: "Mathematics Teacher",
    image: "https://via.placeholder.com/300",
    bio: "Expert in conceptual learning and Olympiad training."
  },
  {
    name: "Ms. Sneha",
    role: "Science Teacher",
    image: "https://via.placeholder.com/300",
    bio: "Hands-on experimental learning specialist."
  }
];

const trainingData = [
  {
    title: "CBSE Training Workshop",
    year: "2025",
    desc: "Focused on modern pedagogy and NEP guidelines.",
    image: training
  },
  {
    title: "Digital Learning Program",
    year: "2025",
    desc: "Smart boards & digital tools training.",
    image: training2
  },
  {
    title: "Student Psychology Session",
    year: "2025",
    desc: "Understanding child behavior & engagement.",
    image: training3
  }
];

export const TrainingSection = () => {
  return (
    <div>
      <h2 className="heading mb-5">Workshops & Training</h2>

      <div className="timeline">
        {trainingData.map((item, i) => (
          <motion.div
            key={i}
            className={`timeline-item ${i % 2 === 0 ? "left" : "right"}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="timeline-content">
              <img src={item.image}  />
              <h5>{item.title}</h5>
              {/* <span>{item.year}</span> */}
              <p>{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export const StaffSection = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <h2  className="heading mb-4">Our Faculty</h2>

      <Row>
        {staffData.map((staff, i) => (
          <Col md={4} key={i} className="mb-4">
            <motion.div
              className="staff-card"
              whileHover={{ y: -10 }}
              onClick={() => setSelected(staff)}
            >
              <img src={staff.image} alt="" />
              <div className="staff-overlay">
                <h5>{staff.name}</h5>
                <p>{staff.role}</p>
              </div>
            </motion.div>
          </Col>
        ))}
      </Row>

      {/* MODAL */}
      <Modal show={!!selected} onHide={() => setSelected(null)} centered>
        <Modal.Body className="text-center">
          {selected && (
            <>
              <img src={selected.image} className="staff-modal-img" />
              <h4 className="mt-3">{selected.name}</h4>
              <p className="text-muted">{selected.role}</p>
              <p>{selected.bio}</p>
            </>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};




