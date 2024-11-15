import React, { useState, useEffect } from "react";
import { IoIosArrowDropright } from "react-icons/io";
import CarsSwiper from "./CarsSwiper";
import { NavLink } from "react-router-dom";
import useData from "../../../Pages/useData";
import { useTranslation } from "react-i18next";
import "./cars.scss";

const Cars = ({ handleAllCategory }) => {
  const [carsByCategory, setCarsByCategory] = useState({});
  const { t, i18n } = useTranslation();

  const carCategories = [
    { en: "Budget cars Rental Emirates", ru: "Бюджетные автомобили аренда" },
    { en: "Sports cars Rental Emirates", ru: "Спортивные автомобили аренда" },
    { en: "Hyper Cars Rental Emirates", ru: "Гиперкары аренда" },
    { en: "Luxury Cars Rental Emirates", ru: "Роскошные автомобили аренда" },
    { en: "Suv Cars Renal Emirates", ru: "Внедорожники аренда" },
    { en: "Cabriolet cars rental Emirates", ru: "Кабриолеты аренда" },
  ];

  const { data, loading, error } = useData("https://realauto.limsa.uz/api/cars");

  useEffect(() => {
    if (data) {
      const filteredCars = {};
      carCategories.forEach((category) => {
        const categoryName = category[i18n.language] || category.en;
        filteredCars[categoryName] = data.data.filter(
          (car) => car?.category?.name_en === category.en
        );
      });
      setCarsByCategory(filteredCars);
    }
  }, [data, i18n.language]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="cars">
      <div className="cars_wrapper">
        {carCategories.map((category) => {
          const categoryName = category[i18n.language] || category.en;
          const cars = carsByCategory[categoryName] || [];

          return (
            <div key={categoryName} className="cars_section">
              <div className="cars_top">
                <div className="cars_top_left">
                  <h3 className="cars_title">{categoryName}</h3>
                </div>
                <NavLink
                  onClick={() => handleAllCategory(categoryName)}
                  to="/cars"
                  className="cars_top_right"
                >
                  <h4>{t("seeAll")}</h4>
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
