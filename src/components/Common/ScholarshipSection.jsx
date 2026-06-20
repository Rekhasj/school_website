import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";

const rewards = [
  { rank: "1st Rank", value: "50%", icon: "🥇", color: "#FFD700" },
  { rank: "2nd Rank", value: "25%", icon: "🥈", color: "#C0C0C0" },
  { rank: "3rd Rank", value: "15%", icon: "🥉", color: "#CD7F32" },
];

const ScholarshipSection = () => {
  return (
    <div className="p-2 text-center" 
    style={{ background: "#f8f9fa" }}
    >
      <Container>
        <h3 className="fw-bold mb-2">Merit Scholarship</h3>
        <p className="mb-4">
          Fee reimbursement for top-performing students in each class
        </p>

        <Row>
          {rewards.map((item, index) => (
            <Col md={4} key={index}>
              <motion.div
                className="p-4 rounded shadow scholarship-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.08 }}
              >
                {/* Trophy Emoji */}
                <div
                  style={{
                    fontSize: "40px",
                    marginBottom: "10px",
                  }}
                >
                  {item.icon}
                </div>

                <h4 className="fw-bold">{item.rank}</h4>

                <h1 className="display-4" style={{ color: item.color }}>
                  {item.value}
                </h1>

                <p>Fee Reimbursement</p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ScholarshipSection;