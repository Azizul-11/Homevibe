import React from "react";
import "./Testimonial.css"; // Make sure to have appropriate styling
import timage1 from "../assets/Testimonial1.png";
import timage2 from "../assets/Testimonial2.png";
import timage3 from "../assets/Testimonial3.png";
import { BiSolidQuoteLeft } from "react-icons/bi"; // Import the BiSolidQuoteLeft icon

const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <div className="testimonial-card">
        <div className="top-icon">
          <BiSolidQuoteLeft />
        </div>
        <p>
          I purchased a set of outdoor furniture from this company and I am so
          impressed with the durability and design. The furniture has held up
          well in all types of weather and the cushions are easy to clean.
        </p>
        <img src={timage1} alt="Testimonial 1" />
      </div>
      <div className="testimonial-card">
        <div className="top-icon">
          <BiSolidQuoteLeft />
        </div>
        <p>
          I recently purchased a sectional sofa from this company and I have
          been extremely pleased with it. The fabric is high quality and the
          cushions are very comfortable. The delivery process was smooth and
          hassle-free. I highly recommend HomeVibes
        </p>
        <img src={timage2} alt="Testimonial 2" />
      </div>
      <div className="testimonial-card">
        <div className="top-icon">
          <BiSolidQuoteLeft />
        </div>
        <p>
          "I purchased a bed frame from this furniture brand and it exceeded my
          expectations. The quality is top-notch and the design is modern and
          sleek. The customer service was also fantastic, and the delivery was
          prompt. I highly recommend this furniture brand
        </p>
        <img src={timage3} alt="Testimonial 3" />
      </div>
    </div>
  );
};

export default Testimonial;
