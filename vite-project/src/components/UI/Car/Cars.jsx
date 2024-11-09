import React, { useState, useEffect } from "react";
import { IoIosArrowDropright } from "react-icons/io";
import CarsSwiper from "./CarsSwiper";
import { NavLink } from "react-router-dom";
import useData from "../../../Pages/useData";

import "./cars.scss";

const Cars = ({ handleAllCategory }) => {
  const [carsByCategory, setCarsByCategory] = useState({});

  const carCategories = [
    "Budget cars Rental Emirates",
    "Sports cars Rental Emirates",
    "Hyper Cars Rental Emirates",
    "Luxury Cars Rental Emirates",
    "Suv Cars Renal Emirates",
    "Cabriolet cars rental Emirates",
  ];

  const { data, loading, error } = useData(
    "https://realauto.limsa.uz/api/cars"
  );

  useEffect(() => {
    if (data) {
      const filteredCars = {};
      carCategories.forEach((category) => {
        filteredCars[category] = data.data.filter(
          (car) => car?.category?.name_en === category
        );
      });
      setCarsByCategory(filteredCars);
    }
  }, [data]);

  // Yuklanayotgan holatda
  if (loading) return <div>Loading...</div>;
  // Xatolik yuz berganda
  if (error) return <div>Error: {error.message}</div>;


  return (
    <div className="cars">
      <div className="cars_wrapper">
        {carCategories.map((category) => {
          const cars = carsByCategory[category] || [];
          const categoryName = cars.length > 0 ? category : "Cars";

          return (
            <div key={category} className="cars_section">
              <div className="cars_top">
                <div className="cars_top_left">
                  <h3 className="cars_title">{categoryName}</h3>
                </div>
                <NavLink onClick={()=> {
                  handleAllCategory(category)
                }} to={"/cars"} className="cars_top_right">
                  <h4>SEE ALL</h4>
                  <IoIosArrowDropright className="cars_icon" />
                </NavLink>
              </div>
              <CarsSwiper cars={cars} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cars;
