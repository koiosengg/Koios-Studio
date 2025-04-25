import React from "react";
import TMS from "../../assests/Branding/Mission/Logos/TMS.png";
import Muthukamalam from "../../assests/Branding/Mission/Logos/Muthukamalam.png";
import NEstructures from "../../assests/Branding/Mission/Logos/NEstructures.png";
import Malgudi from "../../assests/Branding/Mission/Logos/Malgudi.png";
import KoiosStudios from "../../assests/Branding/Mission/Logos/KoiosStudios.png";
import PrimaEQ from "../../assests/Branding/Mission/Logos/PrimaEQ.png";
import XLR8 from "../../assests/Branding/Mission/Logos/XLR8.png";
import GreenwayMobility from "../../assests/Branding/Mission/Logos/GreenwayMobility.png";
import Jukebox from "../../assests/Branding/Mission/Logos/Jukebox.png";
import ClikenCave from "../../assests/Branding/Mission/Logos/ClikenCave.png";
import Emply from "../../assests/Branding/Mission/Logos/Emply.png";
import AllOkay from "../../assests/Branding/Mission/Logos/AllOkay.png";
import GCS from "../../assests/Branding/Mission/Logos/GCS.png";
import KES from "../../assests/Branding/Mission/Logos/KES.png";
import Hamora from "../../assests/Branding/Mission/Logos/Hamora.png";

function Logos() {
  return (
    <div className="portfolio-branding-mission-logos">
      <div className="portfolio-branding-mission-logos-columns">
        <img src={TMS} />
        <img src={Muthukamalam} />
        <img src={NEstructures} />
        <img src={Malgudi} />
      </div>
      <div className="portfolio-branding-mission-logos-columns">
        <img src={KoiosStudios} />
        <img src={PrimaEQ} />
        <img src={XLR8} />
        <img src={GreenwayMobility} />
      </div>
      <div className="portfolio-branding-mission-logos-columns">
        <img src={Jukebox} />
        <img src={ClikenCave} />
        <img src={Emply} />
      </div>
      <div className="portfolio-branding-mission-logos-columns">
        <img src={AllOkay} />
        <img src={GCS} />
        <img src={KES} />
        <img src={Hamora} />
      </div>
    </div>
  );
}

export default Logos;
