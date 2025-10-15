import React from "react";
import Img1 from "../../assests/Branding/Mission/Flyers/Img 1.png";
import Img2 from "../../assests/Branding/Mission/Flyers/Img 2.png";
import Img3 from "../../assests/Branding/Mission/Flyers/Img 3.png";
import Img4 from "../../assests/Branding/Mission/Flyers/Img 4.png";

function Flyers() {
  return (
    <div className="portfolio-branding-mission-flyers">
      <img src={Img1} />
      <img src={Img2} />
      <img src={Img3} />
      <img src={Img4} />
    </div>
  );
}

export default Flyers;
