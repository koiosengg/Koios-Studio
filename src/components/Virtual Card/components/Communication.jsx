import React from "react";
import CallIcon from "../assets/Call Icon.png";
import EmailIcon from "../assets/Email Icon.png";
import DesktopStar from "../assets/TKS Desktop Star.png";

function Communication() {
  return (
    <div className="virtual-card-communication">
      <section>
        <img src={CallIcon} />
        <p>+91819101910</p>
      </section>
      <section>
        <img src={EmailIcon} />
        <p>you@company.com</p>
      </section>
      <img className="star" src={DesktopStar} />
    </div>
  );
}

export default Communication;
