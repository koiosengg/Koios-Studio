import React, { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import HeadingDesign from "../assests/Home/Section Heading Design.png";
import NEStructures from "../assests/Websites/Projects/NE Structures.png";
import Mobiglide from "../assests/Websites/Projects/Mobiglide.png";
import XLR8 from "../assests/Websites/Projects/XLR8.png";
import Cilkencave from "../assests/Websites/Projects/Cilkencave.png";
import Akarswift from "../assests/Websites/Projects/Akarswift.png";
import ISKAutoIndustries from "../assests/Websites/Projects/ISK Auto Industries.png";
import HappyGummies from "../assests/Websites/Projects/Happy Gummies.png";
import Koiostudio from "../assests/Websites/Projects/Koiostudio.png";
import Talankey from "../assests/Websites/Projects/Talankey.png";
import KoiosEngineering from "../assests/Websites/Projects/Koios Engineering.png";
import Fourstor from "../assests/Websites/Projects/Fourstor.png";
import UrbanSphere from "../assests/Websites/Projects/Urban Sphere.png";
import BalajiProtoTools from "../assests/Websites/Projects/Balaji Proto Tools.png";
import MRIndustries from "../assests/Websites/Projects/MR Industries.png";
import Ameya from "..//assests/Websites/Projects/Ameya.png";

function Projects() {
  const containerRef = useRef(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  const [visibleSlides, setVisibleSlides] = useState(
    window.innerWidth < 1200 ? 1 : 4
  );

  const location = useLocation();
  const isProjectPage = location.pathname.startsWith("/portfolio/websites");

  useEffect(() => {
    const updateLayout = () => {
      const newVisibleSlides = window.innerWidth < 1200 ? 1 : 4;
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
    <div className="portfolio-websites-projects">
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
            to="/portfolio/websites/NE_Structures"
            className="portfolio-websites-projects-set"
          >
            <div className="portfolio-websites-projects-set-img">
              <img src={NEStructures} />
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
              <p>Construction Industries</p>
            </div>
            <div className="portfolio-websites-projects-set-glow"></div>
          </Link>
          <Link
            to="/portfolio/websites/Mobiglide"
            className="portfolio-websites-projects-set"
          >
            <div className="portfolio-websites-projects-set-img">
              <img src={Mobiglide} />
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
              <p>Human Resources</p>
            </div>
            <div className="portfolio-websites-projects-set-glow"></div>
          </Link>
          <Link
            to="/portfolio/websites/XLR8"
            className="portfolio-websites-projects-set"
          >
            <div className="portfolio-websites-projects-set-img">
              <img src={XLR8} />
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
              <p>EV an Automobile Go-kart</p>
            </div>
            <div className="portfolio-websites-projects-set-glow"></div>
          </Link>
          <Link
            to="/portfolio/websites/Cilkencave"
            className="portfolio-websites-projects-set"
          >
            <div className="portfolio-websites-projects-set-img">
              <img src={Cilkencave} />
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
              <p>Semi Conductor Industry</p>
            </div>
            <div className="portfolio-websites-projects-set-glow"></div>
          </Link>
          <Link
            to="/portfolio/websites/Akarswift"
            className="portfolio-websites-projects-set"
          >
            <div className="portfolio-websites-projects-set-img">
              <img src={Akarswift} />
            </div>
            <div className="portfolio-websites-projects-set-info">
              <section>
                <h3>Akarswift</h3>
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
              <p>Logistics Solutions</p>
            </div>
            <div className="portfolio-websites-projects-set-glow"></div>
          </Link>
          <Link
            to="/portfolio/websites/ISK_Auto_Industries"
            className="portfolio-websites-projects-set"
          >
            <div className="portfolio-websites-projects-set-img">
              <img src={ISKAutoIndustries} />
            </div>
            <div className="portfolio-websites-projects-set-info">
              <section>
                <h3>ISK Auto Industries</h3>
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
              <p>Automotive Component Manufacturers</p>
            </div>
            <div className="portfolio-websites-projects-set-glow"></div>
          </Link>

          <Link
            to="/portfolio/websites/Happy_Gummies"
            className="portfolio-websites-projects-set"
          >
            <div className="portfolio-websites-projects-set-img">
              <img src={HappyGummies} />
            </div>
            <div className="portfolio-websites-projects-set-info">
              <section>
                <h3>Happy Gummies</h3>
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
              <p>Healthcare Products</p>
            </div>
            <div className="portfolio-websites-projects-set-glow"></div>
          </Link>
          <Link to="/" className="portfolio-websites-projects-set">
            <div className="portfolio-websites-projects-set-img">
              <img src={Koiostudio} />
            </div>
            <div className="portfolio-websites-projects-set-info">
              <section>
                <h3>Koiostudio</h3>
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
              <p>Automation Industry</p>
            </div>
            <div className="portfolio-websites-projects-set-glow"></div>
          </Link>
          <Link
            to="/portfolio/websites/Talankey"
            className="portfolio-websites-projects-set"
          >
            <div className="portfolio-websites-projects-set-img">
              <img src={Talankey} />
            </div>
            <div className="portfolio-websites-projects-set-info">
              <section>
                <h3>Talankey</h3>
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
              <p>Mechanical / Manufacturing Industry</p>
            </div>
            <div className="portfolio-websites-projects-set-glow"></div>
          </Link>
          <a
            href="https://www.koiosengg.com/"
            target="_blank"
            className="portfolio-websites-projects-set"
          >
            <div className="portfolio-websites-projects-set-img">
              <img src={KoiosEngineering} />
            </div>
            <div className="portfolio-websites-projects-set-info">
              <section>
                <h3>Koios Engineering</h3>
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
              <p>Mechanical / Manufacturing Industry</p>
            </div>
            <div className="portfolio-websites-projects-set-glow"></div>
          </a>
          <Link
            to="/portfolio/websites/Fourstor"
            className="portfolio-websites-projects-set"
          >
            <div className="portfolio-websites-projects-set-img">
              <img src={Fourstor} />
            </div>
            <div className="portfolio-websites-projects-set-info">
              <section>
                <h3>Fourstor</h3>
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
              <p>Automation Industry</p>
            </div>
            <div className="portfolio-websites-projects-set-glow"></div>
          </Link>
          <Link
            to="/portfolio/websites/Urban_Sphere"
            className="portfolio-websites-projects-set"
          >
            <div className="portfolio-websites-projects-set-img">
              <img src={UrbanSphere} />
            </div>
            <div className="portfolio-websites-projects-set-info">
              <section>
                <h3>Urban Sphere</h3>
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
              <p>Automotive Industry</p>
            </div>
            <div className="portfolio-websites-projects-set-glow"></div>
          </Link>
          <Link
            to="/portfolio/websites/Balaji_Proto_Tools"
            className="portfolio-websites-projects-set"
          >
            <div className="portfolio-websites-projects-set-img">
              <img src={BalajiProtoTools} />
            </div>
            <div className="portfolio-websites-projects-set-info">
              <section>
                <h3>Balaji Proto Tools</h3>
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
              <p>Automotive and Manufacturing Industry</p>
            </div>
            <div className="portfolio-websites-projects-set-glow"></div>
          </Link>
          <Link
            to="/portfolio/websites/MR_Industries"
            className="portfolio-websites-projects-set"
          >
            <div className="portfolio-websites-projects-set-img">
              <img src={MRIndustries} />
            </div>
            <div className="portfolio-websites-projects-set-info">
              <section>
                <h3>MR Industries</h3>
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
              <p>Automotive Wiring Harness Manufacturing Industry</p>
            </div>
            <div className="portfolio-websites-projects-set-glow"></div>
          </Link>
          <Link
            to="/portfolio/websites/Ameya"
            className="portfolio-websites-projects-set"
          >
            <div className="portfolio-websites-projects-set-img">
              <img src={Ameya} />
            </div>
            <div className="portfolio-websites-projects-set-info">
              <section>
                <h3>Ameya</h3>
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
              <p>Homestays and Hospitality</p>
            </div>
            <div className="portfolio-websites-projects-set-glow"></div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Projects;
