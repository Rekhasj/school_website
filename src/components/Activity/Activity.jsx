import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { activitiesData } from '../../data/activitiesData';
import './Activity.css';

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, delay: i * 0.12, ease: "easeOut" },
    }),
};

const Activity = () => {
    const navigate = useNavigate();

    return (
        <div className="container-fluid px-2 px-sm-4 px-md-5 my-5">
            <motion.h3
                className="text-center fw-bold mb-4"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                Activities
            </motion.h3>

            <Row>
                {activitiesData.map((item, i) => (
                    <Col xs={12} sm={6} md={4} className="mb-4" key={item.id}>
                        <motion.div
                            className="activity-card"
                            custom={i}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            whileHover={{ scale: 1.03 }}
                            onClick={() => navigate(`/activities/${item.id}`)}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="activity-img"
                            />

                            <div className="overlay">
                                <div className="overlay-content">
                                    <h5>{item.title}</h5>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Activity;