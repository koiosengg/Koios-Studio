import React from "react";
import { Link } from "react-router-dom";
import Website from "../assests/Home/Services Website Icon.png";
import Application from "../assests/Home/Services Application Icon.png";
import Branding from "../assests/Home/Services Branding Icon.png";

function Services() {
  return (
    <div className="portfolio-home-services">
      <Link to="/portfolio/website" className="portfolio-home-services-set">
        <img src={Website} className="portfolio-home-services-set-icon" />
        <h2>Websites</h2>
        <div className="portfolio-home-services-set-line">
          <div></div>
          <div></div>
        </div>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </p>
        <div className="portfolio-explore-button">
          <p>Explore</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              d="M13.6365 8.52985C13.504 8.38767 13.4319 8.19963 13.4353 8.00532C13.4388 7.81102 13.5175 7.62564 13.6549 7.48822C13.7923 7.35081 13.9777 7.2721 14.172 7.26867C14.3663 7.26524 14.5543 7.33737 14.6965 7.46985L18.6965 11.4698C18.837 11.6105 18.9158 11.8011 18.9158 11.9998C18.9158 12.1986 18.837 12.3892 18.6965 12.5298L14.6965 16.5298C14.6278 16.6035 14.545 16.6626 14.453 16.7036C14.361 16.7446 14.2617 16.7667 14.161 16.7684C14.0603 16.7702 13.9603 16.7517 13.8669 16.714C13.7735 16.6762 13.6887 16.6201 13.6175 16.5489C13.5462 16.4777 13.4901 16.3928 13.4524 16.2994C13.4147 16.2061 13.3961 16.106 13.3979 16.0053C13.3997 15.9046 13.4217 15.8053 13.4627 15.7133C13.5037 15.6213 13.5628 15.5385 13.6365 15.4698L16.3565 12.7498H6.6665C6.46759 12.7498 6.27683 12.6708 6.13617 12.5302C5.99552 12.3895 5.9165 12.1988 5.9165 11.9998C5.9165 11.8009 5.99552 11.6102 6.13617 11.4695C6.27683 11.3289 6.46759 11.2498 6.6665 11.2498H16.3565L13.6365 8.52985Z"
              fill="white"
            />
          </svg>
        </div>
      </Link>
      <Link to="/portfolio/application" className="portfolio-home-services-set">
        <img src={Application} className="portfolio-home-services-set-icon" />
        <h2>Application</h2>
        <div className="portfolio-home-services-set-line">
          <div></div>
          <div></div>
        </div>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </p>
        <div className="portfolio-explore-button">
          <p>Explore</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              d="M13.6365 8.52985C13.504 8.38767 13.4319 8.19963 13.4353 8.00532C13.4388 7.81102 13.5175 7.62564 13.6549 7.48822C13.7923 7.35081 13.9777 7.2721 14.172 7.26867C14.3663 7.26524 14.5543 7.33737 14.6965 7.46985L18.6965 11.4698C18.837 11.6105 18.9158 11.8011 18.9158 11.9998C18.9158 12.1986 18.837 12.3892 18.6965 12.5298L14.6965 16.5298C14.6278 16.6035 14.545 16.6626 14.453 16.7036C14.361 16.7446 14.2617 16.7667 14.161 16.7684C14.0603 16.7702 13.9603 16.7517 13.8669 16.714C13.7735 16.6762 13.6887 16.6201 13.6175 16.5489C13.5462 16.4777 13.4901 16.3928 13.4524 16.2994C13.4147 16.2061 13.3961 16.106 13.3979 16.0053C13.3997 15.9046 13.4217 15.8053 13.4627 15.7133C13.5037 15.6213 13.5628 15.5385 13.6365 15.4698L16.3565 12.7498H6.6665C6.46759 12.7498 6.27683 12.6708 6.13617 12.5302C5.99552 12.3895 5.9165 12.1988 5.9165 11.9998C5.9165 11.8009 5.99552 11.6102 6.13617 11.4695C6.27683 11.3289 6.46759 11.2498 6.6665 11.2498H16.3565L13.6365 8.52985Z"
              fill="white"
            />
          </svg>
        </div>
      </Link>
      <Link to="/portfolio/branding" className="portfolio-home-services-set">
        <img src={Branding} className="portfolio-home-services-set-icon" />
        <h2>Branding</h2>
        <div className="portfolio-home-services-set-line">
          <div></div>
          <div></div>
        </div>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </p>
        <div className="portfolio-explore-button">
          <p>Explore</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              d="M13.6365 8.52985C13.504 8.38767 13.4319 8.19963 13.4353 8.00532C13.4388 7.81102 13.5175 7.62564 13.6549 7.48822C13.7923 7.35081 13.9777 7.2721 14.172 7.26867C14.3663 7.26524 14.5543 7.33737 14.6965 7.46985L18.6965 11.4698C18.837 11.6105 18.9158 11.8011 18.9158 11.9998C18.9158 12.1986 18.837 12.3892 18.6965 12.5298L14.6965 16.5298C14.6278 16.6035 14.545 16.6626 14.453 16.7036C14.361 16.7446 14.2617 16.7667 14.161 16.7684C14.0603 16.7702 13.9603 16.7517 13.8669 16.714C13.7735 16.6762 13.6887 16.6201 13.6175 16.5489C13.5462 16.4777 13.4901 16.3928 13.4524 16.2994C13.4147 16.2061 13.3961 16.106 13.3979 16.0053C13.3997 15.9046 13.4217 15.8053 13.4627 15.7133C13.5037 15.6213 13.5628 15.5385 13.6365 15.4698L16.3565 12.7498H6.6665C6.46759 12.7498 6.27683 12.6708 6.13617 12.5302C5.99552 12.3895 5.9165 12.1988 5.9165 11.9998C5.9165 11.8009 5.99552 11.6102 6.13617 11.4695C6.27683 11.3289 6.46759 11.2498 6.6665 11.2498H16.3565L13.6365 8.52985Z"
              fill="white"
            />
          </svg>
        </div>
      </Link>
    </div>
  );
}

export default Services;
