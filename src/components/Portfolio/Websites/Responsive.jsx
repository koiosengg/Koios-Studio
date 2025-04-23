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
          Lorem ipsum dolor sit amet consectetur. Augue id dictum hendrerit
          adipiscing tellus pretium varius nunc. Turpis morbi praesent ac velit.
          Non in adipiscing tortor.
        </p>
        <Link to="/portfolio/website" className="portfolio-primary-button">
          <div className="portfolio-primary-button-background"></div>
          <p>Your turn to shine</p>
        </Link>
      </div>
      <div className="portfolio-websites-responsive-img">
        <img src={ResponsiveImg} />
      </div>
    </div>
  );
}

export default Responsive;
