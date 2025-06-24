import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Cover from "../assests/Projects/LMG/Cover.png";
import HeadingDesign from "../assests/Home/Section Heading Design.png";
import Img11 from "../assests/Projects/LMG/Image 1.1.png";
import Img12 from "../assests/Projects/LMG/Image 1.2.png";
import Img13 from "../assests/Projects/LMG/Image 1.3.png";
import Img21 from "../assests/Projects/LMG/Image 2.1.png";
import Img22 from "../assests/Projects/LMG/Image 2.2.png";
import Img23 from "../assests/Projects/LMG/Image 2.3.png";
import Img31 from "../assests/Projects/LMG/Image 3.1.png";
import Img32 from "../assests/Projects/LMG/Image 3.2.png";
import Img33 from "../assests/Projects/LMG/Image 3.3.png";
import Img41 from "../assests/Projects/LMG/Image 4.1.png";
import Img42 from "../assests/Projects/LMG/Image 4.2.png";
import Img43 from "../assests/Projects/LMG/Image 4.3.png";
import Projects from "../Applications/Projects";
import Footer from "../Footer";

function LMG() {
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
            <h2>Application</h2>
            <h1>
              <span>LMG </span>
            </h1>
            <p>Tourism and Hospitality</p>
          </section>
          <a className="portfolio-primary-button">
            <div className="portfolio-primary-button-background"></div>
            <p>Visit Website </p>
          </a>
        </div>
      </div>
      <Sidebar isOnBanner={isOnBanner} />
      <div className="portfolio-projects-cover">
        <img src={Cover} alt="LMG Cover" />
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
              Designed a user-friendly travel booking app focused on last-minute
              hotel, camp, and bike rentals. Streamlined the booking flow for
              quick decisions and smooth navigation. Emphasized intuitive UI and
              responsive design to enhance user experience on the go
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Challenges</h2>
            <p>
              Maintaining consistency across various layouts was one of the key
              challenges.It required careful attention to visual features.
              Ensuring a seamless experience across all screens played a crucial
              role in enhancing usability and brand coherence.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Approach</h2>
            <p>
              Approached the project by focusing on one screen at a time to
              ensure clarity and detail. Maintained consistent headers, card
              styles, and layout structures throughout. This helped achieve a
              user-friendly interface.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Results</h2>
            <p>
              Designed a seamless and intuitive user interface, resulting in a
              hassle-free user experience. Simplified navigation and improved
              usability led to quicker task completion and higher user
              satisfaction.
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
            <img src={Img11} alt="LMG Project Image" />
            <img src={Img12} alt="LMG Project Image" />
            <img src={Img13} alt="LMG Project Image" />
          </section>
          <section>
            <img src={Img21} alt="LMG Project Image" />
            <img src={Img22} alt="LMG Project Image" />
            <img src={Img23} alt="LMG Project Image" />
          </section>
               <section>
            <img src={Img31} alt="LMG Project Image" />
            <img src={Img32} alt="LMG Project Image" />
            <img src={Img33} alt="LMG Project Image" />
          </section>
          <section>
            <img src={Img41} alt="LMG Project Image" />
            <img src={Img42} alt="LMG Project Image" />
            <img src={Img43} alt="LMG Project Image" />
          </section>
        </div>
      </div>
      <Projects />
      <Footer />
    </div>
  );
}

export default LMG;
