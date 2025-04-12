import React from "react";
import Banner from "./Home/Banner";
import Marquee from "./Home/Marquee";
import Numbers from "./Home/Numbers";
import Footer from "./Footer";

function Home() {
  return (
    <div className="portfolio portfolio-home">
      <Banner />
      <Marquee />
      <Numbers />
      <Footer />
    </div>
  );
}

export default Home;
