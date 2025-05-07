import React from "react";
import { Link } from "react-router-dom";
import Dynamic from "./assets/Website Development/Dynamic Web Application.webp";
import Development from "./assets/Website Development/Website Development.webp";
import Commerce from "./assets/Website Development/E  Commerce.webp";
function WebsiteDevelopment() {
  return (
    <div className="p-mechanical-design">
      <div className="p-breadcrumb">
        <div className="p-breadcrumb-text">
          <Link to="/">
            Home<span> / </span>
          </Link>
          <p>Website Development</p>
        </div>
      </div>
      <div className="p-mechanical-text-container">
        <div className="p-yellow-gradient-text">SOFTWARE</div>
        <div className="p-title-description">
          <div className="p-big-mechanical-title">Website Development</div>
          <p>
            We deliver exceptional mechanical and automotive design, coupled
            with cutting-edge manufacturing, for your specialized machines and
            vehicles, meticulously meeting the highest industry standards.
          </p>
        </div>
      </div>
      <div className="s-product-list s-software-solutions">
        <div className="s-product-list-set">
          <div className="s-product-list-set-heading">
            <p>Responsive Website Development</p>
            <h2>Don't let the size of the screen, size you up!</h2>
          </div>
          <div className="s-product-list-set-container">
            <img loading="lazy" src={Development} alt="website development" />
            <p className="subpage-desc">
              Experience seamless transitions between screen sizes with our
              responsive website development service, utilizing CSS3 transitions
              and media queries for fluid layout adjustments, ensuring an
              optimal viewing experience across all devices.
            </p>
          </div>
        </div>
        <div className="s-product-list-set">
          <div className="s-product-list-set-heading">
            <p>Dynamic Web Application</p>
            <h2>Get real-time updates of your data-in-distress!</h2>
          </div>
          <div className="s-product-list-set-container">
            <img loading="lazy" src={Dynamic} alt="dynamic web application" />
            <p className="subpage-desc">
              To make these dynamic web apps, we at Koios Engineering Solutions
              use JavaScript, databases, and APIs, so your site smoothly changes
              based on what you like. It's all about boosting how well your
              website works and how much users enjoy it.
            </p>
            <div className="p-various-types">
              <div className="p-various-types-text">
                Different types of websites we offer:
              </div>
              <div className="p-service-offering">
                <div className="p-left-service-text">
                  <div className="p-line-p">
                    <p>Educational Platforms</p>
                    <div className="p-btm-line"></div>
                  </div>
                  <div className="p-line-p">
                    <p>Real Time Data Websites</p>
                    <div className="p-btm-line"></div>
                  </div>
                  <div className="p-line-p">
                    <p>Blogs</p>
                    <div className="p-btm-line"></div>
                  </div>
                </div>

                <div className="p-right-service-text">
                  <div className="p-line-p">
                    <p>Online Booking Systems</p>
                    <div className="p-btm-line"></div>
                  </div>
                  <div className="p-line-p">
                    <p>Social Media Websites</p>
                    <div className="p-btm-line"></div>
                  </div>
                  <div className="p-line-p">
                    <p>E-Commerce Websites</p>
                    <div className="p-btm-line"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="s-product-list-set">
          <div className="s-product-list-set-heading">
            <p>E-Commerce Solutions</p>
            <h2>
              Sell products globally, reaching a wider audience 24/7 , without
              missing a shift!
            </h2>
          </div>
          <div className="s-product-list-set-container">
            <img loading="lazy" src={Commerce} alt="Ecommerce" />
            <p className="subpage-desc">
              Transform your business with our e-commerce website service,
              integrating secure payment gateways and intuitive user interfaces
              to create addictive and simple online shopping experiences. Our
              effective designs drive sales and growth effortlessly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebsiteDevelopment;
