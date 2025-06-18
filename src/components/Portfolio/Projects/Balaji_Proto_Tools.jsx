import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Cover from "../assests/Projects/Balaji Proto Tools/Cover.png";
import HeadingDesign from "../assests/Home/Section Heading Design.png";
import Img11 from "../assests/Projects/Balaji Proto Tools/Image 1.1.png";
import Img12 from "../assests/Projects/Balaji Proto Tools/Image 1.2.png";
import Img13 from "../assests/Projects/Balaji Proto Tools/Image 1.3.png";
import Img14 from "../assests/Projects/Balaji Proto Tools/Image 1.4.png";
import Img21 from "../assests/Projects/Balaji Proto Tools/Image 2.1.png";
import Img22 from "../assests/Projects/Balaji Proto Tools/Image 2.2.png";
import Img23 from "../assests/Projects/Balaji Proto Tools/Image 2.3.png";
import Img24 from "../assests/Projects/Balaji Proto Tools/Image 2.4.png";
import Projects from "../Websites/Projects";
import Footer from "../Footer";

function Balaji_Proto_Tools() {
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
              <span>Balaji Proto Tools </span>
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
        <img src={Cover} alt="Balaji Proto Tools Cover" />
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
              Created a UI design for a company specializing in precision
              tooling, emphasizing accuracy and technical excellence. The
              interface features a clean, structured layout to reflect the
              brand’s high standards. Visual elements were carefully chosen to
              highlight product detail and usability.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Challenges</h2>
            <p>
              Working with neon colors proved to be a formidable artistic
              challenge. Their intense vibrancy required precise control to
              avoid visual overwhelm. Achieving balance demanded a thoughtful
              interplay of contrast and composition. The process tested both
              technical skill and creative sensitivity.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Approach</h2>
            <p>
              Color adjustments were made thoughtfully wherever necessary,
              ensuring that the original shades and tonal balance remained
              intact. Each modification was carried out with a focus on
              preserving visual harmony while enhancing the overall readability.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Results</h2>
            <p>
              Designed each section with a clean, artistic layout that
              emphasizes clarity and visual appeal.The composition balances
              simplicity with creativity, ensuring a cohesive user
              experience.This approach allowed the content to shine without
              overwhelming the viewer.
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
            <img src={Img11} alt="Balaji Proto Tools Project Image" />
            <img src={Img12} alt="Balaji Proto Tools Project Image" />
            <img src={Img13} alt="Balaji Proto Tools Project Image" />
            <img src={Img14} alt="Balaji Proto Tools Project Image" />
          </section>
          <section>
            <img src={Img21} alt="Balaji Proto Tools Project Image" />
            <img src={Img22} alt="Balaji Proto Tools Project Image" />
            <img src={Img23} alt="Balaji Proto Tools Project Image" />
            <img src={Img24} alt="Balaji Proto Tools Project Image" />
          </section>
        </div>
      </div>

      <Projects />
      <Footer />
    </div>
  );
}

export default Balaji_Proto_Tools;
