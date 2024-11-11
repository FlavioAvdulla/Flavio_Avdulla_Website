import React from "react";
import "./Mens_SkinCare.css";
import skin_image_02 from "../../assets/images/skin_oil/skin_02.jpg";
import skin_image_03 from "../../assets/images/skin_oil/skin_03.jpg";
import skin_image_04 from "../../assets/images/skin_oil/skin_04.jpg";
import skin_image_05 from "../../assets/images/skin_oil/skin_05.jpg";
import skin_image_06 from "../../assets/images/skin_oil/skin_06.jpg";
import skin_cover from "../../assets/images/skin_oil/skin_cover.jpg";

const Mens_SkinCare = () => {
  return (
    <div className="skincare_container">
      <div className="skin_content">
        <h1>Men's SkinCare</h1>
        <p>
        Elevate your skincare routine with Orgatural Face & Skin Oil, meticulously crafted for the modern man who values nature's purest offerings.<br/>This 100% organic oil is a luxurious blend of natural ingredients, designed to nourish, hydrate, and rejuvenate your skin.
          <hr />
        </p>
      </div>
      <img className="photo_01" src={skin_image_02} alt="skin_image_02" />
      <img className="photo_02" src={skin_image_03} alt="skin_image_03" />
      <img className="photo_03" src={skin_image_04} alt="skin_image_04" />
      <img className="photo_04" src={skin_image_06} alt="skin_image_05" />
      <img className="photo_05" src={skin_image_06} alt="skin_image_06" />
      <img className="skin_cover" src={skin_cover} alt="skin_image_06" />
    </div>
  );
};

export default Mens_SkinCare;
