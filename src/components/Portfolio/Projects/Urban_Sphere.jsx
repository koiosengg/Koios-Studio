import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Cover from "../assests/Projects/Urban Sphere/Cover.png";
import HeadingDesign from "../assests/Home/Section Heading Design.png";
import Img11 from "../assests/Projects/Urban Sphere/Image 1.1.png";
import Img12 from "../assests/Projects/Urban Sphere/Image 1.2.png";
import Img13 from "../assests/Projects/Urban Sphere/Image 1.3.png";
import Img14 from "../assests/Projects/Urban Sphere/Image 1.4.png";
import Img21 from "../assests/Projects/Urban Sphere/Image 2.1.png";
import Img22 from "../assests/Projects/Urban Sphere/Image 2.2.png";
import Img23 from "../assests/Projects/Urban Sphere/Image 2.3.png";
import Img24 from "../assests/Projects/Urban Sphere/Image 2.4.png";
import Projects from "../Websites/Projects";
import Footer from "../Footer";

function Urban_Sphere() {
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
              <span>Urban Sphere </span>
            </h1>
            <p>Automotive Industry</p>
          </section>
          <a className="portfolio-primary-button">
            <div className="portfolio-primary-button-background"></div>
            <p>Visit Website </p>
          </a>
        </div>
      </div>
      <Sidebar isOnBanner={isOnBanner} />
      <div className="portfolio-projects-cover">
        <img src={Cover} alt="Urban Sphere Cover" />
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
              The website features a sleek, dark-themed interface that reflects
              a modern and professional image for a transportation-focused
              company. High-resolution vehicle visuals take center stage and the
              design emphasizes product categories with large visual cards and a
              streamlined layout.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Challenges</h2>
            <p>
              The main challenge was to present multiple product segments
              clearly without overwhelming the user, especially with bold
              imagery on a dark background. Ensuring accessibility, readability,
              and maintaining a visual hierarchy were critical, particularly in
              the hero section and across the navigation.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Approach</h2>
            <p>
              A card-based layout was used to categorize vehicle types visually,
              creating intuitive navigation without relying heavily on text.
              This supports a content-first experience. A unified gradient dark
              theme enhances the premium, tech-forward feel of the brand.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Results</h2>
            <p>
              The final design delivers a visually impact and user-friendly
              experience. It successfully communicates brand sophistication and
              industry focus.The contact section encourages engagement, and the
              overall UX flows smoothly throughout the site.
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
            The goal was to create a versatile template that could accommodate
            all categories listed by the client. Special attention was given to
            responsive design, ensuring that images retained their full
            visibility across devices without being cropped. This required
            thoughtful layout adjustments and flexible grid structures to
            maintain a seamless user experience on all screen sizes.
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
            <img src={Img11} alt="Urban Sphere Project Image" />
            <img src={Img12} alt="Urban Sphere Project Image" />
            <img src={Img13} alt="Urban Sphere Project Image" />
            <img src={Img14} alt="Urban Sphere Project Image" />
          </section>
          <section>
            <img src={Img21} alt="Urban Sphere Project Image" />
            <img src={Img22} alt="Urban Sphere Project Image" />
            <img src={Img23} alt="Urban Sphere Project Image" />
            <img src={Img24} alt="Urban Sphere Project Image" />
          </section>
        </div>
      </div>
      <Projects />
      <Footer />
    </div>
  );
}

export default Urban_Sphere;
