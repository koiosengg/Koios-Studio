import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Cover from "../assests/Projects/MR Industries/Cover.png";
import HeadingDesign from "../assests/Home/Section Heading Design.png";
import Img11 from "../assests/Projects/MR Industries/Image 1.1.png";
import Img12 from "../assests/Projects/MR Industries/Image 1.2.png";
import Img13 from "../assests/Projects/MR Industries/Image 1.3.png";
import Img14 from "../assests/Projects/MR Industries/Image 1.4.png";
import Img21 from "../assests/Projects/MR Industries/Image 2.1.png";
import Img22 from "../assests/Projects/MR Industries/Image 2.2.png";
import Img23 from "../assests/Projects/MR Industries/Image 2.3.png";
import Img24 from "../assests/Projects/MR Industries/Image 2.4.png";
import Projects from "../Websites/Projects";
import Footer from "../Footer";

function MR_Industries() {
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
              <span>MR Industries </span>
            </h1>
            <p>Automotive Wiring Harness Manufacturing Industry</p>
          </section>
          <a className="portfolio-primary-button">
            <div className="portfolio-primary-button-background"></div>
            <p>Visit Website </p>
          </a>
        </div>
      </div>
      <Sidebar isOnBanner={isOnBanner} />
      <div className="portfolio-projects-cover">
        <img src={Cover} alt="MR Industries Cover" />
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
              Designed to showcase the brand's expertise in manufacturing wiring
              harnesses, cables, and industrial power solutions. The aim was to
              create a digital presence that feels modern, trustworthy, and
              aligned with their technical capabilities.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Challenges</h2>
            <p>
              One of the primary challenges was simplifying complex industrial
              content without losing its depth or technical credibility. The
              design also needed to handle a variety of content types, from
              product galleries to process flows, while keeping the user
              experience intuitive.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Approach</h2>
            <p>
              The project began with low-fidelity wireframes to build a clear
              layout and ensure consistency across pages. A clean visuals were
              used to create familiarity and trust. Each section was
              thoughtfully structured to guide users smoothly through company
              information, products, and processes.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Results</h2>
            <p>
              The final design delivered a sleek and user-friendly website that
              resonates with MR Industries’ premium positioning. Visitors are
              now met with a seamless experience that communicates
              professionalism and reliability. The improved flow and layout also
              help foster stronger business credibility.
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
            Significant effort went into crafting the background elements of
            each section, as they played a central role in the overall design
            aesthetic. To enhance the visual storytelling, I had to learn and
            implement scroll-based animations that aligned with the flow of the
            layout ensuring an engaging and interactive user experience.
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
            <img src={Img11} alt="MR Industries Project Image" />
            <img src={Img12} alt="MR Industries Project Image" />
            <img src={Img13} alt="MR Industries Project Image" />
            <img src={Img14} alt="MR Industries Project Image" />
          </section>
          <section>
            <img src={Img21} alt="MR Industries Project Image" />
            <img src={Img22} alt="MR Industries Project Image" />
            <img src={Img23} alt="MR Industries Project Image" />
            <img src={Img24} alt="MR Industries Project Image" />
          </section>
        </div>
      </div>
      <Projects />
      <Footer />
    </div>
  );
}

export default MR_Industries;
