import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/contact.scss";
import { NavLink } from "react-router-dom";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="contact">
      <div className="contact__wrapper">
        <div className="contact__top">
          <h1 className="contact__title">{t("contact.haveQuestions")}</h1>
          <p className="contact__text">{t("contact.helpText")}</p>
        </div>
        <div className="contact__bottom">
          <div className="contact__location">
            <div className="contact__icons">
              <svg
                width={15}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="#cfcfcf"
                  d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                />
              </svg>
              <svg
                width={15}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#cfcfcf"
                  d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                />
              </svg>
              <svg
                width={15}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#cfcfcf"
                  d="M215.4 96L144 96l-36.2 0L96 96l0 8.8L96 144l0 40.4 0 89L.2 202.5c1.6-18.1 10.9-34.9 25.7-45.8L48 140.3 48 96c0-26.5 21.5-48 48-48l76.6 0 49.9-36.9C232.2 3.9 243.9 0 256 0s23.8 3.9 33.5 11L339.4 48 416 48c26.5 0 48 21.5 48 48l0 44.3 22.1 16.4c14.8 10.9 24.1 27.7 25.7 45.8L416 273.4l0-89 0-40.4 0-39.2 0-8.8-11.8 0L368 96l-71.4 0-81.3 0zM0 448L0 242.1 217.6 403.3c11.1 8.2 24.6 12.7 38.4 12.7s27.3-4.4 38.4-12.7L512 242.1 512 448s0 0 0 0c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64c0 0 0 0 0 0zM176 160l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
                />
              </svg>
            </div>
            <div className="contact__desc">
              <h1 className="contact__title">{t("contact.headOffice")}</h1>
              <p className="contact__text">{t("contact.address")}</p>
              <NavLink className={"contact__link"} to={"tel:+998990000441"}>
                +998 (99) 000 04 41
              </NavLink>
              <NavLink
                className={"contact__link"}
                to={"mailto:terra-rentacar.mail.ru"}
              >
                terra-rentacar.mail.ru
              </NavLink>
            </div>
          </div>
          <hr className="footer__hr contact__hr" />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d14458.729499590072!2d55.215299!3d25.044851!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDAyJzQxLjUiTiA1NcKwMTInNTUuMSJF!5e0!3m2!1sen!2sus!4v1730987927061!5m2!1sen!2sus"
            width={"100%"}
            height={500}
            style={{ border: 0, borderRadius: "25px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
