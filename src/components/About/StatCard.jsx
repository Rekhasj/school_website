import React from 'react'
import { Col, Row } from 'react-bootstrap';
import useCountUp from '../../hook/useCountUp';
import { motion, AnimatePresence } from "framer-motion";




// ── Single stat card ──
const StatCard = ({ number, suffix, label, index }) => {
  const { count, ref } = useCountUp(number, 1800);

  return (
    <Col xs={6} md={3} className="mb-3">
      <motion.div
        ref={ref}
        style={styles.statCard}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.15, duration: 0.5 }}
        whileHover={{ y: -6, boxShadow: "0 12px 28px rgba(0,0,0,0.12)" }}
      >
        {/* Animated number */}
        <h2 style={{
          fontSize: "clamp(24px, 4vw, 36px)",
          fontWeight: 800,
          color: "rgb(24, 55, 105)",
          margin: 0,
          lineHeight: 1.1,
        }}>
          {count}{suffix}
        </h2>

        {/* Label */}
        <p style={{
          margin: "6px 0 0",
          fontSize: "clamp(12px, 1.8vw, 14px)",
          color: "#666",
          fontWeight: 500,
        }}>
          {label}
        </p>
      </motion.div>
    </Col>
  );
};



const styles = {
      statCard: {
    background: "white",
    padding: "20px",
    borderRadius: "16px",
    textAlign: "center",
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
    marginBottom: "16px",
  },

}
export default StatCard