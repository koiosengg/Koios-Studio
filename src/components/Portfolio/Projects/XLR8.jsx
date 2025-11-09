import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Cover from "../assests/Projects/XLR8/Cover.png";
import HeadingDesign from "../assests/Home/Section Heading Design.png";
import Img11 from "../assests/Projects/XLR8/Image 1.1.png";
import Img12 from "../assests/Projects/XLR8/Image 1.2.png";
import Img13 from "../assests/Projects/XLR8/Image 1.3.png";
import Img14 from "../assests/Projects/XLR8/Image 1.4.png";
import Img21 from "../assests/Projects/XLR8/Image 2.1.png";
import Img22 from "../assests/Projects/XLR8/Image 2.2.png";
import Img23 from "../assests/Projects/XLR8/Image 2.3.png";
import Img24 from "../assests/Projects/XLR8/Image 2.4.png";
import Projects from "../Websites/Projects";
import Footer from "../Footer";

function XLR8() {
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
              <span>XLR8 </span>
            </h1>
            <p>Sports Industry</p>
          </section>
          {/* <a className="portfolio-primary-button">
            <div className="portfolio-primary-button-background"></div>
            <p>Visit Website </p>
          </a> */}
        </div>
      </div>
      <Sidebar isOnBanner={isOnBanner} />
      <div className="portfolio-projects-cover">
        <img src={Cover} alt="XLR8 Cover" />
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
              XLR8 is a performance-driven brand specializing in recreational
              and professional motorsport vehicles. The goal of the website
              design was to create an engaging digital storefront that captures
              the thrill of speed and adventure, while providing a seamless
              e-commerce experience.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Challenges</h2>
            <p>
              One major challenge was balancing high-quality visuals with fast
              page load times to maintain performance. Optimizing the mobile
              experience without compromising design aesthetics also required
              careful planning. Additionally, ensuring brand consistency and
              clarity across product categories.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Approach</h2>
            <p>
              A bold, racing-inspired design with dynamic visuals and responsive
              layouts was used to capture the brand’s energy. The focus was on
              easy navigation, clean product presentation, and a seamless user
              experience.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Results</h2>
            <p>
              The final website delivered a sleek, high-impact interface that
              boosted engagement and inquiries. It successfully established
              XLR8’s online identity as a modern, energetic motorsport brand.
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
            The XLR8 website was developed with a focus on speed,
            responsiveness, and scalability. Optimized media, clean code, and
            interactive product features enhanced performance and engagement.
            SEO practices and analytics were integrated to improve visibility
            and track user behavior
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
            <img src={Img11} alt="XLR8 Project Image" />
            <img src={Img12} alt="XLR8 Project Image" />
            <img src={Img13} alt="XLR8 Project Image" />
            <img src={Img14} alt="XLR8 Project Image" />
          </section>
          <section>
            <img src={Img21} alt="XLR8 Project Image" />
            <img src={Img22} alt="XLR8 Project Image" />
            <img src={Img23} alt="XLR8 Project Image" />
            <img src={Img24} alt="XLR8 Project Image" />
          </section>
        </div>
      </div>
      <Projects />
      <Footer />
    </div>
  );
}

export default XLR8;
