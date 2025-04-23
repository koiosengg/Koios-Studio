import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="portfolio-navbar">
      <Link to="/portfolio" className="portfolio-navbar-logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="33"
          viewBox="0 0 40 33"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.6447 32.1045C18.8223 32.3527 19.1087 32.5 19.4139 32.5H27.7948C28.5739 32.5 29.0187 31.6108 28.5516 30.9873L17.7661 16.5935C17.5132 16.256 17.5144 15.7918 17.769 15.4555L27.9465 2.01652C28.4181 1.3937 27.9739 0.5 27.1926 0.5H19.321C19.017 0.5 18.7315 0.646196 18.5538 0.892893L10.6093 11.9209C10.0727 12.6657 8.89643 12.2861 8.89643 11.3681V1.44563C8.89643 0.923371 8.47306 0.5 7.9508 0.5H0.945624C0.42337 0.5 0 0.923372 0 1.44563V11.4398C1.09249 9.70524 1.7704 7.36247 2.20282 4.13116C3.17574 12.6156 6.01046 15.1616 14.4799 16.4083C5.24812 17.5877 3.13336 20.743 2.20282 28.6213C1.67086 25.4599 1.01442 23.1061 0 21.347V31.5544C0 32.0766 0.423371 32.5 0.945624 32.5H7.9508C8.47306 32.5 8.89643 32.0766 8.89643 31.5544V21.4222C8.89643 20.5025 10.0762 20.124 10.6112 20.8721L18.6447 32.1045Z"
            fill="#FFBF00"
          />
          <ellipse
            cx="34.9879"
            cy="27.515"
            rx="4.72812"
            ry="4.72813"
            fill="#FFBF00"
          />
        </svg>
      </Link>

      <nav>
        <Link to="/portfolio/websites">Websites</Link>
        <span></span>
        <Link to="/portfolio/website">Application</Link>
        <span></span>
        <Link to="/portfolio/website">Branding</Link>
      </nav>
    </div>
  );
}

export default Navbar;
