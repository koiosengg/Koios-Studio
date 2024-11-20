import React from "react";
import { Link } from "react-router-dom";
import NavbarLogo from "/NavbarLogo.png";
import ArrowIcon from "./Buttons/ArrowIcon";

function Navbar() {
  return (
    <header>
      <Link to="/">
        <img src={NavbarLogo} alt="Koios Studio Navbar Logo" />
      </Link>
      <nav>
        <div className="nav-links">
          <Link to="/designing">Designing</Link>
          <Link to="/development">Development</Link>
          <Link to="/branding">Branding</Link>
          {/* <Link to="/projects">Projects</Link> */}
          <Link to="/about">About Us</Link>
        </div>
        <Link to="/contact" className="white-button">
          <span>Contact Us </span>
          <ArrowIcon />
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
