import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
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
import Socials from "./Home/Socials";

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
      <Helmet>
        <title>Portfolio - koiostudio</title>
        <meta name="description" content="Explore the design portfolio of koiostudio. We craft premium websites, mobile applications, and company branding solutions with precision and elegance." />
      </Helmet>
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
      <Socials />
      <Footer />
    </div>
  );
}

export default Home;
