import React from "react";
import { Link } from "react-router-dom";

function Sidebar({ isOnBanner }) {
  return (
    <div className={`portfolio-sidebar ${isOnBanner ? "hidden" : ""}`}>
      <div className="portfolio-sidebar-container">
        <nav>
          <section>
            <Link to="/portfolio/design">Design</Link>
            <span></span>
            <Link to="/portfolio/development">Development</Link>
            <span></span>
            <Link to="/portfolio/branding">Branding</Link>
          </section>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
