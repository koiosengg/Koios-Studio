import React from "react";
import DesktopBackground from "../assets/TKS Desktop Experience.png";

function Experience() {
  return (
    <div className="virtual-card-experience">
      <img
        src={DesktopBackground}
        className="virtual-card-experienc-background"
      />
      <h2>Work Experience</h2>
      <div className="virtual-card-experience-container">
        <div className="virtual-card-experience-set">
          <h3>User Experience Designer</h3>
          <section>
            <h4>Microsoft </h4>
            <p>2023 - Present</p>
          </section>
        </div>
        <div className="virtual-card-experience-set">
          <h3>User Research</h3>
          <section>
            <h4>Microsoft </h4>
            <p>2023 - Present</p>
          </section>
        </div>
        <div className="virtual-card-experience-set">
          <h3>UI Designer</h3>
          <section>
            <h4>Microsoft </h4>
            <p>2023 - Present</p>
          </section>
        </div>
        <div className="virtual-card-experience-set">
          <h3>Intern Designer</h3>
          <section>
            <h4>Microsoft </h4>
            <p>2023 - Present</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Experience;
