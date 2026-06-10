import React from "react";
import { Link } from "react-router-dom";

function Sidebar({ isOnBanner }) {
  return (
    <div className={`portfolio-sidebar ${!isOnBanner ? "visible" : ""}`}>
      <div className="portfolio-sidebar-container">
        <nav>
          <section>
            <Link to="/portfolio/websites" aria-label="View koiostudio portfolio websites">Websites</Link>
            <span></span>
            <Link to="/portfolio/applications" aria-label="View koiostudio portfolio applications">Applications</Link>
            <span></span>
            <Link to="/portfolio/branding" aria-label="View koiostudio portfolio branding">Branding</Link>
          </section>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
