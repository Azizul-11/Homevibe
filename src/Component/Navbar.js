import React from "react";
// import "./HeroImgStyle.css";
import "./NavbarStyle.css";
// import hero from "../assets/Hero.png";
import { FaSearch, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import hero from "../assets/Hero.png"; // Import the hero image

const Navbar = () => {
  return (
    <div className="Header container-fluid">
      {" "}
      {/* Use container-fluid for full-width container */}
      <div className="ImageContainer">
        <img
          src={hero}
          alt="Hero Background"
          className="BackgroundImage img-fluid"
        />
        <h2 className="HeroHeading">
          Crafted with<br></br>passion,designed <br></br>for comfort
        </h2>
        <div className="ButtonsContainer">
          <button className="PrimaryButtonSmall">
            <div className="PrimaryButtonTextSmall">
              View our latest collection
            </div>
          </button>
          <button className="PrimaryButtonSma">
            <div className="PrimaryButtonTextSmall">Browse Categories</div>
          </button>
        </div>
      </div>
      <div className="Homevibes">
        <div className="HomevibesText">HomeVibes</div>
      </div>
      <div className="Frame9">
        <div className="LeadingIcon">
          <FaSearch />
        </div>
        <div className="LeadingIcon">
          <FaHeart />
        </div>
        <div className="LeadingIcon">
          <FaShoppingCart className="cart" />
        </div>
        {/* <FaBars className="bars" /> */}
      </div>
      <div className="LogInCta">
        <div className="LeadingIcon">
          <FaUser />
        </div>
        <div className="PrimaryButton">Log in/Sign up</div>
      </div>
    </div>
  );
};

export default Navbar;
