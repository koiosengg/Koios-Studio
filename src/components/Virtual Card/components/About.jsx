import React from "react";
import DesktopBackground from "../assets/TKS Desktop About.png";

function About() {
  return (
    <div className="virtual-card-about">
      <img src={DesktopBackground} className="virtual-card-about-background" />
      <div className="virtual-card-about-container">
        <h2>Project Manager</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Lectus cursus platea lobortis
          id. Sit nibh ullamcorper in libero donec enim auctor. Quam eleifend
          magna aliquet ut. Turpis gravida quis ut ipsum vestibulum justo
          viverra.
        </p>
      </div>
    </div>
  );
}

export default About;
