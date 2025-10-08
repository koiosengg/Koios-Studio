import React from "react";
import DesktopBackground from "../assets/Banner/Desktop Background.png";

function Banner() {
  return (
    <section className="blogs-banner">
      <img
        src={DesktopBackground}
        alt="Blogs Banner Background"
        className="blogs-banner-background"
      ></img>
      <div className="blogs-banner-text">
        <h1>Blog</h1>
        <p>
          Welcome to a world where we blend design thinking, a solution-driven
          approach, and a quest for perfection and make your goals become our
          mission.
        </p>
      </div>
    </section>
  );
}

export default Banner;
