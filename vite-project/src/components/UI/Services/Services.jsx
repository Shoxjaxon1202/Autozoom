import React from "react";
import "../../../styles/services.scss";
import serv1 from "../../../assets/img/serv1.jpeg";
import serv2 from "../../../assets/img/serv2.jpeg";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Serv = () => {
  const { t } = useTranslation();

  return (
    <div className="serv">
      <div className="serv__wrapper">
        <h1 className="serv__title">{t("servicesTitle")}</h1>
        <div className="serv__cards">
          <div className="serv__card">
            <img className="serv__img" src={serv1} alt="service image 1" />
            <h2 className="serv__card__title">{t("rideBuggyTitle")}</h2>
            <p className="serv__text">{t("rideBuggyDescription")}</p>
            <NavLink className="serv__link" to="/services1">
              <h4 className="serv__btn">{t("learnMore")}</h4>
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
          <div className="serv__card">
            <img className="serv__img" src={serv2} alt="service image 2" />
            <h2 className="serv__card__title">{t("photoshootTitle")}</h2>
            <p className="serv__text">{t("photoshootDescription")}</p>
            <NavLink className="serv__link" to="/services2">
              <h4 className="serv__btn">{t("learnMore")}</h4>
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
    </div>
  );
};

export default Serv;
