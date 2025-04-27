import React, { useState, useEffect } from "react";
import Banner from "./Applications/Banner";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Numbers from "./Applications/Numbers";
import Gallery from "./Applications/Gallery";
import Projects from "./Applications/Porjects";

function Applications() {
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
    <div className="portfolio portfolio-applications">
      <Banner />
      <Sidebar isOnBanner={isOnBanner} />
      <Numbers />
      <Gallery />
      <Projects />
      <Footer />
    </div>
  );
}

export default Applications;
