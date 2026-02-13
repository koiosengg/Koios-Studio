import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Cover from "../assests/Projects/GOAT/Cover.png";
import HeadingDesign from "../assests/Home/Section Heading Design.png";
import Img1 from "../assests/Projects/GOAT/Image 1.png";
import Img21 from "../assests/Projects/GOAT/Image 2.1.png";
import Img22 from "../assests/Projects/GOAT/Image 2.2.png";
import Img3 from "../assests/Projects/GOAT/Image 3.png";
import Projects from "../Branding/Projects";
import Footer from "../Footer";

function GOAT() {
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
              <span>The G.O.A.T Cafe </span>
            </h1>
          </section>
        </div>
      </div>
      <Sidebar isOnBanner={isOnBanner} />
      <div className="portfolio-projects-cover">
        <img src={Cover} alt="The G.O.A.T Cafe Cover" />
      </div>
      <div className="portfolio-projects-info-container branding">
        <div className="portfolio-projects-info">
          <div className="portfolio-projects-info-set">
            <h2>Overview</h2>
            <p>
              GOAT Café was designed as a youth-focused pure veg café targeting
              Gen Z and college students. The goal was to make vegetarianism
              feel trendy, fresh, and culturally relevant rather than
              traditional.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Challenges</h2>
            <p>
              Key challenges included avoiding the overused leaf cliché, making
              “pure veg” look cool, and standing out in a saturated café market.
              Scalability across digital and physical platforms was also
              carefully addressed.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Approach</h2>
            <p>
              We used a leaf in the logo to symbolize purity and health, paired
              with a bold, modern font to appeal to the college crowd. Vibrant
              yet minimal visuals and the slang-inspired name “GOAT” created a
              fun, relatable identity.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Results</h2>
            <p>
              The brand identity came out stylish, approachable, and
              Instagram-worthy. It balanced the café’s pure veg ethos with
              modern design, making it memorable and attractive to its young
              audience.
            </p>
          </div>
        </div>
      </div>

      <div className="portfolio-projects-gallery">
        <div className="portfolio-projects-gallery-container branding">
          <img src={Img1} alt="The G.O.A.T Cafe Project Image" />
          <section>
            <img src={Img21} alt="The G.O.A.T Cafe Project Image" />
            <img src={Img22} alt="The G.O.A.T Cafe Project Image" />
          </section>
          <img src={Img3} alt="The G.O.A.T Cafe Project Image" />
        </div>
      </div>
      <Projects />
      <Footer />
    </div>
  );
}

export default GOAT;
