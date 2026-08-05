import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import HeadingDesign from "../assests/Home/Section Heading Design.png";
import Projects from "../Branding/Projects";
import Footer from "../Footer";
import Img1 from "../assests/Projects/Green Tara/1.png";
import Img2 from "../assests/Projects/Green Tara/2.png";
import Img3 from "../assests/Projects/Green Tara/3.png";
import Img4 from "../assests/Projects/Green Tara/4.png";
import Img5 from "../assests/Projects/Green Tara/5.png";
import Img6 from "../assests/Projects/Green Tara/6.png";

function Green_Tara() {
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
              <span>Green Tara </span>
            </h1>
          </section>
        </div>
      </div>
      <Sidebar isOnBanner={isOnBanner} />
      <div className="portfolio-projects-cover">
        <img src={Img1} alt="Green Tara Cover" />
      </div>
      <div className="portfolio-projects-info-container branding">
        <div className="portfolio-projects-info">
          <div className="portfolio-projects-info-set">
            <h2>Overview</h2>
            <p>
              Green Tara is a wellness and healing brand focused on emotional connection,
              inner peace, and holistic wellbeing. The identity combines nature-inspired
              elements with calming green and gold tones to express healing, balance,
              and renewal.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Challenges</h2>
            <p>
              The challenge was to create a brand identity that feels peaceful and
              meaningful while maintaining a modern and premium visual appeal. It needed
              to communicate trust, healing, and emotional warmth across all brand
              touchpoints.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Approach</h2>
            <p>
              The design uses three stylized leaves to symbolize growth, healing, and
              balance, paired with an infinity loop representing continuous energy and
              wellness. Soft typography, earthy colors, and minimal forms were chosen to
              create a serene and approachable identity.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Results</h2>
            <p>
              The final identity gives Green Tara a calm, elegant, and memorable presence
              that reflects its healing philosophy. The brand system works consistently
              across digital, print, packaging, and physical branding while maintaining
              emotional depth and visual harmony.
            </p>
          </div>
        </div>
      </div>

      <div className="portfolio-projects-gallery">
        <div className="portfolio-projects-gallery-container branding">
          <section>
            <img src={Img2} alt="Green Tara Project Image 2" />
            <img src={Img3} alt="Green Tara Project Image 3" />
          </section>
          <section>
            <img src={Img4} alt="Green Tara Project Image 4" />
            <img src={Img5} alt="Green Tara Project Image 5" />
          </section>
          <img src={Img6} alt="Green Tara Project Image 6" />
        </div>
      </div>

      <Projects />
      <Footer />
    </div>
  );
}

export default Green_Tara;
