import React from "react";
import { Link } from "react-router-dom";
import ViewProjectsImg1 from "../assests/Home/View Projects/View Projects Img 1.png";
import ViewProjectsImg2 from "../assests/Home/View Projects/View Projects Img 2.png";
import ViewProjectsImg3 from "../assests/Home/View Projects/View Projects Img 3.png";
import ViewProjectsImg4 from "../assests/Home/View Projects/View Projects Img 4.png";
import ViewProjectsImg5 from "../assests/Home/View Projects/View Projects Img 5.png";
import ViewProjectsImg6 from "../assests/Home/View Projects/View Projects Img 6.png";

function ViewPorjects() {
  return (
    <div className="portfolio-home-view-projects">
      <div className="portfolio-home-view-projects-wrapper">
        <div className="portfolio-home-view-projects-marquee">
          <img src={ViewProjectsImg1} />
          <img src={ViewProjectsImg2} />
          <img src={ViewProjectsImg3} />
          <img src={ViewProjectsImg4} />
          <img src={ViewProjectsImg5} />
          <img src={ViewProjectsImg6} />
          <img src={ViewProjectsImg1} />
          <img src={ViewProjectsImg2} />
          <img src={ViewProjectsImg3} />
          <img src={ViewProjectsImg4} />
          <img src={ViewProjectsImg5} />
          <img src={ViewProjectsImg6} />
          <img src={ViewProjectsImg1} />
          <img src={ViewProjectsImg2} />
          <img src={ViewProjectsImg3} />
          <img src={ViewProjectsImg4} />
          <img src={ViewProjectsImg5} />
          <img src={ViewProjectsImg6} />
          <img src={ViewProjectsImg1} />
          <img src={ViewProjectsImg2} />
          <img src={ViewProjectsImg3} />
          <img src={ViewProjectsImg4} />
          <img src={ViewProjectsImg5} />
          <img src={ViewProjectsImg6} />
        </div>
      </div>
      <div className="portfolio-home-view-projects-wrapper">
        <div className="portfolio-home-view-projects-marquee portfolio-home-view-projects-marquee-rev">
          <img src={ViewProjectsImg1} />
          <img src={ViewProjectsImg2} />
          <img src={ViewProjectsImg3} />
          <img src={ViewProjectsImg4} />
          <img src={ViewProjectsImg5} />
          <img src={ViewProjectsImg6} />
          <img src={ViewProjectsImg1} />
          <img src={ViewProjectsImg2} />
          <img src={ViewProjectsImg3} />
          <img src={ViewProjectsImg4} />
          <img src={ViewProjectsImg5} />
          <img src={ViewProjectsImg6} />
          <img src={ViewProjectsImg1} />
          <img src={ViewProjectsImg2} />
          <img src={ViewProjectsImg3} />
          <img src={ViewProjectsImg4} />
          <img src={ViewProjectsImg5} />
          <img src={ViewProjectsImg6} />
          <img src={ViewProjectsImg1} />
          <img src={ViewProjectsImg2} />
          <img src={ViewProjectsImg3} />
          <img src={ViewProjectsImg4} />
          <img src={ViewProjectsImg5} />
          <img src={ViewProjectsImg6} />
        </div>
      </div>
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
