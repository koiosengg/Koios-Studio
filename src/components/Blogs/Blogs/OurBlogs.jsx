import React from "react";
import BlogImg1 from "../assets/Our Blogs/Blog Image 1.png";
import BlogImg2 from "../assets/Our Blogs/Blog Image 2.png";
import BlogImg3 from "../assets/Our Blogs/Blog Image 3.png";
import BlogImg4 from "../assets/Our Blogs/Blog Image 4.png";
import Tertiary from "../Buttons/Tertiary";

function OurBlogs() {
  return (
    <section className="template">
      <div className="template-heading">
        <p>Our Blogs</p>
        <h2>The Koios Perspective</h2>
      </div>
      <div className="our-blogs">
        <div className="our-blogs-set">
          <div className="our-blogs-set-img">
            <img src={BlogImg1} alt="Blog Image 1" />
          </div>
          <div className="our-blogs-set-content">
            <div className="our-blogs-set-text">
              <h3>From Idea to Impact: The Future of Creative Agencies</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Elementum at orci arcu
                egestas cursus varius ultrices odio.
              </p>
            </div>
            <Tertiary toLink="/" buttonLabel="Read More" />
          </div>
        </div>
        <div className="our-blogs-set">
          <div className="our-blogs-set-img">
            <img src={BlogImg2} alt="Blog Image 2" />
          </div>
          <div className="our-blogs-set-content">
            <div className="our-blogs-set-text">
              <h3>
                Consistency is Key: How Unified Design Builds Stronger Brands
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Elementum at orci arcu
                egestas cursus varius ultrices odio.
              </p>
            </div>
            <Tertiary toLink="/" buttonLabel="Read More" />
          </div>
        </div>
        <div className="our-blogs-set">
          <div className="our-blogs-set-img">
            <img src={BlogImg3} alt="Blog Image 3" />
          </div>
          <div className="our-blogs-set-content">
            <div className="our-blogs-set-text">
              <h3>From Idea to Impact: The Future of Creative Agencies</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Elementum at orci arcu
                egestas cursus varius ultrices odio.
              </p>
            </div>
            <Tertiary toLink="/" buttonLabel="Read More" />
          </div>
        </div>
        <div className="our-blogs-set">
          <div className="our-blogs-set-img">
            <img src={BlogImg4} alt="Blog Image 4" />
          </div>
          <div className="our-blogs-set-content">
            <div className="our-blogs-set-text">
              <h3>From Idea to Impact: The Future of Creative Agencies</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Elementum at orci arcu
                egestas cursus varius ultrices odio.
              </p>
            </div>
            <Tertiary toLink="/" buttonLabel="Read More" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurBlogs;
