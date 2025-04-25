import React, { useState, useEffect } from "react";
import Banner from "./Websites/Banner";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Responsive from "./Websites/Responsive";
import Porjects from "./Websites/Porjects";

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
      <Banner />
      <Sidebar isOnBanner={isOnBanner} />
      <Responsive />
      <Porjects />
      <Footer />
    </div>
  );
}

export default Websites;
