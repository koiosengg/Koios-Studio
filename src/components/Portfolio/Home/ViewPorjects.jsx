import React from "react";
import { Link } from "react-router-dom";
import Background from "../assests/Home/View Projects Background.png";

function ViewPorjects() {
  return (
    <div className="portfolio-home-view-projects">
      <img src={Background} />
      <div className="portfolio-home-view-projects-container">
        <Link to="/portfolio/websites" className="portfolio-primary-button">
          <div className="portfolio-primary-button-background"></div>
          <p>View Projects</p>
        </Link>
      </div>
    </div>
  );
}

export default ViewPorjects;
