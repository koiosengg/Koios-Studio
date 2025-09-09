import React, { useState } from "react";
import HeadingDesign from "../assests/Home/Section Heading Design.png";
import Logos from "./Mission/Logos";
import Cards from "./Mission/Cards";
import Slides from "./Mission/Slides";
import Brochure from "./Mission/Brochure";
import Catalog from "./Mission/Catalog";
import Listings from "./Mission/Listings";

const componentMap = {
  Logos: <Logos />,
  Cards: <Cards />,
  Slides: <Slides />,
  Brochure: <Brochure />,
  Catalog: <Catalog />,
  Listings: <Listings />,
};

function Mission() {
  const [activeComponent, setActiveComponent] = useState("Logos");

  return (
    <div className="portfolio-branding-mission">
      <div className="portfolio-branding-mission-heading">
        <div className="portfolio-section-heading">
          <img
            src={HeadingDesign}
            className="portfolio-section-heading-img"
            alt="Section Heading"
          />
          <h2>
            Your Brand Our <span>Mission </span>
          </h2>
          <p>
            Designed with the focus on making your brand memorable and
            impactful.
          </p>
        </div>

        <div className="portfolio-branding-mission-option-container">
          {Object.keys(componentMap).map((key) => (
            <button
              key={key}
              className={`portfolio-branding-mission-option ${
                activeComponent === key ? "active-option" : ""
              }`}
              onClick={() => setActiveComponent(key)}
            >
              {key}
            </button>
          ))}
        </div>
      </div>

      <div className="portfolio-branding-mission-container">
        <div className="portfolio-branding-mission-container-background"></div>
        <div className="portfolio-branding-mission-div">
          {componentMap[activeComponent]}
        </div>
      </div>
    </div>
  );
}

export default Mission;
