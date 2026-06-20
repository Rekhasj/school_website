import React, { useRef } from "react";
import { Container } from "react-bootstrap";
import { instagramData } from "../../data/instagramData";
import "./InstagramSlider.css";

const InstagramSlider = () => {
    const sliderRef = useRef();

    const scroll = (direction) => {
        const slider = sliderRef.current;
        const scrollAmount = 250;

        if (direction === "left") {
            slider.scrollLeft -= scrollAmount;
        } else {
            slider.scrollLeft += scrollAmount;
        }
    };

    return (
        // <Container className="my-1">
            <Container fluid className="px-10 my-1">
            <h3 className="text-center fw-bold mb-4">
                Hawkings Students Moments
            </h3>

            {/* Slider */}

            <div className="insta-slider" ref={sliderRef}>
                {instagramData.map((item) => (
                    <div className="insta-card" key={item.id}>
                        <div className="insta-frame-wrapper">
                            <iframe
                                src={`https://www.instagram.com/reel/${item.reelId}/embed`}
                                className="insta-frame"
                                allowTransparency="true"
                                frameBorder="0"
                                scrolling="no"

                            ></iframe>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-3 mb-3">
                <a
                    href="https://www.instagram.com/hawkings_school_cbse_kuppam/reels/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success"
                >
                    View More on Instagram
                </a>
            </div>
        </Container>
    );
};

export default InstagramSlider;