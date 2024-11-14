import React from "react";
import { useTranslation } from "react-i18next";  // Import useTranslation
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/brand.scss";
import { Autoplay, Pagination } from "swiper/modules";
import { NavLink } from "react-router-dom";

const Brand = ({ handleBrand }) => {
  const { t } = useTranslation();  // Hook to get the translation function

  const brands = [
    {
      src: "https://realauto.limsa.uz/api/uploads/images/d714a6ff-1959-4189-89f7-957853352e77.png",
      alt: "Nissan",
    },
    {
      src: "https://realauto.limsa.uz/api/uploads/images/7b2501cb-a785-469f-bc99-1674e239c48c.png",
      alt: "BMW",
    },
    {
      src: "https://realauto.limsa.uz/api/uploads/images/f228bf46-e678-4807-a34b-ce617f8faac3.png",
      alt: "Audi",
    },
    {
      src: "https://realauto.limsa.uz/api/uploads/images/42084fd5-2311-47c3-9f4c-12b44ae08716.png",
      alt: "Chevrolet",
    },
    {
      src: "https://realauto.limsa.uz/api/uploads/images/18515cef-39ef-4e5e-9a77-3df3b12ddd42.png",
      alt: "Tayota",
    },
    {
      src: "https://realauto.limsa.uz/api/uploads/images/b847eb62-cb01-479e-9946-511c8cbccb1a.png",
      alt: "Mercedes-Benz",
    },
    {
      src: "https://realauto.limsa.uz/api/uploads/images/0d22afa6-b549-423e-9a14-014c6c6b2eea.png",
      alt: "Tesla",
    },
    {
      src: "https://realauto.limsa.uz/api/uploads/images/444e9e4b-7e00-49dc-a63a-ae930dd855d7.png",
      alt: "Hummer",
    },
    {
      src: "https://realauto.limsa.uz/api/uploads/images/d585d075-18ce-414b-8644-49d371d08afc.png",
      alt: "Rolls-Royce",
    },
    {
      src: "https://realauto.limsa.uz/api/uploads/images/a55c6334-87ad-4aa0-89f5-4fe40ed456d3.png",
      alt: "Cadillac",
    },
    {
      src: "https://realauto.limsa.uz/api/uploads/images/ac1ecd80-fb27-4d64-b97a-d078e3fe2b34.png",
      alt: "Ferrari",
    },
    {
      src: "https://realauto.limsa.uz/api/uploads/images/fcfed7fd-9e03-41b3-b642-f1a148409e74.png",
      alt: "Lamborghini",
    },
    {
      src: "https://realauto.limsa.uz/api/uploads/images/bd538eac-b552-475f-9311-c8c5e5828064.png",
      alt: "Mustang",
    },
    {
      src: "https://realauto.limsa.uz/api/uploads/images/88cb3468-a77e-4a56-84da-c6ba26fb9453.png",
      alt: "Koenigsegg",
    },
    {
      src: "https://realauto.limsa.uz/api/uploads/images/ac6d8dcf-54a5-4087-a867-e95e35585fce.png",
      alt: "Bugatti",
    },
  ];

  return (
    <div className="brand-slider-container">
      <div className="brand_wrapper">
        <h2 className="brand-title">{t("brand.title")}</h2>  {/* Translated brand title */}
        <Swiper
          loop={true}
          slidesPerView={6}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
          }}
          modules={[Autoplay, Pagination]}
          breakpoints={{
            1024: {
              slidesPerView: 6,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            400: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
          className="brand-swiper mySwiper">
          {brands.map((brand, index) => (
            <SwiperSlide key={index}>
              <NavLink
                to={"/cars"}
                className="brand-card"
                onClick={() => handleBrand(brand.alt)}>
                <img src={brand.src} alt={`Brand ${brand.alt}`} />
                <h3 className="brand-card-title">{brand.alt}</h3> {/* Brand name */}
              </NavLink>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Brand;
