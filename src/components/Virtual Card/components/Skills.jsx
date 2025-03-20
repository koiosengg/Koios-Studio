import React from "react";
import DesktopBackground from "../assets/TKS Desktop Skills.png";
import PenIcon from "../assets/Pen Icon.png";

function Skills() {
  return (
    <div className="virtual-card-skills">
      <img src={DesktopBackground} className="virtual-card-skills-background" />
      <h2>Skills & Expertise</h2>
      <div className="virtual-card-skills-container">
        <div className="virtual-card-skills-set">
          <img src={PenIcon} />
          <h3>UI Design</h3>
        </div>
        <div className="virtual-card-skills-set">
          <img src={PenIcon} />
          <h3>UI Design</h3>
        </div>
        <div className="virtual-card-skills-set">
          <img src={PenIcon} />
          <h3>UI Design</h3>
        </div>
        <div className="virtual-card-skills-set">
          <img src={PenIcon} />
          <h3>UI Design</h3>
        </div>
        <div className="virtual-card-skills-set">
          <img src={PenIcon} />
          <h3>UI Design</h3>
        </div>
        <div className="virtual-card-skills-set">
          <img src={PenIcon} />
          <h3>UI Design</h3>
        </div>
      </div>
    </div>
  );
}

export default Skills;
