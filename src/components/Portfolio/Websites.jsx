import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./Websites/Banner";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Responsive from "./Websites/Responsive";
import Porjects from "./Websites/Projects";

function Websites() {
  const [isOnBanner, setIsOnBanner] = useState(true);

  const handleScroll = () => {
    const bannerHeight = document.getElementById("banner").offsetHeight;
    if (window.scrollY < bannerHeight) {
      setIsOnBanner(true);
    } else {
      setIsOnBanner(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="portfolio portfolio-website">
      <Helmet>
        <title>Web Design & Development Portfolio - koiostudio</title>
        <meta name="description" content="View stunning websites designed and developed by koiostudio. From high-performance corporate sites to custom MERN-stack and e-commerce platforms." />
      </Helmet>
      <Banner />
      <Sidebar isOnBanner={isOnBanner} />
      <Responsive />
      <Porjects />
      <Footer />
    </div>
  );
}

export default Websites;
