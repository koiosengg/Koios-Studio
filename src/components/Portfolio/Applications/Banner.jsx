import React from "react";
import DesktopBanner from "../assests/Applications/Desktop Banner.png";
import Navbar from "../Navbar";

function Banner() {
  return (
    <div className="portfolio-applications-banner" id="banner">
      <Navbar />
      <img src={DesktopBanner} className="portfolio-home-banner-background" />
      <div className="portfolio-home-banner-container">
        <section>
          <h2>Design & Development</h2>
          <h1>
            Applications
            <br />
            <span>to Inspire</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Bibendum purus aliquam sed.
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
