import React, { useState } from "react";
import vCardsJS from "vcards-js";
import "./TKSstyle.css";
import Logo from "./assets/Footer Company Logo.png";
import BannerDesktopBackround from "./assets/TKS Desktop Banner.png";
import BannerMobileBackround from "./assets/TKS Mobile Banner.png";
import Verified from "./assets/Verified.png";
import BannerButton from "./assets/TKS Banner Button Background.png";
import PersonPhoto from "/Payal.jpeg";
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
    startTime: "09:00 AM",
    endTime: "05:00 PM",
  },
  T: {
    day: "TUESDAY",
    available: true,
    startTime: "09:00 AM",
    endTime: "05:00 PM",
  },
  W: {
    day: "WEDNESDAY",
    available: true,
    startTime: "09:00 AM",
    endTime: "05:00 PM",
  },
  T2: {
    day: "THURSDAY",
    available: true,
    startTime: "09:00 AM",
    endTime: "05:00 PM",
  },
  F: {
    day: "FRIDAY",
    available: true,
    startTime: "09:00 AM",
    endTime: "05:00 PM",
  },
  S2: {
    day: "SATURDAY",
    available: true,
    startTime: "09:00 AM",
    endTime: "05:00 PM",
  },
};

function Payal() {
  const handleDownloadVCard = async () => {
    const vCard = vCardsJS();

    vCard.firstName = "Payal Sunilrao Kathiwale ";
    vCard.cellPhone = "+917385312748";
    vCard.email = "kathiwalepayal@gmail.com";
    vCard.organization = "Koios Studio";

    const imageBase64 = await getBase64FromImage(
      `${window.location.origin}/Payal.jpeg`
    );
    vCard.photo.embedFromString(imageBase64, "image/jpeg");

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
          href="https://www.linkedin.com/in/payal-kathiwale-5667a7320/"
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
                  Payal Sunilrao Kathiwale
                  <img src={Verified} />
                </h1>
                <div className="virtual-card-banner-designation">
                  <span>Business Development Executive </span>
                </div>
              </section>
              <p>
                Serving as the bridge between an organization's offerings and
                the ever-evolving needs of the market, constantly seeking out
                new avenues for growth and competitive advantage.
              </p>
            </div>
            <a
              href="https://www.linkedin.com/in/payal-kathiwale-5667a7320/"
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
                  <p>Business Development</p>
                  <img src={MarqueeStar} />
                  <p>Sales Strategy</p>
                  <img src={MarqueeStar} />
                  <p>Client Acquisition</p>
                  <img src={MarqueeStar} />
                  <p>Market Expansion</p>
                  <img src={MarqueeStar} />
                  <p>Revenue Growth</p>
                  <img src={MarqueeStar} />
                  <p>Business Proposals</p>
                  <img src={MarqueeStar} />
                  <p>Negotiation</p>
                  <img src={MarqueeStar} />
                  <p>Forecasting</p>
                  <img src={MarqueeStar} />
                  <p>Business Development</p>
                  <img src={MarqueeStar} />
                  <p>Sales Strategy</p>
                  <img src={MarqueeStar} />
                  <p>Client Acquisition</p>
                  <img src={MarqueeStar} />
                  <p>Market Expansion</p>
                  <img src={MarqueeStar} />
                  <p>Revenue Growth</p>
                  <img src={MarqueeStar} />
                  <p>Business Proposals</p>
                  <img src={MarqueeStar} />
                  <p>Negotiation</p>
                  <img src={MarqueeStar} />
                  <p>Forecasting</p>
                  <img src={MarqueeStar} />
                </div>
              </div>
            </div>
            <div className="virtual-card-banner-marquee yellow">
              <div className="virtual-card-banner-marquee-wrapper ">
                <div className="virtual-card-banner-marquee-marquee">
                  <p>Business Development</p>
                  <img src={MarqueeStar} />
                  <p>Sales Strategy</p>
                  <img src={MarqueeStar} />
                  <p>Client Acquisition</p>
                  <img src={MarqueeStar} />
                  <p>Market Expansion</p>
                  <img src={MarqueeStar} />
                  <p>Revenue Growth</p>
                  <img src={MarqueeStar} />
                  <p>Business Proposals</p>
                  <img src={MarqueeStar} />
                  <p>Negotiation</p>
                  <img src={MarqueeStar} />
                  <p>Forecasting</p>
                  <img src={MarqueeStar} />
                  <p>Business Development</p>
                  <img src={MarqueeStar} />
                  <p>Sales Strategy</p>
                  <img src={MarqueeStar} />
                  <p>Client Acquisition</p>
                  <img src={MarqueeStar} />
                  <p>Market Expansion</p>
                  <img src={MarqueeStar} />
                  <p>Revenue Growth</p>
                  <img src={MarqueeStar} />
                  <p>Business Proposals</p>
                  <img src={MarqueeStar} />
                  <p>Negotiation</p>
                  <img src={MarqueeStar} />
                  <p>Forecasting</p>
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
          <h2>BDE</h2>
          <p>
            A Business Development Executive (BDE) is a strategic professional
            who drives company growth by identifying and pursuing new business
            opportunities, building relationships with potential clients, and
            developing strategies to expand market presence.
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
              href="tel:+917385312748"
              className="virtual-card-reach-set"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={CallIcon} />
              <p>+91 73853 12748</p>
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&to=kathiwalepayal@gmail.com"
              className="virtual-card-reach-set"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={EmailIcon} />
              <p>kathiwalepayal@gmail.com</p>
            </a>
            <a
              href="https://maps.app.goo.gl/5Q7CG1i6MpXWMuJAA"
              target="_blank"
              className="virtual-card-reach-set"
            >
              <img src={LocationIcon} />
              <p>Amravati</p>
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
            href="https://www.linkedin.com/in/payal-kathiwale-5667a7320/"
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
            href="https://www.facebook.com/payal.kathiwale?mibextid=ZbWKwL"
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
                  d="M113.667 62C113.667 33.48 90.5206 10.3334 62.0006 10.3334C33.4806 10.3334 10.334 33.48 10.334 62C10.334 87.0067 28.1073 107.828 51.6673 112.633V77.5H41.334V62H51.6673V49.0834C51.6673 39.1117 59.779 31 69.7506 31H82.6673V46.5H72.334C69.4923 46.5 67.1673 48.825 67.1673 51.6667V62H82.6673V77.5H67.1673V113.408C93.259 110.825 113.667 88.815 113.667 62Z"
                  fill="white"
                />
              </svg>
            </div>
            <h3 className="virtual-card-find-icon-label">Facebook</h3>
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
      {/* <div className="virtual-card-skills">
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
              <h3>HTML</h3>
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
              <h3>CSS</h3>
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
              <h3>JavaScript</h3>
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
              <h3>React</h3>
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
              <h3>Redux</h3>
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
              <h3>TypeScript</h3>
            </div>
          </div>
        </div>
      </div> */}
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
            <h3>Business Development Executive</h3>
            <section>
              <h4>Koios Studio </h4>
              <p>July 2024 - Present</p>
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

export default Payal;
