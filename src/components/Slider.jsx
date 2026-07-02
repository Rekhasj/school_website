import React from "react";
import Carousel from "react-bootstrap/Carousel";

import banner1 from "../assets/banner_images/banner_1.webp";
import banner2 from "../assets/banner_images/banner_2.webp";
import banner3 from "../assets/banner_images/banner_3.webp";

const bannerImages = [banner1, banner2, banner3];


const images = [
  "https://www.hawkingschool.com/img/banner/1.webp",
  "https://www.hawkingschool.com/img/banner/2.webp",
  "https://www.hawkingschool.com/img/banner/3.webp",
  "https://www.hawkingschool.com/img/banner/4.webp",

];



const Slider = () => {
  return (
    <Carousel fade>
      {bannerImages.map((img, index) => (
        <Carousel.Item key={index} interval={2000}>
          <img
            className="d-block w-100"
            src={img}
            alt={`Slide ${index + 1}`}
            style={{ height: "clamp(200px, 40vw, 500px)", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>Welcome to Hawkings School</h3>
            <p>Providing quality education for future leaders.</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
