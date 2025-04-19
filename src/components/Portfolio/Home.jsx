import React from "react";
import Banner from "./Home/Banner";
import Marquee from "./Home/Marquee";
import Numbers from "./Home/Numbers";
import Footer from "./Footer";
import Services from "./Home/Services";
import ViewPorjects from "./Home/ViewPorjects";

function Home() {
  return (
    <div className="portfolio portfolio-home">
      <Banner />
      <Marquee />
      <Services />
      <ViewPorjects />
      <Numbers />
      <Footer />
    </div>
  );
}

export default Home;
