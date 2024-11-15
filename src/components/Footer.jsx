import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import FooterLogo from "/KoiosEngineeringLogo.svg";
import InstagramIcon from "./Footer/InstagramIcon";
import LinkedinIcon from "./Footer/LinkedinIcon";
import FooterStar from "./Footer/FooterStar";
import FooterBottomBackground from "../assets/Footer/Footer Bottom Background.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  const bigLogoRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.8 }
    );

    if (bigLogoRef.current) {
      observer.observe(bigLogoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer>
      <div className="footer-top">
        <div className="footer-logo">
          <img src={FooterLogo} alt="Koios Software Solutions Logo" />
          <span>Koios Software Solutions</span>
        </div>
        <nav>
          <section aria-label="Design and Development Links">
            <Link to="/designing">Designing</Link>
            <Link to="/development">Development</Link>
            <Link to="/branding">Company Branding</Link>
          </section>
          <section aria-label="Company Information Links">
            <Link to="/about">About Us</Link>
            <Link to="/careers">Careers</Link>
          </section>
        </nav>
        <div className="footer-line"></div>
        <div className="footer-end">
          <p>© {currentYear} All rights reserved.</p>
          <div className="footer-social">
            <a
              href="https://www.instagram.com"
              target="_blank"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              aria-label="LinkedIn"
            >
              <LinkedinIcon />
            </a>
          </div>
          <div className="footer-end-links">
            <a href="">Privacy Policy</a>|<a href="">Terms of Service</a>
          </div>
        </div>
      </div>
      <div
        className={`footer-bottom ${isInView ? "footer-bottom-in-view" : ""}`}
        ref={bigLogoRef}
      >
        {" "}
        <img src={FooterBottomBackground} />
        <div className="footer-bottom-container">
          <FooterStar />
          <p>THE KOIOS STUDIO</p>
          <span>THE KOIOS STUDIO</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
