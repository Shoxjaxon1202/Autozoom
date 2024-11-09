import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import NotFound from "./components/NotFound/NotFound";
import Brand from "./Pages/Brand";
import Services from "./Pages/Services";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import Filter from "./Pages/Filter";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Services1 from "./Pages/Services1";
import Services2 from "./Pages/Services2";
import Faqpage from "./Pages/Faqpage";
import CarsInfo from "./components/UI/CarsInfo/CarsInfo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useEffect, useState } from "react";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);

  const handleAllCategory = (category) => {
    setSelectedCategory(category);
  };
  const handleBrand = (brand) => {
    setSelectedBrand(brand);
  };

  return (
    <Router>
      <div className="layout">
        <ToastContainer />
        <Navbar handleBrand={handleBrand} />
        <div className="routes">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  handleBrand={handleBrand}
                  handleAllCategory={handleAllCategory}
                />
              }
            />
            <Route
              path="/cars"
              element={
                <Filter
                  selectedBrand={selectedBrand}
                  selectedCategory={selectedCategory}
                />
              }
            />
            <Route
              path="/brands"
              element={<Brand handleBrand={handleBrand} />}
            />
            <Route path="/services" element={<Services />} />
            <Route path="/services1" element={<Services1 />} />
            <Route path="/services2" element={<Services2 />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<Faqpage />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/carsinfo/:id" element={<CarsInfo />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
