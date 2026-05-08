import React from "react";
import {
  FaFacebook,
  FaTelegram,
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
  FaPhone,
} from "react-icons/fa";
import "../styles/FloatingSideBar.css";

const FloatingSidebar = () => {
  return (
    <div className="icon-bar">
      <a
        href="https://www.facebook.com/Hawkings-International-school-106662441994500/"
        className="facebook"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook />
      </a>
      {/* <a
        href="#"
        className="telegram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTelegram />
      </a> */}
      <a href="tel:+919441880054" className="phone">
        <FaPhone />
      </a>

      <a
        href="https://wa.me/919441880054"
        className="whatsapp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
      </a>
      <a
        href="https://www.instagram.com/hawkings_school_cbse_kuppam/reels/"
        className="instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram />
      </a>
      <a href="#" className="youtube" target="_blank" rel="noopener noreferrer">
        <FaYoutube />
      </a>
    </div>
  );
};

export default FloatingSidebar;
