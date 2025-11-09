import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Cover from "../assests/Projects/Talankey/Cover.png";
import HeadingDesign from "../assests/Home/Section Heading Design.png";
import Img11 from "../assests/Projects/Talankey/Image 1.1.png";
import Img12 from "../assests/Projects/Talankey/Image 1.2.png";
import Img13 from "../assests/Projects/Talankey/Image 1.3.png";
import Img14 from "../assests/Projects/Talankey/Image 1.4.png";
import Img21 from "../assests/Projects/Talankey/Image 2.1.png";
import Img22 from "../assests/Projects/Talankey/Image 2.2.png";
import Img23 from "../assests/Projects/Talankey/Image 2.3.png";
import Img24 from "../assests/Projects/Talankey/Image 2.4.png";
import Projects from "../Websites/Projects";
import Footer from "../Footer";

function Talankey() {
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
              <span>Talankey </span>
            </h1>
            <p>Mechanical / Manufacturing Industry</p>
          </section>
          {/* <a className="portfolio-primary-button">
            <div className="portfolio-primary-button-background"></div>
            <p>Visit Website </p>
          </a> */}
        </div>
      </div>
      <Sidebar isOnBanner={isOnBanner} />
      <div className="portfolio-projects-cover">
        <img src={Cover} alt="Talankey Cover" />
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
              A manufacturing-focused web layout was designed for a CNC service
              provider, emphasizing precision and efficiency. The interface
              features industrial-inspired visuals, and clear typography to
              reflect technical expertise. The overall design reinforces
              professionalism.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Challenges</h2>
            <p>
              With the company offering a wide range of services, aligning the
              banner visuals with the overall layout posed a complex challenge.
              Special attention was given to ensuring the banners not only
              captured attention of the user but also reflected the essence of
              each service.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Approach</h2>
            <p>
              The layouts were kept simple, while the service cards featured a
              unique style with contrasting colors to draw attention.To maintain
              visual clarity in the banner section, service icons were placed
              alongside abstract background shapes.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Results</h2>
            <p>
              The design was carefully aligned with the company’s
              precision-driven identity, reflecting its technical expertise and
              attention to detail. Every element was chosen to reinforce the
              brand’s values and create a cohesive visual language.
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
            Multiple background elements were added to align with the design
            specifications, enhancing visual depth and consistency. Smooth hover
            transitions were implemented to ensure that text appearing beneath
            images faded in naturally, contributing to a polished and
            interactive user experience.
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
            <img src={Img11} alt="Talankey Project Image" />
            <img src={Img12} alt="Talankey Project Image" />
            <img src={Img13} alt="Talankey Project Image" />
            <img src={Img14} alt="Talankey Project Image" />
          </section>
          <section>
            <img src={Img21} alt="Talankey Project Image" />
            <img src={Img22} alt="Talankey Project Image" />
            <img src={Img23} alt="Talankey Project Image" />
            <img src={Img24} alt="Talankey Project Image" />
          </section>
        </div>
      </div>
      <Projects />
      <Footer />
    </div>
  );
}

export default Talankey;
