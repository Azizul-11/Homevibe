import React from "react";
import "./CategoryCard.css";
import image1 from "../assets/Image1.png";
import image2 from "../assets/Image2.png";
import image3 from "../assets/Image3.png";
import image4 from "../assets/Image4.png";
import image5 from "../assets/Image5.png";
import image6 from "../assets/Image6.png";
import image7 from "../assets/Image7.png";
import image8 from "../assets/Image8.png";
import image9 from "../assets/Image9.png";
import image10 from "../assets/Image10.png";
import image11 from "../assets/Image11.png";
import image12 from "../assets/Image12.png";
import image13 from "../assets/Image13.png";

const CategoryCard = () => {
  return (
    <div className="dd">
      <h2 className="hh">Categories</h2>
      <div className="box">
        <p className="pp">Furniture</p>
      </div>
      <div className="imag">
        <img src={image1} className="img1" alt="picsfor" />
        <img src={image2} className="img2" alt="picsfor" />
        <img src={image3} className="img3" alt="picsfor" />
        <img src={image4} className="img4" alt="picsfor" />
      </div>
      <div className="box2">
        <p className="p2">Décor</p>
        <div className="imag2">
          <img src={image5} className="img5" alt="picsfor" />
          <img src={image8} className="img8" alt="picsfor" />
          <img src={image7} className="img7" alt="picsfor" />
          <img src={image9} className="img9" alt="picsfor" />
          <img src={image6} className="img6" alt="picsfor" />
        </div>
      </div>
      <div className="box3">
        <p className="p3">LIGHTING</p>
        <div className="imag3">
          <img src={image10} className="img10" alt="picsfor" />
          <img src={image11} className="img11" alt="picsfor" />
          <img src={image12} className="img12" alt="picsfor" />
          <img src={image13} className="img13" alt="picsfor" />
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
