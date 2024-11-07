import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./carsinfo.scss";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import useData from "../../../Pages/useData";
import { useParams } from "react-router-dom";
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

const CarsInfo = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const { data, loading, error } = useData(
    "https://realauto.limsa.uz/api/cars"
  );

  const params = useParams()?.id;

  const item = data?.data.filter((elem) => elem?.id == params)[0];

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

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
              <p>Year: 2022</p>
              <p>Seats: 4</p>
              <p>Color: Black</p>
              {/* Qo'shimcha xususiyatlar qo'shing */}
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
              <button className="carsinfo__contact-button carsinfo__contact-button--whatsapp">
                WhatsApp
              </button>
              <button className="carsinfo__contact-button carsinfo__contact-button--telegram">
                Telegram
              </button>
              <button className="carsinfo__contact-button carsinfo__contact-button--call">
                Call
              </button>
            </div>
          </div>
        </div>

        <div className="carsinfo_bottom"></div>
      </div>
    </div>
  );
};

export default CarsInfo;
