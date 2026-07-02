import React from "react";
import { motion } from "framer-motion";
import "./Feedback.css";

const parentsData = [
    {
        name: "Ramesh Kumar",
        student: "Aarav",
        class: "Grade 5",
        feedback: "Excellent education and caring environment.",
        image: "https://i.pravatar.cc/150?img=1",
    },
    {
        name: "Sita Devi",
        student: "Ananya",
        class: "Grade 3",
        feedback: "Very supportive teachers.",
        image: "https://i.pravatar.cc/150?img=2",
    },
    {
        name: "Mahesh",
        student: "Rohit",
        class: "Grade 7",
        feedback: "Great academics and activities.",
        image: "https://i.pravatar.cc/150?img=3",
    },
];

const ParentsFB = () => {
    const data = [...parentsData, ...parentsData]; // loop

    return (
        <div className="feedback-section">
            <h3 className="title">What Parents Say</h3>

            <div className="carousel-wrapper">
                <motion.div
                    className="carousel-track"
                    animate={{ x: ["0%", "-50%"] }}
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
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="fb-card-header">
                                <img src={null}
                                // {item.image} 
                                alt={item.name} />
                                <div>
                                    <h5>{item.name}</h5>
                                    <span>
                                        Parent of {item.student} ({item.class})
                                    </span>
                                </div>
                            </div>

                            <p className="feedback-text">“{item.feedback}”</p>
                            {/* <div className="stars">★★★★★</div> */}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default ParentsFB;