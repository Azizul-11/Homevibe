import React from "react";
import "./About.css"; // Import your CSS file

const About = () => {
  return (
    <div className="about-container">
      <div className="about-text">
        <h2 className="homevibe-text">
          <span className="home">Home</span>
          <span className="vibe">Vibe</span>
        </h2>
      </div>
      <div className="about-content">
        <h2>Keep up to date with new collection and festive sales</h2>
        <div className="email-input">
          <input type="email" placeholder="Enter your email" />
          <button className="subscribe-button">Subscribe</button>
        </div>
        <p>
          We respect your privacy, we’ll not spam you! Read our privacy policy
          here.
        </p>
        <div className="terms-privacy">
          <h6>TERMS & CONDITIONS</h6>
          <h6>PRIVACY POLICY</h6>
        </div>
        <hr />
      </div>
      <div className="about-lists row">
        <div className="col-md-6">
          <ul className="company-list">
            <h3>COMPANY</h3>
            <li>About Us</li>
            <li>Careers</li>
            <li>Contact us</li>
            <li>Find a showroom</li>
          </ul>
        </div>
        <div className="col-md-6">
          <ul className="product-list">
            <h3>PRODUCT</h3>
            <li>Categories</li>
            <li>New Arrivals</li>
            <li>Best sellers</li>
            <li>Collections</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
