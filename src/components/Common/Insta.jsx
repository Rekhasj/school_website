import React, { useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import './Insta.css';
const Insta = () => {


    const sliderRef = useRef();

    useEffect(() => {
        const slider = sliderRef.current;

        let scrollAmount = 0;

        const autoScroll = setInterval(() => {
            if (slider) {
                slider.scrollLeft += 1;
                scrollAmount += 1;

                if (scrollAmount >= slider.scrollWidth / 2) {
                    slider.scrollLeft = 0;
                    scrollAmount = 0;
                }
            }
        }, 20);

        return () => clearInterval(autoScroll);
    }, []);



    return (

        <Container className="my-5">
            <h3 className="text-center fw-bold mb-4">
                Hawkings Students Moments
            </h3>

            <div className="insta-slider" ref={sliderRef}




            >
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div className="insta-card" key={item}>
                        <img
                            src={`https://picsum.photos/300/400?random=${item}`}
                            alt="student"
                        />
                    </div>
                ))}
            </div>

            <div className="text-center mt-3">
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
}

export default Insta;