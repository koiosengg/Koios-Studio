import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Cover from "../assests/Projects/Micronix/Cover.png";
import HeadingDesign from "../assests/Home/Section Heading Design.png";
import Img11 from "../assests/Projects/Micronix/Image 1.1.png";
import Img12 from "../assests/Projects/Micronix/Image 1.2.png";
import Img13 from "../assests/Projects/Micronix/Image 1.3.png";
import Img21 from "../assests/Projects/Micronix/Image 2.1.png";
import Img22 from "../assests/Projects/Micronix/Image 2.2.png";
import Img23 from "../assests/Projects/Micronix/Image 2.3.png";
import Img31 from "../assests/Projects/Micronix/Image 3.1.png";
import Img32 from "../assests/Projects/Micronix/Image 3.2.png";
import Img33 from "../assests/Projects/Micronix/Image 3.3.png";
import Projects from "../Branding/Projects";
import Footer from "../Footer";

function Micronix() {
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
            <h2>BROCHURE</h2>
            <h1>
              <span>Micronix </span>
            </h1>
          </section>
        </div>
      </div>
      <Sidebar isOnBanner={isOnBanner} />
      <div className="portfolio-projects-cover">
        <img src={Cover} alt="Micronix Cover" />
      </div>
      <div className="portfolio-projects-info-container branding">
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
      </div>

      <div className="portfolio-projects-gallery">
        <div className="portfolio-section-heading">
          <img src={HeadingDesign} className="portfolio-section-heading-img" />
          <h2>Brochure</h2>
        </div>
        <div className="portfolio-projects-gallery-container">
          <section>
            <img src={Img11} alt="Micronix Project Image" />
            <img src={Img12} alt="Micronix Project Image" />
            <img src={Img13} alt="Micronix Project Image" />
          </section>
          <section>
            <img src={Img21} alt="Micronix Project Image" />
            <img src={Img22} alt="Micronix Project Image" />
            <img src={Img23} alt="Micronix Project Image" />
          </section>
          <section>
            <img src={Img31} alt="Micronix Project Image" />
            <img src={Img32} alt="Micronix Project Image" />
            <img src={Img33} alt="Micronix Project Image" />
          </section>
        </div>
      </div>
      <Projects />
      <Footer />
    </div>
  );
}

export default Micronix;
