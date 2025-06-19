import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Cover from "../assests/Projects/ISK Auto Industries/Cover.png";
import HeadingDesign from "../assests/Home/Section Heading Design.png";
import Img11 from "../assests/Projects/ISK Auto Industries/Image 1.1.png";
import Img12 from "../assests/Projects/ISK Auto Industries/Image 1.2.png";
import Img13 from "../assests/Projects/ISK Auto Industries/Image 1.3.png";
import Img14 from "../assests/Projects/ISK Auto Industries/Image 1.4.png";
import Img21 from "../assests/Projects/ISK Auto Industries/Image 2.1.png";
import Img22 from "../assests/Projects/ISK Auto Industries/Image 2.2.png";
import Img23 from "../assests/Projects/ISK Auto Industries/Image 2.3.png";
import Img24 from "../assests/Projects/ISK Auto Industries/Image 2.4.png";
import Projects from "../Websites/Projects";
import Footer from "../Footer";

function ISK_Auto_Industries() {
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
              <span>ISK Auto Industries </span>
            </h1>
            <p>
             Automotive Component Manufacturers
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
        <img src={Cover} alt="ISK Auto Industries Cover" />
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
              Designed a website for a company specializing in vehicle spare
              parts. The site features a clean, user-friendly interface to
              showcase products effectively. Emphasis was placed on easy
              navigation and organized product categories. The design supports
              both retail and wholesale customer needs.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Challenges</h2>
            <p>
              Since the website dealt with spare parts, it included multiple
              segments under a single category, making navigation challenging.
              To address this, the structure was reorganized for better clarity
              and ease of access. Each segment was clearly defined to help users
              quickly find what they need.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Approach</h2>
            <p>
              Maintained a simple and clean layout to ensure clarity and ease of
              use. Focused on developing each segment individually for better
              structure and flow. This approach allowed for more attention to
              detail and consistency across the site.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Results</h2>
            <p>
              Achieved a well-organized parts display that allows users to
              easily browse and locate components. Implemented intuitive
              navigation and clear categorization to enhance the overall user
              experience. The layout ensures quick access to details.
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
            Lorem ipsum dolor sit amet consectetur. Libero platea turpis dictum
            auctor. Diam volutpat dictum tincidunt vestibulum. Enim elementum
            dignissim eget faucibus amet massa faucibus elit. Volutpat turpis
            tortor purus nisl et tincidunt ultrices feugiat. Morbi quam enim sit
            proin enim id. Quam habitant eu suspendisse sit faucibus bibendum
            viverra tincidunt. Sed scelerisque orci ultrices volutpat fusce
            ipsum ultricies lorem habitant. Quam lacus vitae feugiat vitae vitae
            nisl quam tincidunt rhoncus.
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
            <img src={Img11} alt="ISK Auto Industries Project Image" />
            <img src={Img12} alt="ISK Auto Industries Project Image" />
            <img src={Img13} alt="ISK Auto Industries Project Image" />
            <img src={Img14} alt="ISK Auto Industries Project Image" />
          </section>
          <section>
            <img src={Img21} alt="ISK Auto Industries Project Image" />
            <img src={Img22} alt="ISK Auto Industries Project Image" />
            <img src={Img23} alt="ISK Auto Industries Project Image" />
            <img src={Img24} alt="ISK Auto Industries Project Image" />
          </section>
        </div>
      </div>

      <Projects />
      <Footer />
    </div>
  );
}

export default ISK_Auto_Industries;
