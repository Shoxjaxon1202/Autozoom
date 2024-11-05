import React, { useState } from "react";
import "../styles/filtercars.scss";
import { NavLink } from "react-router-dom";
import rasm from "../assets/img/image.png";
import useData from "../Data/UseData";

const Filter = () => {
  const { data, loading, error } = useData(
    "https://realauto.limsa.uz/api/models"
  );
  const {
    data: branddata,
    loading: brandloading,
    error: branderror,
  } = useData("https://realauto.limsa.uz/api/brands");

  const [filters, setFilters] = useState({ carType: [], brand: [] });

  const handleCheckboxChange = (category, value) => {
    setFilters((prevFilters) => {
      const newCategory = prevFilters[category].includes(value)
        ? prevFilters[category].filter((item) => item !== value)
        : [...prevFilters[category], value];

      return { ...prevFilters, [category]: newCategory };
    });
  };

  const handleReset = () => setFilters({ carType: [], brand: [] });

  const handleApplyFilter = () => console.log("Selected Filters:", filters);

  const filteredModels = data?.data?.filter((item) =>
    filters.carType.length ? filters.carType.includes(item.carType) : true
  );

  return (
    <div className="filtercars">
      <div className="filtercars_wrapper">
        <div className="filtercars_left">
          <h3>Filtered By</h3>
          <h5>Offers</h5>
          <hr />

          {/* Car Type Filter */}
          <FilterGroup
            title="Car type"
            options={[
              "Budget Cars Rental Emirates",
              "Sports Cars Rental Emirates",
              "Hyper Cars Rental Emirates",
              "Luxury Cars Rental Emirates",
              "Suv Cars Rental Emirates",
              "Cabriolet Cars Rental Emirates",
            ]}
            filters={filters}
            onChange={handleCheckboxChange}
            category="carType"
          />

          <hr />

          {/* Brand Filter */}
          <h4>Brand</h4>
          {brandloading ? (
            <p>Loading brands...</p>
          ) : branderror ? (
            <p>Error: {branderror.message}</p>
          ) : (
            branddata?.data?.map((brand) => (
              <div className="input_box" key={brand.id}>
                <input
                  type="checkbox"
                  checked={filters.brand.includes(brand.title)}
                  onChange={() => handleCheckboxChange("brand", brand.title)}
                  id={`brand-${brand.id}`} // Unique ID for each checkbox
                />
                <label htmlFor={`brand-${brand.id}`}>{brand.title}</label>{" "}
                {/* Linking label to checkbox */}
              </div>
            ))
          )}

          {/* Model Selector */}
          <h4>Model</h4>
          {loading ? (
            <p>Loading models...</p>
          ) : error ? (
            <p>Error: {error.message}</p>
          ) : (
            <select name="model" id="model-select">
              <option value="">Select a model</option>
              {filteredModels?.map((item) => (
                <option key={item.id} value={item.brand_title}>
                  {item.brand_title}
                </option>
              ))}
            </select>
          )}

          {/* Filter Action Buttons */}
          <div className="filtercars_bottom">
            <button className="filtercars_btn1" onClick={handleReset}>
              Reset
            </button>
            <button className="filtercars_btn2" onClick={handleApplyFilter}>
              Apply Filter
            </button>
          </div>

          {/* Selected Filters Display */}
          <div>
            <h4>Selected Filters:</h4>
            <p>Car Type: {filters.carType.join(", ") || "None"}</p>
            <p>Brand: {filters.brand.join(", ") || "None"}</p>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="filtercars_right">
          <p className="filtercars_text">
            Luxury Cars for Rent in Dubai / Hire the latest supercar
          </p>
          <div className="filter_cards">
            <div className="filter_card">
              <NavLink to={"/carsinfo"}>
                <div>
                  <img src={rasm} alt="Car" className="cars_img" />
                </div>
                <h4 className="cars_subtitle">Car</h4>
                <hr />
                <span className="cars_span">
                  <h4 className="cars_subtitle2">Price</h4>
                  <p className="cars_text">Price</p>
                </span>
                <p className="cars_text">per day:</p>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FilterGroup = ({ title, options, filters, onChange, category }) => (
  <div>
    <h4>{title}</h4>
    <form>
      {options.map((option) => (
        <div className="input_box" key={option}>
          <input
            type="checkbox"
            checked={filters[category].includes(option)}
            onChange={() => onChange(category, option)}
            id={option} // Unique ID for each checkbox
          />
          <label htmlFor={option}>{option}</label>{" "}
          {/* Linking label to checkbox */}
        </div>
      ))}
    </form>
  </div>
);

export default Filter;
