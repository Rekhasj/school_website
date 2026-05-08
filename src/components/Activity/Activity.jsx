import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { activitiesData } from '../../data/activitiesData';
import './Activity.css';

const Activity = () => {
    const navigate = useNavigate();

    return (
        // <Container className="my-1"  >
        <div className="container-fluid px-5 my-5">

            <h3 className="text-center fw-bold mb-4">Activities</h3>

            <Row>
                {activitiesData.map((item) => (
                    <Col md={4} className="mb-4" key={item.id}>
                        <div
                            className="activity-card"
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
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Activity;