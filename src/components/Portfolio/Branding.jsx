import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./Branding/Banner";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Gallery from "./Branding/Gallery";
import Designs from "./Branding/Designs";
import Mission from "./Branding/Mission";
import Projects from "./Branding/Projects";

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
      <Helmet>
        <title>Branding & Identity Portfolio - koiostudio</title>
        <meta name="description" content="Explore company branding solutions by koiostudio. View custom corporate identities, logo designs, branding manuals, flyers, brochures, and packages." />
      </Helmet>
      <Banner />
      <Sidebar isOnBanner={isOnBanner} />
      <Gallery />
      <Designs />
      <Mission />
      <Projects />
      <Footer />
    </div>
  );
}

export default Branding;
