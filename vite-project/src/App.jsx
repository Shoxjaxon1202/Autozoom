import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NotFound from "./components/NotFound/NotFound";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Faqpage from "./Pages/Faqpage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { lazy, Suspense, useState } from "react";
import LazyLoader from "./components/LazyLoader/LazyLoader";
import "./i18n";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  const handleAllCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleBrand = (brand) => {
    setSelectedBrand(brand);
  };
  const handleLocation = (location) => {
    setSelectedLocation(location);
  };
  const handleCity = (City) => {
    setSelectedCity(City);
  };

  const Home = lazy(() => import("./Pages/Home"));
  const Filter = lazy(() => import("./Pages/Filter"));
  const Brand = lazy(() => import("./Pages/Brand"));
  const Services = lazy(() => import("./Pages/Services"));
  const Services1 = lazy(() => import("./Pages/Services1"));
  const Services2 = lazy(() => import("./Pages/Services2"));
  const About = lazy(() => import("./Pages/About"));
  const Contact = lazy(() => import("./Pages/Contact"));
  const Blog = lazy(() => import("./Pages/Blog"));
  const CarsInfo = lazy(() => import("./components/UI/CarsInfo/CarsInfo"));

  return (
    <Router>
      <div className="layout">
        <ToastContainer />
        <Navbar handleBrand={handleBrand} />
        <div className="routes">
          <Suspense fallback={<LazyLoader />}>
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    handleBrand={handleBrand}
                    handleAllCategory={handleAllCategory}
                    handleLocation={handleLocation}
                    handleCity={handleCity}
                  />
                }
              />
              <Route
                path="/cars"
                element={
                  <Filter
                    selectedBrand={selectedBrand}
                    selectedCategory={selectedCategory}
                    selectedLocation={selectedLocation}
                    selectedCity={selectedCity}
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
          </Suspense>
        </div>
        <Footer handleAllCategory={handleAllCategory} />
      </div>
    </Router>
  );
}

export default App;
