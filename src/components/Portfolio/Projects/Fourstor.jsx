import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Cover from "../assests/Projects/Fourstor/Cover.png";
import HeadingDesign from "../assests/Home/Section Heading Design.png";
import Img11 from "../assests/Projects/Fourstor/Image 1.1.png";
import Img12 from "../assests/Projects/Fourstor/Image 1.2.png";
import Img13 from "../assests/Projects/Fourstor/Image 1.3.png";
import Img14 from "../assests/Projects/Fourstor/Image 1.4.png";
import Img21 from "../assests/Projects/Fourstor/Image 2.1.png";
import Img22 from "../assests/Projects/Fourstor/Image 2.2.png";
import Img23 from "../assests/Projects/Fourstor/Image 2.3.png";
import Img24 from "../assests/Projects/Fourstor/Image 2.4.png";
import Projects from "../Websites/Projects";
import Footer from "../Footer";

function Fourstor() {
  const [isOnBanner, setIsOnBanner] = useState(true);

  const handleScroll = () => {
    const bannerHeight = document.getElementById("banner").offsetHeight;
    if (window.scrollY < bannerHeight) {
      setIsOnBanner(true);
    } else {
      setIsOnBanner(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="portfolio portfolio-projects">
      <div className="portfolio-projects-banner" id="banner">
        <Navbar />
        <div className="portfolio-home-banner-container">
          <section>
            <h2>Website</h2>
            <h1>
              <span>Fourstor </span>
            </h1>
            <p>Automation Industry</p>
          </section>
          <a
            href="https://fourstor.in/"
            target="_blank"
            className="portfolio-primary-button"
          >
            <div className="portfolio-primary-button-background"></div>
            <p>Visit Website </p>
          </a>
        </div>
      </div>
      <Sidebar isOnBanner={isOnBanner} />
      <div className="portfolio-projects-cover">
        <img src={Cover} alt="Fourstor Cover" />
      </div>
      <div className="portfolio-projects-info-container">
        <div className="portfolio-section-heading">
          <img src={HeadingDesign} className="portfolio-section-heading-img" />
          <h2>
            <span>Design </span>
            Secrets
          </h2>
        </div>
        <div className="portfolio-projects-info">
          <div className="portfolio-projects-info-set">
            <h2>Overview</h2>
            <p>
              A professional website for a company specializing in a wide range
              of industrial services. The goal was to create a clean, functional
              interface that communicates the company’s capabilities. Emphasis
              was placed on usability and showcasing service diversity through
              structured layouts.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Challenges</h2>
            <p>
              Working with multiple colors in soft tones was a challenging task.
              It required careful balancing to maintain visual harmony without
              overwhelming the design.Achieving this subtle yet vibrant look
              took precision and thoughtful experimentation.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Approach</h2>
            <p>
              Segmented the content to create a clear and organized layout,
              enhancing readability and flow.Consistent styles were applied
              across typography, icons, and spacing to maintain a cohesive
              look.It also reinforced the brand’s identity through uniform
              visual language.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Results</h2>
            <p>
              Enhanced flow and visibility across all service categories by
              using soft tones and a minimal design approach.This ensured each
              section stood out clearly. The layout guides users smoothly
              without overwhelming them, keeping the focus on the content.
            </p>
          </div>
        </div>
      </div>
      <div className="portfolio-projects-info-container">
        <div className="portfolio-section-heading">
          <img src={HeadingDesign} className="portfolio-section-heading-img" />
          <h2>
            <span>Development </span>
            Strategies
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Libero platea turpis dictum
            auctor. Diam volutpat dictum tincidunt vestibulum. Enim elementum
            dignissim eget faucibus amet massa faucibus elit. Volutpat turpis
            tortor purus nisl et tincidunt ultrices feugiat. Morbi quam enim sit
            proin enim id. Quam habitant eu suspendisse sit faucibus bibendum
            viverra tincidunt. Sed scelerisque orci ultrices volutpat fusce
            ipsum ultricies lorem habitant. Quam lacus vitae feugiat vitae vitae
            nisl quam tincidunt rhoncus.
          </p>
        </div>
      </div>

      <div className="portfolio-projects-gallery">
        <div className="portfolio-section-heading">
          <img src={HeadingDesign} className="portfolio-section-heading-img" />
          <h2>Wireframes</h2>
        </div>
        <div className="portfolio-projects-gallery-container">
          <section>
            <img src={Img11} alt="Fourstor Project Image" />
            <img src={Img12} alt="Fourstor Project Image" />
            <img src={Img13} alt="Fourstor Project Image" />
            <img src={Img14} alt="Fourstor Project Image" />
          </section>
          <section>
            <img src={Img21} alt="Fourstor Project Image" />
            <img src={Img22} alt="Fourstor Project Image" />
            <img src={Img23} alt="Fourstor Project Image" />
            <img src={Img24} alt="Fourstor Project Image" />
          </section>
        </div>
      </div>
      <Projects />
      <Footer />
    </div>
  );
}

export default Fourstor;
