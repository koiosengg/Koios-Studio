import React, { useState, useRef } from "react";
import DesktopBackground from "../assests/Home/Desktop Numbers.png";
import HeadingDesign from "../assests/Home/Section Heading Design.png";

function Numbers() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    if (divRef.current) {
      const rect = divRef.current.getBoundingClientRect();
      setCursorPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <div
      ref={divRef}
      className="portfolio-home-numbers"
      onMouseMove={handleMouseMove}
    >
      <img
        src={DesktopBackground}
        className="portfolio-home-numbers-background"
      />
      <div
        className="portfolio-home-flashlight-overlay"
        style={{
          maskImage: `radial-gradient(circle 180px at ${cursorPos.x}px ${cursorPos.y}px, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.8) 50%, rgba(0, 0, 0, 1) 80%)`,
          WebkitMaskImage: `radial-gradient(circle 180px at ${cursorPos.x}px ${cursorPos.y}px, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.8) 50%, rgba(0, 0, 0, 1) 80%)`,
        }}
      ></div>
      <div className="portfolio-home-numbers-container">
        <div className="portfolio-section-heading">
          <img src={HeadingDesign} className="portfolio-section-heading-img" />
          <h2>
            <span>Numbers</span> that speak for themselves
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Augue id dictum hendrerit
            adipiscing tellus pretium varius nunc. Turpis morbi praesent ac
            velit. Non in adipiscing tortor.
          </p>
          <a href="#" className="portfolio-white-button">Your turn to shine</a>
        </div>
        <div className="portfolio-home-numbers-div">
          <section>
            <div className="portfolio-home-numbers-set">
              <h3>45+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="portfolio-home-numbers-set">
              <h3>75+</h3>
              <p>Successful Projects</p>
            </div>
          </section>
          <section>
            <div className="portfolio-home-numbers-set">
              <h3>100%</h3>
              <p>Custom Solutions</p>
            </div>
            <div className="portfolio-home-numbers-set">
              <h3>15+</h3>
              <p>Expert Team</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Numbers;
