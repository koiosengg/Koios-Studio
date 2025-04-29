import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Cover from "../assests/Projects/Mobiglide/Cover.png";
import Img1 from "../assests/Projects/Mobiglide/Gallery Img 1.png";
import Projects from "../Websites/Projects";
import Footer from "../Footer";

function Mobiglide() {
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
    <div className="portfolio portfolio-projects">
      <div className="portfolio-projects-banner" id="banner">
        <Navbar />
        <div className="portfolio-home-banner-container">
          <section>
            <h2>Website</h2>
            <h1>
              <span>Mobiglide </span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Bibendum purus aliquam
              sed.
            </p>
          </section>
          <a className="portfolio-primary-button">
            <div className="portfolio-primary-button-background"></div>
            <p>Visit Website </p>
          </a>
        </div>
      </div>
      <Sidebar isOnBanner={isOnBanner} />
      <div className="portfolio-projects-cover">
        <img src={Cover} />
      </div>
      <div className="portfolio-projects-info">
        <div className="portfolio-projects-info-set">
          <h2>Overview</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Augue id dictum hendrerit
            adipiscing tellus pretium varius nunc. Turpis morbi praesent ac
            velit. Non in adipiscing tortor.
          </p>
        </div>
        <div className="portfolio-projects-info-set">
          <h2>Challenges</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Augue id dictum hendrerit
            adipiscing tellus pretium varius nunc. Turpis morbi praesent ac
            velit. Non in adipiscing tortor.
          </p>
        </div>
        <div className="portfolio-projects-info-set">
          <h2>Approach</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Augue id dictum hendrerit
            adipiscing tellus pretium varius nunc. Turpis morbi praesent ac
            velit. Non in adipiscing tortor.
          </p>
        </div>
        <div className="portfolio-projects-info-set">
          <h2>Results</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Augue id dictum hendrerit
            adipiscing tellus pretium varius nunc. Turpis morbi praesent ac
            velit. Non in adipiscing tortor.
          </p>
        </div>
      </div>
      <div className="portfolio-projects-gallery">
        <section>
          <img src={Img1} />
          <img src={Img1} />
          <img src={Img1} />
          <img src={Img1} />
          <img src={Img1} />
        </section>
        <section>
          <img src={Img1} />
          <img src={Img1} />
          <img src={Img1} />
          <img src={Img1} />
          <img src={Img1} />
        </section>
        <section>
          <img src={Img1} />
          <img src={Img1} />
          <img src={Img1} />
          <img src={Img1} />
          <img src={Img1} />
        </section>
        <section>
          <img src={Img1} />
          <img src={Img1} />
          <img src={Img1} />
          <img src={Img1} />
          <img src={Img1} />
        </section>
      </div>
      <Projects />
      <Footer />
    </div>
  );
}

export default Mobiglide;
