import React from "react";
import DesktopBanner from "../assests/Home/Desktop Banner.png";
import Icon1 from "../assests/Home/Icon 1.png";
import Icon2 from "../assests/Home/Icon 2.png";
import Icon3 from "../assests/Home/Icon 3.png";

function Banner() {
  return (
    <div className="portfolio-home-banner" id="banner">
      <img src={DesktopBanner} className="portfolio-home-banner-background" />
      <div className="portfolio-home-banner-container">
        <section>
          <h2>PORTFOLIO</h2>
          <h1>
            Our Design Journey <br />
            <span>Vision to Reality</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Bibendum purus aliquam sed.
          </p>
        </section>
        <a className="portfolio-white-button">Build Your Website with us</a>
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
