import React from "react";
import "../styles/home.scss";
import Services from "../components/UI/Services/Services";
import Cars from "../components/UI/Car/Cars";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Services />
      <Cars />
      <Footer />
    </div>
  );
};

export default Home;
