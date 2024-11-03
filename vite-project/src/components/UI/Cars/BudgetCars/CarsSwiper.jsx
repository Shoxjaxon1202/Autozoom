import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./carsswiper.scss";
import { Pagination } from "swiper/modules";
import { NavLink } from "react-router-dom";
import img from "../../../../assets/img/image.png";
import useData from "../../../../Data/UseData";

export default function CarsSwiper() {
  const { data, loading, error } = useData(
    "https://realauto.limsa.uz/api/cars"
  );
  const [cars, setCars] = useState([]); // To'g'ri destructurizatsiya

  useEffect(() => {
    if (data) {
      setCars(data.data); // Faqat `data` mavjud bo'lganda yangilash
    }
  }, [data]); // `data` o'zgarganda ishlaydi

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  console.log(cars);

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        modules={[Pagination]}
        className="cars_mySwiper">
        {cars.map(
          (
            car,
            index // Avtomobillar ro'yxatini ko'rsatish
          ) => (
            <SwiperSlide key={index}>
              <NavLink to={"/"}>
                <div>
                  <img src={img} alt="" className="cars_img" />
                </div>
                <h4 className="cars_subtitle">{car.name}</h4>
                <hr />
                <span className="cars_span">
                  <h4 className="cars_subtitle2">AED {car.price}</h4>
                  <p className="cars_text">/${car.price}</p>
                </span>
                <p className="cars_text">per day</p>
              </NavLink>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </>
  );
}
