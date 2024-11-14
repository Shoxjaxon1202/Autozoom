import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./navbar.scss";
import rasm from "../../assets/img/logo.png";
import En from "../../assets/img/en.png"; // English flag image
import Ru from "../../assets/img/ru.png"; // Russian flag image

const Navbar = ({ handleBrand }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeTimeoutRef = useRef(null);
  const { t, i18n } = useTranslation();

  const brands = [
    // Brand data
  ];

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    i18n.changeLanguage(savedLanguage);

    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, [i18n]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setIsModalOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => setIsModalOpen(false), 1500);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <header className="navbar">
      <div className="navbar__container">
        <div className="navbar__language-switch">
          <span
            className={`navbar__flag ${i18n.language === "en" ? "active" : ""}`}
            onClick={() => changeLanguage("en")}
            style={{
              backgroundImage: `url(${En})`
            }}
          />
          <span
            className={`navbar__flag ${i18n.language === "ru" ? "active" : ""}`}
            onClick={() => changeLanguage("ru")}
            style={{
              backgroundImage: `url(${Ru})`
            }}
          />
        </div>
        <div className="navbar__search">
          <input
            type="text"
            placeholder={t("navbar.search")}
            className="navbar__search-input"
          />
          <i className="navbar__search-icon">&#128269;</i>
        </div>
        <ul className="navbar_list">
          <NavLink to="/" className="navbar__logo">
            <img src={rasm} alt="Logo" className="navbar_img" />
          </NavLink>
          <nav
            className={`navbar__menu ${isMobileMenuOpen ? "navbar__menu--open" : ""}`}
          >
            <NavLink to="/cars" className="navbar__link">
              {t("navbar.cars")}
            </NavLink>
            <NavLink
              to="/brands"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="navbar__link"
            >
              {t("navbar.brands")}
            </NavLink>
            {isModalOpen && (
              <div
                className="modal-overlay"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="modal-content">
                  <h3 className="modal-title">{t("navbar.selectBrand")}</h3>
                  <div className="brands-grid">
                    {brands.map((brand, index) => (
                      <NavLink
                        to="/cars"
                        key={index}
                        onClick={() => handleBrand(brand.alt)}
                        className="brand-item"
                      >
                        <img
                          src={brand.src}
                          alt={brand.alt}
                          className="brand-image"
                        />
                        <span>{t("navbar.rent")} {brand.alt}</span>
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            )}
            <NavLink to="/services" className="navbar__link">
              {t("navbar.services")}
            </NavLink>
            <NavLink to="/about" className="navbar__link">
              {t("navbar.about")}
            </NavLink>
            <NavLink to="/contact" className="navbar__link">
              {t("navbar.contact")}
            </NavLink>
            <NavLink to="/blog" className="navbar__link">
              {t("navbar.blog")}
            </NavLink>
          </nav>
          <div className="navbar__mobile-menu" onClick={toggleMobileMenu}>
            <div className="navbar__menu-icon">&#9776;</div>
          </div>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
