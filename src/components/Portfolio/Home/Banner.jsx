import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import DesktopBanner from "../assests/Home/Desktop Banner.png";
import MobileBanner from "../assests/Home/Mobile Banner.png";
import Icon1 from "../assests/Home/Icon 1.png";
import Icon2 from "../assests/Home/Icon 2.png";
import Icon3 from "../assests/Home/Icon 3.png";

function Banner() {
  return (
    <div className="portfolio-home-banner" id="banner">
      <Navbar />
      <img
        src={DesktopBanner}
        className="portfolio-home-banner-background notMobile"
      />
      <img
        src={MobileBanner}
        className="portfolio-home-banner-background mobile"
      />
      <div className="portfolio-home-banner-container">
        <section>
          <h2>PORTFOLIO</h2>
          <h1>
            Our Design Journey <br />
            <span>Vision to Reality</span>
          </h1>
          <p>
            Turning imagination into impactful designs, we ensure your brand
            story is expressed with elegance and precision.
          </p>
        </section>
        <Link to="/portfolio/websites" className="portfolio-primary-button">
          <div className="portfolio-primary-button-background"></div>
          <p>Build Your Website with us </p>
        </Link>
        <div className="portfolio-home-banner-icons">
          <img src={Icon1} className="portfolio-home-banner-icon-1" />
          <img src={Icon2} className="portfolio-home-banner-icon-2" />
          <img src={Icon3} className="portfolio-home-banner-icon-3" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
