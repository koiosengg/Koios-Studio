import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Cover from "../assests/Projects/SIMMFA/Cover.png";
import HeadingDesign from "../assests/Home/Section Heading Design.png";
import Img11 from "../assests/Projects/SIMMFA/Image 1.1.png";
import Img12 from "../assests/Projects/SIMMFA/Image 1.2.png";
import Img13 from "../assests/Projects/SIMMFA/Image 1.3.png";
import Img14 from "../assests/Projects/SIMMFA/Image 1.4.png";
import Img21 from "../assests/Projects/SIMMFA/Image 2.1.png";
import Img22 from "../assests/Projects/SIMMFA/Image 2.2.png";
import Img23 from "../assests/Projects/SIMMFA/Image 2.3.png";
import Img24 from "../assests/Projects/SIMMFA/Image 2.4.png";
import Projects from "../Websites/Projects";
import Footer from "../Footer";

function SIMMFA() {
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
              <span>SIMMFA </span>
            </h1>
            <p>Music Academy</p>
          </section>
          {/* <a className="portfolio-primary-button">
            <div className="portfolio-primary-button-background"></div>
            <p>Visit Website </p>
          </a> */}
        </div>
      </div>
      <Sidebar isOnBanner={isOnBanner} />
      <div className="portfolio-projects-cover">
        <img src={Cover} alt="SIMMFA Cover" />
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
              SIMMFA is a contemporary music academy offering training in
              various instruments and vocal performance. The website was
              designed to reflect the creativity and rhythm of music while
              providing clear access to courses, faculty, and enrollment
              details. It serves as an engaging digital platform for students
              and music enthusiasts alike.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Challenges</h2>
            <p>
              The main challenges included maintaining visual balance while
              showcasing diverse content like classes, events, and media.
              Ensuring fast load times for high-quality images and videos
              without affecting performance also required careful optimization.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Approach</h2>
            <p>
              A clean, artistic design with harmonious colors and modern
              typography was used to capture the essence of music and learning.
              The layout emphasized easy navigation, responsive performance, and
              visually appealing presentation of courses and events.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Results</h2>
            <p>
              The final website delivered an elegant, user-friendly experience
              that resonated with SIMMFA’s creative identity. It improved user
              engagement, streamlined course inquiries, and strengthened the
              academy’s online presence.
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
            The SIMMFA website was built for speed, responsiveness, and
            accessibility. Optimized visuals, structured content, and
            interactive features enhanced usability, while SEO and analytics
            integration improved visibility and audience reach.
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
            <img src={Img11} alt="SIMMFA Project Image" />
            <img src={Img12} alt="SIMMFA Project Image" />
            <img src={Img13} alt="SIMMFA Project Image" />
            <img src={Img14} alt="SIMMFA Project Image" />
          </section>
          <section>
            <img src={Img21} alt="SIMMFA Project Image" />
            <img src={Img22} alt="SIMMFA Project Image" />
            <img src={Img23} alt="SIMMFA Project Image" />
            <img src={Img24} alt="SIMMFA Project Image" />
          </section>
        </div>
      </div>
      <Projects />
      <Footer />
    </div>
  );
}

export default SIMMFA;
