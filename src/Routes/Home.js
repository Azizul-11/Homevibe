import React from "react";
import Navbar from "../Component/Navbar";
import HeroImg from "../Component/HeroImg";
import CategoryCard from "../Component/CategoryCard";
import ExtingCollection from "../Component/ExtingCollection";
import Designer from "../Component/Designer";
import ForMob from "../Component/ForMob";
import Testimonial from "../Component/Testimonial";
import About from "../Component/About";
const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <CategoryCard />
      <ExtingCollection />
      <Designer />
      <ForMob />
      <Testimonial />
      <About />
    </div>
  );
};

export default Home;
