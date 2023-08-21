// import React from "react";
// import "./Collection.css";
// import coll1 from "../assets/collection1.png";
// import coll2 from "../assets/collection2.png";
// import coll3 from "../assets/collection3.png";

// const ExtingCollection = () => {
//   return (
//     <div className="cc">
//       <div className="heading">
//         <h2 className="ex">Exciting collections</h2>
//         <p className="par">curated specially for you</p>
//       </div>
//       <div className="images">
//         <img src={coll1} alt="Collection 1" className="col1" />
//         <img src={coll2} alt="Collection 2" className="col2" />
//         <img src={coll3} alt="Collection 3" className="col3" />
//       </div>
//     </div>
//   );
// };

// export default ExtingCollection;
import React from "react";
import "./Collection.css"; // Import your custom styles if needed
import coll1 from "../assets/collection1.png";
import coll2 from "../assets/collection2.png";
import coll3 from "../assets/collection3.png";

const ExtingCollection = () => {
  return (
    <div className="container">
      <div className="row text-center">
        <div className="col-12">
          <h1>Exciting collections</h1>
          <p>Curated specially for you</p>
        </div>
      </div>
      <div className="row text-center images-row">
        <div className="col-4">
          <div className="image-container">
            <img src={coll1} alt="Collection 1" />
          </div>
        </div>
        <div className="col-4">
          <div className="image-container">
            <img src={coll2} alt="Collection 2" />
          </div>
        </div>
        <div className="col-4">
          <div className="image-container">
            <img src={coll3} alt="Collection 3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtingCollection;
