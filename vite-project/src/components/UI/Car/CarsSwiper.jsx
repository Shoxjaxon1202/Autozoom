import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./carsswiper.scss";
import { Pagination } from "swiper/modules";
import { NavLink } from "react-router-dom";

export default function CarsSwiper({ cars }) {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      modules={[Pagination]}
      className="cars_mySwiper"
      style={{ height: "100%", minHeight: "500px" }} // Minimal balandlik qo'shish
    >
      {cars.map((car, index) => (
        <SwiperSlide key={index}>
          <NavLink to={`/carsinfo/${car?.id}`}>
            <div>
              <img
                src={`https://realauto.limsa.uz/api/uploads/images/${car?.car_images[0]?.image?.src}`}
                alt=""
                className="cars_img"
              />
            </div>
            <h4 className="cars_subtitle">
              {car?.brand?.title} {car?.model?.name}
            </h4>
            <hr />
            <span className="cars_span">
              <h4 className="cars_subtitle2">AED {car?.price}0</h4>
              <p className="cars_text">/${car.price}0</p>
            </span>
            <p className="cars_text">per day: {car?.limitperday}</p>
          </NavLink>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
