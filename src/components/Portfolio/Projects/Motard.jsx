import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Cover from "../assests/Projects/Motard/Cover.png";
import HeadingDesign from "../assests/Home/Section Heading Design.png";
import Img11 from "../assests/Projects/Motard/Image 1.1.png";
import Img12 from "../assests/Projects/Motard/Image 1.2.png";
import Img21 from "../assests/Projects/Motard/Image 2.1.png";
import Img22 from "../assests/Projects/Motard/Image 2.2.png";
import Img31 from "../assests/Projects/Motard/Image 3.1.png";
import Img32 from "../assests/Projects/Motard/Image 3.2.png";
import Projects from "../Branding/Projects";
import Footer from "../Footer";

function Motard() {
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
              <span>Motard </span>
            </h1>
          </section>
        </div>
      </div>
      <Sidebar isOnBanner={isOnBanner} />
      <div className="portfolio-projects-cover">
        <img src={Cover} alt="Motard Cover" />
      </div>
      <div className="portfolio-projects-info-container branding">
        <div className="portfolio-projects-info">
          <div className="portfolio-projects-info-set">
            <h2>Overview</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Aliquam dignissim
              elementum quis eget justo nunc lacus libero vitae. At lacus luctus
              maecenas tellus ipsum diam orci. Consequat porttitor turpis
              egestas tellus lacinia montes.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Challenges</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Aliquam dignissim
              elementum quis eget justo nunc lacus libero vitae. At lacus luctus
              maecenas tellus ipsum diam orci. Consequat porttitor turpis
              egestas tellus lacinia montes.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Approach</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Aliquam dignissim
              elementum quis eget justo nunc lacus libero vitae. At lacus luctus
              maecenas tellus ipsum diam orci. Consequat porttitor turpis
              egestas tellus lacinia montes.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Results</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Aliquam dignissim
              elementum quis eget justo nunc lacus libero vitae. At lacus luctus
              maecenas tellus ipsum diam orci. Consequat porttitor turpis
              egestas tellus lacinia montes.
            </p>
          </div>
        </div>
      </div>

      <div className="portfolio-projects-gallery">
        <div className="portfolio-projects-gallery-container branding">
          <section>
            <img src={Img11} alt="Motard Project Image" />
            <img src={Img12} alt="Motard Project Image" />
          </section>
          <section>
            <img src={Img21} alt="Motard Project Image" />
            <img src={Img22} alt="Motard Project Image" />
          </section>
          <section>
            <img src={Img31} alt="Motard Project Image" />
            <img src={Img32} alt="Motard Project Image" />
          </section>
        </div>
      </div>
      <Projects />
      <Footer />
    </div>
  );
}

export default Motard;
