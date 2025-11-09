import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Cover from "../assests/Projects/Akarswift/Cover.png";
import HeadingDesign from "../assests/Home/Section Heading Design.png";
import Img11 from "../assests/Projects/Akarswift/Image 1.1.png";
import Img12 from "../assests/Projects/Akarswift/Image 1.2.png";
import Img13 from "../assests/Projects/Akarswift/Image 1.3.png";
import Img14 from "../assests/Projects/Akarswift/Image 1.4.png";
import Img21 from "../assests/Projects/Akarswift/Image 2.1.png";
import Img22 from "../assests/Projects/Akarswift/Image 2.2.png";
import Img23 from "../assests/Projects/Akarswift/Image 2.3.png";
import Img24 from "../assests/Projects/Akarswift/Image 2.4.png";
import Projects from "../Websites/Projects";
import Footer from "../Footer";

function Akarswift() {
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
              <span>Akarswift </span>
            </h1>
            <p>Logistics Solutions</p>
          </section>
          {/* <a className="portfolio-primary-button">
            <div className="portfolio-primary-button-background"></div>
            <p>Visit Website </p>
          </a> */}
        </div>
      </div>
      <Sidebar isOnBanner={isOnBanner} />
      <div className="portfolio-projects-cover">
        <img src={Cover} alt="Akarswift Cover" />
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
              Akarswift Global is an international import-export company
              connecting continents and cultures through the trade of diverse
              goods. The website was designed to showcase the company’s global
              reach, reliability, and commitment to excellence.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Challenges</h2>
            <p>
              The main challenges involved presenting complex international
              trade information in a simple, engaging manner. Maintaining brand
              professionalism while incorporating cultural diversity across
              visuals and content required careful balance.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Approach</h2>
            <p>
              A sleek, corporate design with a global aesthetic was adopted to
              reflect Akarswift’s international presence. The layout emphasized
              clarity, easy navigation, and responsive design, supported by
              visuals representing global trade and connectivity.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Results</h2>
            <p>
              The final website delivered a polished, modern interface that
              strengthened Akarswift’s digital identity. It enhanced client
              engagement, improved information accessibility, and positioned the
              brand as a trusted global trading partner.
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
            The Akarswift Global website was developed with a focus on
            scalability, performance, and accessibility. A responsive framework,
            optimized media, and structured content architecture ensured smooth
            user experience across devices. SEO optimization and analytics tools
            were integrated to expand reach and track global engagement.
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
            <img src={Img11} alt="Akarswift Project Image" />
            <img src={Img12} alt="Akarswift Project Image" />
            <img src={Img13} alt="Akarswift Project Image" />
            <img src={Img14} alt="Akarswift Project Image" />
          </section>
          <section>
            <img src={Img21} alt="Akarswift Project Image" />
            <img src={Img22} alt="Akarswift Project Image" />
            <img src={Img23} alt="Akarswift Project Image" />
            <img src={Img24} alt="Akarswift Project Image" />
          </section>
        </div>
      </div>
      <Projects />
      <Footer />
    </div>
  );
}

export default Akarswift;
