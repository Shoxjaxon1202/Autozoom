import React from "react";
import "../styles/about.scss";

const About = () => {
  return (
    <div className="about">
      <div className="about__wrapper">
        <div className="about__top">
          <h1 className="about__title">ABOUT US</h1>
          <div className="about__welcome">
            <h2 className="about__title">
              Welcome to Auto Zoom Car Rental Co LLC – Your Partner in
              Unforgettable Journeys in Dubai!
            </h2>
            <p className="about__text">
              In a world where every trip is an adventure, Auto Zoom Car Rental
              Co LLC offers you a unique car rental experience in the heart of
              Dubai.
            </p>
          </div>
          <div className="about__why">
            <h1 className="about__title">Why Auto Zoom?</h1>
            <div className="about__desc">
              <h3 className="about__title">Elegant Car Fleet:</h3>
              <p className="about__text">
                We provide you the opportunity to choose from our luxurious car
                fleet – from sleek sedans to powerful SUVs. We have a vehicle to
                match your style and meet your needs.
              </p>
            </div>
            <div className="about__desc">
              <h3 className="about__title">Worry-Free Rental:</h3>
              <p className="about__text">
                Our goal is to make your journey as comfortable as possible.
                Flexible rental terms, the option to hire with a driver, and a
                wide range of additional services – all for your convenience.
              </p>
            </div>
            <div className="about__desc">
              <h3 className="about__title">Transparency and Trust:</h3>
              <p className="about__text">
                We value every customer, so our prices are honest and
                transparent. No hidden fees, no unexpected surprises. Trust us,
                and we will make your rental experience straightforward and
                clear.
              </p>
            </div>
            <div className="about__desc">
              <h3 className="about__title">Service at Your Level:</h3>
              <p className="about__text">
                Our friendly and professional team is ready to bring your ideas
                to life. We aim not just to provide a car but to create a
                genuine automotive experience for you.
              </p>
            </div>
          </div>
        </div>
        <div className="about__bottom">
          <h3 className="about__title">Our Mission:</h3>
          <p className="about__text">
            Auto Zoom Car Rental Co LLC is created with one goal – to make every
            journey unforgettable. We strive to offer you not just a car but the
            key to new experiences and adventures.
          </p>
          <h3 className="about__title">Contact Us:</h3>
          <p className="about__text">
            Trust the professionals – trust Auto Zoom Car Rental Co LLC. Get in
            touch with us today to start your exciting journey through Dubai in
            our stylish and reliable cars. Allow yourself to savor every moment
            of your trip.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
