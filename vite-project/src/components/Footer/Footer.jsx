import React from "react";
import logo from "../../assets/img/logo.png";
import { NavLink } from "react-router-dom";
import "../../styles/footer.scss";

const Footer = ({ handleAllCategory }) => {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div className="footer__left">
          <img src={logo} alt="footer__logo" className="footer__logo" />
          <h2 className="footer__title">LUXURY CAR RENTAL IN EMIRATES</h2>
          <p className="footer__text">
            Rent sports and luxury cars directly without intermediaries. Rent a
            car in Dubai with Auto Zoom Car Rental - safety and driving pleasure
          </p>
          <NavLink className={"footer__btn"} to={"tel:+998990000441"}>
            GET BEST OFFER
          </NavLink>
        </div>
        <div className="footer__right">
          <div className="footer__top">
            <div className="footer__cars">
              <NavLink className={"footer__link"} to={"/cars"}>
                Cars
              </NavLink>
              <NavLink
                onClick={() => {
                  handleAllCategory("Budget cars Rental Emirates");
                }}
                className={"footer__linktext"}
                to={"/cars"}>
                Budget cars Rental Emirates
              </NavLink>
              <NavLink
                onClick={() => {
                  handleAllCategory("Sports cars Rental Emirates");
                }}
                className={"footer__linktext"}
                to={"/cars"}>
                Sports cars Rental Emirates
              </NavLink>
              <NavLink
                onClick={() => {
                  handleAllCategory("Hyper Cars Rental Emirates");
                }}
                className={"footer__linktext"}
                to={"/cars"}>
                Hyper Cars Rental Emirates
              </NavLink>
              <NavLink
                onClick={() => {
                  handleAllCategory("Luxury Cars Rental Emirates");
                }}
                className={"footer__linktext"}
                to={"/cars"}>
                Luxury Cars Rental Emirates
              </NavLink>
              <NavLink
                onClick={() => {
                  handleAllCategory("Suv Cars Renal Emirates");
                }}
                className={"footer__linktext"}
                to={"/cars"}>
                Suv Cars Renal Emirates
              </NavLink>
              <NavLink
                onClick={() => {
                  handleAllCategory("Cabriolet cars rental Emirates");
                }}
                className={"footer__linktext"}
                to={"/cars"}>
                Cabriolet cars rental Emirates
              </NavLink>
            </div>
            <div className="footer__contact">
              <NavLink className={"footer__link"} to={"/cars"}>
                BLOG
              </NavLink>{" "}
              <NavLink className={"footer__link"} to={"/cars"}>
                SERVICES
              </NavLink>{" "}
              <div className="footer__linkc">
                <NavLink className={"footer__link"} to={"/cars"}>
                  CONTACTS
                </NavLink>
                <p className="footer__text">
                  Elite 3 Sports City, Dubai 26W8 24J, United Arab Emirates
                </p>
                <p className="footer__text">+998 99 000 0441</p>
                <p className="footer__text">Working hours: 24/7</p>
              </div>
            </div>
            <div className="footer__about">
              <div className="footer__aboutus">
                <NavLink className={"footer__link"} to={"/about"}>
                  ABOUT US
                </NavLink>
                <NavLink className={"footer__linktext footer__faq"} to={"/"}>
                  Our Team
                </NavLink>
                <NavLink className={"footer__linktext footer__faq"} to={"/faq"}>
                  FAQ
                </NavLink>
              </div>
              <div className="footer__follow">
                <h4 className="footer__title">Follow Us</h4>
                <div className="footer__icons">
                  <NavLink to={"https://instagram.com"}>
                    <svg
                      className="footer__icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512">
                      <path
                        fill="#c6c6c6"
                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                      />
                    </svg>
                  </NavLink>
                  <NavLink to={"https://facebook.com"}>
                    <svg
                      className="footer__icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512">
                      <path
                        fill="#c6c6c6"
                        d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"
                      />
                    </svg>
                  </NavLink>
                  <NavLink to={"https://youtube.com"}>
                    <svg
                      className="footer__icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512">
                      <path
                        fill="#c6c6c6"
                        d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"
                      />
                    </svg>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <hr className="footer__hr faq__hr" />
            <div className="footer__copyright">
              <p className="footer__text footer__ter">
                © 2024 Terra Car Rental. United Arab Emirates.
              </p>
              <NavLink
                className={"footer__linktext footer__terms"}
                to={"/terms"}>
                Terms and Conditions
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
