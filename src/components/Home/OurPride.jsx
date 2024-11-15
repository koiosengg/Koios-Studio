import React from "react";
import LML from "../../assets/Home/Our Pride/LML Logo.svg";
import SEG from "../../assets/Home/Our Pride/SEG Logo.svg";
import ISK from "../../assets/Home/Our Pride/ISK Logo.png";
import Engginno from "../../assets/Home/Our Pride/Engginno Logo.png";
import Staidrich from "../../assets/Home/Our Pride/Staidrich Logo.png";

function OurPride() {
  return (
    <div className="home-our-pride">
      <div className="section-heading">
        <h2>Our Pride</h2>
        <p>
          Our Works & <br /> Collaborations
        </p>
      </div>
      <div className="home-our-pride-container">
        <div className="contact-info-set">
          <div className="contact-info-set-div">
            <img src={LML} alt="LML Company Logo" />
          </div>
        </div>
        <div className="contact-info-set">
          <div className="contact-info-set-div">
            <img src={SEG} alt="LML Company Logo" />
          </div>
        </div>
        <div className="contact-info-set">
          <div className="contact-info-set-div">
            <img src={ISK} alt="LML Company Logo" />
          </div>
        </div>
        <div className="contact-info-set">
          <div className="contact-info-set-div">
            <img src={Engginno} alt="LML Company Logo" />
          </div>
        </div>
        <div className="contact-info-set">
          <div className="contact-info-set-div">
            <img src={Staidrich} alt="LML Company Logo" />
          </div>
        </div>
        <div className="contact-info-set">
          <div className="contact-info-set-div">
            <img src={LML} alt="LML Company Logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurPride;
