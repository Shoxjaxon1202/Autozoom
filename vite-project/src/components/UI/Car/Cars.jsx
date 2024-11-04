import React, { useState, useEffect } from "react";
import { IoIosArrowDropright } from "react-icons/io";
import CarsSwiper from "./CarsSwiper";
import { NavLink } from "react-router-dom";
import useData from "../../../Hooks/UseData"; // Yo'lni to'g'riligini tekshiring

import "./cars.scss";

const carCategories = [
  "Budget cars Rental Emirates",
  "Sports cars Rental Emirates",
  "Hyper Cars Rental Emirates",
  "Luxury Cars Rental Emirates",
  "Suv Cars Rental Emirates", // "Renal" so'zi "Rental" ga tuzatildi
  "Cabriolet cars rental Emirates",
];

const Cars = () => {
  const { data, loading, error } = useData(
    "https://realauto.limsa.uz/api/cars"
  );

  const [carsByCategory, setCarsByCategory] = useState({});

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
                <NavLink
                  to={"/cars"} // Yo‘lni to'g'riligini tekshiring
                  className="cars_top_right">
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
