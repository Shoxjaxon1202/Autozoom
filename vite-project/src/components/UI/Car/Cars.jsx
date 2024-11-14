import React, { useState, useEffect, useMemo } from "react";
import { IoIosArrowDropright } from "react-icons/io";
import CarsSwiper from "./CarsSwiper";
import { NavLink } from "react-router-dom";
import useData from "../../../Pages/useData";
import { useTranslation } from "react-i18next"; // Import useTranslation

import "./cars.scss";

const Cars = ({ handleAllCategory }) => {
  const { t } = useTranslation(); // Initialize the translation hook
  const [carsByCategory, setCarsByCategory] = useState({});

  // Memoize the car categories to prevent infinite loop
  const carCategories = useMemo(
    () => [
      t("budgetCars"),
      t("sportsCars"),
      t("hyperCars"),
      t("luxuryCars"),
      t("suvCars"),
      t("cabrioletCars"),
    ],
    [t]
  ); // Only re-run when `t` changes

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
  }, [data, carCategories]); // Only re-run when `data` or `carCategories` change

  // Loading and error states
  if (loading) return <div>{t("loading")}</div>; // "loading" text will be translated
  if (error)
    return (
      <div>
        {t("error")}: {error.message}
      </div>
    ); // "error" text will be translated

  return (
    <div className="cars">
      <div className="cars_wrapper">
        {carCategories.map((category) => {
          const cars = carsByCategory[category] || [];
          const categoryName = cars.length > 0 ? category : t("noCars");

          return (
            <div key={category} className="cars_section">
              <div className="cars_top">
                <div className="cars_top_left">
                  <h3 className="cars_title">{categoryName}</h3>
                </div>
                <NavLink
                  onClick={() => handleAllCategory(category)}
                  to={"/cars"}
                  className="cars_top_right"
                >
                  <h4>{t("seeAll")}</h4> {/* "SEE ALL" will be translated */}
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
