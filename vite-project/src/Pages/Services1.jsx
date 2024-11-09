import React from "react";
import galochka from "../assets/img/galochka.png";
import serv11 from "../assets/img/serv11.jpeg";
import serv12 from "../assets/img/serv12.jpeg";
import serv13 from "../assets/img/serv13.jpeg";
import { NavLink } from "react-router-dom";

const Services1 = () => {
  return (
    <div className="services">
      <div className="services__wrapper">
        <h1 className="services__title">Ride a buggy in Dubai and have fun</h1>
        <div className="services__cards">
          <div className="services__card">
            <img className="services__img" src={serv11} alt="services__img" />
            <div className="services__desc">
              <p className="services__text">BASIC</p>
              <div className="services__price">
                <p className="services__pricetext">1000</p>
                <p className="services__text">one person</p>
              </div>
              <p className="services__text">
                Dune buggies in Dubai Book your ride on the most exciting
                adventure activity to hit the desert and later pamper your self
                to a traditional Arabian hospitality.
              </p>
              <h2 className="services__title">Package Inclusions:</h2>
              <div className="services__illus">
                <div className="services__illu">
                  <img src={galochka} alt="" className="services__icon" />
                  <h4 className="services__title">Premium Transfer to camp</h4>
                </div>
                <div className="services__illu">
                  <img src={galochka} alt="" className="services__icon" />
                  <h4 className="services__title">
                    Dune Buggy riding 1.5 hours
                  </h4>
                </div>
                <div className="services__illu">
                  <img src={galochka} alt="" className="services__icon" />
                  <h4 className="services__title">Falcone shoting</h4>
                </div>
                <div className="services__illu">
                  <img src={galochka} alt="" className="services__icon" />
                  <h4 className="services__title">Camel</h4>
                </div>
                <div className="services__illu">
                  <img src={galochka} alt="" className="services__icon" />
                  <h4 className="services__title">VIP room</h4>
                </div>
                <div className="services__illu">
                  <img src={galochka} alt="" className="services__icon" />
                  <h4 className="services__title">Fruits, Drinks, BBQ</h4>
                </div>
              </div>
              <NavLink to={"tel:+998990000441"} className="services__btn">
                BOOK NOW
              </NavLink>
            </div>
          </div>
          <div className="services__card">
            <img className="services__img" src={serv12} alt="services__img" />
            <div className="services__desc">
              <p className="services__text">BASIC</p>
              <div className="services__price">
                <p className="services__pricetext">2000</p>
                <p className="services__text">two person</p>
              </div>
              <p className="services__text">
                Dune buggies in Dubai Book your ride on the most exciting
                adventure activity to hit the desert and later pamper your self
                to a traditional Arabian hospitality.
              </p>
              <h2 className="services__title">Package Inclusions:</h2>
              <div className="services__illus">
                <div className="services__illu">
                  <img src={galochka} alt="" className="services__icon" />
                  <h4 className="services__title">Premium Transfer to camp</h4>
                </div>
                <div className="services__illu">
                  <img src={galochka} alt="" className="services__icon" />
                  <h4 className="services__title">
                    Dune Buggy riding 1.5 hours
                  </h4>
                </div>
                <div className="services__illu">
                  <img src={galochka} alt="" className="services__icon" />
                  <h4 className="services__title">Falcone shoting</h4>
                </div>
                <div className="services__illu">
                  <img src={galochka} alt="" className="services__icon" />
                  <h4 className="services__title">Camel</h4>
                </div>
                <div className="services__illu">
                  <img src={galochka} alt="" className="services__icon" />
                  <h4 className="services__title">VIP room</h4>
                </div>
                <div className="services__illu">
                  <img src={galochka} alt="" className="services__icon" />
                  <h4 className="services__title">Fruits, Drinks, BBQ</h4>
                </div>
              </div>
              <NavLink to={"tel:+998990000441"} className="services__btn">
                BOOK NOW
              </NavLink>
            </div>
          </div>
          <div className="services__card">
            <img className="services__img" src={serv13} alt="services__img" />
            <div className="services__desc">
              <p className="services__text">BASIC</p>
              <div className="services__price">
                <p className="services__pricetext">3000</p>
                <p className="services__text">three person</p>
              </div>
              <p className="services__text">
                Dune buggies in Dubai Book your ride on the most exciting
                adventure activity to hit the desert and later pamper your self
                to a traditional Arabian hospitality.
              </p>
              <h2 className="services__title">Package Inclusions:</h2>
              <div className="services__illus">
                <div className="services__illu">
                  <img src={galochka} alt="" className="services__icon" />
                  <h4 className="services__title">Premium Transfer to camp</h4>
                </div>
                <div className="services__illu">
                  <img src={galochka} alt="" className="services__icon" />
                  <h4 className="services__title">
                    Dune Buggy riding 1.5 hours
                  </h4>
                </div>
                <div className="services__illu">
                  <img src={galochka} alt="" className="services__icon" />
                  <h4 className="services__title">Falcone shoting</h4>
                </div>
                <div className="services__illu">
                  <img src={galochka} alt="" className="services__icon" />
                  <h4 className="services__title">Camel</h4>
                </div>
                <div className="services__illu">
                  <img src={galochka} alt="" className="services__icon" />
                  <h4 className="services__title">VIP room</h4>
                </div>
                <div className="services__illu">
                  <img src={galochka} alt="" className="services__icon" />
                  <h4 className="services__title">Fruits, Drinks, BBQ</h4>
                </div>
              </div>
              <NavLink to={"tel:+998990000441"} className="services__btn">
                BOOK NOW
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services1;
