import React from "react";
import { motion } from "framer-motion";
import "./Feedback.css";

const studentsData = [
    {
        name: "Rahul",
        class: "Grade 6",
        feedback: "I love my school!",
        image: "https://i.pravatar.cc/150?img=11",
    },
    {
        name: "Sneha",
        class: "Grade 4",
        feedback: "Fun learning environment.",
        image: "https://i.pravatar.cc/150?img=12",
    },
    {
        name: "Arjun",
        class: "Grade 7",
        feedback: "Teachers make learning easy and interesting.",
        image: "https://i.pravatar.cc/150?img=13",
    },
];

const StudentsFB = () => {
    const data = [...studentsData, ...studentsData]; // for smooth loop

    return (
        <div className="feedback-section">
            <h3 className="title">What Students Say</h3>

            <div className="carousel-wrapper">
                <motion.div
                    className="carousel-track"
                    animate={{ x: ["-50%", "0%"] }} // reverse smooth loop
                    transition={{
                        repeat: Infinity,
                        duration: 20,
                        ease: "linear",
                    }}
                >
                    {data.map((item, index) => (
                        <motion.div
                            className="modern-card"
                            key={index}
                            whileHover={{ scale: 1.08 }}
                        >
                            {/* Header */}
                            <div className="card-header">
                                <img src={""}
                                // {item.image} 
                                alt={item.name} />
                                <div>
                                    <h5>{item.name}</h5>
                                    <span>{item.class}</span>
                                </div>
                            </div>

                            {/* Feedback */}
                            <p className="feedback-text">“{item.feedback}”</p>

                            {/* Stars */}
                            {/* <div className="stars">★★★★★</div> */}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default StudentsFB;