import React from "react";
import "../../../styles/follow.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { NavLink } from "react-router-dom";
import follow1 from "../../../assets/img/follow1.jpeg";
import follow2 from "../../../assets/img/follow2.jpeg";
import follow3 from "../../../assets/img/follow3.webp";
import follow4 from "../../../assets/img/follow4.jpeg";
import follow5 from "../../../assets/img/follow5.jpeg";
import follow6 from "../../../assets/img/follow6.webp";
import follow7 from "../../../assets/img/follow7.webp";
import follow8 from "../../../assets/img/follow8.webp";
import follow9 from "../../../assets/img/follow9.webp";
import follow10 from "../../../assets/img/follow10.webp";

const Follow = () => {
  return (
    <div className="follow">
      <div className="follow__wrapper">
        <div className="follow__top">
          <h1 className="follow__title">FOLLOW US ON INSTAGRAM</h1>
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={"10"}
            pagination={{
              type: "fraction",
            }}
            modules={[Pagination]}
            className="follow__swiper"
          >
            <SwiperSlide className="follow__slide">
              <Zoom>
                <img className="follow__img" src={follow1} alt="" />
              </Zoom>
            </SwiperSlide>
            <SwiperSlide className="follow__slide">
              <Zoom>
                <img className="follow__img" src={follow2} alt="" />
              </Zoom>
            </SwiperSlide>
            <SwiperSlide className="follow__slide">
              <Zoom>
                <img className="follow__img" src={follow3} alt="" />
              </Zoom>
            </SwiperSlide>
            <SwiperSlide className="follow__slide">
              <Zoom>
                <img className="follow__img" src={follow4} alt="" />
              </Zoom>
            </SwiperSlide>
            <SwiperSlide className="follow__slide">
              <Zoom>
                <img className="follow__img" src={follow5} alt="" />
              </Zoom>
            </SwiperSlide>
            <SwiperSlide className="follow__slide">
              <Zoom>
                <img className="follow__img" src={follow6} alt="" />
              </Zoom>
            </SwiperSlide>
            <SwiperSlide className="follow__slide">
              <Zoom>
                <img className="follow__img" src={follow7} alt="" />
              </Zoom>
            </SwiperSlide>
            <SwiperSlide className="follow__slide">
              <Zoom>
                <img className="follow__img" src={follow8} alt="" />
              </Zoom>
            </SwiperSlide>
            <SwiperSlide className="follow__slide">
              <Zoom>
                <img className="follow__img" src={follow9} alt="" />
              </Zoom>
            </SwiperSlide>
            <SwiperSlide className="follow__slide">
              <Zoom>
                <img className="follow__img" src={follow10} alt="" />
              </Zoom>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="follow__bottom">
          <div className="follow__first">
            <h1 className="follow__title">LOCATION</h1>
            <NavLink className={"follow__link"} to={"/cars"}>
              Beaches
            </NavLink>
            <NavLink className={"follow__link"} to={"/cars"}>
              Al Mamzar
            </NavLink>
            <NavLink className={"follow__link"} to={"/cars"}>
              Art Foundation
            </NavLink>
            <NavLink className={"follow__link"} to={"/cars"}>
              Al-Rahba
            </NavLink>
            <NavLink className={"follow__link"} to={"/cars"}>
              Corniche
            </NavLink>
            <NavLink className={"follow__link"} to={"/cars"}>
              Saadiyat Island
            </NavLink>
            <NavLink className={"follow__link"} to={"/cars"}>
              Burj-khalifa
            </NavLink>
            <NavLink className={"follow__link"} to={"/cars"}>
              Marina
            </NavLink>
            <NavLink className={"follow__link"} to={"/cars"}>
              Deira
            </NavLink>
            <NavLink className={"follow__link"} to={"/cars"}>
              Jumeirah
            </NavLink>
            <NavLink className={"follow__link"} to={"/cars"}>
              Burj al-arab
            </NavLink>
          </div>
          <div className="follow__second">
            <h1 className="follow__title">CITY</h1>
            <NavLink className={"follow__link"} to={"/cars"}>
              Fujairah
            </NavLink>
            <NavLink className={"follow__link"} to={"/cars"}>
              Sharjah
            </NavLink>
            <NavLink className={"follow__link"} to={"/cars"}>
              Abu Dhabi
            </NavLink>
            <NavLink className={"follow__link"} to={"/cars"}>
              Dubai
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Follow;
