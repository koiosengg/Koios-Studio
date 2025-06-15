import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeadingDesign from "../assests/Home/Section Heading Design.png";
import Project1 from "../assests/Websites/Project 1.png";
import Project2 from "../assests/Websites/Project 2.png";
import Project3 from "../assests/Websites/Project 3.png";
import Project4 from "../assests/Websites/Project 4.png";

function Projects() {
  const containerRef = useRef(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  const visibleSlides = 4;

  useEffect(() => {
    if (containerRef.current) {
      const sets = containerRef.current.querySelectorAll(
        ".portfolio-websites-projects-set"
      );
      setTotalSlides(sets.length);
      const containerWidth = containerRef.current.offsetWidth;
      const calculatedWidth = (containerWidth - 36) / 4;
      setSlideWidth(calculatedWidth);
    }
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
    <div className="portfolio-websites-projects">
      <div className="portfolio-websites-projects-heading">
        <div className="portfolio-section-heading">
          <img src={HeadingDesign} className="portfolio-section-heading-img" />
          <h2>Projects</h2>
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
            disabled={slideIndex >= totalSlides - 4} // 4 is visible slides count
            style={{
              opacity: slideIndex >= totalSlides - 4 ? 0.2 : 1,
              pointerEvents: slideIndex >= totalSlides - 4 ? "none" : "auto",
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
            to="/portfolio/projects/NE_Structures"
            className="portfolio-websites-projects-set"
          >
            <div className="portfolio-websites-projects-set-img">
              <img src={Project1} />
            </div>
            <div className="portfolio-websites-projects-set-info">
              <section>
                <h3>NE Structures</h3>
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
              <p>Pre-Engineered Buildings</p>
            </div>
            <div className="portfolio-websites-projects-set-glow"></div>
          </Link>
          <Link
            to="/portfolio/projects/Mobiglide"
            className="portfolio-websites-projects-set"
          >
            <div className="portfolio-websites-projects-set-img">
              <img src={Project2} />
            </div>
            <div className="portfolio-websites-projects-set-info">
              <section>
                <h3>Mobiglide</h3>
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
              <p>Staffing Solutions in Semiconductors</p>
            </div>
            <div className="portfolio-websites-projects-set-glow"></div>
          </Link>
          <a href="#" className="portfolio-websites-projects-set">
            <div className="portfolio-websites-projects-set-img">
              <img src={Project3} />
            </div>
            <div className="portfolio-websites-projects-set-info">
              <section>
                <h3>XLR8</h3>
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
              <p>Lorem ipsum dolor amet</p>
            </div>
            <div className="portfolio-websites-projects-set-glow"></div>
          </a>
          <a href="#" className="portfolio-websites-projects-set">
            <div className="portfolio-websites-projects-set-img">
              <img src={Project4} />
            </div>
            <div className="portfolio-websites-projects-set-info">
              <section>
                <h3>Cilkencave</h3>
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
              <p>Lorem ipsum dolor amet</p>
            </div>
            <div className="portfolio-websites-projects-set-glow"></div>
          </a>
          <a href="#" className="portfolio-websites-projects-set">
            <div className="portfolio-websites-projects-set-img">
              <img src={Project2} />
            </div>
            <div className="portfolio-websites-projects-set-info">
              <section>
                <h3>Mobiglide</h3>
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
              <p>Staffing Solutions in Semiconductors</p>
            </div>
            <div className="portfolio-websites-projects-set-glow"></div>
          </a>
          <a href="#" className="portfolio-websites-projects-set">
            <div className="portfolio-websites-projects-set-img">
              <img src={Project3} />
            </div>
            <div className="portfolio-websites-projects-set-info">
              <section>
                <h3>XLR8</h3>
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
              <p>Lorem ipsum dolor amet</p>
            </div>
            <div className="portfolio-websites-projects-set-glow"></div>
          </a>
          <a href="#" className="portfolio-websites-projects-set">
            <div className="portfolio-websites-projects-set-img">
              <img src={Project1} />
            </div>
            <div className="portfolio-websites-projects-set-info">
              <section>
                <h3>NE Structures</h3>
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
              <p>Pre-Engineered Buildings</p>
            </div>
            <div className="portfolio-websites-projects-set-glow"></div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
