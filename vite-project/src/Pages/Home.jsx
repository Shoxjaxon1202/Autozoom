import React from "react";

import "../styles/home.scss";
import Cars from "../components/UI/Car/Cars";

const Home = () => {
  return (
    <div className="home">
      {/* <h2>Home page</h2> */}
      <Cars />
    </div>
  );
};

export default Home;
