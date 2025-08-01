import React, { useState } from "react";
import vCardsJS from "vcards-js";
import "./TKSstyle.css";
import Logo from "./assets/Footer Company Logo.png";
import BannerDesktopBackround from "./assets/TKS Desktop Banner.png";
import BannerMobileBackround from "./assets/TKS Mobile Banner.png";
import Verified from "./assets/Verified.png";
import BannerButton from "./assets/TKS Banner Button Background.png";
import PersonPhoto from "/LakshitJain.png";
import MarqueeStar from "./assets/Marquee Star.png";
import AboutDesktopBackground from "./assets/TKS Desktop About.png";
import AboutMobileBackground from "./assets/TKS Mobile About.png";
import DesktopStar from "./assets/TKS Desktop Star.png";
import ReachDesktopBackground from "./assets/TKS Desktop Reach.png";
import ReachMobileBackground from "./assets/TKS Mobile Reach.png";
import CallIcon from "./assets/TKS Call Icon.png";
import EmailIcon from "./assets/TKS Email Icon.png";
import LocationIcon from "./assets/TKS Location Icon.png";
import FindDesktopBackground from "./assets/TKS Desktop Find.png";
import WatchDesktopBackground from "./assets/TKS Desktop Watch.png";
import SkillsDesktopBackground from "./assets/TKS Desktop Skills.png";
import SkillsMobileBackground from "./assets/TKS Mobile Skills.png";
import ExperienceDesktopBackground from "./assets/TKS Desktop Experience.png";
import ExperienceMobileBackground from "./assets/TKS Mobile Experience.png";
import ContactDesktopBackground from "./assets/TKS Desktop Contact.png";
import ContactMobileBackground from "./assets/TKS Mobile Contact.png";
import TKSconnect from "./TKSconnect";
import TKSfooter from "./TKSfooter";

const schedule = {
  S: {
    day: "SUNDAY",
    available: false,
    startTime: "",
    endTime: "",
  },
  M: {
    day: "MONDAY",
    available: true,
    startTime: "10:00 AM",
    endTime: "06:00 PM",
  },
  T: {
    day: "TUESDAY",
    available: true,
    startTime: "10:00 AM",
    endTime: "06:00 PM",
  },
  W: {
    day: "WEDNESDAY",
    available: true,
    startTime: "10:00 AM",
    endTime: "06:00 PM",
  },
  T2: {
    day: "THURSDAY",
    available: true,
    startTime: "10:00 AM",
    endTime: "06:00 PM",
  },
  F: {
    day: "FRIDAY",
    available: true,
    startTime: "10:00 AM",
    endTime: "06:00 PM",
  },
  S2: {
    day: "SATURDAY",
    available: true,
    startTime: "10:00 AM",
    endTime: "06:00 PM",
  },
};

function LakshitJain() {
  const handleDownloadVCard = async () => {
    const vCard = vCardsJS();

    vCard.firstName = "Lakshit Jain";
    vCard.cellPhone = "+917073067977";
    vCard.email = "lakshitdesigningstudio@gmail.com";
    vCard.organization = "Koios Studio";

    const imageBase64 = await getBase64FromImage(
      `${window.location.origin}/LakshitJain.png`
    );
    vCard.photo.embedFromString(imageBase64, "image/png");

    const vCardData = vCard.getFormattedString();
    const blob = new Blob([vCardData], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "contact.vcf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    console.log(vCard.getFormattedString());
  };

  const getBase64FromImage = (imageUrl) => {
    return fetch(imageUrl)
      .then((response) => response.blob())
      .then(
        (blob) =>
          new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result.split(",")[1]);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
          })
      );
  };

  const [selectedDay, setSelectedDay] = useState("S");

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  const { day, available, startTime, endTime } = schedule[selectedDay];

  return (
    <div className="virtual-card">
      <div className="virtual-card-bottom-bar mobile">
        <a onClick={handleDownloadVCard} className="virtual-card-white-button">
          <p>Save Contact</p>
        </a>
        <a
          href="https://www.linkedin.com/in/lakshitjainn"
          target="_blank"
          className="virtual-card-banner-button"
        >
          <img
            src={BannerButton}
            className="virtual-card-banner-button-background"
          />
          <section>
            <p>View Portfolio</p>
          </section>
        </a>
      </div>
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
                  Lakshit Jain
                  <img src={Verified} />
                </h1>
                <div className="virtual-card-banner-designation">
                  <span>Graphic design </span>
                </div>
              </section>
              <p>
                A creative and detail-oriented graphic designer with a passion
                for visual storytelling.
              </p>
            </div>
            <a
              href="https://www.linkedin.com/in/lakshitjainn"
              target="_blank"
              className="virtual-card-banner-button desktop"
            >
              <img
                src={BannerButton}
                className="virtual-card-banner-button-background"
              />
              <section>
                <p>View Portfolio</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                >
                  <path
                    d="M1 13L7 7L1 1"
                    stroke="white"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </section>
            </a>
          </div>
          <div className="virtual-card-banner-right">
            <img src={PersonPhoto} />
            <div className="virtual-card-banner-marquee white">
              <div className="virtual-card-banner-marquee-wrapper ">
                <div className="virtual-card-banner-marquee-marquee">
                  <p>Logo Design</p>
                  <img src={MarqueeStar} />
                  <p> Branding</p>
                  <img src={MarqueeStar} />
                  <p> Social Media Posts </p>
                  <img src={MarqueeStar} />
                  <p> Business Cards</p>
                  <img src={MarqueeStar} />
                  <p> Social Media Ads</p>
                  <img src={MarqueeStar} />
                  <p>Website Graphics </p>
                  <img src={MarqueeStar} />
                  <p>App Graphics</p>
                  <img src={MarqueeStar} />
                  <p>Social Media Strategist</p>
                  <img src={MarqueeStar} />
                  <p> Canva</p>
                  <img src={MarqueeStar} />
                  <p>Packaging Design</p>
                  <img src={MarqueeStar} />
                  <p>Logo Design</p>
                  <img src={MarqueeStar} />
                  <p> Branding</p>
                  <img src={MarqueeStar} />
                  <p> Social Media Posts </p>
                  <img src={MarqueeStar} />
                  <p> Business Cards</p>
                  <img src={MarqueeStar} />
                  <p> Social Media Ads</p>
                  <img src={MarqueeStar} />
                  <p>Website Graphics </p>
                  <img src={MarqueeStar} />
                  <p>App Graphics</p>
                  <img src={MarqueeStar} />
                  <p>Social Media Strategist</p>
                  <img src={MarqueeStar} />
                  <p> Canva</p>
                  <img src={MarqueeStar} />
                  <p>Packaging Design</p>
                  <img src={MarqueeStar} />
                </div>
              </div>
            </div>
            <div className="virtual-card-banner-marquee yellow">
              <div className="virtual-card-banner-marquee-wrapper ">
                <div className="virtual-card-banner-marquee-marquee">
                  <p>Logo Design</p>
                  <img src={MarqueeStar} />
                  <p> Branding</p>
                  <img src={MarqueeStar} />
                  <p> Social Media Posts </p>
                  <img src={MarqueeStar} />
                  <p> Business Cards</p>
                  <img src={MarqueeStar} />
                  <p> Social Media Ads</p>
                  <img src={MarqueeStar} />
                  <p>Website Graphics </p>
                  <img src={MarqueeStar} />
                  <p>App Graphics</p>
                  <img src={MarqueeStar} />
                  <p>Social Media Strategist</p>
                  <img src={MarqueeStar} />
                  <p> Canva</p>
                  <img src={MarqueeStar} />
                  <p>Packaging Design</p>
                  <img src={MarqueeStar} />
                  <p>Logo Design</p>
                  <img src={MarqueeStar} />
                  <p> Branding</p>
                  <img src={MarqueeStar} />
                  <p> Social Media Posts </p>
                  <img src={MarqueeStar} />
                  <p> Business Cards</p>
                  <img src={MarqueeStar} />
                  <p> Social Media Ads</p>
                  <img src={MarqueeStar} />
                  <p>Website Graphics </p>
                  <img src={MarqueeStar} />
                  <p>App Graphics</p>
                  <img src={MarqueeStar} />
                  <p>Social Media Strategist</p>
                  <img src={MarqueeStar} />
                  <p> Canva</p>
                  <img src={MarqueeStar} />
                  <p>Packaging Design</p>
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
          <h2>Graphic Design </h2>
          <p>
            Specialize in creating eye-catching designs for print and digital
            media, including branding, social media graphics, book covers, and
            marketing materials. Combining artistic skills with strategic
            thinking to deliver impactful visuals that align with client goals
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
      <div className="virtual-card-reach">
        <img
          src={ReachDesktopBackground}
          className="virtual-card-reach-background desktop"
        />
        <img
          src={ReachMobileBackground}
          className="virtual-card-reach-background mobile"
        />
        <div className="virtual-card-reach-container">
          <section>
            <a
              href="tel:+917073067977"
              className="virtual-card-reach-set"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={CallIcon} />
              <p>+91 70730 67977</p>
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&to=lakshitdesigningstudio@gmail.com"
              className="virtual-card-reach-set"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={EmailIcon} />
              <p>lakshitdesigningstudio@gmail.com</p>
            </a>
            <a
              href="https://maps.app.goo.gl/W8Rhj6cgxmxJTwdE6"
              target="_blank"
              className="virtual-card-reach-set"
            >
              <img src={LocationIcon} />
              <p>Kota</p>
            </a>
          </section>
        </div>
      </div>
      <div className="virtual-card-find">
        <img
          src={FindDesktopBackground}
          className="virtual-card-find-background"
        />
        <h2>Find and Follow</h2>
        <div className="virtual-card-find-container">
          <a
            href="https://www.linkedin.com/in/lakshitjainn"
            target="_blank"
            className="virtual-card-find-set"
          >
            <div className="virtual-card-find-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="124"
                height="124"
                viewBox="0 0 124 124"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M93 15.5C97.1109 15.5 101.053 17.133 103.96 20.0398C106.867 22.9467 108.5 26.8891 108.5 31V93C108.5 97.1109 106.867 101.053 103.96 103.96C101.053 106.867 97.1109 108.5 93 108.5H31C26.8891 108.5 22.9467 106.867 20.0398 103.96C17.133 101.053 15.5 97.1109 15.5 93V31C15.5 26.8891 17.133 22.9467 20.0398 20.0398C22.9467 17.133 26.8891 15.5 31 15.5H93ZM41.3333 51.6667C39.963 51.6667 38.6489 52.211 37.6799 53.1799C36.711 54.1489 36.1667 55.463 36.1667 56.8333V82.6667C36.1667 84.0369 36.711 85.3511 37.6799 86.3201C38.6489 87.289 39.963 87.8333 41.3333 87.8333C42.7036 87.8333 44.0178 87.289 44.9867 86.3201C45.9557 85.3511 46.5 84.0369 46.5 82.6667V56.8333C46.5 55.463 45.9557 54.1489 44.9867 53.1799C44.0178 52.211 42.7036 51.6667 41.3333 51.6667ZM56.8333 46.5C55.463 46.5 54.1489 47.0443 53.1799 48.0133C52.211 48.9822 51.6667 50.2964 51.6667 51.6667V82.6667C51.6667 84.0369 52.211 85.3511 53.1799 86.3201C54.1489 87.289 55.463 87.8333 56.8333 87.8333C58.2036 87.8333 59.5178 87.289 60.4867 86.3201C61.4557 85.3511 62 84.0369 62 82.6667V63.7567C63.5758 61.9793 66.2367 59.892 69.1972 58.6262C70.9177 57.8925 73.5062 57.5928 75.3042 58.1612C75.9006 58.3125 76.4319 58.6533 76.818 59.1325C77.0867 59.4942 77.5 60.3002 77.5 62V82.6667C77.5 84.0369 78.0443 85.3511 79.0133 86.3201C79.9822 87.289 81.2964 87.8333 82.6667 87.8333C84.0369 87.8333 85.3511 87.289 86.3201 86.3201C87.289 85.3511 87.8333 84.0369 87.8333 82.6667V62C87.8333 58.5383 86.955 55.459 85.126 52.9893C83.443 50.7499 81.0875 49.1077 78.4042 48.3032C73.7438 46.841 68.5823 47.6522 65.1362 49.1298C64.0329 49.6044 62.9581 50.1426 61.9173 50.7418C61.7007 49.5514 61.0732 48.4747 60.1441 47.6995C59.215 46.9243 58.0433 46.4998 56.8333 46.5ZM41.3333 36.1667C39.963 36.1667 38.6489 36.711 37.6799 37.6799C36.711 38.6489 36.1667 39.963 36.1667 41.3333C36.1667 42.7036 36.711 44.0178 37.6799 44.9867C38.6489 45.9557 39.963 46.5 41.3333 46.5C42.7036 46.5 44.0178 45.9557 44.9867 44.9867C45.9557 44.0178 46.5 42.7036 46.5 41.3333C46.5 39.963 45.9557 38.6489 44.9867 37.6799C44.0178 36.711 42.7036 36.1667 41.3333 36.1667Z"
                  fill="white"
                />
              </svg>
            </div>
            <h3 className="virtual-card-find-icon-label">LinkedIn</h3>
          </a>
          <a
            href="https://www.instagram.com/lakshitjain_/"
            target="_blank"
            className="virtual-card-find-set"
          >
            <div className="virtual-card-find-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="124"
                height="124"
                viewBox="0 0 124 124"
                fill="none"
              >
                <path
                  d="M67.311 10.3334C73.1235 10.3489 76.0737 10.3799 78.6208 10.4522L79.6232 10.4884C80.7805 10.5297 81.9223 10.5814 83.3018 10.6434C88.7992 10.9017 92.5502 11.7697 95.8413 13.0459C99.2513 14.3582 102.124 16.1355 104.997 19.003C107.625 21.585 109.658 24.7095 110.954 28.1584C112.23 31.4495 113.098 35.2005 113.356 40.703C113.418 42.0774 113.47 43.2192 113.511 44.3817L113.542 45.384C113.62 47.926 113.651 50.8762 113.661 56.6887L113.666 60.543V67.3114C113.679 71.08 113.639 74.8485 113.548 78.616L113.517 79.6184C113.475 80.7809 113.424 81.9227 113.362 83.297C113.103 88.7995 112.225 92.5454 110.954 95.8417C109.658 99.2906 107.625 102.415 104.997 104.997C102.415 107.625 99.2902 109.658 95.8413 110.954C92.5502 112.23 88.7992 113.098 83.3018 113.357L79.6232 113.512L78.6208 113.543C76.0737 113.615 73.1235 113.651 67.311 113.662L63.4567 113.667H56.6935C52.9232 113.68 49.1529 113.64 45.3837 113.548L44.3814 113.517C43.1548 113.47 41.9286 113.417 40.7027 113.357C35.2053 113.098 31.4543 112.23 28.158 110.954C24.711 109.658 21.5883 107.625 19.0078 104.997C16.3777 102.416 14.3429 99.2911 13.0455 95.8417C11.7694 92.5505 10.9013 88.7995 10.643 83.297L10.488 79.6184L10.4622 78.616C10.3669 74.8486 10.3239 71.08 10.333 67.3114V56.6887C10.3187 52.9201 10.3566 49.1516 10.4467 45.384L10.4829 44.3817C10.5242 43.2192 10.5759 42.0774 10.6379 40.703C10.8962 35.2005 11.7642 31.4547 13.0403 28.1584C14.3408 24.7081 16.3792 21.5835 19.013 19.003C21.592 16.376 24.7128 14.3431 28.158 13.0459C31.4543 11.7697 35.2002 10.9017 40.7027 10.6434C42.077 10.5814 43.224 10.5297 44.3814 10.4884L45.3837 10.4574C49.1512 10.3656 52.9198 10.326 56.6883 10.3385L67.311 10.3334ZM61.9997 36.1667C55.1483 36.1667 48.5774 38.8884 43.7328 43.7331C38.8881 48.5778 36.1663 55.1486 36.1663 62C36.1663 68.8515 38.8881 75.4223 43.7328 80.267C48.5774 85.1117 55.1483 87.8334 61.9997 87.8334C68.8511 87.8334 75.4219 85.1117 80.2666 80.267C85.1113 75.4223 87.833 68.8515 87.833 62C87.833 55.1486 85.1113 48.5778 80.2666 43.7331C75.4219 38.8884 68.8511 36.1667 61.9997 36.1667ZM61.9997 46.5C64.0352 46.4997 66.0508 46.9003 67.9315 47.6789C69.8121 48.4576 71.521 49.599 72.9606 51.0381C74.4001 52.4771 75.5421 54.1856 76.3214 56.0661C77.1007 57.9465 77.5019 59.962 77.5023 61.9975C77.5026 64.033 77.102 66.0486 76.3234 67.9293C75.5448 69.8099 74.4033 71.5188 72.9642 72.9584C71.5252 74.3979 69.8167 75.5399 67.9362 76.3192C66.0558 77.0984 64.0403 77.4997 62.0048 77.5C57.894 77.5 53.9515 75.867 51.0447 72.9602C48.1379 70.0534 46.5049 66.1109 46.5049 62C46.5049 57.8892 48.1379 53.9467 51.0447 51.0399C53.9515 48.1331 57.894 46.5 62.0048 46.5M89.1298 28.4167C87.417 28.4167 85.7743 29.0971 84.5631 30.3083C83.3519 31.5195 82.6715 33.1622 82.6715 34.875C82.6715 36.5879 83.3519 38.2306 84.5631 39.4418C85.7743 40.6529 87.417 41.3334 89.1298 41.3334C90.8427 41.3334 92.4854 40.6529 93.6966 39.4418C94.9078 38.2306 95.5882 36.5879 95.5882 34.875C95.5882 33.1622 94.9078 31.5195 93.6966 30.3083C92.4854 29.0971 90.8427 28.4167 89.1298 28.4167Z"
                  fill="white"
                />
              </svg>
            </div>
            <h3 className="virtual-card-find-icon-label">Instagram</h3>
          </a>
        </div>
      </div>
      <div className="virtual-card-watch">
        <h2>Working Hours</h2>
        <div className="virtual-card-watch-container">
          <div className="virtual-card-watch-weeks">
            {Object.keys(schedule).map((dayKey, index) => (
              <button
                key={index}
                className={`${
                  selectedDay === dayKey ? "virtual-card-watch-active-week" : ""
                }`}
                onClick={() => handleDayClick(dayKey)}
              >
                {dayKey.replace("2", "")}
              </button>
            ))}
          </div>
          <div className="virtual-card-watch-display">
            <img
              src={WatchDesktopBackground}
              className="virtual-card-watch-frame"
            />
            <div
              className={`virtual-card-watch-content ${
                available ? "" : "virtual-card-watch-red"
              }`}
            >
              <h3>{day}</h3>
              <section>
                <div className="virtual-card-watch-available">
                  <div className="virtual-card-watch-dot">
                    <sub></sub>
                  </div>
                  <span>{available ? "Available Now" : "Not Available"}</span>
                </div>
                {available ? (
                  <p>
                    {startTime} <br />-<br />
                    {endTime}
                  </p>
                ) : (
                  <p>Not Working</p>
                )}
              </section>
              <img src={Logo} />
            </div>
          </div>
        </div>
      </div>
      <div className="virtual-card-skills">
        <img
          src={SkillsDesktopBackground}
          className="virtual-card-skills-background desktop"
        />
        <img
          src={SkillsMobileBackground}
          className="virtual-card-skills-background mobile"
        />
        <div className="virtual-card-skills-div">
          <h2>Skills & Expertise</h2>
          <div className="virtual-card-skills-container">
            <div className="virtual-card-skills-set">
              <section>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <path
                    d="M28 14.0366C18.3546 12.6113 15.1263 9.70043 14.0183 0C12.6826 10.0198 9.29057 12.5671 0 14.0366C9.56085 15.0461 12.3361 17.9639 14.0183 28C15.078 18.9926 17.4864 15.3851 28 14.0366Z"
                    fill="white"
                  />
                </svg>
              </section>
              <h3>Canva</h3>
            </div>
            <div className="virtual-card-skills-set">
              <section>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <path
                    d="M28 14.0366C18.3546 12.6113 15.1263 9.70043 14.0183 0C12.6826 10.0198 9.29057 12.5671 0 14.0366C9.56085 15.0461 12.3361 17.9639 14.0183 28C15.078 18.9926 17.4864 15.3851 28 14.0366Z"
                    fill="white"
                  />
                </svg>
              </section>
              <h3> Branding</h3>
            </div>
            <div className="virtual-card-skills-set">
              <section>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <path
                    d="M28 14.0366C18.3546 12.6113 15.1263 9.70043 14.0183 0C12.6826 10.0198 9.29057 12.5671 0 14.0366C9.56085 15.0461 12.3361 17.9639 14.0183 28C15.078 18.9926 17.4864 15.3851 28 14.0366Z"
                    fill="white"
                  />
                </svg>
              </section>
              <h3> Logo Design </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="virtual-card-experience">
        <img
          src={ExperienceDesktopBackground}
          className="virtual-card-experience-background desktop"
        />
        <img
          src={ExperienceMobileBackground}
          className="virtual-card-experience-background mobile"
        />
        <h2>Work Experience</h2>
        <div className="virtual-card-experience-container">
          <div className="virtual-card-experience-set">
            <h3>Graphic Design</h3>
            <section>
              <h4>Koios Stuidos</h4>
              <p>July 2025 - Present</p>
            </section>
          </div>
          <div className="virtual-card-experience-set">
            <h3>Graphic Design Intern</h3>
            <section>
              <h4>Koios Stuidos</h4>
              <p>January 2025 - July 2025</p>
            </section>
          </div>
          <div className="virtual-card-experience-set">
            <h3>Design & Creative Head</h3>
            <section>
              <h4>Entrepreneur One Magazine</h4>
              <p>November 2022 - October 2024</p>
            </section>
          </div>
          <div className="virtual-card-experience-set">
            <h3>Editor</h3>
            <section>
              <h4>The Opus Coliseum</h4>
              <p>September 2020 - October 2022</p>
            </section>
          </div>
        </div>
      </div>
      <div className="virtual-card-contact">
        <img
          src={ContactDesktopBackground}
          className="virtual-card-contact-background desktop"
          alt="Contact Background"
        />
        <img
          src={ContactMobileBackground}
          className="virtual-card-contact-background mobile"
          alt="Contact Background"
        />
        <div className="virtual-card-contact-container">
          <h2>Contact Me</h2>
          <form action="https://formspree.io/f/meokzweq" method="post">
            <div className="form-section">
              <section>
                <label htmlFor="first-name">
                  First name<span>*</span>
                </label>
                <input
                  type="text"
                  id="first-name"
                  name="firstName"
                  required
                  autoComplete="given-name"
                />
              </section>
              <section>
                <label htmlFor="last-name">
                  Last name <span>*</span>
                </label>
                <input
                  type="text"
                  id="last-name"
                  name="lastName"
                  required
                  autoComplete="family-name"
                />
              </section>
            </div>
            <section>
              <label htmlFor="email">
                Email Id <span>*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                autoComplete="email"
              />
            </section>
            <section>
              <label htmlFor="mobile">
                Mobile number <span>*</span>
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                required
                autoComplete="tel"
                pattern="[0-9]{10}"
                title="Enter a valid 10-digit mobile number"
              />
            </section>
            <section>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" autoComplete="off" />
            </section>
            <button type="submit" className="virtual-card-white-button">
              <p>Submit</p>
            </button>
          </form>
        </div>
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
        <div className="virtual-star-twinkle twinkle-6">
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
        <div className="virtual-star-twinkle twinkle-7">
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
      <TKSconnect />
      <TKSfooter />
    </div>
  );
}

export default LakshitJain;
