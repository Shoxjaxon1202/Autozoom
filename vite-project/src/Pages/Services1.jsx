import React from "react";
import galochka from "../assets/img/galochka.png";
import serv11 from "../assets/img/serv11.jpeg";
import serv12 from "../assets/img/serv12.jpeg";
import serv13 from "../assets/img/serv13.jpeg";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Services1 = () => {
  const { t } = useTranslation();

  return (
    <div className="services">
      <div className="services__wrapper">
        <h1 className="services__title">{t("rideBuggyTitle")}</h1>
        <div className="services__cards">
          {[1000, 2000, 3000].map((price, index) => (
            <div className="services__card" key={index}>
              <img
                className="services__img"
                src={[serv11, serv12, serv13][index]}
                alt="service image"
              />
              <div className="services__desc">
                <p className="services__text">{t("basicPackage")}</p>
                <div className="services__price">
                  <p className="services__pricetext">{price}</p>
                  <p className="services__text">
                    {t("person", { count: index + 1 })}
                  </p>
                </div>
                <p className="services__text">{t("duneBuggyDescription")}</p>
                <h2 className="services__title">{t("packageInclusions")}</h2>
                <div className="services__illus">
                  {["premiumTransfer", "duneBuggyRide", "falconShooting", "camel", "vipRoom", "foodAndBeverages"].map((item, idx) => (
                    <div className="services__illu" key={idx}>
                      <img src={galochka} alt="" className="services__icon" />
                      <h4 className="services__title">{t(item)}</h4>
                    </div>
                  ))}
                </div>
                <NavLink to="tel:+998990000441" className="services__btn">
                  {t("bookNow")}
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services1;
