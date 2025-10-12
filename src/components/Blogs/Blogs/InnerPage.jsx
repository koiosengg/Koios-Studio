import React from "react";
import { Link } from "react-router-dom";
import BlogImg1 from "../assets/Our Blogs/Blog Image 2.png";
import Posts from "./Posts";

function InnerPage() {
  return (
    <section className="blogs-inner-page">
      <div className="back-button">
        <Link to="/blogs">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <mask
              id="mask0_1725_19091"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect
                width="24"
                height="24"
                transform="matrix(-1 0 0 1 24 0)"
                fill="#D9D9D9"
              />
            </mask>
            <g mask="url(#mask0_1725_19091)">
              <path
                d="M7.825 13H20V11H7.825L13.425 5.4L12 4L4 12L12 20L13.425 18.6L7.825 13Z"
                fill="white"
              />
            </g>
          </svg>
        </Link>{" "}
        <p>Back</p>
      </div>
      <div className="blogs-inner-page-container">
        <div className="blogs-inner-page-heading">
          <h1>Consistency is Key: How Unified Design Builds Stronger Brands</h1>
          <p>Posted: July 28, 2024</p>
        </div>
        <div className="blogs-inner-page-content">
          <div className="blogs-inner-page-text">
            <div className="blogs-inner-page-text-heading">
              <img src={BlogImg1} alt="Blog Image 1" />
              <p>
                Lorem ipsum dolor sit amet consectetur. Rhoncus enim ac
                vulputate morbi sed fusce cum sed. Pellentesque magnis neque
                semper pellentesque elementum. Odio faucibus urna mattis ante at
                nulla massa. Mus netus consectetur quam tempor id sed neque.
                <br />
                <br /> Platea pellentesque auctor aenean velit nulla sed nec.
                Nibh mattis risus pulvinar bibendum aliquet sollicitudin erat et
                eu.
              </p>
            </div>
            <div className="blogs-inner-page-text-section">
              <h2>Why it is Important?</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Rhoncus enim ac
                vulputate morbi sed fusce cum sed. Pellentesque magnis neque
                semper pellentesque elementum. Odio faucibus urna mattis ante at
                nulla massa. Mus netus consectetur quam tempor id sed neque.
              </p>
            </div>
            <div className="blogs-inner-page-text-section">
              <h2>Why Design?</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Rhoncus enim ac
                vulputate morbi sed fusce cum sed. Pellentesque magnis neque
                semper pellentesque elementum. Odio faucibus urna mattis ante at
                nulla massa. Mus netus consectetur quam tempor id sed neque.
              </p>
            </div>
            <div className="blogs-inner-page-text-section">
              <h2>Why it is Important?</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Rhoncus enim ac
                vulputate morbi sed fusce cum sed. Pellentesque magnis neque
                semper pellentesque elementum. Odio faucibus urna mattis ante at
                nulla massa. Mus netus consectetur quam tempor id sed neque.
              </p>
            </div>
            <div className="blogs-inner-page-text-section">
              <p>
                Lorem ipsum dolor sit amet consectetur. Rhoncus enim ac
                vulputate morbi sed fusce cum sed. Pellentesque magnis neque
                semper pellentesque elementum. Odio faucibus urna mattis ante at
                nulla massa. Mus netus consectetur quam tempor id sed neque.
                <br />
                <br /> Platea pellentesque auctor aenean velit nulla sed nec.
                Nibh mattis risus pulvinar bibendum aliquet sollicitudin erat et
                eu.
              </p>
            </div>
          </div>
          <Posts />
        </div>
      </div>
    </section>
  );
}

export default InnerPage;
