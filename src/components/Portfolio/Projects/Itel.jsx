import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import HeadingDesign from "../assests/Home/Section Heading Design.png";
import Img11 from "../assests/Projects/Machine Movers/Image 1.1.png";
import Img12 from "../assests/Projects/Machine Movers/Image 1.2.png";
import Img13 from "../assests/Projects/Machine Movers/Image 1.3.png";
import Img14 from "../assests/Projects/Machine Movers/Image 1.4.png";
import Img21 from "../assests/Projects/Machine Movers/Image 2.1.png";
import Img22 from "../assests/Projects/Machine Movers/Image 2.2.png";
import Img23 from "../assests/Projects/Machine Movers/Image 2.3.png";
import Img24 from "../assests/Projects/Machine Movers/Image 2.4.png";
import Projects from "../Branding/Projects";
import Footer from "../Footer";
import MicronixCover from "../assests/Branding/Projects/Micronix.png";

function Itel() {
  const [isOnBanner, setIsOnBanner] = useState(true);

  const handleScroll = () => {
    const bannerElement = document.getElementById("banner");
    if (bannerElement) {
      const bannerHeight = bannerElement.offsetHeight;
      setIsOnBanner(window.scrollY < bannerHeight);
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
            <h2>Logo designing & COMPANY Branding</h2>
            <h1>
              <span>Itel </span>
            </h1>
          </section>
        </div>
      </div>
      <Sidebar isOnBanner={isOnBanner} />
      <div className="portfolio-projects-cover">
        <img src={MicronixCover} alt="Itel Cover" />
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
              This project was designed as a launch campaign for a new itel smartphone,
              focused on showcasing its key features and capabilities. The goal was to
              create a clear and engaging digital experience that highlights the phone's
              value while building excitement and driving customer interest.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Challenges</h2>
            <p>
              This project was designed as a launch campaign for a new itel smartphone,
              focused on showcasing its key features and engaging interactions. The goal
              was to create a high-impact digital experience with rich animations, delivered
              within a tight timeline while maintaining clarity, performance, and brand appeal.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Approach</h2>
            <p>
              This project was designed as a launch campaign for a new itel smartphone,
              focused on showcasing its features through dynamic visuals and interactive
              animations. The goal was to deliver a polished digital experience within a
              short timeline by carefully prioritizing simpler animations first and
              progressively tackling more complex interactions with precision and attention to detail.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Results</h2>
            <p>
              A clean and seamless launch website was created for the new itel smartphone,
              designed to effectively showcase its features through smooth interactions and
              engaging visuals. Despite a tight timeline and animation-heavy requirements, the
              project was successfully delivered with precision, ensuring a polished and
              high-performing digital experience.
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
            The platform was built using a modular and scalable design system to ensure
            consistency and flexibility. It supports easy content updates, responsive
            performance across devices, and future expansion with analytics and additional
            service integrations.
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
            <img src={Img11} alt="Itel Project Image" />
            <img src={Img12} alt="Itel Project Image" />
            <img src={Img13} alt="Itel Project Image" />
            <img src={Img14} alt="Itel Project Image" />
          </section>
          <section>
            <img src={Img21} alt="Itel Project Image" />
            <img src={Img22} alt="Itel Project Image" />
            <img src={Img23} alt="Itel Project Image" />
            <img src={Img24} alt="Itel Project Image" />
          </section>
        </div>
      </div>

      <Projects />
      <Footer />
    </div>
  );
}

export default Itel;
