import React from "react";
import { Link } from "react-router-dom";
import Logo from "./assets/Footer My Link Logo.png";

function TKSfooter() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="virtual-card-footer">
      <div className="virtual-card-footer-container">
        <section>
          <Link to="/">
            <img src={Logo} alt="Koios Studio Logo" />
          </Link>
          <div className="virtual-card-footer-link-container">
            <a href="#">Privacy Policy</a>
            <span></span>
            <a href="#">T&C</a>
          </div>
        </section>
        <div className="virtual-card-footer-line"></div>
        <section>
          <p>© {currentYear} Reserved </p>
          <span>
            Crafted by <Link to="/">Koios Studio</Link>
          </span>
        </section>
      </div>
    </div>
  );
}

export default TKSfooter;
