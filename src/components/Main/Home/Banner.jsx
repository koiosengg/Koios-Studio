import React from "react";
import Icon from "../assets/Home/software icon.png";
import Logo from "../assets/Home/Koios logo.png";

function Banner() {
  return (
    <div className="s-product-banner">
      <div className="s-product-banner-container">
        <div className="s-product-banner-text">
          <p>
            One Destination <br />
            Endless Solutions
          </p>
          <span>
            Our digital solutions encompass website and app design, company
            branding, and digital marketing strategies tailored to elevate your
            online presence. With a focus on innovation and user-centric design,
            we offer comprehensive solutions to enhance your brand's visibility
            and engagement in the digital landscape.
          </span>
        </div>
        <div className="s-product-banner-labels">
          <label>Websites</label>
          <label>Apps</label>
          <label>Digital Marketing</label>
        </div>
      </div>
    </div>
  );
}

export default Banner;
