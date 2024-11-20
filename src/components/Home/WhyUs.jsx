import React, { useState } from "react";
import LeftArrow from "../Buttons/LeftArrow";
import RightArrow from "../Buttons/RightArrow";
import WhyUsCardBackground from "../../assets/Home/Why Us Card Background.png";
import CollabarativeIcon from "../../assets/Home/COLLABORATIVE.svg";

function WhyUs() {
  const cardsData = [
    {
      icon: CollabarativeIcon,
      title: "Collaborative Approach",
      description:
        "Lorem ipsum dolor sit amet consectetur. Venenatis sapien id ultrices sed mauris ut et arcu egestas. Ligula ut ipsum dolor sit amet consectetur.",
    },
    {
      icon: CollabarativeIcon,
      title: "Innovative Solutions",
      description:
        "Lorem ipsum dolor sit amet consectetur. Venenatis sapien id ultrices sed mauris ut et arcu egestas. Ligula ut ipsum dolor sit amet consectetur.",
    },
    {
      icon: CollabarativeIcon,
      title: "Commitment to Excellence",
      description:
        "Lorem ipsum dolor sit amet consectetur. Venenatis sapien id ultrices sed mauris ut et arcu egestas. Ligula ut ipsum dolor sit amet consectetur.",
    },
    {
      icon: CollabarativeIcon,
      title: "Trusted Partnerships",
      description:
        "Lorem ipsum dolor sit amet consectetur. Venenatis sapien id ultrices sed mauris ut et arcu egestas. Ligula ut ipsum dolor sit amet consectetur.",
    },
    {
      icon: CollabarativeIcon,
      title: "Cutting-Edge Technology",
      description:
        "Lorem ipsum dolor sit amet consectetur. Venenatis sapien id ultrices sed mauris ut et arcu egestas. Ligula ut ipsum dolor sit amet consectetur.",
    },
    {
      icon: CollabarativeIcon,
      title: "Tailored Strategies",
      description:
        "Lorem ipsum dolor sit amet consectetur. Venenatis sapien id ultrices sed mauris ut et arcu egestas. Ligula ut ipsum dolor sit amet consectetur.",
    },
  ];

  const [index, setIndex] = useState(0);
  const cardsLength = cardsData.length;

  function handleLeftClick() {
    if (0 < index) {
      setIndex(index - 1);
    }
  }

  function handleRightClick() {
    if (cardsLength - 1 > index) {
      setIndex(index + 1);
    }
  }

  let translateWidth = 100 / (cardsLength );
  let lastLength = translateWidth * index;

  return (
    <div className="why-us">
      <div className="section-heading">
        <h2>Why Us</h2>
        <p>
          Our Works &<br /> Collaborations
        </p>
      </div>
      <div className="why-us-container">
        <div
          className="why-us-cards-container"
          style={{
            transform: `translateX(calc(-${lastLength}%))`,
          }}
        >
          {cardsData.map((card, cardIndex) => (
            <div className="why-us-cards" key={cardIndex}>
              <div className="why-us-cards-frame">
                <img
                  src={WhyUsCardBackground}
                  className="why-us-cards-frame-background"
                  alt="Card background"
                />
                <div className="why-us-cards-icon">
                  <img src={card.icon} alt={`${card.title} icon`} />
                </div>
              </div>
              <div className="why-us-cards-info">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="why-us-buttons-container">
          <div
            className={`gallery-button-left gallery-button ${
              0 === index ? "disable-button" : ""
            }`}
            onClick={handleLeftClick}
          >
            <LeftArrow />
          </div>
          <div
            className={`gallery-button-right gallery-button ${
              cardsLength - 1 === index ? "disable-button" : ""
            }`}
            onClick={handleRightClick}
          >
            <RightArrow />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
