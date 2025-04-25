import React from "react";
import Img1 from "../../assests/Branding/Mission/Slides/Img 1.png";
import Img2 from "../../assests/Branding/Mission/Slides/Img 2.png";
import Img3 from "../../assests/Branding/Mission/Slides/Img 3.png";
import Img4 from "../../assests/Branding/Mission/Slides/Img 4.png";
import Img5 from "../../assests/Branding/Mission/Slides/Img 5.png";

function Slides() {
  return (
    <div className="portfolio-branding-mission-slides">
      <img src={Img1} />
      <img src={Img2} />
      <img src={Img3} />
      <img src={Img4} />
      <img src={Img5} />
    </div>
  );
}

export default Slides;
