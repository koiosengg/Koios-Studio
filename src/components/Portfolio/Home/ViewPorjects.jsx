import React from "react";
import { Link } from "react-router-dom";
import ViewProjectsImg1 from "../assests/Home/View Projects/View Projects Img 1.png";
import ViewProjectsImg2 from "../assests/Home/View Projects/View Projects Img 2.png";
import ViewProjectsImg3 from "../assests/Home/View Projects/View Projects Img 3.png";
import ViewProjectsImg4 from "../assests/Home/View Projects/View Projects Img 4.png";
import ViewProjectsImg5 from "../assests/Home/View Projects/View Projects Img 5.png";
import ViewProjectsImg6 from "../assests/Home/View Projects/View Projects Img 6.png";
import ViewProjectsImg7 from "../assests/Home/View Projects/View Projects Img 7.png";
import ViewProjectsImg8 from "../assests/Home/View Projects/View Projects Img 8.png";
import ViewProjectsImg9 from "../assests/Home/View Projects/View Projects Img 9.png";
import ViewProjectsImg10 from "../assests/Home/View Projects/View Projects Img 10.png";
import ViewProjectsImg11 from "../assests/Home/View Projects/View Projects Img 11.png";

function ViewPorjects() {
  const track1 = [
    ViewProjectsImg1, ViewProjectsImg2, ViewProjectsImg3,
    ViewProjectsImg4, ViewProjectsImg5, ViewProjectsImg6
  ];
  const track1Images = [...track1, ...track1, ...track1, ...track1];

  const track2 = [
    ViewProjectsImg7, ViewProjectsImg8, ViewProjectsImg9,
    ViewProjectsImg10, ViewProjectsImg11
  ];
  const track2Images = [...track2, ...track2, ...track2, ...track2, ...track2, ...track2];

  return (
    <div className="portfolio-home-view-projects">
      <div className="portfolio-home-view-projects-wrapper">
        <div className="portfolio-home-view-projects-marquee">
          {track1Images.map((img, idx) => (
            <img key={`t1-${idx}`} src={img} alt={`koiostudio showcase screenshot ${idx + 1}`} />
          ))}
        </div>
      </div>
      <div className="portfolio-home-view-projects-wrapper">
        <div className="portfolio-home-view-projects-marquee portfolio-home-view-projects-marquee-rev">
          {track2Images.map((img, idx) => (
            <img key={`t2-${idx}`} src={img} alt={`koiostudio showcase screenshot ${idx + 7}`} />
          ))}
        </div>
      </div>
      <div className="portfolio-home-view-projects-container">
        <Link to="/portfolio/websites" className="portfolio-primary-button" aria-label="View all portfolio projects">
          <div className="portfolio-primary-button-background"></div>
          <p>View Projects</p>
        </Link>
      </div>
    </div>
  );
}

export default ViewPorjects;
