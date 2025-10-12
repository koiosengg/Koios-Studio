import React from "react";
import { Link } from "react-router-dom";
import BlogImg1 from "../assets/Our Blogs/Blog Image 1.png";
import BlogImg2 from "../assets/Our Blogs/Blog Image 2.png";
import BlogImg3 from "../assets/Our Blogs/Blog Image 3.png";
import BlogImg4 from "../assets/Our Blogs/Blog Image 4.png";

function Posts() {
  return (
    <div className="blogs-posts">
      <div className="blogs-posts-container">
        <h2>Related Posts</h2>
        <div className="blogs-posts-set-container">
          <Link to="/" className="blogs-posts-set">
            <img src={BlogImg1} alt="Blog Image 1" />
            <div className="blogs-posts-set-text">
              <h3>
                Consistency is Key: How Unified Design Builds Stronger Brands
              </h3>
              <p>July 27, 2025</p>
            </div>
          </Link>
          <Link to="/" className="blogs-posts-set">
            <img src={BlogImg2} alt="Blog Image 1" />
            <div className="blogs-posts-set-text">
              <h3>Color Psychology: How Colors Influence User Perception </h3>
              <p>July 27, 2025</p>
            </div>
          </Link>
          <Link to="/" className="blogs-posts-set">
            <img src={BlogImg3} alt="Blog Image 1" />
            <div className="blogs-posts-set-text">
              <h3>
                Typography Trends: Choosing the Right Fonts for Modern
                Interfaces
              </h3>
              <p>July 27, 2025</p>
            </div>
          </Link>
          <Link to="/" className="blogs-posts-set">
            <img src={BlogImg4} alt="Blog Image 1" />
            <div className="blogs-posts-set-text">
              <h3>
                Consistency is Key: How Unified Design Builds Stronger Brands
              </h3>
              <p>July 27, 2025</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Posts;
