import React from "react";
import DesktopBackground from "./assets/Vision/Desktop Background.png"

function Vision() {
  return (
    <div className="vision">
      <img src={DesktopBackground} className="vision-background" />
      <div className="template">
        <div className="template-heading">
          <p>Our Vision</p>
          <h2>
            Shaping Tomorrow's <br className="desktop" /> Aesthetics
          </h2>
        </div>
        <p className="vision-text">
          Backed by a team of skilled engineers and designers, we offer a wide
          range of services, from innovative product design and development to
          fabrication and manufacturing specializing in electric vehicles and
          user-centered software solutions. Our expertise extends beyond the
          workshop, as we provide tailored software solutions for website
          creation and brand development, ensuring your business stands out in
          the digital realm
        </p>
      </div>
    </div>
  );
}

export default Vision;
