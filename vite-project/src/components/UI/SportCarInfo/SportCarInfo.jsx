import React from "react";
import "../../../styles/sport.scss";
import { NavLink } from "react-router-dom";

const SportCarInfo = () => {
  return (
    <div className="sport">
      <div className="sport__wrapper">
        <iframe
          className="sport__iframe"
          width={700}
          height={450}
          src="https://www.youtube.com/embed/rsHmvxJ86PA?si=Fit3hGaH8QxSoj3s"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen=""
        />

        <div className="sport__desc">
          <h1 className="sport__title">SPORTS CAR RENTAL DUBAI</h1>
          <p className="sport__text">
            Terra L L C a Car is a Top Luxury Car Rental Dubai based company, We
            offer sports car rental, and supercar rental in Dubai. The best
            luxury car rental process provided by our fleet . We own a diverse
            range of luxury supercar rental and sports car rental Dubai style ,
            including Rolls Royce, Lamborghini, Maserati, Ferrari, Mercedes
            Benz, Porsche, and Range Rover, to name a few. Rent a car with the
            best car rental company in Dubai.
          </p>
          <NavLink className={"serv__link"} to={"/cars"}>
            <h4 className="serv__btn">ALL CARS</h4>
            <svg
              className="serv__icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="#ffffff"
                d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
              />
            </svg>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SportCarInfo;
