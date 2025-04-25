import React from "react";
import DesktopBanner from "../assests/Websites/Desktop Banner.png";
import DesktopBannerImg from "../assests/Websites/Desktop Banner Img.png";
import DesktopBannerImg1 from "../assests/Websites/Desktop Banner Img 1.png";
import DesktopBannerImg2 from "../assests/Websites/Desktop Banner Img 2.png";
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
          <img className="portfolio-websites-banner-img" src={DesktopBannerImg} />
          <img
            src={DesktopBannerImg1}
            className="portfolio-websites-banner-img-1"
          >
          </img>
          <img
            src={DesktopBannerImg2}
            className="portfolio-websites-banner-img-2"
          >
          </img>
        </div>
      </div>
    </div>
  );
}

export default Banner;
