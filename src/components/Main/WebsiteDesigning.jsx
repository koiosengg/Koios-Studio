import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ResponsiveWebsiteDesign from "./assets/Website Designing/Responsive Website Design.webp";
import UIUX from "./assets/Website Designing/UI UX.webp";

function WebsiteDesigning() {
  return (
    <div className="p-mechanical-design">
      <Helmet>
        <title>Web Designing</title>
        <meta
          name="description"
          content="Explore Koios' Website Designing services including responsive design and UI/UX development."
        />
      </Helmet>
      <div className="p-breadcrumb">
        <div className="p-breadcrumb-text">
          <Link to="/">
            Home<span> / </span>
          </Link>
          <p>Website Designing</p>
        </div>
      </div>
      <div className="p-mechanical-text-container">
        <div className="p-yellow-gradient-text">Websites</div>
        <div className="p-title-description">
          <div className="p-big-mechanical-title">Website Designing</div>
          <p>
            At Koios, we understand the challenges of web design and its
            overwhelming process. Hence, our approach ensures you stay informed
            and in control every step of the way, making the process smoother
            and more collaborative.
          </p>
        </div>
      </div>

      <div className="s-product-list s-software-solutions">
        <div className="s-product-list-set">
          <div className="s-product-list-set-heading">
            <p>Responsive Website Design</p>
            <h2>Don't let the size of the screen, measure our creativity!</h2>
          </div>
          <div className="s-product-list-set-container">
            <img
              loading="lazy"
              src={ResponsiveWebsiteDesign}
              alt="responsive website design"
            />
            <p className="subpage-desc">
              Discover our responsive website service, where we use CSS media
              queries and flexible grids to ensure your website adapts
              seamlessly to different screen sizes and devices, providing an
              optimal viewing experience for all users.
            </p>
            <div className="p-various-types">
              <div className="p-various-types-text">
                Different types of websites we offer:
              </div>
              <div className="p-service-offering">
                <div className="p-left-service-text">
                  <div className="p-line-p">
                    <p>Portfolio Websites</p>
                    <div className="p-btm-line"></div>
                  </div>
                  <div className="p-line-p">
                    <p>Non-profit Websites</p>
                    <div className="p-btm-line"></div>
                  </div>
                  <div className="p-line-p">
                    <p>Landing Pages</p>
                    <div className="p-btm-line"></div>
                  </div>
                  <div className="p-line-p">
                    <p>Brochure Websites</p>
                    <div className="p-btm-line"></div>
                  </div>
                </div>

                <div className="p-right-service-text">
                  <div className="p-line-p">
                    <p>Corporate Websites</p>
                    <div className="p-btm-line"></div>
                  </div>
                  <div className="p-line-p">
                    <p>Informational Websites</p>
                    <div className="p-btm-line"></div>
                  </div>
                  <div className="p-line-p">
                    <p>Event Websites</p>
                    <div className="p-btm-line"></div>
                  </div>
                  <div className="p-line-p">
                    <p>Personal Resume</p>
                    <div className="p-btm-line"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="s-product-list-set">
          <div className="s-product-list-set-heading">
            <p>UI/UX</p>
            <h2>
              55% of visitors spend less than 15 secs on a website , give our
              UX'ers 14!
            </h2>
          </div>
          <div className="s-product-list-set-container">
            <img loading="lazy" src={UIUX} alt="UI UX" />
            <p className="subpage-desc">
              Dive into our UI/UX service, where we meticulously research,
              empathize, and design seamless user experiences. With a focus on
              user-centricity, we craft interfaces that delight and engage
              audiences effortlessly.
            </p>
            <div className="p-various-types">
              <div className="p-various-types-text">
                User experience designing includes:
              </div>
              <div className="p-service-offering">
                <div className="p-left-service-text">
                  <div className="p-line-p">
                    <p>User Research</p>
                    <div className="p-btm-line"></div>
                  </div>
                  <div className="p-line-p">
                    <p>Information Architecture</p>
                    <div className="p-btm-line"></div>
                  </div>
                  <div className="p-line-p">
                    <p>Accessibility</p>
                    <div className="p-btm-line"></div>
                  </div>
                </div>

                <div className="p-right-service-text">
                  <div className="p-line-p">
                    <p>Wireframing and Prototyping</p>
                    <div className="p-btm-line"></div>
                  </div>
                  <div className="p-line-p">
                    <p>User Flow</p>
                    <div className="p-btm-line"></div>
                  </div>
                  <div className="p-line-p">
                    <p>User Centered Design</p>
                    <div className="p-btm-line"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-various-types">
              <div className="p-various-types-text">
                User Interface Designing includes:
              </div>
              <div className="p-service-offering">
                <div className="p-left-service-text">
                  <div className="p-line-p">
                    <p>Visual Design</p>
                    <div className="p-btm-line"></div>
                  </div>
                  <div className="p-line-p">
                    <p>Buttons and Icons</p>
                    <div className="p-btm-line"></div>
                  </div>
                  <div className="p-line-p">
                    <p>Animation</p>
                    <div className="p-btm-line"></div>
                  </div>
                </div>

                <div className="p-right-service-text">
                  <div className="p-line-p">
                    <p>Layouts</p>
                    <div className="p-btm-line"></div>
                  </div>
                  <div className="p-line-p">
                    <p>Forms</p>
                    <div className="p-btm-line"></div>
                  </div>
                  <div className="p-line-p">
                    <p>Responsive Design</p>
                    <div className="p-btm-line"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebsiteDesigning;
