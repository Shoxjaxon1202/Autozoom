import React from "react";
import "../styles/home.scss";
import Services from "../components/UI/Services/Services";
import Cars from "../components/UI/Car/Cars";

import Intro from "../components/UI/Intro/Intro";
import Brand from "./Brand";

const Home = () => {
  return (
    <div className="home">
      <Intro/>
      <Brand/>
      <Cars />
      <Faq />
      <Follow />
    </div>
  );
};

export default Home;
