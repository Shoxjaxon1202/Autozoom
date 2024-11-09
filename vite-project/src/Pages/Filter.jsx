import React, { useEffect, useState, useRef } from "react";
import "../styles/filtercars.scss";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";
import { FaTelegram, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

const CarsPage = ({ selectedCategory, selectedBrand }) => {
  const API = `https://realauto.limsa.uz/api/cars`;
  const [base, setBase] = useState([]);
  const [model, setModel] = useState("");
  const [filteredCars, setFilteredCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();

  const carTypeRefs = useRef([]);
  const brandRefs = useRef([]);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(API);
      setBase(response?.data?.data || []);

      if (params?.id) {
        const selecCategories = response?.data?.data.filter(
          (e) => e?.id === params?.id
        );

        const newbase = response?.data?.data.filter(
          (e) => e?.category?.name_en == selecCategories[0]?.category?.name_en
        );

        setFilteredCars(newbase);
      } else if (params?.id === undefined) {
        setFilteredCars(response?.data?.data);
      }
    } catch (error) {
      setError("Ma'lumotlarni olishda xatolik yuz berdi.");
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // Yuklanish tugadi
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleModelChange = (event) => {
    setModel(event.target.value);
  };

  const handleApplyFilter = (event) => {
    event.preventDefault();
    let filtered = base;

    if (model) {
      filtered = filtered.filter((item) => item?.model?.id === model);
    }

    const selectedCategories = carTypeRefs.current
      .filter((input) => input.checked)
      .map((input) => input.value);
    const selectedBrands = brandRefs.current
      .filter((input) => input.checked)
      .map((input) => input.value);

    if (selectedCategories.length > 0) {
      filtered = filtered.filter((item) =>
        selectedCategories.includes(item?.category?.name_en)
      );
    }

    if (selectedBrands.length > 0) {
      filtered = filtered.filter((item) =>
        selectedBrands.includes(item?.brand?.title)
      );
    }

    setFilteredCars(filtered);
  };

  const handleResetFilter = () => {
    setModel("");
    setFilteredCars(base);
    carTypeRefs.current.forEach((input) => (input.checked = false));
    brandRefs.current.forEach((input) => (input.checked = false));
  };

  const uniqueCategories = [
    ...new Set(base.map((item) => item?.category?.name_en)),
  ];
  const uniqueBrands = [...new Set(base.map((item) => item?.brand?.title))];

  useEffect(() => {
    if (selectedCategory) {
      const filtered = base.filter(
        (car) => car?.category?.name_en === selectedCategory
      );
      setFilteredCars(filtered);
    } else {
      setFilteredCars(base);
    }
  }, [selectedCategory, base]);

  useEffect(() => {
    if (selectedBrand) {
      const filtered = base.filter(
        (car) => car?.brand?.title === selectedBrand
      );
      setFilteredCars(filtered);
    } else {
      setFilteredCars(base);
    }
  }, [selectedBrand, base]);

  console.log(filteredCars);

  return (
    <section className="filtercars">
      <div className="filtercars_wrapper">
        <div className="filtercars_left">
          <h3 className="filter-title">Filtered by</h3>
          <h5>Offers</h5>
          <hr />
          <form className="filtercars_form" onSubmit={handleApplyFilter}>
            <h4 className="part-title">Car type</h4>
            {uniqueCategories.map((category, index) => (
              <label key={index}>
                <input
                  className="filter-inputs"
                  type="checkbox"
                  name="carType"
                  value={category}
                  ref={(el) => (carTypeRefs.current[index] = el)}
                />
                {category}
              </label>
            ))}
            <hr id="hr" />
            <h4>Brand</h4>
            {uniqueBrands.map((brand, index) => (
              <label key={index}>
                <input
                  className="filter-inputs"
                  type="checkbox"
                  name="brand"
                  value={brand}
                  ref={(el) => (brandRefs.current[index] = el)}
                />
                {brand}
              </label>
            ))}

            <h4>Model</h4>
            <select
              className="filter-to-select"
              value={model}
              onChange={handleModelChange}>
              <option value="" hidden>
                Select Model
              </option>
              {base.map((item) => (
                <option
                  key={item?.model?.id}
                  className="select-option-filter"
                  value={item?.model?.id}>
                  {item?.model?.name}
                </option>
              ))}
            </select>
            <div className="filtercars_bottom">
              <button
                type="button"
                className="filtercars_btn1"
                onClick={handleResetFilter}>
                Reset
              </button>
              <button type="submit" className="filtercars_btn2">
                Apply Filter
              </button>
            </div>
          </form>
        </div>
        <div className="filtercars_right">
          <p className="filtercars_text">
            Cars for Rent in Dubai / Hire the latest supercar
          </p>
          <div className="filter_cards">
            {loading ? (
              <div className="loader-container">
                <div className="loader"></div>
              </div>
            ) : error ? (
              <p className="error-message">{error}</p>
            ) : filteredCars.length > 0 ? (
              filteredCars.map((item) => (
                <div key={item?.id} className="filter_card">
                  <NavLink to={`/carsinfo/${item?.id}`} key={item.id}>
                    <div className="car_image">
                      <img
                        className="cars_img"
                        src={`https://realauto.limsa.uz/api/uploads/images/${item?.car_images[0]?.image?.src}`}
                        alt={item?.name_en}
                        style={{ display: "block" }}
                      />
                    </div>
                    <h4 id="carsinfo_card_title" className="car_title">
                      {item?.brand?.title} {item?.model?.name}
                    </h4>
                    <hr />
                    <span className="cars_span">
                      <h4 className="cars_subtitle2">AED 0</h4>
                      <p className="cars_text">/$0</p>
                    </span>
                    <p className="cars_text">per day: {item.limitperday}</p>
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
              ))
            ) : (
              <div className="not-found">
                <h1>404</h1>
                <p>Mashinalar topilmadi</p>
                {/* <a href="/cars">Boshqatdan qidirish</a> */}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarsPage;
