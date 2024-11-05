import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";

import rasm from "../../assets/img/logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar__container">
        <div className="navbar__language-switch">
          <span className="navbar__flag">🇬🇧</span>
          <span className="navbar__flag">🇷🇺</span>
        </div>
        <div className="navbar__search">
          <input
            type="text"
            placeholder="Search..."
            className="navbar__search-input"
          />
          <i className="navbar__search-icon">&#128269;</i>
        </div>
        <NavLink to="/">
          <div className="navbar__logo">
            <img src={rasm} alt="Logo" className="navbar_img" />
          </div>
        </NavLink>
        <nav
          className={`navbar__menu ${
            isMobileMenuOpen ? "navbar__menu--open" : ""
          }`}>
          <NavLink
            to="/cars"
            className={({ isActive }) =>
              isActive ? "navbar__link navbar__link--active" : "navbar__link"
            }>
            CARS
          </NavLink>
          <NavLink
            to="/brands"
            className={({ isActive }) =>
              isActive ? "navbar__link navbar__link--active" : "navbar__link"
            }>
            BRAND
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "navbar__link navbar__link--active" : "navbar__link"
            }>
            SERVICES
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "navbar__link navbar__link--active" : "navbar__link"
            }>
            ABOUT US
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "navbar__link navbar__link--active" : "navbar__link"
            }>
            CONTACTS
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive ? "navbar__link navbar__link--active" : "navbar__link"
            }>
            BLOG
          </NavLink>
          <a href="tel:+998990000441" className="navbar__phone">
            +998 (99) 000 04 41
          </a>
        </nav>
        <div className="navbar__burger" onClick={toggleMobileMenu}>
          <div className="navbar__burger-line"></div>
          <div className="navbar__burger-line"></div>
          <div className="navbar__burger-line"></div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
