import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeadingDesign from "../assests/Home/Section Heading Design.png";
import GalleryArrow from "../assests/Home/Gallery Arrow.png";
import GalleryImg1 from "../assests/Home/Gallery Img 1.png";
import GalleryImg2 from "../assests/Home/Gallery Img 2.png";
import GalleryImg3 from "../assests/Home/Gallery Img 3.png";
import GalleryImg1Big from "../assests/Home/Gallery Img 1 Big.png";
import GalleryImg2Big from "../assests/Home/Gallery Img 2 Big.png";
import GalleryImg3Big from "../assests/Home/Gallery Img 3 Big.png";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(GalleryImg1Big);
  const [arrowVisible, setArrowVisible] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const imageData = [
    {
      thumb: GalleryImg1,
      big: GalleryImg1Big,
    },
    {
      thumb: GalleryImg2,
      big: GalleryImg2Big,
    },
    {
      thumb: GalleryImg3,
      big: GalleryImg3Big,
    },
  ];

  const handleImageClick = (index) => {
    setSelectedImage(imageData[index].big);
    setArrowVisible(false);
    setActiveIndex(index);
  };

  return (
    <div className="portfolio-home-gallery">
      <div className="portfolio-home-gallery-left">
        <div className="portfolio-section-heading">
          <img
            src={HeadingDesign}
            className="portfolio-section-heading-img"
            alt="Heading Design"
          />
          <h2>
            <span>Numbers</span> that speak for themselves
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Augue id dictum hendrerit
            adipiscing tellus pretium varius nunc. Turpis morbi praesent ac
            velit. Non in adipiscing tortor.
          </p>
          <Link to="/portfolio/applications" className="portfolio-secondary-button">
            <p>View All</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M13.47 9.02985C13.3375 8.88767 13.2654 8.69963 13.2688 8.50532C13.2723 8.31102 13.351 8.12564 13.4884 7.98822C13.6258 7.85081 13.8112 7.7721 14.0055 7.76867C14.1998 7.76524 14.3878 7.83737 14.53 7.96985L18.53 11.9698C18.6705 12.1105 18.7493 12.3011 18.7493 12.4998C18.7493 12.6986 18.6705 12.8892 18.53 13.0298L14.53 17.0298C14.4613 17.1035 14.3785 17.1626 14.2865 17.2036C14.1945 17.2446 14.0952 17.2667 13.9945 17.2684C13.8938 17.2702 13.7938 17.2517 13.7004 17.214C13.607 17.1762 13.5222 17.1201 13.451 17.0489C13.3797 16.9777 13.3236 16.8928 13.2859 16.7994C13.2482 16.7061 13.2296 16.606 13.2314 16.5053C13.2332 16.4046 13.2552 16.3053 13.2962 16.2133C13.3372 16.1213 13.3963 16.0385 13.47 15.9698L16.19 13.2498H6.5C6.30109 13.2498 6.11032 13.1708 5.96967 13.0302C5.82902 12.8895 5.75 12.6988 5.75 12.4998C5.75 12.3009 5.82902 12.1102 5.96967 11.9695C6.11032 11.8289 6.30109 11.7498 6.5 11.7498H16.19L13.47 9.02985Z"
                fill="white"
              />
            </svg>
          </Link>
        </div>

        <div className="portfolio-home-gallery-imgs">
          {arrowVisible && (
            <img
              src={GalleryArrow}
              className="portfolio-home-gallery-arrow"
              alt="Arrow"
            />
          )}
          {imageData.map((img, index) => (
            <div
              key={index}
              className={`portfolio-home-gallery-img-wrapper ${
                index === activeIndex
                  ? "portfolio-home-gallery-img-selected"
                  : ""
              }`}
              onClick={() => handleImageClick(index)}
            >
              <img src={img.thumb} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="portfolio-home-gallery-right">
        <img src={selectedImage} alt="Selected Gallery" />
      </div>
    </div>
  );
}

export default Gallery;
