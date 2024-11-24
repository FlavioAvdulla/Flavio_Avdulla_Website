import React from "react";
import "./Polaris_Online_Store.css";
import polarisImage_01 from "../../assets/images/Polaris_Store_02.png";
import polarisImage_02 from "../../assets/images/Polaris_Store_03.jpg";
import polarisImage_03 from "../../assets/images/Polaris_Store_04.jpg";
import polarisImage_04 from "../../assets/images/Polaris_Store_05.jpg";
import polarisImage_05 from "../../assets/images/Polaris_Store_09.jpg";
import polarisImage_06 from "../../assets/images/Polaris_Store_10.jpg";
import polarisImage_07 from "../../assets/images/Polaris_Store_11.jpg";
import polarisImage_08 from "../../assets/images/home/home_05.jpg";

const Polaris_Online_Store = () => {
  return (
    <div className="polaris_container" >
      <div className="polaris_content_01">
        <h1>Polaris Online Store</h1>
        <p>
          About the brand: Polaris is a dynamic online store offering top-tier
          dropshipping services. Our platform connects consumers with a wide
          range of products, streamlining the shopping experience and making
          high-quality items accessible at competitive prices. By utilizing
          cutting-edge technology, Polaris ensures a seamless and efficient
          shopping process, catering to the needs of both customers and partner
          businesses. We focus on enhancing the convenience and satisfaction of
          our users, driving the future of online retail.
          <br /><br />
          Year → 2024 | Client → Polaris Online Store | Project → Logo & Brand
          Identity | All rights reserved ©
        </p>
      </div>
      <img className="photo_01" src={polarisImage_01} alt="polaris_image_02" />
      <img className="photo_02" src={polarisImage_02} alt="polaris_image_03" />
      <div className="polaris_content_02">
        <p>
          The logo incorporates the interaction between the delivery guy, the
          customer (package receiver) and the “pin” symbol representing the
          location of the delivery, to cleverly represent the brand's focus on
          offering top-tier dropshipping services. It's a subtle yet impactful
          touch. This gives the entire logo a unique, friendly, traditional, and
          modern look, all of which align with the brand's sustainability
          message. Overall the logo effectively communicates the brand's
          commitment to connect consumers with a wide range of products without
          being overly explicit. It strikes a balance between professionalism
          and efficiency, making it suitable for a wide range of audiences.
        </p>
      </div>
      <img className="photo_03" src={polarisImage_03} alt="polaris_image_04" />
      <img className="photo_04" src={polarisImage_04} alt="polaris_image_05" />
      <img className="photo_05" src={polarisImage_05} alt="polaris_image_09" />
      <img className="photo_06" src={polarisImage_06} alt="polaris_image_10" />
      <img className="photo_07" src={polarisImage_07} alt="polaris_image_11" />
      {/* <img className="polaris_cover" src={polarisImage_08} alt="polaris_image_09" /> */}
    </div>
  );
};

export default Polaris_Online_Store;
