import React from "react";
import logo from "../../assets/img/logo.png";
import { NavLink } from "react-router-dom";
import "../../styles/footer.scss";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div className="footer__left">
          <img src={logo} alt="footer__logo" className="footer__logo" />
          <h2 className="footer__title">{t("footer.title")}</h2>
          <p className="footer__text">{t("footer.description")}</p>
          <NavLink className={"footer__btn"} to={"tel:+998990000441"}>
            {t("footer.offerButton")}
          </NavLink>
        </div>
        <div className="footer__right">
          <div className="footer__top">
            <div className="footer__cars">
              <NavLink className={"footer__link"} to={"/cars"}>
                {t("footer.cars")}
              </NavLink>
              <NavLink className={"footer__linktext"} to={"/cars"}>
                {t("footer.budgetCars")}
              </NavLink>
              <NavLink className={"footer__linktext"} to={"/cars"}>
                {t("footer.sportsCars")}
              </NavLink>
              <NavLink className={"footer__linktext"} to={"/cars"}>
                {t("footer.hyperCars")}
              </NavLink>
              <NavLink className={"footer__linktext"} to={"/cars"}>
                {t("footer.luxuryCars")}
              </NavLink>
              <NavLink className={"footer__linktext"} to={"/cars"}>
                {t("footer.suvCars")}
              </NavLink>
              <NavLink className={"footer__linktext"} to={"/cars"}>
                {t("footer.cabrioletCars")}
              </NavLink>
            </div>
            <div className="footer__contact">
              <NavLink className={"footer__link"} to={"/blog"}>
                {t("footer.blog")}
              </NavLink>
              <NavLink className={"footer__link"} to={"/services"}>
                {t("footer.services")}
              </NavLink>
              <div className="footer__linkc">
                <NavLink className={"footer__link"} to={"/contact"}>
                  {t("footer.contacts")}
                </NavLink>
                <p className="footer__text">{t("footer.address")}</p>
                <p className="footer__text">{t("footer.phone")}</p>
                <p className="footer__text">{t("footer.hours")}</p>
              </div>
            </div>
            <div className="footer__about">
              <div className="footer__aboutus">
                <NavLink className={"footer__link"} to={"/about"}>
                  {t("footer.aboutUs")}
                </NavLink>
                <NavLink className={"footer__linktext footer__faq"} to={"/"}>
                  {t("footer.ourTeam")}
                </NavLink>
                <NavLink className={"footer__linktext footer__faq"} to={"/faq"}>
                  {t("footer.faq")}
                </NavLink>
              </div>
              <div className="footer__follow">
                <h4 className="footer__title">{t("footer.followUs")}</h4>
                <div className="footer__icons">
                  <NavLink to={"https://instagram.com"}>
                    {/* SVG icon */}
                  </NavLink>
                  <NavLink to={"https://facebook.com"}>
                    {/* SVG icon */}
                  </NavLink>
                  <NavLink to={"https://youtube.com"}>{/* SVG icon */}</NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <hr className="footer__hr faq__hr" />
            <div className="footer__copyright">
              <p className="footer__text footer__ter">
                {t("footer.copyright")}
              </p>
              <NavLink
                className={"footer__linktext footer__terms"}
                to={"/terms"}
              >
                {t("footer.terms")}
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
