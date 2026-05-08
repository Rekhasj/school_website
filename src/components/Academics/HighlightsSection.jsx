import { motion } from "framer-motion";
import { HIGHLIGHTS } from "../../data/academicsData";
import "./HighlightsSection.css";

const HighlightsSection = () => {
  return (
    <div className="highlights-wrapper">
      {HIGHLIGHTS.map((section, index) => (
        <motion.div
          key={index}
          className="highlight-card"
        //   initial={{ opacity: 0, y: 60 }}
        //   whileInView={{ opacity: 1, y: 0 }}
        //   whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
        //   animate={{ y: [0, -6, 0] }} // floating effect
        //   transition={{
        //     duration: 4,
        //     repeat: Infinity,
        //     ease: "easeInOut",
        //     delay: index * 0.3,
        //   }}
          style={{
            borderTop: `4px solid ${section.color}`,
            background: `linear-gradient(135deg, #ffffff, ${section.color}15)`,
          }}
        >
          {/* Hover Glow */}
          <motion.div
            className="glow-bg"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          />

          <h3>{section.title}</h3>

          {section.items.map((item, i) => (
            <motion.div
              key={i}
              className="highlight-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <motion.span
                className="icon"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              >
                ⚡
              </motion.span>
              {item}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export default HighlightsSection;