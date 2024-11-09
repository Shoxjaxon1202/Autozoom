import React from "react";
import "./intro.scss";

import car1 from "../../../assets/img/image.png";
import car2 from "../../../assets/img/image1.png";
import car3 from "../../../assets/img/image2.png";
import car4 from "../../../assets/img/image3.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { NavLink } from "react-router-dom";

const Intro = () => {
  return (
    <div className="intro-container">
      <div className="intro-header">
        <h1>TOP LUXURY CAR RENTAL EMIRATES</h1>
        <h2>№1</h2>
        <p>
          Best sports car & supercar rental Emirates, Exclusive offers on luxury
          car rental Emirates Cheap price
        </p>
        <NavLink to={"/cars"}>
          <button className="catalog-button">
            RENT A CAR EMIRATES CATALOG
          </button>
        </NavLink>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{ clickable: true }}
        className="mySwiper">
        <SwiperSlide>
          <img src={car1} alt="Car 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={car2} alt="Car 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={car3} alt="Car 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={car4} alt="Car 4" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Intro;
