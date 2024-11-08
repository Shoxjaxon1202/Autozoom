import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./carsinfo.scss";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import useData from "../../../Pages/useData";
import { NavLink, useParams } from "react-router-dom";
import {
  FaCar,
  FaClock,
  FaUserFriends,
  FaGasPump,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { IoCalendarClearOutline } from "react-icons/io5";
import { MdOutlineTimer } from "react-icons/md";
import { IoSpeedometerOutline } from "react-icons/io5";
import { LiaUserSlashSolid } from "react-icons/lia";
import { IoColorPaletteOutline } from "react-icons/io5";
import { PiEngineBold } from "react-icons/pi";
import { TbManualGearbox } from "react-icons/tb";
import { FaLeftRight } from "react-icons/fa6";
import { RiGasStationFill } from "react-icons/ri";
import { LiaCarSideSolid } from "react-icons/lia";

import { FaWhatsapp } from "react-icons/fa";
import { SiTelegram } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";

const CarsInfo = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    period: "",
    details: "",
  });

  const { data, loading, error } = useData(
    "https://realauto.limsa.uz/api/cars"
  );
  const params = useParams()?.id;

  const item = data?.data?.find((elem) => elem?.id == params);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const token = "7886355630:AAF6y6f6eQxfNSPXjgAV_545zBPvTN8o9K0";
    const chatId = "6575316231";

    const message = `Name: ${formData.name}\nPhone: ${formData.phone}\nPeriod: ${formData.period}\nDetails: ${formData.details}`;

    axios
      .post(`https://api.telegram.org/bot${token}/sendMessage`, {
        chat_id: chatId,
        text: message,
      })
      .then((response) => {
        if (response.data.ok) {
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
          });
        } else {
          console.error("Telegram response error: ", response.data);
          toast.error("Invalid messages", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
          });
        }
        setFormData({
          name: "",
          phone: "",
          period: "",
          details: "",
        });
      })

      .catch((error) => {
        console.error(
          "Request failed with error:",
          error.response?.data || error.message
        );
        toast.error("Error!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
        ("An error occurred.");
      });
  };

  console.log(item);

  return (
    <div className="carsinfo">
      <div className="carsinfo__wrapper">
        <h1 className="carsinfo__title">
          {item?.model?.name} ({item?.color})
        </h1>
        <div className="carsinfo_top">
          <div className="carsinfo_left">
            <div className="carsinfo_swipers">
              <Swiper
                className="carsinfo__main-swiper"
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}>
                {item?.car_images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      className="carsinfo__main-image"
                      src={`https://realauto.limsa.uz/api/uploads/images/${img?.image?.src}`}
                      alt={`Car image ${index + 1}`}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={3}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Thumbs]}
                loop={true}
                className="carsinfo__thumb-swiper">
                {item?.car_images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      className="carsinfo__thumbnail"
                      src={`https://realauto.limsa.uz/api/uploads/images/${img?.image?.src}`}
                      alt={`Thumbnail ${index + 1}`}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="carsinfo__specs">
              <h2 className="carsinfo_specs_title">
                Good to know {item?.model?.name} ({item?.color})
              </h2>
              <p>Kilometrage limit per day</p>
              <h3 className="carsinfo_specs_title">
                {item?.max_speed} KM Every extra km will be charged 20 AED/km
              </h3>
              <p>Car rental deposit amount</p>
              <h4 className="carsinfo_specs_title">
                The deposit is refunded within 28 days
              </h4>
            </div>
          </div>
          <div className="carsinfo_right">
            <div className="carsinfo__pricing">
              <div className="carsinfo__price-info">
                <div>
                  <span className="carsinfo__price">
                    AED 0 <span className="price_span">/$0</span>
                  </span>
                  <p>Per day: {item?.limitperday}</p>
                  <span id="deposit" className="carsinfo__price">
                    AED 0 <span className="price_span">/$0</span>
                  </span>
                </div>
                <p>
                  Deposit:{" "}
                  <span className="carsinfo__deposit">AED {item?.deposit}</span>
                </p>
                <p>
                  Premium protection:
                  <span className="carsinfo__premium-protection">
                    AED {item?.premium_protection}
                  </span>
                </p>
              </div>
            </div>
            <hr />
            <div className="carsinfo__details">
              <div className="carsinfo_details_card">
                <div className="carsinfo__detail">
                  <IoCalendarClearOutline />
                  <span>{item?.year}</span>
                </div>
                <div className="carsinfo__detail">
                  <MdOutlineTimer />
                  <span>{item?.seconds}</span>
                </div>
                <div className="carsinfo__detail">
                  <IoSpeedometerOutline />
                  <span>{item?.max_speed}</span>
                </div>
                <div className="carsinfo__detail">
                  <LiaUserSlashSolid />
                  <span>{item?.max_people}</span>
                </div>
                <div className="carsinfo__detail">
                  <IoColorPaletteOutline />
                  <span>{item?.color}</span>
                </div>
              </div>
              <div className="carsinfo_details_card">
                <div className="carsinfo__detail">
                  <PiEngineBold />
                  <span>{item?.motor}</span>
                </div>
                <div className="carsinfo__detail">
                  <TbManualGearbox />
                  <span>{item?.transmission}</span>
                </div>
                <div className="carsinfo__detail">
                  <FaLeftRight />
                  <span>{item?.drive_side}</span>
                </div>
                <div className="carsinfo__detail">
                  <RiGasStationFill />
                  <span>{item?.petrol}</span>
                </div>
                <div className="carsinfo__detail">
                  <LiaCarSideSolid />
                  <span>{item?.location?.name}</span>
                </div>
              </div>
            </div>
            <hr />
            <div className="carsinfo__contact">
              <a target="_blank" href="https://w.me/1234567890">
                <button className="carsinfo__contact-button carsinfo__contact-button--whatsapp">
                  <FaWhatsapp />
                  WhatsApp
                </button>
              </a>

              <a target="_blank" href="https://t.me/abdusalimov_shoxjaxon">
                <button className="carsinfo__contact-button carsinfo__contact-button--telegram">
                  <SiTelegram />
                  Telegram
                </button>
              </a>

              <a href="tel:+998900998210">
                <button className="carsinfo__contact-button carsinfo__contact-button--call">
                  <FaPhoneAlt />
                  Call
                </button>
              </a>
            </div>
            <form className="carsinfo_form" onSubmit={handleSubmit}>
              <label htmlFor="">
                {item?.model?.name} / {item?.color}
              </label>
              <input
                placeholder="Name"
                type="text"
                name="name"
                className="carsinfo_input"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                placeholder="Phone"
                type="number"
                name="phone"
                className="carsinfo_input"
                value={formData.phone}
                onChange={handleChange}
              />
              <input
                placeholder="Period"
                type="number"
                name="period"
                className="carsinfo_input"
                value={formData.period}
                onChange={handleChange}
              />
              <input
                placeholder="Details"
                type="text"
                name="details"
                className="carsinfo_input"
                value={formData.details}
                onChange={handleChange}
              />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>

        <div className="carsinfo_bottom"></div>
      </div>
    </div>
  );
};

export default CarsInfo;
