import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Cover from "../assests/Projects/Nirmalyam/Cover.png";
import HeadingDesign from "../assests/Home/Section Heading Design.png";
import Img1 from "../assests/Projects/Nirmalyam/Image 1.png";
import Img2 from "../assests/Projects/Nirmalyam/Image 2.png";
import Img31 from "../assests/Projects/Nirmalyam/Image 3.1.png";
import Img32 from "../assests/Projects/Nirmalyam/Image 3.2.png";
import Img4 from "../assests/Projects/Nirmalyam/Image 4.png";
import Projects from "../Branding/Projects";
import Footer from "../Footer";

function Nirmalyam() {
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
            <h2>Logo designing & COMPANY Branding</h2>
            <h1>
              <span>Nirmalyam </span>
            </h1>
          </section>
        </div>
      </div>
      <Sidebar isOnBanner={isOnBanner} />
      <div className="portfolio-projects-cover">
        <img src={Cover} alt="Nirmalyam Cover" />
      </div>
      <div className="portfolio-projects-info-container branding">
        <div className="portfolio-projects-info">
          <div className="portfolio-projects-info-set">
            <h2>Overview</h2>
            <p>
              Nirmalyam Ghee & Butter needed a brand identity that reflects
              purity, heritage, and authenticity. The goal was to capture the
              essence of tradition while presenting it in a modern, elegant way.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Challenges</h2>
            <p>
              The challenge was to balance tradition with simplicity—making the
              logo minimal without losing depth. Ensuring it felt both
              culturally rich and universally appealing required careful design
              precision.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Approach</h2>
            <p>
              We drew inspiration from a single golden drop of ghee, shaping it
              into a minimal yet meaningful logo. Every curve and detail was
              crafted to represent purity, tradition, and the brand’s deep
              cultural roots.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Results</h2>
            <p>
              The final logo embodies elegance, heritage, and authenticity in
              one iconic mark. It goes beyond aesthetics, serving as a timeless
              visual story that strengthens the brand’s identity.
            </p>
          </div>
        </div>
      </div>

      <div className="portfolio-projects-gallery">
        <div className="portfolio-projects-gallery-container branding">
          <img src={Img1} alt="Nirmalyam Project Image" />
          <img src={Img2} alt="Nirmalyam Project Image" />
          <section>
            <img src={Img31} alt="Nirmalyam Project Image" />
            <img src={Img32} alt="Nirmalyam Project Image" />
          </section>
          <img src={Img4} alt="Nirmalyam Project Image" />
        </div>
      </div>
      <Projects />
      <Footer />
    </div>
  );
}

export default Nirmalyam;
