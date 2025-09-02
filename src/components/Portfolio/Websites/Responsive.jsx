import React from "react";
import { Link } from "react-router-dom";
import HeadingDesign from "../assests/Home/Section Heading Design.png";
import ResponsiveImg from "../assests/Websites/Responsive Img.png";

function Responsive() {
  return (
    <div className="portfolio-websites-responsive">
      <div className="portfolio-section-heading">
        <img src={HeadingDesign} className="portfolio-section-heading-img" />
        <h2>
          <span>Responsive Design </span> that feels Right
        </h2>
        <p>
          Every brand deserves a digital presence that feels natural and
          effortless across all screens. With responsive design at the core,
          each website is crafted to engage audiences seamlessly, creating
          experiences that not only look stunning but also connect in the right
          way, every time.
        </p>
        <a href="#footer" className="portfolio-primary-button">
          <div className="portfolio-primary-button-background"></div>
          <p>Your turn to shine</p>
        </a>
      </div>
      <div className="portfolio-websites-responsive-img">
        <img src={ResponsiveImg} />
      </div>
    </div>
  );
}

export default Responsive;
