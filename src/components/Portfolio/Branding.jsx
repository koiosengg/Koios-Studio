import React, { useState, useEffect } from "react";
import Banner from "./Branding/Banner";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Gallery from "./Branding/Gallery";

function Branding() {
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
    <div className="portfolio portfolio-branding">
      <Banner />
      <Sidebar isOnBanner={isOnBanner} />
      <Gallery />
      <Footer />
    </div>
  );
}

export default Branding;
