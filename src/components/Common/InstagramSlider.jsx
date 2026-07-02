import React, { useRef } from "react";
import { Container } from "react-bootstrap";
import { instagramData } from "../../data/instagramData";
import "./InstagramSlider.css";

const InstagramSlider = () => {
    const sliderRef = useRef();
    const touchStartX = useRef(null);
    const scrollStartLeft = useRef(0);

    /* ── touch drag handlers ── */
    const onTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
        scrollStartLeft.current = sliderRef.current.scrollLeft;
    };

    const onTouchMove = (e) => {
        if (touchStartX.current === null) return;
        const dx = touchStartX.current - e.touches[0].clientX;
        sliderRef.current.scrollLeft = scrollStartLeft.current + dx;
    };

    const onTouchEnd = () => {
        touchStartX.current = null;
    };

    /* ── button scroll ── */
    const scroll = (dir) => {
        sliderRef.current.scrollBy({
            left: dir === "left" ? -300 : 300,
            behavior: "smooth",
        });
    };

    return (
        <Container fluid className="my-1 insta-section">
            <h3 className="text-center fw-bold mb-4">Hawkings Students Moments</h3>

            <div className="insta-wrapper">
                {/* Scroll buttons */}
                <button
                    className="insta-arrow insta-arrow-left"
                    onClick={() => scroll("left")}
                    aria-label="Scroll left"
                >
                    ‹
                </button>
                <button
                    className="insta-arrow insta-arrow-right"
                    onClick={() => scroll("right")}
                    aria-label="Scroll right"
                >
                    ›
                </button>

                {/* Slider track */}
                <div
                    className="insta-slider"
                    ref={sliderRef}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    {instagramData.map((item) => (
                        <div className="insta-card" key={item.id}>
                            <div className="insta-frame-wrapper">
                                {/* Transparent overlay on touch devices — blocks iframe
                                    from stealing swipe events so the slider scrolls */}
                                <div className="insta-touch-guard" />
                                <iframe
                                    src={`https://www.instagram.com/reel/${item.reelId}/embed`}
                                    className="insta-frame"
                                    allowtransparency="true"
                                    frameBorder="0"
                                    scrolling="no"
                                    loading="lazy"
                                    title={`Instagram reel ${item.reelId}`}
                                />
                            </div>
                        </div>
                    ))}
                </div>
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
