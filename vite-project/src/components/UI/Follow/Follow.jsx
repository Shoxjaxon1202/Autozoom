import React from "react";
import "../../../styles/follow.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
import useData from "../../../Pages/useData";
import { useTranslation } from "react-i18next";

const Follow = ({ handleLocation, handleCity }) => {
  const { t } = useTranslation();
  const { data, loading, error } = useData(
    "https://realauto.limsa.uz/api/cars"
  );

  const uniqueLocations = [
    ...new Set(data?.data?.map((item) => item?.location?.name)),
  ];
  const uniqueCities = [
    ...new Set(data?.data?.map((item) => item?.city?.name)),
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          dots: true,
        },
      },
      {
        breakpoint: 1145,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 890,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="follow">
      <div className="follow__wrapper">
        <div className="follow__top">
          <h1 className="follow__title">{t("follow_title")}</h1>
          <div className="follow__swipercon">
            <Slider className="follow__swiper" {...settings}>
              {[
                follow1,
                follow2,
                follow3,
                follow4,
                follow5,
                follow6,
                follow7,
                follow8,
                follow9,
                follow10,
              ].map((img, index) => (
                <div className="follow__slide" key={index}>
                  <Zoom>
                    <img
                      className="follow__img"
                      src={img}
                      alt={`follow${index + 1}`}
                    />
                  </Zoom>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="follow__bottom">
          <div className="follow__first">
            <h1 className="follow__title">{t("location_title")}</h1>
            {uniqueLocations?.map((item, index) => (
              <NavLink
                key={index}
                onClick={() => {
                  handleLocation(item);
                }}
                className="follow__link"
                to="/cars"
              >
                {item}
              </NavLink>
            ))}
          </div>
          <div className="follow__second">
            <h1 className="follow__title">{t("city_title")}</h1>
            {uniqueCities?.map((item, index) => (
              <NavLink
                key={index}
                onClick={() => {
                  handleCity(item);
                }}
                className="follow__link"
                to="/cars"
              >
                {item}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Follow;
