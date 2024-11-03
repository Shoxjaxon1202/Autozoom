import React from "react";

import "../styles/home.scss";
import BudgetCars from "../components/UI/Cars/BudgetCars/BudgetCars";
const Home = () => {
  return (
    <div className="home">
      {/* <h2>Home page</h2> */}
      <BudgetCars />
    </div>
  );
};

export default Home;
