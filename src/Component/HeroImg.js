// HeroImg.js

import React from "react";
import "./HeroImgStyle.css"; // Import your CSS file
import LampThai from "../assets/lamp-thai.png";
import Plant from "../assets/Plant.png";
import pexel from "../assets/pexels.png";
import bush from "../assets/bush.png";

const HeroImg = () => {
  return (
    <div className="Section2">
      <div className="NewArrivalsContainer">
        <div className="NewArrivals">
          <div className="NewArrivalsTitle">New arrivals</div>
        </div>
      </div>
      <div className="BestSellersContainer">
        <img className="LampThaiStyle1" src={LampThai} alt="Lamp" />
        <div className="BestSellersTitle">
          Best<br></br>sellers
        </div>
        <img className="Plant1" src={Plant} alt="Plant" />
        <div className="egg"></div>
        <img className="PexelsEneidaNieves11125981" src={pexel} alt="Imagee" />
        <img className="Ellipse1" src={bush} alt="Ellipse" />
      </div>
    </div>
  );
};

export default HeroImg;
