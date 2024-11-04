import React, { useState } from "react";
import "./navbar.scss";

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
        <div className="navbar__logo">
          <span className="navbar__logo-text">TERRA rent a car</span>
        </div>
        <nav
          className={`navbar__menu ${
            isMobileMenuOpen ? "navbar__menu--open" : ""
          }`}
        >
          <a href="#cars" className="navbar__link">
            CARS
          </a>
          <a href="#brand" className="navbar__link">
            BRAND
          </a>
          <a href="#services" className="navbar__link">
            SERVICES
          </a>
          <a href="#about" className="navbar__link">
            ABOUT US
          </a>
          <a href="#contacts" className="navbar__link">
            CONTACTS
          </a>
          <a href="#blog" className="navbar__link">
            BLOG
          </a>
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
