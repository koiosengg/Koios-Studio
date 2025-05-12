import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Design from "./assets/Application Development/mobile application design.webp";
import Development from "./assets/Application Development/mobile application development.webp";

function ApplicationDevelopment() {
  return (
    <div className="p-mechanical-design">
      <Helmet>
        <title>Application Development</title>
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
          <p> Application Development </p>
        </div>
      </div>
      <div className="p-mechanical-text-container">
        <div className="p-yellow-gradient-text">Applications</div>
        <div className="p-title-description">
          <div className="p-big-mechanical-title">Application Development</div>
          <p>
            Pixels with a purpose, apps with a personality.
            <br />
            We love creating intuitive and feature-rich apps that engage users
            and drive business growth.
          </p>
        </div>
      </div>

      <div className="s-product-list s-software-solutions">
        <div className="s-product-list-set">
          <div className="s-product-list-set-heading">
            <p>Mobile Application Design</p>
            <h2>From concept to interface, we've got your app's back</h2>
          </div>
          <div className="s-product-list-set-container">
            <img loading="lazy" src={Design} alt="mobile application design" />
            <p className="subpage-desc">
              Experience our mobile application design service, where we merge
              intuitive UI/UX principles with the latest trends and cutting-edge
              technologies. We create seamless and visually appealing mobile
              apps that engage and delight users while staying
              ahead of the curve.
            </p>
            <div className="p-various-types">
              <div className="p-various-types-text">
                Different types of Mobile Apps we develop:
              </div>
              <div className="p-service-offering">
                <div className="p-left-service-text">
                  <div className="p-line-p">
                    <p>Native App Design</p>
                    <div className="p-btm-line"></div>
                  </div>
                  <div className="p-line-p">
                    <p>Hybrid App Design</p>
                    <div className="p-btm-line"></div>
                  </div>
                </div>

                <div className="p-right-service-text">
                  <div className="p-line-p">
                    <p>Progressive Web App</p>
                    <div className="p-btm-line"></div>
                  </div>
                  <div className="p-line-p">
                    <p>Responsive App</p>
                    <div className="p-btm-line"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="s-product-list-set">
          <div className="s-product-list-set-heading">
            <p>Mobile Application Development</p>
            <h2>From doodle to download, your app journey, our expertise!</h2>
          </div>
          <div className="s-product-list-set-container">
            <img
              loading="lazy"
              src={Development}
              alt="mobile application development"
            />
            <p className="subpage-desc">
              Explore our mobile app development service, where we harness
              native and cross-platform technologies to create intuitive and
              feature-rich applications that deliver seamless user experiences
              across iOS and Android devices
            </p>
            <div className="p-various-types">
              <div className="p-various-types-text">
                Different types of platforms we offer:
              </div>
              <div className="p-service-offering">
                <div className="p-left-service-text">
                  <div className="p-line-p">
                    <p>IOS</p>
                    <div className="p-btm-line"></div>
                  </div>
                  <div className="p-line-p">
                    <p>Cross Platform</p>
                    <div className="p-btm-line"></div>
                  </div>
                </div>

                <div className="p-right-service-text">
                  <div className="p-line-p">
                    <p>Android</p>
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

export default ApplicationDevelopment;
