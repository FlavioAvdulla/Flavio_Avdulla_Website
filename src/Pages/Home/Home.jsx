import React, { useEffect, useState } from "react";
import "./Home.css";
import home_01 from "../../assets/images/home/home_01.jpg";
import home_02 from "../../assets/images/home/home_02.jpg";
import home_03 from "../../assets/images/home/home_03.jpg";
import home_04 from "../../assets/images/home/home_04.jpg";
import home_05 from "../../assets/images/home/home_05.jpg";
import home_06 from "../../assets/images/home/home_06.jpg";
import home_07 from "../../assets/images/home/home_07.jpg";

const images = [home_01, home_07, home_05, home_02, home_03, home_04, home_06];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      {/* <h1>Welcome to the Home Page</h1> */}
      {images.map((image, index) => (
        <img
          key={index}
          className={`home_image ${
            currentImageIndex === index ? "visible" : ""
          }`}
          src={image}
          alt={`home_image_${index + 1}`}
        />
      ))}
    </div>
  );
};

export default Home;
