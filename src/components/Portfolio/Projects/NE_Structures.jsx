import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Cover from "../assests/Projects/NE Structures/Cover.png";
import HeadingDesign from "../assests/Home/Section Heading Design.png";
import Img11 from "../assests/Projects/NE Structures/Image 1.1.png";
import Img12 from "../assests/Projects/NE Structures/Image 1.2.png";
import Img13 from "../assests/Projects/NE Structures/Image 1.3.png";
import Img14 from "../assests/Projects/NE Structures/Image 1.4.png";
import Img21 from "../assests/Projects/NE Structures/Image 2.1.png";
import Img22 from "../assests/Projects/NE Structures/Image 2.2.png";
import Img23 from "../assests/Projects/NE Structures/Image 2.3.png";
import Img24 from "../assests/Projects/NE Structures/Image 2.4.png";
import Projects from "../Websites/Projects";
import Footer from "../Footer";

function NE_Structures() {
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
              <span>NE Structures </span>
            </h1>
            <p>Construction Industries</p>
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
        <img src={Cover} alt="NE Structures Cover" />
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
              Designed a corporate website for a steel building solutions
              provider with a clean, minimalistic layout to enhance user
              experience. Focused on intuitive navigation, modern visuals, and
              clear content presentation to reflect the brand's professionalism.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Challenges</h2>
            <p>
              Ideating and designing certain sections of the homepage proved to
              be a challenging task. It required in-depth design research to
              find the right balance between aesthetics and functionality. The
              process helped refine the overall user experience and design
              consistency.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Approach</h2>
            <p>
              Used a clean and structured layout with visual breakdowns to
              clearly represent each stage of the service process. Ensured that
              every step was thoughtfully presented for better user
              understanding. Focused on clarity and flow to guide visitors
              smoothly through the content.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Results</h2>
            <p>
              Created a clean and structured UI that aligns with the industrial
              brand’s identity. Focused on simplicity, clarity, and usability to
              ensure a seamless user experience. The design reflects the brand’s
              professionalism while maintaining visual consistency across all
              elements.
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
            The banner background was customized to accurately reflect the grid
            line pattern from the design, ensuring consistency across devices. A
            dynamic gallery section was developed to showcase various client
            projects. Dedicated pages were also built for products, services,
            and infrastructure to present the client’s offerings in a clear and
            organized manner.
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
            <img src={Img11} alt="NE Structures Project Image" />
            <img src={Img12} alt="NE Structures Project Image" />
            <img src={Img13} alt="NE Structures Project Image" />
            <img src={Img14} alt="NE Structures Project Image" />
          </section>
          <section>
            <img src={Img21} alt="NE Structures Project Image" />
            <img src={Img22} alt="NE Structures Project Image" />
            <img src={Img23} alt="NE Structures Project Image" />
            <img src={Img24} alt="NE Structures Project Image" />
          </section>
        </div>
      </div>

      <Projects />
      <Footer />
    </div>
  );
}

export default NE_Structures;
