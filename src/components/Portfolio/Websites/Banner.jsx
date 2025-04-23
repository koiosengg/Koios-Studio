import React from "react";
import DesktopBanner from "../assests/Websites/Desktop Banner.png";
import DesktopBannerImg from "../assests/Websites/Desktop Banner Img.png";
import Navbar from "../Navbar";

function Banner() {
  return (
    <div className="portfolio-websites-banner" id="banner">
      <Navbar />
      <img src={DesktopBanner} className="portfolio-home-banner-background" />
      <div className="portfolio-websites-banner-container">
        <div className="portfolio-home-banner-container">
          <section>
            <h2>Design & Development</h2>
            <h1>
              Websites <br />
              <span>that Wow</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Bibendum purus aliquam
              sed.
            </p>
          </section>
          <a className="portfolio-primary-button">
            <div className="portfolio-primary-button-background"></div>
            <p>Build Your Website with us </p>
          </a>
        </div>
        <div className="portfolio-websites-banner-imgs">
          <img src={DesktopBannerImg} />
          <div className="portfolio-websites-banner-img-1"> </div>
          <div className="portfolio-websites-banner-img-2"> </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
