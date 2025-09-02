import React from "react";
import DesktopBanner from "../assests/Branding/Desktop Banner.png";
import MobileBanner from "../assests/Branding/Mobile Banner.png";
import Navbar from "../Navbar";

function Banner() {
  return (
    <div className="portfolio-branding-banner" id="banner">
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
          <h2>Design & Development</h2>
          <h1>
            Building Brands
            <br />
            <span>that connects</span>
          </h1>
          <p>
            Shaping brands with purpose, passion, and powerful communication.
          </p>
        </section>
        <a className="portfolio-primary-button">
          <div className="portfolio-primary-button-background"></div>
          <p>Build Your Website with us </p>
        </a>
      </div>
    </div>
  );
}

export default Banner;
