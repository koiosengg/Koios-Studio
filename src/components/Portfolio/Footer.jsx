import React from "react";
import DesktopBackground from "./assests/Desktop Footer.png";
import MobileBackground from "./assests/Mobile Footer.png";
import Logo from "./assests/Koios Stuidos Logo.png";

function Footer() {
  return (
    <div className="portfolio-footer" id="footer">
      <img
        src={DesktopBackground}
        className="portfolio-footer-background notMobile"
      />
      <img
        src={MobileBackground}
        className="portfolio-footer-background mobile"
      />
      <div className="portfolio-footer-top">
        <h2>Collaborate with us</h2>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Get Connected</button>
        </form>
      </div>
      <div className="portfolio-footer-bottom">
        <p>© 2025 Koiostudio. All rights reserved.</p>
        <img src={Logo} />
        <section>
          <a href="#">Terms of Service</a>
          <a href="#"> Privacy Policy</a>
        </section>
      </div>
    </div>
  );
}

export default Footer;
