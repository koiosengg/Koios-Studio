import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Cover from "../assests/Projects/Airportr/Cover.png";
import HeadingDesign from "../assests/Home/Section Heading Design.png";
import Img11 from "../assests/Projects/Airportr/Image 1.1.png";
import Img12 from "../assests/Projects/Airportr/Image 1.2.png";
import Img13 from "../assests/Projects/Airportr/Image 1.3.png";
import Img21 from "../assests/Projects/Airportr/Image 2.1.png";
import Img22 from "../assests/Projects/Airportr/Image 2.2.png";
import Img23 from "../assests/Projects/Airportr/Image 2.3.png";
import Img31 from "../assests/Projects/Airportr/Image 3.1.png";
import Img32 from "../assests/Projects/Airportr/Image 3.2.png";
import Img33 from "../assests/Projects/Airportr/Image 3.3.png";
import Img41 from "../assests/Projects/Airportr/Image 4.1.png";
import Img42 from "../assests/Projects/Airportr/Image 4.2.png";
import Img43 from "../assests/Projects/Airportr/Image 4.3.png";
import Projects from "../Applications/Projects";
import Footer from "../Footer";

function Airportr() {
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
            <h2>Application</h2>
            <h1>
              <span>Airportr </span>
            </h1>
            <p>Goods Tracking App</p>
          </section>
          <a className="portfolio-primary-button">
            <div className="portfolio-primary-button-background"></div>
            <p>Visit Website </p>
          </a>
        </div>
      </div>
      <Sidebar isOnBanner={isOnBanner} />
      <div className="portfolio-projects-cover">
        <img src={Cover} alt="Airportr Cover" />
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
              Focuses on a vehicle booking app tailored for farmers, enabling
              easy rental of JCBs and tractors. The design ensures a simple,
              user-friendly experience, allowing quick access to available
              machinery. It bridges the gap between equipment owners and farmers
              in need, streamlining the booking process.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Challenges</h2>
            <p>
              One of the key challenges was conducting user research for a
              unique app with limited existing references. Identifying user
              flows without much prior data made it difficult to validate
              decisions. Tracking user behavior and needs required extra effort
              and creative approaches.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Approach</h2>
            <p>
              Analyzed the user flow of Ola and Uber to gain a deeper
              understanding of ride-booking app structures. This helped identify
              key UX patterns and best practices. Insights were used to enhance
              the usability and flow of the app.
            </p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Results</h2>
            <p>
              Crafted a user-friendly interface tailored for first-time users.
              Focused on simplicity and inclusivity to ensure a smooth
              onboarding experience. The design enhances accessibility while
              maintaining a visually appealing layout.
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
            <img src={Img11} alt="Airportr Project Image" />
            <img src={Img12} alt="Airportr Project Image" />
            <img src={Img13} alt="Airportr Project Image" />
          </section>
          <section>
            <img src={Img21} alt="Airportr Project Image" />
            <img src={Img22} alt="Airportr Project Image" />
            <img src={Img23} alt="Airportr Project Image" />
          </section>
          <section>
            <img src={Img31} alt="Airportr Project Image" />
            <img src={Img32} alt="Airportr Project Image" />
            <img src={Img33} alt="Airportr Project Image" />
          </section>
          <section>
            <img src={Img41} alt="Airportr Project Image" />
            <img src={Img42} alt="Airportr Project Image" />
            <img src={Img43} alt="Airportr Project Image" />
          </section>
        </div>
      </div>
      <Projects />
      <Footer />
    </div>
  );
}

export default Airportr;
