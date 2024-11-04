import React, { useState } from "react";
import "../styles/filtercars.scss";
import { NavLink } from "react-router-dom";

import rasm from "../assets/img/image.png";

const Filter = () => {
  const [filters, setFilters] = useState({
    carType: [],
    brand: [],
  });

  const handleCheckboxChange = (category, value) => {
    setFilters((prevFilters) => {
      const newCategory = prevFilters[category].includes(value)
        ? prevFilters[category].filter((item) => item !== value)
        : [...prevFilters[category], value];

      return { ...prevFilters, [category]: newCategory };
    });
  };

  const handleReset = () => {
    // Saytni yangilash
    window.location.reload();
  };

  const handleApplyFilter = () => {
    console.log("filter");
  };

  return (
    <div className="filtercars">
      <div className="filtercars_wrapper">
        <div className="filtercars_left">
          <h3>Filtered By</h3>
          <h5>Offers</h5>
          <hr />
          <h4>Car type</h4>
          <form>
            {[
              "Budget Cars Rental Emirates",
              "Sports Cars Rental Emirates",
              "Hyper Cars Rental Emirates",
              "Luxury Cars Rental Emirates",
              "Suv Cars Rental Emirates",
              "Cabriolet Cars Rental Emirates",
            ].map((carType) => (
              <div className="input_box" key={carType}>
                <input
                  type="checkbox"
                  checked={filters.carType.includes(carType)}
                  onChange={() => handleCheckboxChange("carType", carType)}
                  id={carType}
                />
                <label htmlFor={carType}>{carType}</label>
              </div>
            ))}
          </form>
          <hr />
          <h4>Brand</h4>
          <form>
            {["Chevrolet", "Toyota", "Ford", "BMW", "Mercedes", "Honda"].map(
              (brand) => (
                <div className="input_box" key={brand}>
                  <input
                    type="checkbox"
                    checked={filters.brand.includes(brand)}
                    onChange={() => handleCheckboxChange("brand", brand)}
                    id={brand}
                  />
                  <label htmlFor={brand}>{brand}</label>
                </div>
              )
            )}
          </form>

          <h4>Model</h4>
          <select name="" id="">
            <option value="">Select a model</option>
          </select>
          <div className="filtercars_bottom">
            <button className="filtercars_btn1" onClick={handleReset}>
              Reset
            </button>
            <button className="filtercars_btn2" onClick={handleApplyFilter}>
              Apply Filter
            </button>
          </div>
        </div>
        <div className="filtercars_right">
          <p className="filtercars_text">
            Luxury Cars for Rent in Dubai / Hire the latest supercar
          </p>
          <div className="filter_cards">
            <div className="filter_card">
              <NavLink to={"/carsinfo"}>
                <div>
                  <img
                    // src={`https://realauto.limsa.uz/api/uploads/images/${car?.car_images[0]?.image?.src}`}
                    src={rasm}
                    alt=""
                    className="cars_img"
                  />
                </div>
                <h4 className="cars_subtitle">
                  {/* {car?.brand?.title} {car?.model?.name} */}
                  Moshina
                </h4>
                <hr />
                <span className="cars_span">
                  {/* <h4 className="cars_subtitle2">AED {car?.price}</h4> */}
                  <h4 className="cars_subtitle2">narx</h4>
                  {/* <p className="cars_text">/${car.price}</p> */}
                  <p className="cars_text">narx</p>
                </span>
                {/* <p className="cars_text">per day: {car?.limitperday}</p> */}
                <p className="cars_text">per day: </p>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
