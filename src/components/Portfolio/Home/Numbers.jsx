import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import DesktopBackground from "../assests/Home/Desktop Numbers.png";
import HeadingDesign from "../assests/Home/Section Heading Design.png";

function Numbers() {
  const [cursorPos, setCursorPos] = useState({ x: 250, y: 250 });
  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    if (divRef.current) {
      const rect = divRef.current.getBoundingClientRect();

      const rawX = e.clientX - rect.left;
      const rawY = e.clientY - rect.top;

      const x = Math.max(250, Math.min(rawX, rect.width - 100));
      const y = Math.max(150, Math.min(rawY, rect.height - 150));

      setCursorPos({ x, y });
    }
  };

  return (
    <div className="portfolio-home-numbers">
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
          <a href="#footer" className="portfolio-primary-button">
            <div className="portfolio-primary-button-background"></div>
            <p>My turn to shine</p>
          </a>
        </div>
        <div
          className="portfolio-home-numbers-div"
          ref={divRef}
          onMouseMove={handleMouseMove}
        >
          <img
            src={DesktopBackground}
            className="portfolio-home-numbers-background"
          />
          <div
            className="portfolio-home-cursor-glow"
            style={{
              left: `${cursorPos.x}px`,
              top: `${cursorPos.y}px`,
            }}
          ></div>
          <div
            className="portfolio-home-flashlight-overlay"
            style={{
              maskImage: `radial-gradient(circle 180px at ${cursorPos.x}px ${cursorPos.y}px, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.8) 50%, rgba(0, 0, 0, 1) 80%)`,
              WebkitMaskImage: `radial-gradient(circle 180px at ${cursorPos.x}px ${cursorPos.y}px, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.8) 50%, rgba(0, 0, 0, 1) 80%)`,
            }}
          ></div>
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
