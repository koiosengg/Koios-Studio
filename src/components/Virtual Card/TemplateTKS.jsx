import React from "react";
import Logo from "./assets/Footer Company Logo.png";
import BannerDesktopBackround from "./assets/TKS Desktop Banner.png";
import BannerMobileBackround from "./assets/TKS Mobile Banner.png";
import Verified from "./assets/Verified.png";
import MahiRastogi from "./assets/TemplateTKS Person.png";
import MarqueeStar from "./assets/Marquee Star.png";
import AboutDesktopBackground from "./assets/TKS Desktop About.png";
import AboutMobileBackground from "./assets/TKS Mobile About.png";
import DesktopStar from "./assets/TKS Desktop Star.png";
import ServicesDesktopBackground from "./assets/TKS Desktop Services.png";
import ServicesMobileBackground from "./assets/TKS Mobile Services.png";
import ServicesDesktopCardBackground from "./assets/TKS Desktop Services Card.png";
import ServicesMobileCardBackground from "./assets/TKS Mobile Services Card.png";
import ProductsDesktopBackground from "./assets/TKS Desktop Products.png";
import ProductsMobileBackground from "./assets/TKS Mobile Products.png";
import ProductsSampleServices from "./assets/Sample Services.png";

function TemplateTKS() {
  return (
    <div className="virtual-card">
      <div className="virtual-card-banner">
        <img
          src={BannerDesktopBackround}
          className="virtual-card-banner-background desktop"
        />
        <img
          src={BannerMobileBackround}
          className="virtual-card-banner-background mobile"
        />
        <div className="virtual-card-banner-container">
          <div className="virtual-card-banner-left">
            <div className="virtual-card-banner-left-text">
              <section>
                <img src={Logo} alt="Koios Studios Logo" />
                <h1>
                  Daniel Jacob
                  <img src={Verified} />
                </h1>
                <div className="virtual-card-banner-designation">
                  <span>UX Designer</span>
                </div>
              </section>
              <p>
                Lorem ipsum dolor sit amet consectetur. Lectus cursus platea
                lobortis id. Sit nibh ullamcorper in libero.
              </p>
            </div>
            <div className="virtual-card-left-buttons mobile">
              <a href="#" className="virtual-card-white-button">
                <p>Save Contact</p>
              </a>
              <a href="#" className="virtual-card-black-button">
                <p>View Portfolio</p>
              </a>
            </div>
            <a href="#" className="virtual-card-white-button desktop">
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
      <div className="virtual-card-about">
        <img
          src={AboutDesktopBackground}
          className="virtual-card-about-background desktop"
        />
        <img
          src={AboutMobileBackground}
          className="virtual-card-about-background mobile"
        />
        <div className="virtual-card-about-container">
          <h2>Project Manager</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Lectus cursus platea
            lobortis id. Sit nibh ullamcorper in libero donec enim auctor. Quam
            eleifend magna aliquet ut. Turpis gravida quis ut ipsum vestibulum
            justo viverra.
          </p>
        </div>
        <img className="star" src={DesktopStar} />
        <div className="virtual-star-twinkle twinkle-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="8"
            viewBox="0 0 6 8"
            fill="none"
          >
            <path
              d="M2.93422 0.179199L3.56794 2.82532L5.28054 3.80447L3.56794 4.78362L2.93422 7.42974L2.30049 4.78362L0.587891 3.80447L2.30049 2.82532L2.93422 0.179199Z"
              fill="#D6D6D6"
            />
          </svg>
        </div>
        <div className="virtual-star-twinkle twinkle-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="8"
            viewBox="0 0 6 8"
            fill="none"
          >
            <path
              d="M2.93422 0.179199L3.56794 2.82532L5.28054 3.80447L3.56794 4.78362L2.93422 7.42974L2.30049 4.78362L0.587891 3.80447L2.30049 2.82532L2.93422 0.179199Z"
              fill="#D6D6D6"
            />
          </svg>
        </div>
        <div className="virtual-star-twinkle twinkle-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="8"
            viewBox="0 0 6 8"
            fill="none"
          >
            <path
              d="M2.93422 0.179199L3.56794 2.82532L5.28054 3.80447L3.56794 4.78362L2.93422 7.42974L2.30049 4.78362L0.587891 3.80447L2.30049 2.82532L2.93422 0.179199Z"
              fill="#D6D6D6"
            />
          </svg>
        </div>
        <div className="virtual-star-twinkle twinkle-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="8"
            viewBox="0 0 6 8"
            fill="none"
          >
            <path
              d="M2.93422 0.179199L3.56794 2.82532L5.28054 3.80447L3.56794 4.78362L2.93422 7.42974L2.30049 4.78362L0.587891 3.80447L2.30049 2.82532L2.93422 0.179199Z"
              fill="#D6D6D6"
            />
          </svg>
        </div>
        <div className="virtual-star-twinkle twinkle-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="8"
            viewBox="0 0 6 8"
            fill="none"
          >
            <path
              d="M2.93422 0.179199L3.56794 2.82532L5.28054 3.80447L3.56794 4.78362L2.93422 7.42974L2.30049 4.78362L0.587891 3.80447L2.30049 2.82532L2.93422 0.179199Z"
              fill="#D6D6D6"
            />
          </svg>
        </div>
      </div>
      <div className="virtual-card-services">
        <img
          src={ServicesDesktopBackground}
          className="virtual-card-services-background desktop"
        />
        <img
          src={ServicesMobileBackground}
          className="virtual-card-services-background mobile"
        />
        <h2>Our Services</h2>
        <div className="virtual-card-services-container">
          <div className="virtual-card-services-set">
            <h3>Website Development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Lectus cursus platea
              lobortis id sit nibh ullamcorpo.
            </p>
            <img src={ServicesDesktopCardBackground} className="desktop" />
            <img src={ServicesMobileCardBackground} className="mobile" />
          </div>
          <div className="virtual-card-services-set">
            <h3>Website Development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Lectus cursus platea
              lobortis id sit nibh ullamcorpo.
            </p>
            <img src={ServicesDesktopCardBackground} className="desktop" />
            <img src={ServicesMobileCardBackground} className="mobile" />
          </div>
          <div className="virtual-card-services-set">
            <h3>Website Development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Lectus cursus platea
              lobortis id sit nibh ullamcorpo.
            </p>
            <img src={ServicesDesktopCardBackground} className="desktop" />
            <img src={ServicesMobileCardBackground} className="mobile" />
          </div>
          <div className="virtual-card-services-set">
            <h3>Website Development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Lectus cursus platea
              lobortis id sit nibh ullamcorpo.
            </p>
            <img src={ServicesDesktopCardBackground} className="desktop" />
            <img src={ServicesMobileCardBackground} className="mobile" />
          </div>
          <div className="virtual-card-services-set">
            <h3>Website Development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Lectus cursus platea
              lobortis id sit nibh ullamcorpo.
            </p>
            <img src={ServicesDesktopCardBackground} className="desktop" />
            <img src={ServicesMobileCardBackground} className="mobile" />
          </div>
          <div className="virtual-card-services-set">
            <h3>Website Development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Lectus cursus platea
              lobortis id sit nibh ullamcorpo.
            </p>
            <img src={ServicesDesktopCardBackground} className="desktop" />
            <img src={ServicesMobileCardBackground} className="mobile" />
          </div>
        </div>
      </div>
      <div className="virtual-card-products">
        <img
          src={ProductsDesktopBackground}
          className="virtual-card-products-background desktop"
        />
        <img
          src={ProductsMobileBackground}
          className="virtual-card-products-background mobile"
        />
        <h2>Our Products</h2>
        <div className="virtual-card-products-container">
          <div className="virtual-card-products-set">
            <div className="virtual-card-products-set-img">
              <img src={ProductsSampleServices} />
            </div>
            <h3>Website Development</h3>
          </div>
          <div className="virtual-card-products-set">
            <div className="virtual-card-products-set-img">
              <img src={ProductsSampleServices} />
            </div>
            <h3>Website Development</h3>
          </div>
          <div className="virtual-card-products-set">
            <div className="virtual-card-products-set-img">
              <img src={ProductsSampleServices} />
            </div>
            <h3>Website Development</h3>
          </div>
          <div className="virtual-card-products-set">
            <div className="virtual-card-products-set-img">
              <img src={ProductsSampleServices} />
            </div>
            <h3>Website Development</h3>
          </div>
          <div className="virtual-card-products-set">
            <div className="virtual-card-products-set-img">
              <img src={ProductsSampleServices} />
            </div>
            <h3>Website Development</h3>
          </div>
          <div className="virtual-card-products-set">
            <div className="virtual-card-products-set-img">
              <img src={ProductsSampleServices} />
            </div>
            <h3>Website Development</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemplateTKS;
