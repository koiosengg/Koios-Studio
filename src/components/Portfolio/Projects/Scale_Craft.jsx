import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Cover from "../assests/Projects/Scale Craft/Cover.png";
import HeadingDesign from "../assests/Home/Section Heading Design.png";
import Img11 from "../assests/Projects/Scale Craft/Image 1.1.png";
import Img12 from "../assests/Projects/Scale Craft/Image 1.2.png";
import Img13 from "../assests/Projects/Scale Craft/Image 1.3.png";
import Img14 from "../assests/Projects/Scale Craft/Image 1.4.png";
import Img21 from "../assests/Projects/Scale Craft/Image 2.1.png";
import Img22 from "../assests/Projects/Scale Craft/Image 2.2.png";
import Img23 from "../assests/Projects/Scale Craft/Image 2.3.png";
import Img24 from "../assests/Projects/Scale Craft/Image 2.4.png";
import Projects from "../Websites/Projects";
import Footer from "../Footer";

function Scale_Craft() {
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
              <span>Scale Craft</span>
            </h1>
            <p>F&B Business Consultancy</p>
          </section>
          <a
            href="https://nestructures.co/"
            target="_blank"
            className="portfolio-primary-button"
          >
            <div className="portfolio-primary-button-background"></div>
            <p>Visit Website </p>
          </a>
        </div>
      </div>
      <Sidebar isOnBanner={isOnBanner} />
      <div className="portfolio-projects-cover">
        <img src={Cover} alt="Scale Craft Cover" />
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
             ScaleCraft was designed as a growth
              consulting platform for emerging F&B brands, 
              combining strategy with hands-on execution.
              The goal was to create a clear and
              professional digital experience that simplifies
              complex services while building trust and
              enabling scalable, data-driven growth.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Challenges</h2>
            <p>
              The primary challenge was to simplify complex
               consulting services into a clear and engaging 
               experience while maintaining credibility.
                It was important to balance strategic depth 
                with easy understanding, ensuring the platform
                 appealed to founders and communicated 
                value without overwhelming them.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Approach</h2>
            <p>
              The approach focused on creating a clean,
               structured layout with strong visual
                hierarchy and concise content.
                 Services were organized into clear
                  sections, supported by case studies
                   and simple messaging to make the
                    platform intuitive, professional,
                     and easy to navigate.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Results</h2>
            <p>
              The final design delivers a clear and
               user-friendly experience that effectively
                communicates services and builds trust. 
                It improves content clarity, enhances
                 engagement, and positions ScaleCraft
                  as a reliable partner for scalable
                   and sustainable business growth.
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
            The platform was built using a modular and 
            scalable design system to ensure consistency
             and flexibility. It supports easy content
              updates, responsive performance across
               devices, and future expansion with
                analytics and additional service integrations.
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
            <img src={Img11} alt="Scale Craft Project Image" />
            <img src={Img12} alt="Scale Craft Project Image" />
            <img src={Img13} alt="Scale Craft Project Image" />
            <img src={Img14} alt="Scale Craft Project Image" />
          </section>
          <section>
            <img src={Img21} alt="Scale Craft Project Image" />
            <img src={Img22} alt="Scale Craft Project Image" />
            <img src={Img23} alt="Scale Craft Project Image" />
            <img src={Img24} alt="Scale Craft Project Image" />
          </section>
        </div>
      </div>

      <Projects />
      <Footer />
    </div>
  );
}

export default Scale_Craft;
