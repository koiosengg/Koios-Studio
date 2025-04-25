import React from "react";
import { Link } from "react-router-dom";

function Sidebar({ isOnBanner }) {
  return (
    <div className={`portfolio-sidebar ${!isOnBanner ? "visible" : ""}`}>
      <div className="portfolio-sidebar-container">
        <nav>
          <section>
            <Link to="/portfolio/websites">Websites</Link>
            <span></span>
            <Link to="/portfolio/application">Application</Link>
            <span></span>
            <Link to="/portfolio/branding">Branding</Link>
          </section>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
