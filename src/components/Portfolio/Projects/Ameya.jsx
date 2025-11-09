import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Cover from "../assests/Projects/Ameya/Cover.png";
import HeadingDesign from "../assests/Home/Section Heading Design.png";
import Img11 from "../assests/Projects/Ameya/Image 1.1.png";
import Img12 from "../assests/Projects/Ameya/Image 1.2.png";
import Img13 from "../assests/Projects/Ameya/Image 1.3.png";
import Img14 from "../assests/Projects/Ameya/Image 1.4.png";
import Img21 from "../assests/Projects/Ameya/Image 2.1.png";
import Img22 from "../assests/Projects/Ameya/Image 2.2.png";
import Img23 from "../assests/Projects/Ameya/Image 2.3.png";
import Img24 from "../assests/Projects/Ameya/Image 2.4.png";
import Projects from "../Websites/Projects";
import Footer from "../Footer";

function Ameya() {
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
              <span>Ameya </span>
            </h1>
            <p>Homestays and Hospitality</p>
          </section>
          <a
            href="https://ameyacoorg.com/"
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
        <img src={Cover} alt="Ameya Cover" />
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
              Designed a user-friendly resort booking website that highlights
              properties and stay options with visually rich layouts. Focused on
              enhancing the user journey from browsing to booking. Prioritized
              intuitive navigation and immersive visuals to elevate the overall
              experience.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Challenges</h2>
            <p>
              Balancing traditional themes with modern design elements was a key
              challenge in this project. It required careful integration to
              maintain cultural authenticity without compromising usability.
              Ensuring functionality aligned with the visual style added an
              extra layer of complexity.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Approach</h2>
            <p>
              The approach started with low-fidelity wireframes to establish a
              clear structure and maintain visual balance across all screens.
              This helped define the overall flow and ensured a consistent user
              experience throughout the app.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Results</h2>
            <p>
              Successfully delivered a clean and elegant UI design tailored for
              premium stays. The final design reflects sophistication and user
              comfort, enhancing the overall brand appeal. It offers a seamless
              and intuitive experience for high-end users.
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
            An user-friendly resort booking website that showcases properties
            and stay options through visually rich layouts. The website
            development focused on creating an intuitive user journey, from
            browsing to booking, with seamless navigation and immersive visuals
            that enhance engagement and elevate the overall experience.
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
            <img src={Img11} alt="Ameya Project Image" />
            <img src={Img12} alt="Ameya Project Image" />
            <img src={Img13} alt="Ameya Project Image" />
            <img src={Img14} alt="Ameya Project Image" />
          </section>
          <section>
            <img src={Img21} alt="Ameya Project Image" />
            <img src={Img22} alt="Ameya Project Image" />
            <img src={Img23} alt="Ameya Project Image" />
            <img src={Img24} alt="Ameya Project Image" />
          </section>
        </div>
      </div>
      <Projects />
      <Footer />
    </div>
  );
}

export default Ameya;
