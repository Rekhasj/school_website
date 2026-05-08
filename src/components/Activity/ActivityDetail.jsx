import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { activitiesData } from "../../data/activitiesData";
import "./ActivityDetail.css";
import { Button } from "react-bootstrap";

const ActivityDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate()

    const activity = activitiesData.find((item) => item.id === id);

    if (!activity) return <h3 className="text-center mt-5">Activity Not Found</h3>;

    return (
        <div className="container my-5">
            {/* ✅ Main Title */}
            <h2 className="text-center mb-4 fw-bold">
                {activity.title}
            </h2>

            {/* ✅ Description */}
            <p className="text-center text-muted mb-5">
                {activity.description}
            </p>

            {/* ✅ Sub Sections */}
            {activity.items.map((item, index) => (
                <div key={index} className="mb-5">

                    {/* Subtitle */}
                    <h4 className="mb-3">{item.name}</h4>
                    <p className="text-muted mb-3">
                        {item.description}
                    </p>
                    {/* Images Grid */}
                    <div className="row g-3">
                        {item.images.map((img, i) => (
                            <div className="col-6 col-md-3" key={i}>
                                <img
                                    src={img}
                                    alt={item.name}
                                    className="img-fluid rounded shadow-sm activity-detail-img"
                                />
                            </div>
                        ))}
                    </div>

                </div>
            ))}


            <Button
                variant="secondary"
                className="mb-4"
                onClick={() => navigate(-1)}
            >
                ← Back
            </Button>
        </div>
    );
};

export default ActivityDetail;