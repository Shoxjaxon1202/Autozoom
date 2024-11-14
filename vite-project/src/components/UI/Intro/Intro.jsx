import React from "react";
import { useTranslation } from "react-i18next";
import "./intro.scss";

import car1 from "../../../assets/img/image.png";
import car2 from "../../../assets/img/image1.png";
import car3 from "../../../assets/img/image2.png";
import car4 from "../../../assets/img/image3.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { NavLink } from "react-router-dom";

const Intro = () => {
  const { t } = useTranslation();  // Hook to get the translation function

  return (
    <div className="intro-container">
      <div className="intro_wrapper">
        <div className="intro-header">
          <h1>{t("intro.header")}</h1>
          <h2>{t("intro.rank")}</h2>
          <p>{t("intro.description")}</p>
          <NavLink to={"/cars"}>
            <button className="catalog-button">
              {t("intro.button")}
            </button>
          </NavLink>
        </div>

        <Swiper
          loop={true}
          slidesPerView={3}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{ clickable: true }}
          className="mySwiper"
          slideToClickedSlide={true}
        >
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
    </div>
  );
};

export default Intro;
