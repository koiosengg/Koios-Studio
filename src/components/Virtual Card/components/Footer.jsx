import React from "react";

import Logo from "../assets/Footer Company Logo.png";

function Footer() {
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

export default Footer;
