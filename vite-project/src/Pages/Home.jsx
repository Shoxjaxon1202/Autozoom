import React from "react";
import "../styles/home.scss";
import Services from "../components/UI/Services/Services";
import Cars from "../components/UI/Car/Cars";
import LuxuryCarsInfo from "../components/UI/LuxuryCarsInfo/LuxuryCarsInfo";
import SportCarInfo from "../components/UI/SportCarInfo/SportCarInfo";
import SuperCar from "../components/UI/SuperCar/SuperCar";
import Faq from "../components/UI/Faq/Faq";
import Follow from "../components/UI/Follow/Follow";

const Home = ({ handleAllCategory }) => {
  return (
    <div className="home">
      <Cars handleAllCategory={handleAllCategory} />
      <Services />
      <LuxuryCarsInfo />
      <SportCarInfo />
      <SuperCar />
      <Faq />
      <Follow />
    </div>
  );
};

export default Home;
