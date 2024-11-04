import React from "react";
import "../styles/home.scss";
import Services from "../components/UI/Services/Services";
import Cars from "../components/UI/Car/Cars";

const Home = () => {
  return (
    <div className="home">
      <BudgetCars />
      <Services />
      <Cars />
    </div>
  );
};

export default Home;
