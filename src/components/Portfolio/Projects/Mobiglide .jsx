import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Cover from "../assests/Projects/Mobiglide/Cover.png";
import HeadingDesign from "../assests/Home/Section Heading Design.png";
import Img11 from "../assests/Projects/Mobiglide/Image 1.1.png";
import Img12 from "../assests/Projects/Mobiglide/Image 1.2.png";
import Img13 from "../assests/Projects/Mobiglide/Image 1.3.png";
import Img14 from "../assests/Projects/Mobiglide/Image 1.4.png";
import Img21 from "../assests/Projects/Mobiglide/Image 2.1.png";
import Img22 from "../assests/Projects/Mobiglide/Image 2.2.png";
import Img23 from "../assests/Projects/Mobiglide/Image 2.3.png";
import Img24 from "../assests/Projects/Mobiglide/Image 2.4.png";
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
        <img src={Cover} alt="Mobiglide Cover" />
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
              Developed a website for an engineering company specializing in
              process automation and performance-driven solutions. The design
              emphasizes clarity and efficiency, aligning with the company’s
              technical focus. Content is structured to showcase services,
              expertise, and real-world results.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Challenges</h2>
            <p>
              Structuring the layouts while maintaining balance between visual
              cards was a challenging yet rewarding task. It required careful
              attention to spacing, alignment, and hierarchy to ensure a
              cohesive design. Achieving both aesthetic appeal and functional
              clarity took multiple iterations.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Approach</h2>
            <p>
              Applied clean spacing and subtle background elements to create a
              balanced, uncluttered layout. Emphasized contrasting colors to
              enhance readability and draw attention to key content. The overall
              design supports a modern and visually engaging user experience.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Results</h2>
            <p>
              Crafted a professional interface that reinforced the brand’s
              technical and innovative image. The design combined clean layouts
              with precise visual elements to convey expertise.The overall look
              enhanced credibility and user trust.
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
            <img src={Img11} alt="Mobiglide Project Image" />
            <img src={Img12} alt="Mobiglide Project Image" />
            <img src={Img13} alt="Mobiglide Project Image" />
            <img src={Img14} alt="Mobiglide Project Image" />
          </section>
          <section>
            <img src={Img21} alt="Mobiglide Project Image" />
            <img src={Img22} alt="Mobiglide Project Image" />
            <img src={Img23} alt="Mobiglide Project Image" />
            <img src={Img24} alt="Mobiglide Project Image" />
          </section>
        </div>
      </div>
      <Projects />
      <Footer />
    </div>
  );
}

export default Mobiglide;
