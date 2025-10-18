import React, { useState, useRef } from "react";
import DesktopBackground from "../assests/Home/Desktop Numbers.png";
import HeadingDesign from "../assests/Home/Section Heading Design.png";
import Testimony1 from "../assests/Home/Testimony/Testimony 1.png";
function Testimony() {
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
    <div className="portfolio-home-numbers portfolio-testimony">
      <div className="portfolio-home-numbers-container">
        <div className="portfolio-section-heading">
          <img src={HeadingDesign} className="portfolio-section-heading-img" />
          <h2>
            Hear Our <br className="notMobile" /> <span>Happy Clients</span>
          </h2>
          <p>
           Discover how our solutions have made a difference.
          </p>
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
          <div className="portfolio-testimony-container">
            <div className="portfolio-testimony-set">
              <p>
                Lorem ipsum dolor sit amet consectetur Augue id dictum hendrerit
                adipiscing tellus pretium varius
              </p>
              <img src={Testimony1} alt="Testimony Person Image" />
            </div>
            <div className="portfolio-testimony-set">
              <p>
                Lorem ipsum dolor sit amet consectetur Augue id dictum hendrerit
                adipiscing tellus pretium varius
              </p>
              <img src={Testimony1} alt="Testimony Person Image" />
            </div>
            <div className="portfolio-testimony-set">
              <p>
                Lorem ipsum dolor sit amet consectetur Augue id dictum hendrerit
                adipiscing tellus pretium varius
              </p>
              <img src={Testimony1} alt="Testimony Person Image" />
            </div>
            <div className="portfolio-testimony-set">
              <p>
                Lorem ipsum dolor sit amet consectetur Augue id dictum hendrerit
                adipiscing tellus pretium varius
              </p>
              <img src={Testimony1} alt="Testimony Person Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimony;
