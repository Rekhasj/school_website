import { useState } from "react";
import { Container } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import "./Academics.css";
import ScholarshipSection from "../components/Common/ScholarshipSection";
import DetailView from "../components/Academics/DetailView";
import CardView from "../components/Academics/CardView";
import { SECTIONS } from "../data/academicsData";
import HighlightsSection from "../components/Academics/HighlightsSection";
import TopHighlightTicker from "../components/Academics/TopHighlightTicker ";
import independence from '../assets/Photos/independence_day/independence_6.webp'
import AllenCollab from "../components/Common/AllenCollab";
import Marquee from "../components/Common/Marquee";
import AcMarquee from "../components/Academics/AcMarquee";

  
const Academics = () => {
  const [selected, setSelected] = useState(null);

  return (
        <div style={{ overflowX: "hidden", width: "100%" }}>
          {/* 🔥 PARALLAX HERO */}
          <div style={styles.parallaxHero}>
            <div style={styles.overlay}>
              <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                Academics
              </motion.h1>
              <p style={{maxWidth:'540px'}}>        Every stage of learning at Hawkings is crafted to nurture curiosity,
        build character, and prepare young scholars for the world ahead.
</p>
            </div>
          </div>
    
  
    
    <div className="ac-page">

       <AcMarquee />
       
      <Container>
        

        <AnimatePresence mode="wait">
          {selected ? (
            <DetailView
              key="detail"
              section={selected}
              onBack={() => setSelected(null)}
            />
          ) : (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <CardView sections={SECTIONS} onSelect={setSelected} />
            </motion.div>
          )}
        </AnimatePresence>
       
    <ScholarshipSection />

    <HighlightsSection />

      </Container>
    </div>
    
    <AllenCollab />
    </div>
  );
};

export default Academics;


const styles = {
  parallaxHero: {
    height: "400px",
      backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${independence})`,

    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    // background: "rgba(15,76,92,0.75)",
    color: "white",
    // padding: "40px",
    // borderRadius: "12px",
    textAlign: "center",
  },
};