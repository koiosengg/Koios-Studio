import React from "react";
import { Link } from "react-router-dom";
import Logo from "./assets/Navbar/Navbar Logo.png";

function Navbar() {
  return (
    <div className="s-navbar">
      <Link to="/" className="s-logo-container">
        <img src={Logo} />
      </Link>
      <div className="s-nav-link">
        <div className="s-nav-link-heading">
          <Link to="/web_desgining" className="s-nav-link-text">
            <p>Web Designing</p>
          </Link>
        </div>
        <div className="s-nav-link-heading">
          <Link href="./3Dscan.html" className="s-nav-link-text">
            <p>Web Development </p>
          </Link>
        </div>
        <div className="s-nav-link-heading">
          <Link href="./3Dscan.html" className="s-nav-link-text">
            <p>Mobile Application</p>
          </Link>
        </div>
        <div className="s-nav-link-heading">
          <Link href="./aboutus.html" className="s-nav-link-text">
            <p>Company Branding</p>
          </Link>
        </div>
        <div className="s-contact-us">
          <Link href="./contact.html" className="s-nav-link-text">
            <p>Contact Us</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="7"
              height="12"
              viewBox="0 0 7 12"
              fill="none"
            >
              <path
                d="M2.00921 11.5892L0.833374 10.4108L5.24087 5.99999L0.833374 1.58916L2.01254 0.410828L6.4167 4.82166C6.72915 5.13421 6.90468 5.55805 6.90468 5.99999C6.90468 6.44193 6.72915 6.86578 6.4167 7.17833L2.00921 11.5892Z"
                fill="#1A1A1A"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
