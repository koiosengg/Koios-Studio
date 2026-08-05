import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import HeadingDesign from "../assests/Home/Section Heading Design.png";
import Projects from "../Branding/Projects";
import Footer from "../Footer";
import Img1 from "../assests/Projects/Smilevieu/1.png";
import Img2 from "../assests/Projects/Smilevieu/2.png";
import Img3 from "../assests/Projects/Smilevieu/3.png";

function Smilevieu() {
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
              <span>Smilevieu </span>
            </h1>
          </section>
        </div>
      </div>
      <Sidebar isOnBanner={isOnBanner} />
      <div className="portfolio-projects-cover">
        <img src={Img3} alt="Smilevieu Cover" />
      </div>
      <div className="portfolio-projects-info-container branding">
        <div className="portfolio-projects-info">
          <div className="portfolio-projects-info-set">
            <h2>Overview</h2>
            <p>
              SmileVieu’s branding was designed to balance professionalism with warmth,
              creating an identity that is both credible and welcoming, while positioning
              the brand as innovative, approachable, and committed to making modern
              dental care simple and trustworthy.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Challenges</h2>
            <p>
              The key challenges were avoiding generic dental cliches, ensuring the logo
              remained distinctive and scalable across applications, and maintaining the
              right balance between professional credibility and patient-friendly
              approachability.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Approach</h2>
            <p>
              The logo combines a speech bubble smile and plus sign to reflect care and
              communication, paired with bold teal typography for trust, and the tagline
              “Smart Dentistry, Made Simple” to highlight simplicity and innovation.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Results</h2>
            <p>
              The outcome was a memorable, patient-centric brand identity that differentiates
              SmileVieu from competitors, builds trust through clarity and innovation, and
              communicates a promise of simple, smart, and approachable dentistry.
            </p>
          </div>
        </div>
      </div>

      <div className="portfolio-projects-gallery">
        <div className="portfolio-projects-gallery-container branding">
          <section>
            <img src={Img1} alt="Smilevieu Project Image 1" />
            <img src={Img2} alt="Smilevieu Project Image 2" />
          </section>
          <img src={Img3} alt="Smilevieu Project Image 3" />
        </div>
      </div>

      <Projects />
      <Footer />
    </div>
  );
}

export default Smilevieu;
