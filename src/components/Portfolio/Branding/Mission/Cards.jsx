import React from "react";
import GCS from "../../assests/Branding/Mission/Cards/GCS.png";
import Rudrappa from "../../assests/Branding/Mission/Cards/Rudrappa.png";
import Innocrate from "../../assests/Branding/Mission/Cards/Innocrate.png";
import Prakash from "../../assests/Branding/Mission/Cards/Prakash.png";
import Hamora from "../../assests/Branding/Mission/Cards/Hamora.png";

function Cards() {
  return (
    <div className="portfolio-branding-mission-cards">
      <img src={GCS} />
      <img src={Rudrappa} />
      <img src={Innocrate} />
      <img src={Prakash} />
      <img src={Hamora} />
      <img src={Innocrate} />
      <img src={Prakash} />
      <img src={Hamora} />
    </div>
  );
}

export default Cards;
