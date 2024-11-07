import React, { useEffect, useState } from "react";
import "../styles/filtercars.scss";
import { NavLink } from "react-router-dom";
import useData from "./useData";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

const Filter = () => {
  const {
    data: modelsData,
    loading: modelsLoading,
    error: modelsError,
  } = useData("https://realauto.limsa.uz/api/models");

  const {
    data: carsData,
    loading: carsLoading,
    error: carsError,
  } = useData("https://realauto.limsa.uz/api/cars");

  const [filteredData, setFilteredData] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [filters, setFilters] = useState({ carType: [], brand: [], model: "" });

  useEffect(() => {
    if (carsData) {
      setFilteredData(carsData.data);
      setDisplayData(carsData.data); // Barcha mashinalarni boshlang'ich ko'rinish uchun
    }
  }, [carsData]);

  const handleCheckboxChange = (category, value) => {
    setFilters((prevFilters) => {
      const newCategory = prevFilters[category].includes(value)
        ? prevFilters[category].filter((item) => item !== value)
        : [...prevFilters[category], value];
      return { ...prevFilters, [category]: newCategory };
    });
  };

  const handleModelChange = (event) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      model: event.target.value,
    }));
  };

  const handleReset = () => setFilters({ carType: [], brand: [], model: "" });

  const handleApplyFilter = () => {
    const filtered = filteredData.filter((car) => {
      const matchesCarType =
        filters.carType.length === 0 ||
        filters.carType.includes(car.category.name_en);

      const matchesBrand =
        filters.brand.length === 0 || filters.brand.includes(car.brand.title);

      const matchesModel =
        !filters.model || car.model.id.toString() === filters.model;

      return matchesCarType && matchesBrand && matchesModel;
    });

    setDisplayData(filtered);
  };

  return (
    <div className="filtercars">
      <div className="filtercars_wrapper">
        <div className="filtercars_left">
          <h3>Filtered By</h3>
          <h5>Offers</h5>
          <hr />

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

          <h4>Brand</h4>
          {carsData?.data?.map((brand) => (
            <div className="input_box" key={brand.id}>
              <input
                type="checkbox"
                checked={filters.brand.includes(brand.brand.title)}
                onChange={() =>
                  handleCheckboxChange("brand", brand.brand.title)
                }
                id={`brand-${brand.id}`}
              />
              <label htmlFor={`brand-${brand.id}`}>{brand.brand.title}</label>
            </div>
          ))}

          <h4>Model</h4>
          {modelsLoading ? (
            <p>Loading models...</p>
          ) : modelsError ? (
            <p>Error: {modelsError.message}</p>
          ) : (
            <select
              name="model"
              id="model-select"
              value={filters.model}
              onChange={handleModelChange}>
              <option value="">Select a model</option>
              {modelsData?.data?.map((model) => (
                <option key={model.id} value={model.id}>
                  {model.name}
                </option>
              ))}
            </select>
          )}

          <div className="filtercars_bottom">
            <button className="filtercars_btn1" onClick={handleReset}>
              Reset
            </button>
            <button className="filtercars_btn2" onClick={handleApplyFilter}>
              Apply Filter
            </button>
          </div>

          <div>
            <h4>Selected Filters:</h4>
            <p>Car Type: {filters.carType.join(", ") || "None"}</p>
            <p>Brand: {filters.brand.join(", ") || "None"}</p>
            <p>Model: {filters.model || "None"}</p>
          </div>
        </div>

        <div className="filtercars_right">
          <p className="filtercars_text">
            Cars for Rent in Dubai / Hire the latest supercar
          </p>
          <div className="filter_cards">
            {displayData.map((car) => (
              <div key={car.id} className="filter_card">
                <NavLink to="/carsinfo">
                  <div className="car_image">
                    <img
                      src={`https://realauto.limsa.uz/api/uploads/images/${car.car_images[0]?.image?.src}`}
                      alt={car.model.name}
                      className="cars_img"
                    />
                  </div>
                  <h4 className="car_title">
                    {car.brand.title} {car.model.name}
                  </h4>
                  <hr />
                  <span className="cars_span">
                    <h4 className="cars_subtitle2">AED {car.price}</h4>
                    <p className="cars_text">/${car.price}</p>
                  </span>
                  <p className="cars_text">per day: {car.limitperday}</p>
                </NavLink>
                <div className="contact_buttons">
                  <a
                    href="https://wa.me/900998210"
                    className="whatsapp_button"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaWhatsapp /> WhatsApp
                  </a>
                  <a
                    href="https://t.me/abdusalimov_shoxjaxon"
                    className="telegram_button"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaTelegramPlane /> Telegram
                  </a>
                </div>
              </div>
            ))}
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
            id={option}
          />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
    </form>
  </div>
);

export default Filter;
