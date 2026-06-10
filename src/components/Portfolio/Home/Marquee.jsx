import React from "react";
import MarqueeImg1 from "../assests/Home/Marquee/Marquee  (1).png";
import MarqueeImg2 from "../assests/Home/Marquee/Marquee  (2).png";
import MarqueeImg3 from "../assests/Home/Marquee/Marquee  (3).png";
import MarqueeImg4 from "../assests/Home/Marquee/Marquee  (4).png";
import MarqueeImg5 from "../assests/Home/Marquee/Marquee  (5).png";
import MarqueeImg6 from "../assests/Home/Marquee/Marquee  (6).png";
import MarqueeImg7 from "../assests/Home/Marquee/Marquee  (7).png";
import MarqueeImg8 from "../assests/Home/Marquee/Marquee  (8).png";
import MarqueeImg9 from "../assests/Home/Marquee/Marquee  (9).png";
import MarqueeImg10 from "../assests/Home/Marquee/Marquee  (10).png";
import MarqueeImg11 from "../assests/Home/Marquee/Marquee  (11).png";
import MarqueeImg12 from "../assests/Home/Marquee/Marquee  (12).png";
import MarqueeImg13 from "../assests/Home/Marquee/Marquee  (13).png";
import MarqueeImg14 from "../assests/Home/Marquee/Marquee  (14).png";
import MarqueeImg15 from "../assests/Home/Marquee/Marquee  (15).png";
import MarqueeImg16 from "../assests/Home/Marquee/Marquee  (16).png";
import MarqueeImg17 from "../assests/Home/Marquee/Marquee  (17).png";
import MarqueeImg18 from "../assests/Home/Marquee/Marquee  (18).png";
import MarqueeImg19 from "../assests/Home/Marquee/Marquee  (19).png";
import MarqueeImg20 from "../assests/Home/Marquee/Marquee  (20).png";

function Marquee() {
  const marqueeImages = [
    MarqueeImg1, MarqueeImg2, MarqueeImg3, MarqueeImg4, MarqueeImg5,
    MarqueeImg6, MarqueeImg7, MarqueeImg8, MarqueeImg9, MarqueeImg10,
    MarqueeImg11, MarqueeImg12, MarqueeImg13, MarqueeImg14, MarqueeImg15,
    MarqueeImg16, MarqueeImg17, MarqueeImg18, MarqueeImg19, MarqueeImg20
  ];

  return (
    <div className="portfolio-home-marquee">
      <div className="portfolio-home-marquee-container">
        <div className="portfolio-home-marquee-track">
          <div className="portfolio-home-marquee-slide">
            {marqueeImages.map((img, i) => (
              <img key={`slide1-${i}`} src={img} alt={`koiostudio client logo ${i + 1}`} />
            ))}
          </div>

          <div className="portfolio-home-marquee-slide">
            {marqueeImages.map((img, i) => (
              <img key={`slide2-${i}`} src={img} alt={`koiostudio client logo ${i + 1} duplicate`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Marquee;
