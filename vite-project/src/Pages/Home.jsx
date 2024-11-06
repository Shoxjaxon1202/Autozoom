import React from "react";
import "../styles/home.scss";
import Services from "../components/UI/Services/Services";
import Cars from "../components/UI/Car/Cars";
import LuxuryCarsInfo from "../components/UI/LuxuryCarsInfo/LuxuryCarsInfo";
import SportCarInfo from "../components/UI/SportCarInfo/SportCarInfo";
import SuperCar from "../components/UI/SuperCar/SuperCar";

const Home = () => {
  return (
    <div className="home">
      <Cars />
      <Services />
      <LuxuryCarsInfo />
      <SportCarInfo />
      <SuperCar />
    </div>
  );
};

export default Home;
