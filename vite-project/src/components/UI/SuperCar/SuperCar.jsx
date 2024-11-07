import React from "react";
import "../../../styles/super.scss";
import { NavLink } from "react-router-dom";

const SuperCar = () => {
  return (
    <div className="super">
      <div className="super__img"></div>
      <div className="super__wrapper">
        <div className="super__desc">
          <h1 className="super__title">SUPERCAR RENTAL DUBAI</h1>
          <p className="super__text">Hire the latest supercar</p>
        </div>
        <NavLink className={"serv__link"} to={"/cars"}>
          <h4 className="serv__btn">SEE ALL</h4>
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
  );
};

export default SuperCar;
