import React from "react";
import Logo from "../assets/Footer Company Logo.png";
import DesktopBackround from "../assets/TKS Desktop Banner.png";
import Verified from "../assets/Verified.png";
import MahiRastogi from "../assets/Mahi Rastogi.jpg";
import MarqueeStar from "../assets/Marquee Star.png";

function Banner() {
  return (
    <div className="virtual-card-banner">
      <img src={DesktopBackround} className="virtual-card-banner-background" />
      <div className="virtual-card-banner-container">
        <div className="virtual-card-banner-left">
          <div className="virtual-card-banner-left-text">
            <section>
              <img src={Logo} alt="Koios Studios Logo" />
              <h1>
                Mahi Rastogi <img src={Verified} />
              </h1>
              <div className="virtual-card-banner-designation">
                <span> Product Managar</span>
              </div>
            </section>
            <p>
              Lorem ipsum dolor sit amet consectetur. Lectus cursus platea
              lobortis id. Sit nibh ullamcorper in libero.
            </p>
          </div>
          <a href="#" className="virtual-card-white-button">
            <p>View Portfolio</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
            >
              <path
                d="M1.81111 13.707L0.400116 12.293L5.68911 6.99998L0.400116 1.70698L1.81511 0.292976L7.1001 5.58598C7.47505 5.96103 7.68568 6.46965 7.68568 6.99998C7.68568 7.5303 7.47505 8.03892 7.1001 8.41397L1.81111 13.707Z"
                fill="#121212"
              />
            </svg>
          </a>
        </div>
        <div className="virtual-card-banner-right">
          <img src={MahiRastogi} />
          <div className="virtual-card-banner-marquee white">
            <div className="virtual-card-banner-marquee-wrapper ">
              <div className="virtual-card-banner-marquee-marquee">
                <p>Website Design</p>
                <img src={MarqueeStar} />
                <p>App Design</p>
                <img src={MarqueeStar} />
                <p>Responsive Design</p>
                <img src={MarqueeStar} />
                <p>Wireframes</p>
                <img src={MarqueeStar} />
                <p>User Research</p>
                <img src={MarqueeStar} />
                <p>User Experience</p>
                <img src={MarqueeStar} />
                <p>User Interface</p>
                <img src={MarqueeStar} />
                <p>Design Thinking</p>
                <img src={MarqueeStar} />
                <p>Typography</p>
                <img src={MarqueeStar} />
                <p>Website Design</p>
                <img src={MarqueeStar} />
                <p>App Design</p>
                <img src={MarqueeStar} />
                <p>Responsive Design</p>
                <img src={MarqueeStar} />
                <p>Wireframes</p>
                <img src={MarqueeStar} />
                <p>User Research</p>
                <img src={MarqueeStar} />
                <p>User Experience</p>
                <img src={MarqueeStar} />
                <p>User Interface</p>
                <img src={MarqueeStar} />
                <p>Design Thinking</p>
                <img src={MarqueeStar} />
                <p>Typography</p>
                <img src={MarqueeStar} />
              </div>
            </div>
          </div>
          <div className="virtual-card-banner-marquee yellow">
            <div className="virtual-card-banner-marquee-wrapper ">
              <div className="virtual-card-banner-marquee-marquee">
                <p>Website Design</p>
                <img src={MarqueeStar} />
                <p>App Design</p>
                <img src={MarqueeStar} />
                <p>Responsive Design</p>
                <img src={MarqueeStar} />
                <p>Wireframes</p>
                <img src={MarqueeStar} />
                <p>User Research</p>
                <img src={MarqueeStar} />
                <p>User Experience</p>
                <img src={MarqueeStar} />
                <p>User Interface</p>
                <img src={MarqueeStar} />
                <p>Design Thinking</p>
                <img src={MarqueeStar} />
                <p>Typography</p>
                <img src={MarqueeStar} />
                <p>Website Design</p>
                <img src={MarqueeStar} />
                <p>App Design</p>
                <img src={MarqueeStar} />
                <p>Responsive Design</p>
                <img src={MarqueeStar} />
                <p>Wireframes</p>
                <img src={MarqueeStar} />
                <p>User Research</p>
                <img src={MarqueeStar} />
                <p>User Experience</p>
                <img src={MarqueeStar} />
                <p>User Interface</p>
                <img src={MarqueeStar} />
                <p>Design Thinking</p>
                <img src={MarqueeStar} />
                <p>Typography</p>
                <img src={MarqueeStar} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
