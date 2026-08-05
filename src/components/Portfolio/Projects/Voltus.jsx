import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import HeadingDesign from "../assests/Home/Section Heading Design.png";
import Projects from "../Branding/Projects";
import Footer from "../Footer";
import Voltus1 from "../assests/Projects/Voltus/voltus1.png";
import Voltus2 from "../assests/Projects/Voltus/voltus2.png";
import Voltus3 from "../assests/Projects/Voltus/voltus3.png";
import Voltus4 from "../assests/Projects/Voltus/voltus4.png";
import Voltus5 from "../assests/Projects/Voltus/voltus5.png";
import Voltus6 from "../assests/Projects/Voltus/voltus6.png";

function Voltus() {
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
              <span>Voltus </span>
            </h1>
          </section>
        </div>
      </div>
      <Sidebar isOnBanner={isOnBanner} />
      <div className="portfolio-projects-cover">
        <img src={Voltus1} alt="Voltus Cover" />
      </div>
      <div className="portfolio-projects-info-container branding">
        <div className="portfolio-projects-info">
          <div className="portfolio-projects-info-set">
            <h2>Overview</h2>
            <p>
              Voltus is a modern electrical and energy brand that represents power,
              innovation, and reliability. The identity uses a bold lightning-inspired
              logo with strong blue and red tones to communicate technology and performance.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Challenges</h2>
            <p>
              The challenge was to create a distinctive brand identity that stands out
              in a competitive electrical market while maintaining clarity, scalability,
              and consistency across digital, packaging, and physical applications.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Approach</h2>
            <p>
              The design focuses on a bold visual system using a lightning bolt symbol,
              clean typography, and a strong color palette. Consistent logo usage, clear
              spacing rules, and adaptable elements ensure brand recognition across all
              touchpoints.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Results</h2>
            <p>
              The final identity delivers a powerful and professional brand presence that
              feels modern, energetic, and trustworthy. It creates strong visual recall
              and works effectively across marketing, products, and real-world environments.
            </p>
          </div>
        </div>
      </div>

      <div className="portfolio-projects-gallery">
        <div className="portfolio-projects-gallery-container branding">
          <img src={Voltus2} alt="Voltus Project Image 2" />
          <section>
            <img src={Voltus3} alt="Voltus Project Image 3" />
            <img src={Voltus4} alt="Voltus Project Image 4" />
          </section>
          <section>
            <img src={Voltus5} alt="Voltus Project Image 5" />
            <img src={Voltus6} alt="Voltus Project Image 6" />
          </section>
        </div>
      </div>

      <Projects />
      <Footer />
    </div>
  );
}

export default Voltus;
