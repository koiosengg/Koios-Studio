import React, { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import HeadingDesign from "../assests/Home/Section Heading Design.png";
import LMG from "../assests/Applications/Projects/LMG.png";
import Negilu from "../assests/Applications/Projects/Negilu.png";
import IdaviFoods from "../assests/Applications/Projects/Idavi Foods.png";
import Airportr from "../assests/Applications/Projects/Airportr.png";

function projects() {
  const containerRef = useRef(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  const [visibleSlides, setVisibleSlides] = useState(
    window.innerWidth < 1200 ? 1 : 3
  );

  const location = useLocation();
  const isProjectPage = location.pathname.startsWith("/portfolio/applications");

  useEffect(() => {
    const updateLayout = () => {
      const newVisibleSlides = window.innerWidth < 1200 ? 1 : 3;
      setVisibleSlides(newVisibleSlides);

      if (containerRef.current) {
        const sets = containerRef.current.querySelectorAll(
          ".portfolio-websites-projects-set"
        );
        setTotalSlides(sets.length);
        const containerWidth = containerRef.current.offsetWidth;
        const calculatedWidth =
          (containerWidth - 12 * (newVisibleSlides - 1)) / newVisibleSlides;
        setSlideWidth(calculatedWidth);
      }
    };

    updateLayout(); // Call on initial load
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const handlePrev = () => {
    if (slideIndex > 0) {
      setSlideIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (slideIndex < totalSlides - visibleSlides) {
      setSlideIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="portfolio-websites-projects portfolio-applications">
      <div className="portfolio-websites-projects-heading">
        <div className="portfolio-section-heading">
          <img src={HeadingDesign} className="portfolio-section-heading-img" />
          <h2>{isProjectPage ? "Our Other Projects" : "Projects"}</h2>
        </div>
        <div className="portfolio-websites-projects-controls">
          <button
            className="portfolio-websites-projects-control"
            onClick={handlePrev}
            disabled={slideIndex === 0}
            style={{
              opacity: slideIndex === 0 ? 0.2 : 1,
              pointerEvents: slideIndex === 0 ? "none" : "auto",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M11.9998 12.9V19.2L4.7998 12L11.9998 4.80005V11.1H19.1998V12.9H11.9998Z"
                fill="#433E43"
              />
            </svg>
          </button>
          <button
            className="portfolio-websites-projects-control"
            onClick={handleNext}
            disabled={slideIndex >= totalSlides - visibleSlides}
            style={{
              opacity: slideIndex >= totalSlides - visibleSlides ? 0.2 : 1,
              pointerEvents:
                slideIndex >= totalSlides - visibleSlides ? "none" : "auto",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12.0002 12.9V19.2L19.2002 12L12.0002 4.80005V11.1H4.8002V12.9H12.0002Z"
                fill="#433E43"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="portfolio-websites-projects-container" ref={containerRef}>
        <div
          className="portfolio-websites-projects-container-slide"
          style={{
            transform: `translateX(-${slideIndex * (slideWidth + 12)}px)`,
            transition: "transform 0.3s ease",
            display: "flex",
            gap: "12px",
          }}
        >
          <Link
            to="/portfolio/applications/Negilu"
            className="portfolio-websites-projects-set"
          >
            <div className="portfolio-websites-projects-set-img">
              <img src={Negilu} />
            </div>
            <div className="portfolio-websites-projects-set-info">
              <section>
                <h3>Negilu</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M14 16L18 12M18 12L14 8M18 12H6"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </section>
              <p>Farming Tech</p>
            </div>
            <div className="portfolio-websites-projects-set-glow"></div>
          </Link>
          <Link
            to="/portfolio/applications/LMG"
            className="portfolio-websites-projects-set"
          >
            <div className="portfolio-websites-projects-set-img">
              <img src={LMG} />
            </div>
            <div className="portfolio-websites-projects-set-info">
              <section>
                <h3>LMG</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M14 16L18 12M18 12L14 8M18 12H6"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </section>
              <p>Tourism and Hospitality</p>
            </div>
            <div className="portfolio-websites-projects-set-glow"></div>
          </Link>
          <Link
            to="/portfolio/applications/Idavi_Foods"
            className="portfolio-websites-projects-set"
          >
            <div className="portfolio-websites-projects-set-img">
              <img src={IdaviFoods} />
            </div>
            <div className="portfolio-websites-projects-set-info">
              <section>
                <h3>Idavi Foods</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M14 16L18 12M18 12L14 8M18 12H6"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </section>
              <p>Food</p>
            </div>
            <div className="portfolio-websites-projects-set-glow"></div>
          </Link>
          <Link
            to="/portfolio/applications/Airportr"
            className="portfolio-websites-projects-set"
          >
            <div className="portfolio-websites-projects-set-img">
              <img src={Airportr} />
            </div>
            <div className="portfolio-websites-projects-set-info">
              <section>
                <h3>Airportr</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M14 16L18 12M18 12L14 8M18 12H6"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </section>
              <p>Goods Tracking App</p>
            </div>
            <div className="portfolio-websites-projects-set-glow"></div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default projects;
