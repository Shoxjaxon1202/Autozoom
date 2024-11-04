import React from "react";

import "../styles/home.scss";
import BudgetCars from "../components/UI/Cars/BudgetCars/BudgetCars";
import Services from "../components/UI/Services/Services";
const Home = () => {
  return (
    <div className="home">
      {/* <h2>Home page</h2> */}
      <BudgetCars />
      <Services />
    </div>
  );
};

export default Home;
