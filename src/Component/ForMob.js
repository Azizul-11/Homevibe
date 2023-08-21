import React from "react";
import "./ForMob.css";
import "./Designer.css";
import Desig from "../assets/designer.png";

const ForMob = () => {
  return (
    <div className="containr">
      <div className="row">
        <div className="col-md-6 order-md-1">
          <div className="small-screen-content">
            <p className="designers-text">Designers and makers</p>
            <img src={Desig} alt="Designer" className="left-image" />
            <p className="under-image">Zangmo</p>
            <h2 className="discover-text">
              Discover the artistry and
              <br /> craftsmanship behind
              <br />
              HomeVibe with our skilled
              <br /> designers and makers
            </h2>
            <button
              className="rounded-btn"
              style={{
                backgroundColor: "white",
                color: "black",
                border: "none",
                textAlign: "center",
                padding: "10px 50px",
                borderRadius: "50px",
                margin: "1rem 0",
              }}
            >
              Know more
            </button>
          </div>
        </div>
        <div className="col-md-6 order-md-2">
          {/* Placeholder for the right column */}
        </div>
      </div>
    </div>
  );
};

export default ForMob;
