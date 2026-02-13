import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Cover from "../assests/Projects/Machine Movers/Cover.png";
import HeadingDesign from "../assests/Home/Section Heading Design.png";
import Img11 from "../assests/Projects/Machine Movers/Image 1.1.png";
import Img12 from "../assests/Projects/Machine Movers/Image 1.2.png";
import Img13 from "../assests/Projects/Machine Movers/Image 1.3.png";
import Img14 from "../assests/Projects/Machine Movers/Image 1.4.png";
import Img21 from "../assests/Projects/Machine Movers/Image 2.1.png";
import Img22 from "../assests/Projects/Machine Movers/Image 2.2.png";
import Img23 from "../assests/Projects/Machine Movers/Image 2.3.png";
import Img24 from "../assests/Projects/Machine Movers/Image 2.4.png";
import Projects from "../Websites/Projects";
import Footer from "../Footer";

function Machine_Movers() {
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
              <span>Machine Movers</span>
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
        <img src={Cover} alt="Machine Movers Cover" />
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
              Clayful homes website was designed to reflect the warmth and
              artistry behind handcrafted clay creations. It serves as a digital
              showcase for unique pottery pieces. The goal was to create an
              inviting space where craftsmanship meets modern online shopping
              convenience.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Challenges</h2>
            <p>
              Capturing the tactile beauty of handcrafted pottery through
              digital visuals was a key challenge. Balancing aesthetic appeal
              with fast load times and creating an intuitive shopping flow
              required detailed design and optimization.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Approach</h2>
            <p>
              A minimalist and earthy design aesthetic was chosen to mirror the
              natural textures of clay and pottery. Soft color tones,
              high-quality product imagery, and a clean layout emphasized
              authenticity and craftsmanship with smooth, responsive navigation.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Results</h2>
            <p>
              The final website delivered a visually soothing and immersive
              shopping experience. It increased customer engagement, improved
              product discovery, and effectively highlighted the brand’s
              handmade artistry and attention to detail.
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
            The website was built with a focus on responsiveness, performance,
            and simplicity. Optimized imagery, structured product categories,
            and integrated e-commerce functionality ensured a seamless user
            journey. SEO and analytics were implemented to boost visibility and
            track customer behavior.
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
            <img src={Img11} alt="Machine Movers Project Image" />
            <img src={Img12} alt="Machine Movers Project Image" />
            <img src={Img13} alt="Machine Movers Project Image" />
            <img src={Img14} alt="Machine Movers Project Image" />
          </section>
          <section>
            <img src={Img21} alt="Machine Movers Project Image" />
            <img src={Img22} alt="Machine Movers Project Image" />
            <img src={Img23} alt="Machine Movers Project Image" />
            <img src={Img24} alt="Machine Movers Project Image" />
          </section>
        </div>
      </div>

      <Projects />
      <Footer />
    </div>
  );
}

export default Machine_Movers;
