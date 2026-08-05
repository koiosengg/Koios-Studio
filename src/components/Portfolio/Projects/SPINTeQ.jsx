import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import HeadingDesign from "../assests/Home/Section Heading Design.png";
import Img11 from "../assests/Projects/Machine Movers/Image 1.1.png";
import Img12 from "../assests/Projects/Machine Movers/Image 1.2.png";
import Img13 from "../assests/Projects/Machine Movers/Image 1.3.png";
import Img14 from "../assests/Projects/Machine Movers/Image 1.4.png";
import Img21 from "../assests/Projects/Machine Movers/Image 2.1.png";
import Img22 from "../assests/Projects/Machine Movers/Image 2.2.png";
import Img23 from "../assests/Projects/Machine Movers/Image 2.3.png";
import Img24 from "../assests/Projects/Machine Movers/Image 2.4.png";
import Projects from "../Branding/Projects";
import Footer from "../Footer";
import MicronixCover from "../assests/Branding/Projects/Micronix.png";

function SPINTeQ() {
  const [isOnBanner, setIsOnBanner] = useState(true);

  const handleScroll = () => {
    const bannerElement = document.getElementById("banner");
    if (bannerElement) {
      const bannerHeight = bannerElement.offsetHeight;
      setIsOnBanner(window.scrollY < bannerHeight);
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
            <h2>Logo designing & COMPANY Branding</h2>
            <h1>
              <span>SPINTeQ </span>
            </h1>
          </section>
        </div>
      </div>
      <Sidebar isOnBanner={isOnBanner} />
      <div className="portfolio-projects-cover">
        <img src={MicronixCover} alt="SPINTeQ Cover" />
      </div>
      <div className="portfolio-projects-info-container">
        <div className="portfolio-section-heading">
          <img src={HeadingDesign} className="portfolio-section-heading-img" />
          <h2>
            <span>Design </span>
            Secrets
          </h2>
        </div>
        <div className="portfolio-projects-info">
          <div className="portfolio-projects-info-set">
            <h2>Overview</h2>
            <p>
              SPINTeQ was designed as a futuristic autonomous enterprise solutions brand,
              combining technology, motion, and premium visual identity. The goal was to
              create a clean, modern, and scalable brand system that reflects innovation,
              trust, precision, and forward-thinking enterprise growth
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Challenges</h2>
            <p>
              The main challenge was to build a brand identity that looks futuristic and
              premium while still remaining simple, readable, and professional across
              platforms. It had to maintain consistency in logo usage, typography,
              gradients, spacing, and dark-first visual styling without making the design
              look cluttered.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Approach</h2>
            <p>
              The identity was developed using an S + Q monogram, orbit-inspired elements,
              blue-to-purple gradients, and a gold accent to represent motion, technology,
              value, and excellence. Clean geometric typography, strong contrast, and
              structured spacing were used to create a modern corporate look suitable for
              websites, dashboards, documents, and merchandise.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Results</h2>
            <p>
              A sleek and professional brand guideline was created for SPINTeQ, giving the
              brand a futuristic, connected, and premium personality. The final system
              ensures consistent logo usage, strong visual appeal, clear communication, and
              flexible application across digital and physical brand touchpoints.
            </p>
          </div>
        </div>
      </div>
      <div className="portfolio-projects-info-container">
        <div className="portfolio-section-heading">
          <img src={HeadingDesign} className="portfolio-section-heading-img" />
          <h2>
            <span>Development </span>
            Strategies
          </h2>
          <p>
            SPINTeQ was developed using a modular and scalable brand system to maintain
            consistency across all platforms. The strategy focused on dark-first layouts,
            responsive visual assets, clean typography, and flexible logo usage for future
            expansion across dashboards, websites, documents, and digital products.
          </p>
        </div>
      </div>

      <div className="portfolio-projects-gallery">
        <div className="portfolio-section-heading">
          <img src={HeadingDesign} className="portfolio-section-heading-img" />
          <h2>Wireframes</h2>
        </div>
        <div className="portfolio-projects-gallery-container">
          <section>
            <img src={Img11} alt="SPINTeQ Project Image" />
            <img src={Img12} alt="SPINTeQ Project Image" />
            <img src={Img13} alt="SPINTeQ Project Image" />
            <img src={Img14} alt="SPINTeQ Project Image" />
          </section>
          <section>
            <img src={Img21} alt="SPINTeQ Project Image" />
            <img src={Img22} alt="SPINTeQ Project Image" />
            <img src={Img23} alt="SPINTeQ Project Image" />
            <img src={Img24} alt="SPINTeQ Project Image" />
          </section>
        </div>
      </div>

      <Projects />
      <Footer />
    </div>
  );
}

export default SPINTeQ;
