import React from "react";
import Img1 from "../../assests/Branding/Mission/Brochure/Img 1.png";
import Img2 from "../../assests/Branding/Mission/Brochure/Img 2.png";
import Img3 from "../../assests/Branding/Mission/Brochure/Img 3.png";
import Img4 from "../../assests/Branding/Mission/Brochure/Img 4.png";

function Brochure() {
  return (
    <div className="portfolio-branding-mission-brochure">
      <img src={Img1} />
      <img src={Img2} />
      <img src={Img3} />
      <img src={Img4} />
    </div>
  );
}

export default Brochure;
