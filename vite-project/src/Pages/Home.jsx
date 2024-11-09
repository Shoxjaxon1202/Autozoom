import React from "react";
import "../styles/home.scss";
import Services from "../components/UI/Services/Services";
import Cars from "../components/UI/Car/Cars";

import Intro from "../components/UI/Intro/Intro";
import Faq from "../components/UI/Faq/Faq";
import Follow from "../components/UI/Follow/Follow";
import Brand from "./Brand";

const Home = ({ handleAllCategory, handleBrand }) => {
  return (
    <div className="home">
      <Intro />
      <Brand handleBrand={handleBrand} />
      <Cars handleAllCategory={handleAllCategory} />
      <Services />
      <Faq />
      <Follow />
    </div>
  );
};

export default Home;
