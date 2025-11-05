import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Cover from "../assests/Projects/Idavi Foods/Cover.png";
import HeadingDesign from "../assests/Home/Section Heading Design.png";
import Img11 from "../assests/Projects/Idavi Foods/Image 1.1.png";
import Img12 from "../assests/Projects/Idavi Foods/Image 1.2.png";
import Img13 from "../assests/Projects/Idavi Foods/Image 1.3.png";
import Img21 from "../assests/Projects/Idavi Foods/Image 2.1.png";
import Img22 from "../assests/Projects/Idavi Foods/Image 2.2.png";
import Img23 from "../assests/Projects/Idavi Foods/Image 2.3.png";
import Img31 from "../assests/Projects/Idavi Foods/Image 3.1.png";
import Img32 from "../assests/Projects/Idavi Foods/Image 3.2.png";
import Img33 from "../assests/Projects/Idavi Foods/Image 3.3.png";
import Img41 from "../assests/Projects/Idavi Foods/Image 4.1.png";
import Img42 from "../assests/Projects/Idavi Foods/Image 4.2.png";
import Img43 from "../assests/Projects/Idavi Foods/Image 4.3.png";
import Projects from "../Applications/Projects";
import Footer from "../Footer";

function IdaviFoods() {
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
            <h2>Application</h2>
            <h1>
              <span>Idavi Foods </span>
            </h1>
            <p>Food Processing</p>
          </section>
        </div>
      </div>
      <Sidebar isOnBanner={isOnBanner} />
      <div className="portfolio-projects-cover">
        <img src={Cover} alt="Idavi Foods Cover" />
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
              The Idly Batter e-commerce app was designed to bring fresh,
              authentic South Indian flavors directly to customers’ homes. The
              app provides a convenient platform to order high-quality,
              ready-to-cook idly batter with just a few taps.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Challenges</h2>
            <p>
              Key challenges included creating an interface that balanced
              simplicity with functionality and optimizing images for quick
              loading while maintaining visual appeal. Ensuring a secure and
              efficient checkout experience was also a major priority.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Approach</h2>
            <p>
              A clean, appetizing design with warm, food-inspired colors and
              intuitive navigation was implemented to enhance user engagement.
              The interface focused on easy ordering, product transparency, and
              smooth performance across devices.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Results</h2>
            <p>
              The final app delivered a delightful and easy-to-use shopping
              experience that encouraged repeat purchases. It improved customer
              satisfaction, increased order volume, and successfully built trust
              through clear design and reliability.
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
            The app was developed using a responsive and scalable architecture
            focused on speed, security, and user convenience. Optimized assets,
            streamlined navigation, and integrated payment gateways enhanced
            overall usability, while analytics and SEO tools supported customer
            insights and growth.
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
            <img src={Img11} alt="Idavi Foods Project Image" />
            <img src={Img12} alt="Idavi Foods Project Image" />
            <img src={Img13} alt="Idavi Foods Project Image" />
          </section>
          <section>
            <img src={Img21} alt="Idavi Foods Project Image" />
            <img src={Img22} alt="Idavi Foods Project Image" />
            <img src={Img23} alt="Idavi Foods Project Image" />
          </section>
          <section>
            <img src={Img31} alt="Idavi Foods Project Image" />
            <img src={Img32} alt="Idavi Foods Project Image" />
            <img src={Img33} alt="Idavi Foods Project Image" />
          </section>
          <section>
            <img src={Img41} alt="Idavi Foods Project Image" />
            <img src={Img42} alt="Idavi Foods Project Image" />
            <img src={Img43} alt="Idavi Foods Project Image" />
          </section>
        </div>
      </div>
      <Projects />
      <Footer />
    </div>
  );
}

export default IdaviFoods;
