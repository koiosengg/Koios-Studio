import React, { useState } from "react";
import vCardsJS from "vcards-js";
import "./TKSstyle.css";
import Logo from "./assets/Footer Company Logo.png";
import BannerDesktopBackround from "./assets/TKS Desktop Banner.png";
import BannerMobileBackround from "./assets/TKS Mobile Banner.png";
import Verified from "./assets/Verified.png";
import BannerButton from "./assets/TKS Banner Button Background.png";
import PersonPhoto from "/ShvethaS.png";
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
    available: true,
    startTime: "10:00 AM",
    endTime: "07:00 PM",
  },
  M: {
    day: "MONDAY",
    available: false,
    startTime: "",
    endTime: "",
  },
  T: {
    day: "TUESDAY",
    available: true,
    startTime: "10:00 AM",
    endTime: "07:00 PM",
  },
  W: {
    day: "WEDNESDAY",
    available: true,
    startTime: "10:00 AM",
    endTime: "07:00 PM",
  },
  T2: {
    day: "THURSDAY",
    available: true,
    startTime: "10:00 AM",
    endTime: "07:00 PM",
  },
  F: {
    day: "FRIDAY",
    available: true,
    startTime: "10:00 AM",
    endTime: "07:00 PM",
  },
  S2: {
    day: "SATURDAY",
    available: true,
    startTime: "10:00 AM",
    endTime: "07:00 PM",
  },
};

function ShvethaS() {
  const handleDownloadVCard = async () => {
    const vCard = vCardsJS();

    vCard.firstName = "Shvetha S";
    vCard.cellPhone = "+916381384343";
    vCard.email = "shvethanila@gmail.com";
    vCard.organization = "Koios Studio";

    const imageBase64 = await getBase64FromImage(
      `${window.location.origin}/ShvethaS.png`
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
          href="https://www.linkedin.com/in/shvetha-s-"
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
                  Shvetha S
                  <img src={Verified} />
                </h1>
                <div className="virtual-card-banner-designation">
                  <span>UX Designer</span>
                </div>
              </section>
              <p>
                Crafting intuitive, user-centered designs that balance form and
                function. From concept to clickable, turnig ideas into impactful
                digital experiences.
              </p>
            </div>
            <a
              href="https://www.linkedin.com/in/shvetha-s-"
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
                  <p>Website Design</p>
                  <img src={MarqueeStar} />
                  <p>App Design</p>
                  <img src={MarqueeStar} />
                  <p>Responsive Design</p>
                  <img src={MarqueeStar} />
                  <p>Wireframes</p>
                  <img src={MarqueeStar} />
                  <p>User Research</p>
                  <img src={MarqueeStar} />
                  <p>User Experience</p>
                  <img src={MarqueeStar} />
                  <p>User Interface</p>
                  <img src={MarqueeStar} />
                  <p>Design Thinking</p>
                  <img src={MarqueeStar} />
                  <p>Typography</p>
                  <img src={MarqueeStar} />
                  <p>Website Design</p>
                  <img src={MarqueeStar} />
                  <p>App Design</p>
                  <img src={MarqueeStar} />
                  <p>Responsive Design</p>
                  <img src={MarqueeStar} />
                  <p>Wireframes</p>
                  <img src={MarqueeStar} />
                  <p>User Research</p>
                  <img src={MarqueeStar} />
                  <p>User Experience</p>
                  <img src={MarqueeStar} />
                  <p>User Interface</p>
                  <img src={MarqueeStar} />
                  <p>Design Thinking</p>
                  <img src={MarqueeStar} />
                  <p>Typography</p>
                  <img src={MarqueeStar} />
                </div>
              </div>
            </div>
            <div className="virtual-card-banner-marquee yellow">
              <div className="virtual-card-banner-marquee-wrapper ">
                <div className="virtual-card-banner-marquee-marquee">
                  <p>Website Design</p>
                  <img src={MarqueeStar} />
                  <p>App Design</p>
                  <img src={MarqueeStar} />
                  <p>Responsive Design</p>
                  <img src={MarqueeStar} />
                  <p>Wireframes</p>
                  <img src={MarqueeStar} />
                  <p>User Research</p>
                  <img src={MarqueeStar} />
                  <p>User Experience</p>
                  <img src={MarqueeStar} />
                  <p>User Interface</p>
                  <img src={MarqueeStar} />
                  <p>Design Thinking</p>
                  <img src={MarqueeStar} />
                  <p>Typography</p>
                  <img src={MarqueeStar} />
                  <p>Website Design</p>
                  <img src={MarqueeStar} />
                  <p>App Design</p>
                  <img src={MarqueeStar} />
                  <p>Responsive Design</p>
                  <img src={MarqueeStar} />
                  <p>Wireframes</p>
                  <img src={MarqueeStar} />
                  <p>User Research</p>
                  <img src={MarqueeStar} />
                  <p>User Experience</p>
                  <img src={MarqueeStar} />
                  <p>User Interface</p>
                  <img src={MarqueeStar} />
                  <p>Design Thinking</p>
                  <img src={MarqueeStar} />
                  <p>Typography</p>
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
          <h2>UX Designer</h2>
          <p>
            Turning ideas into smooth, scroll-stopping experiences with
            sketching, tweaking, and testing till it feels just right. Whether
            it’s an app or a website, Making things look cool and work even
            cooler because good design should be feeling easy.
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
              href="tel:+916381384343"
              className="virtual-card-reach-set"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={CallIcon} />
              <p>+91 63813 84343</p>
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&to=shvethanila@gmail.com"
              className="virtual-card-reach-set"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={EmailIcon} />
              <p>shvethanila@gmail.com</p>
            </a>
            <a
              href="https://maps.app.goo.gl/EzFmtwiwFcGmbFEM8"
              target="_blank"
              className="virtual-card-reach-set"
            >
              <img src={LocationIcon} />
              <p>Madurai</p>
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
            href="https://www.linkedin.com/in/shvetha-s-"
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
            href="https://www.behance.net/Shvetha"
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
                  d="M87 59.6923C87.7692 60.8461 88.5385 62 88.9231 63.9231H76.6154C76.6154 63.5385 76.6154 62.7692 77 62C77.3846 61.2308 77.3846 60.8462 78.1538 60.0769C78.5385 59.3077 79.3077 58.9231 80.0769 58.5385C80.8462 58.1538 82 57.7692 83.1538 57.7692C84.6923 58.1538 86.2308 58.5385 87 59.6923ZM51.6154 57C52.3846 56.2308 53.1538 55.0769 53.1538 53.5385C53.1538 52.7692 53.1538 52 52.7692 51.2308C52.3846 50.8462 52 50.0769 51.6154 50.0769C51.2308 49.6923 50.4615 49.6923 49.6923 49.3077H39.6923V58.1538H48.1538C49.3077 58.1538 50.4615 57.7692 51.6154 57ZM48.5385 63.5385H39.6923V73.9231H48.5385C49.3077 73.9231 50.0769 73.9231 50.8462 73.5385C51.6154 73.5385 52.3846 73.1538 52.7692 72.7692C53.1538 72.3846 53.9231 72 54.3077 71.2308C54.6923 70.4615 54.6923 69.6923 54.6923 68.9231C54.6923 67 54.3077 65.4615 53.1538 64.6923C52 63.9231 50.4615 63.5385 48.5385 63.5385ZM112 30.8462V93.1538C112 103.538 103.538 112 93.1538 112H30.8462C20.4615 112 12 103.538 12 93.1538V30.8462C12 20.4615 20.4615 12 30.8462 12H93.1538C103.538 12 112 20.4615 112 30.8462ZM75.0769 48.9231H90.4615V45.0769H75.0769V48.9231ZM62.7692 69.6923C62.7692 67.3846 62.3846 65.4615 61.2308 63.5385C60.0769 62 58.5385 60.8462 56.2308 60.0769C57.7692 59.3077 59.3077 58.1538 60.0769 57C60.8462 55.8462 61.2308 54.3077 61.2308 52.3846C61.2308 49.5 60.8462 49.3077 60.4615 47.7692C59.6923 46.6154 58.9231 45.4615 58.1538 45.0769C57 44.3077 55.8462 43.9231 54.3077 43.5385C52.3846 42.7692 50.8462 42.7692 48.9231 42.7692H31.2308V80.4615H49.6923C51.2308 80.4615 53.1538 80.0769 54.6923 79.6923C56.2308 79.3077 57.7692 78.5385 58.9231 77.7692C60.0769 77 61.2308 75.8462 62 74.3077C62.3846 73.1538 62.7692 71.6154 62.7692 69.6923ZM76.6154 68.5385H96.2308C96.2308 66.2308 96.2308 64.3077 95.8461 62.3846C95.4615 60.4615 94.6923 58.5385 93.5385 57.3846C92.3846 55.8462 90.8462 54.6923 89.3077 53.9231C87.3846 53.1538 85.4615 52.3846 83.1538 52.3846C81.2308 52.3846 79.3077 52.7692 77.3846 53.5385C75.8462 54.3077 74.3077 55.4615 72.7692 56.6154C71.6154 57.7692 70.4615 59.3077 70.0769 61.2308C69.3077 63.1538 68.9231 65.0769 68.9231 67C68.9231 69.8846 69.3077 71.2308 70.0769 72.7692C70.8462 74.6923 71.6154 76.2308 72.7692 77.3846C73.9231 78.5385 75.4615 79.6923 77 80.4615C78.9231 81.2308 80.8462 81.6154 82.7692 81.6154C85.8462 81.6154 88.5385 80.8462 90.8462 79.3077C93.1538 77.7692 94.6923 75.4615 95.8461 72.3846H89.3077C88.9231 73.1538 88.5385 73.9231 87.3846 74.6923C86.2308 75.4615 85.0769 75.8462 83.5385 75.8462C81.6154 75.8462 79.6923 75.4615 78.5385 74.3077C77.3846 72.7692 76.6154 70.8462 76.6154 68.5385Z"
                  fill="white"
                />
              </svg>
            </div>
            <h3 className="virtual-card-find-icon-label">Behance</h3>
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
              <h3>Wireframing</h3>
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
              <h3> Prototyping</h3>
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
              <h3>Figma </h3>
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
              <h3>User research </h3>
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
            <h3>UX Designer</h3>
            <section>
              <h4>Koios Stuidos</h4>
              <p>March 2024 - Present</p>
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
          <form>
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

export default ShvethaS;
