import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./CtaSlider.css";

import sports4 from "../../assets/Photos/sports_meet/sports_4.webp";
import yoga1 from "../../assets/Photos/yoga_day/yoga_1.jpeg";
import staff from "../../assets/Photos/staff/1.webp";
import staff2 from "../../assets/Photos/staff/2.webp";
import { colors } from "../../data/colors";
import { Link } from "react-router-dom";

const slides = [
    {
        id: 1,
        image: staff,
        title: "We're Here to Help!",
        subtitle:
            "Have questions about admissions, curriculum, or school life?",
    },
    {
        id: 2,
        image: yoga1,
        title: "Schedule a School Tour",
        subtitle:
            "Visit our campus and experience the learning environment.",
    },
    {
        id: 3,
        image: staff2,
        title: "Take the Next Step",
        subtitle:
            "Join Hawkings International School and shape your child's future.",
    },
];

const CtaSlider = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="cta-slider">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`cta-slide ${index === current ? "active" : ""}`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                >
                    {index === current && (
                        <div className="cta-overlay">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={slide.id}
                                    initial={{ opacity: 0, y: 28 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.55 }}
                                >
                                    <h2>{slide.title}</h2>
                                    <p>{slide.subtitle}</p>
                                    <Link to="/login">
                                        <button className="cta-btn" style={{ backgroundColor: colors.green }}>
                                            Contact Us
                                        </button>
                                    </Link>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default CtaSlider;