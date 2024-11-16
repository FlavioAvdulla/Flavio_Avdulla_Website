import React from "react";
import "./Fruit_mix.css";
import fruit_mix from "../../assets/images/fruit_mix/fruit_mix.jpg";
import fruit_mix_01 from "../../assets/images/fruit_mix/fruit_mix_01.jpg";

const Fruit_mix = () => {
  return (
    <div className="Fruit_mix">
      <div className="Fruit_mix_content">
        <h1>Fruit Mix Design</h1>
        <p>
          Elevate your skincare routine with Orgatural Face & Skin Oil,
          meticulously crafted for the modern man who values nature's purest
          offerings.
          <br />
          This 100% organic oil is a luxurious blend of natural ingredients,
          designed to nourish, hydrate, and rejuvenate your skin.
        </p>
        <hr />
      </div>
      <img src={fruit_mix} alt="fruit_mix_01" />
      <hr />
      <div className="fruit_design">
        <img src={fruit_mix_01} alt="fruit_mix_01" />
        <img src={fruit_mix_01} alt="fruit_mix_01" />
      </div>
    </div>
  );
};

export default Fruit_mix;
