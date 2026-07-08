import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Facilities from "./components/Facilities";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Faq from "./pages/Faq";
import KinderGarten from "./pages/KinderGarten";
import CBSE from "./pages/CBSE";
import Gallery from "./pages/Gallery";
import FloatingSidebar from "./components/FloatingSideBar";
import News from "./pages/News";
import EventDetail from "./components/EventDetail";
import ActivityDetail from "./components/Activity/ActivityDetail";
import ScrollToTop from "./components/Common/ScrollToTop";
import Academics from "./pages/Academics";
import FooterBanner from "./components/Common/FooterBanner";

function App() {
  return (
    <div >
      <ScrollToTop />
      <Header />
      {/* <FloatingSidebar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/contact-us" element={<Login />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/kindergarten" element={<KinderGarten />} />
        <Route path="/cbse" element={<CBSE />} />
        <Route path="/news" element={<News />} />
        <Route path="/events/:id" element={<EventDetail />} />
        <Route path="/activities/:id" element={<ActivityDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
