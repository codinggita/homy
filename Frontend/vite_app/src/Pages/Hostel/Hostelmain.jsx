import React from "react";
import "./Hostelmain.css"
import HostelSearch from "./Search.jsx";
import Faq from "./faqs.jsx";
import Footer from '../Meal2/Footer.jsx'
import { useState, useEffect } from "react";


const HostelList = () => {

  const images = [
    "https://res.cloudinary.com/dzsvjyg2c/image/upload/v1741609652/d5kbucxc3yoswqbixe73.png",
    "https://res.cloudinary.com/dzsvjyg2c/image/upload/v1741610735/m1b9xblmqst21tjd4uor.png",
    "https://res.cloudinary.com/dzsvjyg2c/image/upload/v1741608756/mcnkfyy5a2paoash4h7g.png"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (<>
    <main className="Hostelmain">
      <section className="mainimg">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className={`image-slide ${index === currentIndex ? "active" : ""}`}
          />
        ))}
      </section>
      <section className="HostelSearch">
        <HostelSearch />

      </section>
      <section className="Faqsection">
        <Faq />
      </section>
      <section className="Footer section">
        <Footer />

      </section>
    </main>

  </>)
};
export default HostelList;