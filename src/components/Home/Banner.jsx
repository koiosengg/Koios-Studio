import React from "react";
import BannerBackground from "../../assets/Home/Home Banner.png";

function Banner() {
  return (
    <div className="banner">
      <div className="banner-heading">
        <h1>Implementing Your Ideas To Reality</h1>
      </div>
      <img
        src={BannerBackground}
        className="banner-background"
        alt="Koios Studio Home Banner Image"
      />
    </div>
  );
}

export default Banner;
