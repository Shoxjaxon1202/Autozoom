import React from "react";
import { NavLink } from "react-router-dom";
import serv21 from "../assets/img/serv21.jpeg";
import serv22 from "../assets/img/serv22.jpeg";
import serv23 from "../assets/img/serv23.jpeg";
import galochka from "../assets/img/galochka.png";

const Services2 = () => {
  return (
    <div className="services">
      <div className="services__wrapper">
        <h1 className="services__title">Ride a buggy in Dubai and have fun</h1>
        <div className="services__cards">
          <div className="services__card">
            <img className="services__img" src={serv21} alt="services__img" />
            <div className="services__desc">
              <p className="services__text">BASIC</p>
              <div className="services__price">
                <p className="services__pricetext">1000</p>
                <p className="services__text">one person</p>
              </div>
              <p className="services__text">
                Driving a sports car and a premium photo shoot in Dubai. Book
                yourself a trip to the most exciting adventure in the desert,
                and then enjoy the traditional Arab hospitality
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
            <img className="services__img" src={serv22} alt="services__img" />
            <div className="services__desc">
              <p className="services__text">BASIC</p>
              <div className="services__price">
                <p className="services__pricetext">2000</p>
                <p className="services__text">two person</p>
              </div>
              <p className="services__text">
                Driving a sports car and a premium photo shoot in Dubai. Book
                yourself a trip to the most exciting adventure in the desert,
                and then enjoy the traditional Arab hospitality
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
            <img className="services__img" src={serv23} alt="services__img" />
            <div className="services__desc">
              <p className="services__text">BASIC</p>
              <div className="services__price">
                <p className="services__pricetext">3000</p>
                <p className="services__text">three person</p>
              </div>
              <p className="services__text">
                Driving a sports car and a premium photo shoot in Dubai. Book
                yourself a trip to the most exciting adventure in the desert,
                and then enjoy the traditional Arab hospitality
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

export default Services2;
