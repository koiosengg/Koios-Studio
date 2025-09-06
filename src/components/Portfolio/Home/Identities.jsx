import React from "react";
import { Link } from "react-router-dom";
import HeadingDesign from "../assests/Home/Section Heading Design.png";
import DigtialIdentities1 from "../assests/Home/Digtial Identities 1.png";
import DigtialIdentities2 from "../assests/Home/Digtial Identities 2.png";
import DigtialIdentities3 from "../assests/Home/Digtial Identities 3.png";
import DigtialIdentities4 from "../assests/Home/Digtial Identities 4.png";
import DigtialIdentities5 from "../assests/Home/Digtial Identities 5.png";

function Identities() {
  return (
    <div className="portfolio-home-identities">
      <div className="portfolio-home-identities-heading">
        <div className="portfolio-section-heading">
          <img src={HeadingDesign} className="portfolio-section-heading-img" />
          <h2>
            Designing <span>Digital Identities </span>
            that Stand out
          </h2>
          <p>
            Creating digital identities that capture attention and leave a
            lasting impression, each design reflects the unique personality of
            the brand while connecting meaningfully with its audience.
          </p>
        </div>
        <Link to="/portfolio/branding" className="portfolio-secondary-button">
          <p>View All</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M13.47 9.02985C13.3375 8.88767 13.2654 8.69963 13.2688 8.50532C13.2723 8.31102 13.351 8.12564 13.4884 7.98822C13.6258 7.85081 13.8112 7.7721 14.0055 7.76867C14.1998 7.76524 14.3878 7.83737 14.53 7.96985L18.53 11.9698C18.6705 12.1105 18.7493 12.3011 18.7493 12.4998C18.7493 12.6986 18.6705 12.8892 18.53 13.0298L14.53 17.0298C14.4613 17.1035 14.3785 17.1626 14.2865 17.2036C14.1945 17.2446 14.0952 17.2667 13.9945 17.2684C13.8938 17.2702 13.7938 17.2517 13.7004 17.214C13.607 17.1762 13.5222 17.1201 13.451 17.0489C13.3797 16.9777 13.3236 16.8928 13.2859 16.7994C13.2482 16.7061 13.2296 16.606 13.2314 16.5053C13.2332 16.4046 13.2552 16.3053 13.2962 16.2133C13.3372 16.1213 13.3963 16.0385 13.47 15.9698L16.19 13.2498H6.5C6.30109 13.2498 6.11032 13.1708 5.96967 13.0302C5.82902 12.8895 5.75 12.6988 5.75 12.4998C5.75 12.3009 5.82902 12.1102 5.96967 11.9695C6.11032 11.8289 6.30109 11.7498 6.5 11.7498H16.19L13.47 9.02985Z"
              fill="white"
            />
          </svg>
        </Link>
      </div>
      <div className="portfolio-home-identities-container">
        <div className="portfolio-home-view-projects-wrapper">
          <div className="portfolio-home-view-projects-marquee">
            <img src={DigtialIdentities1} />
            <img src={DigtialIdentities2} />
            <img src={DigtialIdentities3} />
            <img src={DigtialIdentities4} />
            <img src={DigtialIdentities5} />
            <img src={DigtialIdentities1} />
            <img src={DigtialIdentities2} />
            <img src={DigtialIdentities3} />
            <img src={DigtialIdentities4} />
            <img src={DigtialIdentities5} />
            <img src={DigtialIdentities1} />
            <img src={DigtialIdentities2} />
            <img src={DigtialIdentities3} />
            <img src={DigtialIdentities4} />
            <img src={DigtialIdentities5} />
            <img src={DigtialIdentities1} />
            <img src={DigtialIdentities2} />
            <img src={DigtialIdentities3} />
            <img src={DigtialIdentities4} />
            <img src={DigtialIdentities5} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Identities;
