import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";

import rasm from "../../assets/img/logo.png";

const Navbar = ({ handleBrand }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeTimeoutRef = useRef(null);

  const brands = [
    {
      src: "https://realauto.limsa.uz/api/uploads/images/d714a6ff-1959-4189-89f7-957853352e77.png",
      alt: "Nissan",
    },
    {
      src: "https://realauto.limsa.uz/api/uploads/images/7b2501cb-a785-469f-bc99-1674e239c48c.png",
      alt: "BMW",
    },
    {
      src: "https://realauto.limsa.uz/api/uploads/images/f228bf46-e678-4807-a34b-ce617f8faac3.png",
      alt: "Audi",
    },
    {
      src: "https://realauto.limsa.uz/api/uploads/images/42084fd5-2311-47c3-9f4c-12b44ae08716.png",
      alt: "Chevrolet",
    },
    {
      src: "https://realauto.limsa.uz/api/uploads/images/18515cef-39ef-4e5e-9a77-3df3b12ddd42.png",
      alt: "Toyota",
    },
    {
      src: "https://realauto.limsa.uz/api/uploads/images/b847eb62-cb01-479e-9946-511c8cbccb1a.png",
      alt: "Mercedes-Benz",
    },
    {
      src: "https://realauto.limsa.uz/api/uploads/images/0d22afa6-b549-423e-9a14-014c6c6b2eea.png",
      alt: "Tesla",
    },
    {
      src: "https://realauto.limsa.uz/api/uploads/images/444e9e4b-7e00-49dc-a63a-ae930dd855d7.png",
      alt: "Hummer",
    },
    {
      src: "https://realauto.limsa.uz/api/uploads/images/d585d075-18ce-414b-8644-49d371d08afc.png",
      alt: "Rolls-Royce",
    },
    {
      src: "https://realauto.limsa.uz/api/uploads/images/a55c6334-87ad-4aa0-89f5-4fe40ed456d3.png",
      alt: "Cadillac",
    },
    {
      src: "https://realauto.limsa.uz/api/uploads/images/ac1ecd80-fb27-4d64-b97a-d078e3fe2b34.png",
      alt: "Ferrari",
    },
    {
      src: "https://realauto.limsa.uz/api/uploads/images/fcfed7fd-9e03-41b3-b642-f1a148409e74.png",
      alt: "Lamborghini",
    },
    {
      src: "https://realauto.limsa.uz/api/uploads/images/bd538eac-b552-475f-9311-c8c5e5828064.png",
      alt: "Mustang",
    },
    {
      src: "https://realauto.limsa.uz/api/uploads/images/88cb3468-a77e-4a56-84da-c6ba26fb9453.png",
      alt: "Koenigsegg",
    },
    {
      src: "https://realauto.limsa.uz/api/uploads/images/ac6d8dcf-54a5-4087-a867-e95e35585fce.png",
      alt: "Bugatti",
    },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setIsModalOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsModalOpen(false);
    }, 1500); // 300 ms kechikish qo'shildi
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
        <ul className="navbar_list">
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
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              to="/brands"
              className={({ isActive }) =>
                isActive ? "navbar__link navbar__link--active" : "navbar__link"
              }>
              BRAND
            </NavLink>
            {isModalOpen && (
              <div className="modal-overlay">
                <div className="modal-content">
                  <h3 className="modal-title">Select a Brand</h3>
                  <div className="brands-grid">
                    {brands.map((brand, index) => (
                      <NavLink
                        to={"/cars"}
                        onClick={() => {
                          handleBrand(brand.alt);
                        }}
                        key={index}
                        className="brand-item">
                        <img
                          src={brand.src}
                          alt={brand.alt}
                          className="brand-image"
                        />
                        <span>Rent {brand.alt} Emirates</span>
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "navbar__link navbar__link--active" : "navbar__link"
              }>
              SERVICES
            </NavLink>
            <NavLink
              id="aboutus"
              to="/about"
              className={({ isActive }) =>
                isActive ? "navbar__link navbar__link--active" : "navbar__link"
              }>
              <span>About</span> <span> US</span>
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
            <a id="telefon" href="tel:+998990000441" className="navbar__phone">
              +998 (99) 000 04 41
            </a>
          </nav>
        </ul>
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
