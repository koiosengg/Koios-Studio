import React from "react";
import DesktopFrame from "../assets/Home/Marquee/Desktop Frame.png";
import Img1 from "../assets/Home/Marquee/Img 1.png";
import Img2 from "../assets/Home/Marquee/Img 2.png";
import Img3 from "../assets/Home/Marquee/Img 3.png";
import Img4 from "../assets/Home/Marquee/Img 4.png";
import Img5 from "../assets/Home/Marquee/Img 5.png";
import Img6 from "../assets/Home/Marquee/Img 6.png";

function Marquee() {
  return (
    <div className="s-horizontal-marquee">
      <div className="s-horizontal-marquee-container">
        <img src={DesktopFrame} className="s-horizontal-marquee-frame" />
        <div className="s-horizontal-marquee-wrapper">
          <div className="s-horizontal-marquee-marquee">
            <img src={Img1} />
            <img src={Img2} />
            <img src={Img3} />
            <img src={Img4} />
            <img src={Img5} />
            <img src={Img6} />
            <img src={Img1} />
            <img src={Img2} />
            <img src={Img3} />
            <img src={Img4} />
            <img src={Img5} />
            <img src={Img6} />
          </div>
        </div>
      </div>
      <div className="s-horizontal-marquee-background"></div>
      <div className="s-horizontal-marquee-info">
        <section>
          <h2>Our Work Speaks for Itself!</h2>
          <p>
            Explore the projects we've crafted with precision, passion, and
            purpose. Dive into our portfolio to see how we turn ideas into
            engaging experiences.
          </p>
        </section>
        <div className="p-mail-button">
          <p>Explore Now</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
          >
            <path
              d="M1.81139 13.707L0.400391 12.293L5.68938 6.99997L0.400391 1.70697L1.81539 0.292969L7.10038 5.58597C7.47532 5.96102 7.68595 6.46964 7.68595 6.99997C7.68595 7.5303 7.47532 8.03891 7.10038 8.41397L1.81139 13.707Z"
              fill="#FFBF00"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Marquee;
