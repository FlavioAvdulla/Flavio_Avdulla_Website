import React from "react";
import "./Logo_Designs.css";
// Bluemedia Logo
import Bluemedia_01 from "../../assets/images/Logos/Logo_bluemedia_01.jpg";
import Bluemedia_02 from "../../assets/images/Logos/Logo_bluemedia_02.jpg";
import Bluemedia_03 from "../../assets/images/Logos/Logo_bluemedia_03.jpg";
// Boss Logo
import Boss_01 from "../../assets/images/Logos/Logo_bos_01.jpg";
import Boss_02 from "../../assets/images/Logos/Logo_bos_02.jpg";
import Boss_03 from "../../assets/images/Logos/Logo_bos_03.jpg";
// Casa Logo
import Casa_01 from "../../assets/images/Logos/Logo_casa_01.jpg";
import Casa_02 from "../../assets/images/Logos/Logo_casa_02.jpg";
import Casa_03 from "../../assets/images/Logos/Logo_casa_03.jpg";
// Housing Logo
import Housing_01 from "../../assets/images/Logos/Logo_housing_01.jpg";
import Housing_02 from "../../assets/images/Logos/Logo_housing_02.jpg";
import Housing_03 from "../../assets/images/Logos/Logo_housing_03.jpg";
// Iliria Logo
import Iliria_01 from "../../assets/images/Logos/Logo_iliria_01.jpg";
import Iliria_02 from "../../assets/images/Logos/Logo_iliria_02.jpg";
import Iliria_03 from "../../assets/images/Logos/Logo_iliria_03.jpg";
// Joors Logo
import Joors_01 from "../../assets/images/Logos/Logo_joors_01.jpg";
import Joors_02 from "../../assets/images/Logos/Logo_joors_02.jpg";
import Joors_03 from "../../assets/images/Logos/Logo_joors_03.jpg";

const Logo_Designs = () => {
  document.querySelectorAll(".logo_designs_images img").forEach((img) => {
    if (img.src.includes("_01")) {
      img.classList.add("highlight");
    }
  });

  return (
    <div className="logo_designs">
      <div className="logo-content">
        <h1>Logo Designs</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>

      <div className="logo_designs_images">
        {[
          Bluemedia_01,
          Bluemedia_02,
          Bluemedia_03,
          Boss_01,
          Boss_02,
          Boss_03,
          Casa_01,
          Casa_02,
          Casa_03,
          Housing_01,
          Housing_02,
          Housing_03,
          Iliria_01,
          Iliria_02,
          Iliria_03,
          Joors_01,
          Joors_02,
          Joors_03,
        ].map((src, index) => (
          <img
            key={index}
            className={`photo_${index + 1}`}
            src={src}
            alt={`Logo_image_${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Logo_Designs;
