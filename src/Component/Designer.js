import React from "react";
import "./Designer.css"; // Make sure this path is correct
import Desig from "../assets/designer.png"; // Make sure this path is correct

const App = () => {
  return (
    <div className="containerr">
      <div className="row">
        <div className="col-md-6 order-md-1">
          <img src={Desig} alt="Designer" className="left-image" />
          <p className="under-image">Zangmo</p>
        </div>
        <div className="col-md-6 order-md-2">
          <div className="text-container">
            <p className="designers-text">Designers and makers</p>
            <h2 className="discover-text">
              Discover the artistry and
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;craftsmanship behind
              <br />
              HomeVibe with our skilled
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp; designers and makers
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
              }}
            >
              Know more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
