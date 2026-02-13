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
              This project involved designing a conversion-focused website for
              an F&B growth consultancy that helps brands scale operations,
              revenue, and decision-making. The goal was to create a strong
              founder-led narrative, build trust with data-backed proof, and
              clearly communicate services to restaurant and food brand owners.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Challenges</h2>
            <p>
              The key challenge was balancing large amounts of information
              (services, results, founder story, and trust signals) without
              overwhelming the user. Another challenge was maintaining
              credibility and professionalism while keeping the layout visually
              engaging for a fast-scrolling audience.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Approach</h2>
            <p>
              Followed a user-first approach by mapping the founder journey,
              client pain points, and business goals into a clear content
              hierarchy. The design focuses on bold typography, minimal
              sections, visual storytelling, and strategic CTAs to guide users
              from awareness to action smoothly.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Results</h2>
            <p>
              The final design delivers a clear value proposition, improved
              scannability, and strong trust-building through metrics,
              testimonials, and founder presence. The structured flow and
              consistent visual language help users quickly understand the
              offering and encourage higher engagement and inquiries.
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
            Lorem ipsum dolor sit amet consectetur. Neque eget enim sed in morbi
            suspendisse ullamcorper auctor. Semper proin in ut magna quis amet
            dignissim. Ultricies fringilla non pulvinar adipiscing tempus
            malesuada quis facilisi. Viverra malesuada dis hendrerit aenean.
            Orci diam pretium vitae et et amet. Nunc quisque ultrices facilisi
            fames arcu libero rhoncus.
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
