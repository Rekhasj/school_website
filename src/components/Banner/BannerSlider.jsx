import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { events } from "../../data/data";
import "./BannerSlider.css";
import { banners } from "../../data/galleryData";

const BannerSlider = () => {
    const [index, setIndex] = useState(0);

    const slides = banners.map((item) => ({
        image: item,
        // title: item.title,
        // desc: item.shortDescription,
    }));

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="banner-container">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    className="banner-slide"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.6 }}
                    style={{ backgroundImage: `url(${slides[index].image})` }}
                >
                    {/* <div className="banner-overlay">
                        <h2>{slides[index].title}</h2>
                        <p>{slides[index].desc}</p>
                    </div> */}
                </motion.div>
            </AnimatePresence>

            {/* DOTS */}
            <div className="dots">
                {slides.map((_, i) => (
                    <span
                        key={i}
                        className={i === index ? "active" : ""}
                        onClick={() => setIndex(i)}
                    />
                ))}
            </div>
        </div>
    );
};

export default BannerSlider;