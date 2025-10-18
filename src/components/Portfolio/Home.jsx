import React, { useState, useEffect } from "react";
import Banner from "./Home/Banner";
import Marquee from "./Home/Marquee";
import Numbers from "./Home/Numbers";
import Footer from "./Footer";
import Services from "./Home/Services";
import ViewPorjects from "./Home/ViewPorjects";
import Sidebar from "./Sidebar";
import Identities from "./Home/Identities";
import FAQ from "./Home/FAQ";
import Gallery from "./Home/Gallery";
import Testimony from "./Home/Testimony";

function Home() {
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
    <div className="portfolio portfolio-home">
      <Banner />
      <Sidebar isOnBanner={isOnBanner} />
      <Marquee />
      <Services />
      <ViewPorjects />
      <Numbers />
      <Gallery />
      <Identities />
      <FAQ />
      <Testimony />
      <Footer />
    </div>
  );
}

export default Home;
