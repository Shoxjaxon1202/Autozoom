import React from "react";
import { IoIosArrowDropright } from "react-icons/io";
import CarsSwiper from "./CarsSwiper";

import "./cars.scss";
import { NavLink } from "react-router-dom";
const BudgetCars = () => {
  return (
    <div className="cars">
      <div className="cars_wrapper">
        <div className="cars_top">
          <div className="cars_top_left">
            <h3 className="cars_title">Budget cars Rental Emirates</h3>
          </div>
          <NavLink to={"/cars"} className="cars_top_right">
            <h4>SEE ALL</h4>
            <IoIosArrowDropright className="cars_icon" />
          </NavLink>
        </div>
        <CarsSwiper />
      </div>
    </div>
  );
};

export default BudgetCars;
