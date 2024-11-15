import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/about.scss";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about">
      <div className="about__wrapper">
        <div className="about__top">
          <h1 className="about__title">{t("about.title")}</h1>
          <div className="about__welcome">
            <h2 className="about__title">{t("about.welcomeTitle")}</h2>
            <p className="about__text">{t("about.welcomeText")}</p>
          </div>
          <div className="about__why">
            <h1 className="about__title">{t("about.whyTitle")}</h1>
            <div className="about__desc">
              <h3 className="about__title">{t("about.elegantFleetTitle")}</h3>
              <p className="about__text">{t("about.elegantFleetText")}</p>
            </div>
            <div className="about__desc">
              <h3 className="about__title">{t("about.worryFreeTitle")}</h3>
              <p className="about__text">{t("about.worryFreeText")}</p>
            </div>
            <div className="about__desc">
              <h3 className="about__title">{t("about.transparencyTitle")}</h3>
              <p className="about__text">{t("about.transparencyText")}</p>
            </div>
            <div className="about__desc">
              <h3 className="about__title">{t("about.serviceTitle")}</h3>
              <p className="about__text">{t("about.serviceText")}</p>
            </div>
          </div>
        </div>
        <div className="about__bottom">
          <h3 className="about__title">{t("about.missionTitle")}</h3>
          <p className="about__text">{t("about.missionText")}</p>
          <h3 className="about__title">{t("about.contactTitle")}</h3>
          <p className="about__text">{t("about.contactText")}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
