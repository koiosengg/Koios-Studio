import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Cover from "../assests/Projects/Cilkencave/Cover.png";
import HeadingDesign from "../assests/Home/Section Heading Design.png";
import Img11 from "../assests/Projects/Cilkencave/Image 1.1.png";
import Img12 from "../assests/Projects/Cilkencave/Image 1.2.png";
import Img13 from "../assests/Projects/Cilkencave/Image 1.3.png";
import Img14 from "../assests/Projects/Cilkencave/Image 1.4.png";
import Img21 from "../assests/Projects/Cilkencave/Image 2.1.png";
import Img22 from "../assests/Projects/Cilkencave/Image 2.2.png";
import Img23 from "../assests/Projects/Cilkencave/Image 2.3.png";
import Img24 from "../assests/Projects/Cilkencave/Image 2.4.png";
import Projects from "../Websites/Projects";
import Footer from "../Footer";

function Cilkencave() {
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
              <span>Cilkencave </span>
            </h1>
            <p>Semi Conductor Industry</p>
          </section>
          <a
            href="https://cilkencave.com/"
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
        <img src={Cover} alt="Cilkencave Cover" />
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
              Designed a UI for a semiconductor company with a focus on
              performance and scalability.Clean layouts and sharp visuals were
              used to reflect technical precision.The interface maintains
              clarity while supporting complex content.It delivers a
              professional and efficient user experience.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Challenges</h2>
            <p>
              The banner section was designed to be minimal, aligning with the
              clean aesthetic typical in the semiconductor industry.At the same
              time, it needed to stand out from competitors, which made the
              design process more nuanced.Balancing simplicity with a distinct
              visual identity was key.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Approach</h2>
            <p>
              A minimalist design approach was used to present complex concepts
              in a clear and accessible way.Icons and structured sections helped
              break down technical information into digestible parts.This not
              only improved visual clarity but also enhanced user understanding.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Results</h2>
            <p>
              Delivered a clean and intuitive interface tailored to the target
              audience’s needs.The design focused on simplicity, making complex
              information easy to understand. Users could quickly find relevant
              details without any confusions.
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
            A key aspect of the project involved handling SVGs effectively, as
            they were integrated into nearly every section of the design.
            Ensuring compatibility, scalability, and clean rendering across all
            browsers required extra attention. Additionally, implementing smooth
            animations for the gallery section took considerable time and
            fine-tuning to achieve the desired visual flow and performance.
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
            <img src={Img11} alt="Cilkencave Project Image" />
            <img src={Img12} alt="Cilkencave Project Image" />
            <img src={Img13} alt="Cilkencave Project Image" />
            <img src={Img14} alt="Cilkencave Project Image" />
          </section>
          <section>
            <img src={Img21} alt="Cilkencave Project Image" />
            <img src={Img22} alt="Cilkencave Project Image" />
            <img src={Img23} alt="Cilkencave Project Image" />
            <img src={Img24} alt="Cilkencave Project Image" />
          </section>
        </div>
      </div>
      <Projects />
      <Footer />
    </div>
  );
}

export default Cilkencave;
