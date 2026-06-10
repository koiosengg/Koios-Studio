import React from "react";
import DesktopBackground from "./assests/Desktop Footer.png";
import MobileBackground from "./assests/Mobile Footer.png";
import Logo from "./assests/Koios Stuidos Logo.png";

function Footer() {
  return (
    <div className="portfolio-footer" id="footer">
      <img
        src={DesktopBackground}
        alt="koiostudio footer desktop background"
        className="portfolio-footer-background notMobile"
      />
      <img
        src={MobileBackground}
        alt="koiostudio footer mobile background"
        className="portfolio-footer-background mobile"
      />
      <div className="portfolio-footer-top">
        <h2>Collaborate with us</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Enter your email"
            aria-label="Enter your email to get connected with koiostudio"
          />
          <button type="submit" aria-label="Subscribe to koiostudio newsletter">Get Connected</button>
        </form>
      </div>
      <div className="portfolio-footer-bottom">
        <p>© 2025 koiostudio. All rights reserved.</p>
        <img src={Logo} alt="koiostudio Logo" />
        <section>
          <a href="#" aria-label="Terms of Service">Terms of Service</a>
          <a href="#" aria-label="Privacy Policy"> Privacy Policy</a>
        </section>
      </div>
    </div>
  );
}

export default Footer;
