import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Cover from "../assests/Projects/Coffee Culture/Cover.png";
import HeadingDesign from "../assests/Home/Section Heading Design.png";
import Img1 from "../assests/Projects/Coffee Culture/Image 1.png";
import Img21 from "../assests/Projects/Coffee Culture/Image 2.1.png";
import Img22 from "../assests/Projects/Coffee Culture/Image 2.2.png";
import Img3 from "../assests/Projects/Coffee Culture/Image 3.png";
import Projects from "../Websites/Projects";
import Footer from "../Footer";

function Coffee_Culture() {
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
            <h2>Logo designing & Branding</h2>
            <h1>
              <span>Coffee Culture </span>
            </h1>
          </section>
        </div>
      </div>
      <Sidebar isOnBanner={isOnBanner} />
      <div className="portfolio-projects-cover">
        <img src={Cover} alt="Coffee Culture Cover" />
      </div>
      <div className="portfolio-projects-info-container branding">
        <div className="portfolio-projects-info">
          <div className="portfolio-projects-info-set">
            <h2>Overview</h2>
            <p>
              The logo features four coffee bean shapes arranged like a flower,
              symbolizing connection and shared experiences. Bold distressed
              typography in red and black adds personality and depth,
              representing both passion and authenticity
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Challenges</h2>
            <p>
              The challenge was to balance a sense of tradition with a
              contemporary appeal. We needed a design that conveyed energy and
              craftsmanship while remaining approachable and versatile across
              print and digital platforms.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Approach</h2>
            <p>
              The branding aimed to capture the essence of togetherness and
              passion that defines The Coffee Culture. Our design approach
              focused on expressing warmth, authenticity, and community through
              a modern yet handcrafted visual identity
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Results</h2>
            <p>
              The final identity feels vibrant and welcoming, resonating with
              coffee enthusiasts and casual drinkers alike. It effectively
              communicates The Coffee Culture’s values of warmth, community, and
              the joy of shared moments over coffee.
            </p>
          </div>
        </div>
      </div>

      <div className="portfolio-projects-gallery">
        <div className="portfolio-projects-gallery-container branding">
          <img src={Img1} alt="Coffee Culture Project Image" />
          <section>
            <img src={Img21} alt="Coffee Culture Project Image" />
            <img src={Img22} alt="Coffee Culture Project Image" />
          </section>
          <img src={Img3} alt="Coffee Culture Project Image" />
        </div>
      </div>
      <Projects />
      <Footer />
    </div>
  );
}

export default Coffee_Culture;
