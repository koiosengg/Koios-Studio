import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./assets/Navbar/Navbar Logo.png";

function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [hasToggled, setHasToggled] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
    setHasToggled(true);
  };

  const handleLinkClick = () => {
    if (isMobileNavOpen) {
      setIsMobileNavOpen(false);
    }
  };
  return (
    <>
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
            <Link to="/web_development" className="s-nav-link-text">
              <p>Web Development </p>
            </Link>
          </div>
          <div className="s-nav-link-heading">
            <Link to="/app_development" className="s-nav-link-text">
              <p>App Development</p>
            </Link>
          </div>
          <div className="s-nav-link-heading">
            <Link to="/company_branding" className="s-nav-link-text">
              <p>Company Branding</p>
            </Link>
          </div>
          {/* <div className="s-nav-link-heading">
            <Link to="/blogs" className="s-nav-link-text">
              <p>Blogs</p>
            </Link>
          </div> */}
          <div className="s-contact-us">
            <Link to="/contact" className="s-nav-link-text">
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
        <div className="s-mobile-nav-button mobile" onClick={toggleMobileNav}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
          >
            <path
              d="M0.838287 0H18.8383V2.25H0.838287V0ZM0.838287 7.875H18.8383V10.125H0.838287V7.875ZM0.838287 15.75H18.8383V18H0.838287V15.75Z"
              fill="#B0B0B0"
            />
          </svg>
        </div>
      </div>
      <div
        className={` s-mobile-navbar mobileNavbar mobile ${
          isMobileNavOpen
            ? "activeMobileNavbar"
            : hasToggled
            ? "nonactiveMobileNavbar"
            : ""
        }`}
      >
        <div
          className="s-mobile-navbar-cancel-button"
          onClick={toggleMobileNav}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M11.589 1.5891L10.4107 0.410767L5.99987 4.8216L1.58904 0.410767L0.410706 1.5891L4.82154 5.99993L0.410706 10.4108L1.58904 11.5891L5.99987 7.17827L10.4107 11.5891L11.589 10.4108L7.17821 5.99993L11.589 1.5891Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="s-mobile-navlink-sets">
          <div className="s-mobile-navlink-set Engineering">
            <div className="s-mobile-navlink-heading">
              <Link
                to="/web_desgining"
                className="heading"
                onClick={toggleMobileNav}
              >
                Web Designing
              </Link>
            </div>
          </div>
          <div className="s-mobile-navlink-set Engineering">
            <div className="s-mobile-navlink-heading">
              <Link
                to="/web_development"
                className="heading"
                onClick={toggleMobileNav}
              >
                Web Development
              </Link>
            </div>
          </div>
          <div className="s-mobile-navlink-set Engineering">
            <div className="s-mobile-navlink-heading">
              <Link
                to="/app_development"
                className="heading"
                onClick={toggleMobileNav}
              >
                App Development
              </Link>
            </div>
          </div>
          <div className="s-mobile-navlink-set Engineering">
            <div className="s-mobile-navlink-heading">
              <Link
                to="/company_branding"
                className="heading"
                onClick={toggleMobileNav}
              >
                Company Branding
              </Link>
            </div>
          </div>
          {/* <div className="s-mobile-navlink-set Engineering">
            <div className="s-mobile-navlink-heading">
              <Link
                to="/blogs"
                className="heading"
                onClick={toggleMobileNav}
              >
                Blogs
              </Link>
            </div>
          </div> */}
        </div>
        <div className="s-mobile-navlink-contact-button">
          <Link to="/contact" onClick={toggleMobileNav}>
            Contact us
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
