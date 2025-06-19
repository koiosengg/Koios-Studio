import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Cover from "../assests/Projects/Happy Gummies/Cover.png";
import HeadingDesign from "../assests/Home/Section Heading Design.png";
import Img11 from "../assests/Projects/Happy Gummies/Image 1.1.png";
import Img12 from "../assests/Projects/Happy Gummies/Image 1.2.png";
import Img13 from "../assests/Projects/Happy Gummies/Image 1.3.png";
import Img14 from "../assests/Projects/Happy Gummies/Image 1.4.png";
import Img21 from "../assests/Projects/Happy Gummies/Image 2.1.png";
import Img22 from "../assests/Projects/Happy Gummies/Image 2.2.png";
import Img23 from "../assests/Projects/Happy Gummies/Image 2.3.png";
import Img24 from "../assests/Projects/Happy Gummies/Image 2.4.png";
import Projects from "../Websites/Projects";
import Footer from "../Footer";

function Happy_Gummies() {
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
              <span>Happy Gummies </span>
            </h1>
            <p>Healthcare Products</p>
          </section>
          <a className="portfolio-primary-button">
            <div className="portfolio-primary-button-background"></div>
            <p>Visit Website </p>
          </a>
        </div>
      </div>
      <Sidebar isOnBanner={isOnBanner} />
      <div className="portfolio-projects-cover">
        <img src={Cover} alt="Happy Gummies Cover" />
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
              A vibrant, playful design tailored to a young audience and
              health-conscious consumers. It uses colorful illustrations, soft
              gradients, and friendly typefaces to promote multivitamin gummies.
              Clean and well-structured, with a clear hierarchy that guides
              users through the product.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Challenges</h2>
            <p>
              One of the key challenges was balancing fun, child-friendly
              visuals with a professional presentation that also builds trust
              with adult buyers. Maintaining clarity while integrating bold
              colors and playful illustrations required careful attention to
              contrast, spacing, and content hierarchy.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Approach</h2>
            <p>
              Took a user-centric approach, focusing on visual storytelling to
              enhance engagement. Custom illustrations, soft animations, and
              clear CTA buttons are used to maintain flow and guide user
              behavior. Each section was informative and visually appealing.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Results</h2>
            <p>
              The final design delivers a lively and memorable experience that
              resonates with the target audience. It successfully communicates
              the brand’s values—health, happiness, and simplicity—while making
              product discovery intuitive.
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
            <img src={Img11} alt="Happy Gummies Project Image" />
            <img src={Img12} alt="Happy Gummies Project Image" />
            <img src={Img13} alt="Happy Gummies Project Image" />
            <img src={Img14} alt="Happy Gummies Project Image" />
          </section>
          <section>
            <img src={Img21} alt="Happy Gummies Project Image" />
            <img src={Img22} alt="Happy Gummies Project Image" />
            <img src={Img23} alt="Happy Gummies Project Image" />
            <img src={Img24} alt="Happy Gummies Project Image" />
          </section>
        </div>
      </div>
      <Projects />
      <Footer />
    </div>
  );
}

export default Happy_Gummies;
