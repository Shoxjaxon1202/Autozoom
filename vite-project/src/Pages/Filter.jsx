import React from "react";
import "../styles/filtercars.scss";
import { NavLink } from "react-router-dom";
import rasm from "../assets/img/image.png";
import useData from "../Data/UseData";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

const Filter = () => {
  const { data, loading, error } = useData(
    "https://realauto.limsa.uz/api/models"
  );

  const {
    data: carsdata,
    loading: carsloading,
    error: carserror,
  } = useData("https://realauto.limsa.uz/api/cars");

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

  function dataMap() {
    carsdata?.data?.map((elem) => console.log(elem?.brand?.title));
  }

  dataMap();
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
          {carsdata?.data?.map((brand) => (
            <div className="input_box" key={brand.id}>
              <input
                type="checkbox"
                checked={filters.brand.includes(brand?.brand.title)}
                onChange={() =>
                  handleCheckboxChange("brand", brand?.brand?.title)
                }
                id={`brand-${brand.id}`}
              />
              <label htmlFor={`brand-${brand.id}`}>{brand?.brand?.title}</label>{" "}
            </div>
          ))}

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
          </div>
        </div>

        <div className="filtercars_right">
          <p className="filtercars_text">
            Luxury Cars for Rent in Dubai / Hire the latest supercar
          </p>
          <div className="filter_cards">
            {carsdata?.data?.map((elem) => (
              <div key={elem?.id} className="filter_card">
                <NavLink to={"/carsinfo"}>
                  <div className="car_image">
                    <img
                      src={`https://realauto.limsa.uz/api/uploads/images/${elem?.car_images[0]?.image?.src}`}
                      alt=""
                      className="cars_img"
                    />
                  </div>
                  <h4 className="car_title">
                    {elem?.brand?.title} {elem?.model?.name}
                  </h4>
                  <hr />
                  <span className="cars_span">
                    <h4 className="cars_subtitle2">AED {elem?.price}</h4>
                    <p className="cars_text">/${elem.price}</p>
                  </span>
                  <p className="cars_text">per day: {elem?.limitperday}</p>
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
          <label htmlFor={option}>{option}</label>{" "}
        </div>
      ))}
    </form>
  </div>
);

export default Filter;
