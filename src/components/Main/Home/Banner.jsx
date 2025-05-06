import React from "react";
import Icon from "../assets/Home/software icon.png";

function Banner() {
  return (
    <div className="s-product-banner">
      <div className="s-product-banner-container">
        <div className="s-product-banner-logo">
          <img loading="lazy" src={Icon} alt="software icon" />
          <div
            className="s-product-banner-logo-bg-software"
            id="s-productBanner"
          ></div>
        </div>
        <div className="s-product-banner-text">
          <p>Koios Studio</p>
          <span>
            Our digital solutions encompass website and app design, company
            branding, and digital marketing strategies tailored to elevate your
            online presence. With a focus on innovation and user-centric design,
            we offer comprehensive solutions to enhance your brand's visibility
            and engagement in the digital landscape.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Banner;
