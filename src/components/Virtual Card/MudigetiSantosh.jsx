import React, { useState } from "react";
import vCardsJS from "vcards-js";
import { Link } from "react-router-dom";
import "./TKSstyle.css";
import Logo from "./assets/Footer Company Logo.png";
import BannerDesktopBackround from "./assets/TKS Desktop Banner.png";
import BannerMobileBackround from "./assets/TKS Mobile Banner.png";
import Verified from "./assets/Verified.png";
import BannerButton from "./assets/TKS Banner Button Background.png";
import PersonPhoto from "/MudigetiSantosh.jpg";
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
import ServicesDesktopBackground from "./assets/TKS Desktop Services.png";
import ServicesMobileBackground from "./assets/TKS Mobile Services.png";
import ServicesDesktopCardBackground from "./assets/TKS Desktop Services Card.png";
import ServicesMobileCardBackground from "./assets/TKS Mobile Services Card.png";
import ProductsDesktopBackground from "./assets/TKS Desktop Products.png";
import ProductsMobileBackground from "./assets/TKS Mobile Products.png";
import ProductsSampleServices from "./assets/Sample Services.png";
import WatchDesktopBackground from "./assets/TKS Desktop Watch.png";
import SkillsDesktopBackground from "./assets/TKS Desktop Skills.png";
import SkillsMobileBackground from "./assets/TKS Mobile Skills.png";
import ExperienceDesktopBackground from "./assets/TKS Desktop Experience.png";
import ExperienceMobileBackground from "./assets/TKS Mobile Experience.png";
import ContactDesktopBackground from "./assets/TKS Desktop Contact.png";
import ContactMobileBackground from "./assets/TKS Mobile Contact.png";
import TestimonySample from "./assets/Testimony.jpg";
import TestimonyStar from "./assets/Testimony Star.png";
import ConnectDesktopBackground from "./assets/TKS Desktop Connect.png";
import ConnectMobileBackground from "./assets/TKS Mobile Connect.png";

const schedule = {
  S: {
    day: "SUNDAY",
    available: true,
    startTime: "09:00 AM",
    endTime: "05:00 PM",
  },
  M: { day: "MONDAY", available: false, startTime: "", endTime: "" },
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

function MudigetiSantosh() {
  const handleDownloadVCard = async () => {
    const vCard = vCardsJS();

    vCard.firstName = "M Santosh";
    vCard.cellPhone = "+919347744407";
    vCard.email = "sunny92002@gmail.com";
    vCard.organization = "Koios Studio";

    const imageBase64 = await getBase64FromImage(
      `${window.location.origin}/MudigetiSantosh.jpg`
    );
    vCard.photo.embedFromString(imageBase64, "image/jpg");

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

  const currentYear = new Date().getFullYear();

  return (
    <div className="virtual-card">
      <div className="virtual-card-bottom-bar mobile">
        <a onClick={handleDownloadVCard} className="virtual-card-white-button">
          <p>Save Contact</p>
        </a>
        <a
          href="https://www.linkedin.com/in/santosh09062002/"
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
                  Mudigeti Santosh
                  <img src={Verified} />
                </h1>
                <div className="virtual-card-banner-designation">
                  <span>Frontend Developer</span>
                </div>
              </section>
              <p>
                Aspiring React Frontend Developer | Passionate about Crafting
                Intuitive and Efficient User Experiences
              </p>
            </div>
            <a
              href="https://www.linkedin.com/in/santosh09062002/"
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
                  <p>Website Development</p>
                  <img src={MarqueeStar} />
                  <p>Responsive Development</p>
                  <img src={MarqueeStar} />
                  <p>Redux</p>
                  <img src={MarqueeStar} />
                  <p>React</p>
                  <img src={MarqueeStar} />
                  <p>HTML</p>
                  <img src={MarqueeStar} />
                  <p>CSS</p>
                  <img src={MarqueeStar} />
                  <p>JavaScript</p>
                  <img src={MarqueeStar} />
                  <p>TypeScript</p>
                  <img src={MarqueeStar} />
                  <p>GIT</p>
                  <img src={MarqueeStar} />
                  <p>Website Development</p>
                  <img src={MarqueeStar} />
                  <p>Responsive Development</p>
                  <img src={MarqueeStar} />
                  <p>Redux</p>
                  <img src={MarqueeStar} />
                  <p>React</p>
                  <img src={MarqueeStar} />
                  <p>HTML</p>
                  <img src={MarqueeStar} />
                  <p>CSS</p>
                  <img src={MarqueeStar} />
                  <p>JavaScript</p>
                  <img src={MarqueeStar} />
                  <p>TypeScript</p>
                  <img src={MarqueeStar} />
                  <p>GIT</p>
                  <img src={MarqueeStar} />
                </div>
              </div>
            </div>
            <div className="virtual-card-banner-marquee yellow">
              <div className="virtual-card-banner-marquee-wrapper ">
                <div className="virtual-card-banner-marquee-marquee">
                  <p>Website Development</p>
                  <img src={MarqueeStar} />
                  <p>Responsive Development</p>
                  <img src={MarqueeStar} />
                  <p>Redux</p>
                  <img src={MarqueeStar} />
                  <p>React</p>
                  <img src={MarqueeStar} />
                  <p>HTML</p>
                  <img src={MarqueeStar} />
                  <p>CSS</p>
                  <img src={MarqueeStar} />
                  <p>JavaScript</p>
                  <img src={MarqueeStar} />
                  <p>TypeScript</p>
                  <img src={MarqueeStar} />
                  <p>GIT</p>
                  <img src={MarqueeStar} />
                  <p>Website Development</p>
                  <img src={MarqueeStar} />
                  <p>Responsive Development</p>
                  <img src={MarqueeStar} />
                  <p>Redux</p>
                  <img src={MarqueeStar} />
                  <p>React</p>
                  <img src={MarqueeStar} />
                  <p>HTML</p>
                  <img src={MarqueeStar} />
                  <p>CSS</p>
                  <img src={MarqueeStar} />
                  <p>JavaScript</p>
                  <img src={MarqueeStar} />
                  <p>TypeScript</p>
                  <img src={MarqueeStar} />
                  <p>GIT</p>
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
          <h2>Frontend Developer</h2>
          <p>
            A React Frontend Developer with a strong grasp of the MERN stack,
            skilled in building and optimizing React components. Committed to
            writing clean, efficient code to deliver seamless and
            high-performance user experiences.
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
              href="tel:+919347744815"
              className="virtual-card-reach-set"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={CallIcon} />
              <p>+91 93477 44815</p>
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&to=sunny962002@gmail.com"
              className="virtual-card-reach-set"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={EmailIcon} />
              <p>sunny962002@gmail.com</p>
            </a>
            <a
              href="https://maps.app.goo.gl/e2NBaPiNyMoR7eqE9"
              target="_blank"
              className="virtual-card-reach-set"
            >
              <img src={LocationIcon} />
              <p>Bangalore</p>
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
            href="https://www.linkedin.com/in/santosh09062002/"
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
            href="https://github.com/Santosh-7124"
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
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M62.0007 10.3334C33.4548 10.3334 10.334 33.4542 10.334 62C10.325 72.8471 13.7335 83.4212 20.0755 92.221C26.4176 101.021 35.3707 107.599 45.6637 111.021C48.247 111.471 49.2132 109.921 49.2132 108.562C49.2132 107.338 49.146 103.271 49.146 98.9417C36.1673 101.334 32.809 95.7797 31.7757 92.8709C31.1918 91.3829 28.6757 86.8 26.4798 85.5704C24.6715 84.6042 22.0882 82.212 26.4127 82.15C30.484 82.0829 33.3877 85.8959 34.359 87.4459C39.009 95.2579 46.4387 93.062 49.4043 91.7084C49.859 88.35 51.2127 86.0922 52.7007 84.8005C41.2048 83.5089 29.1923 79.05 29.1923 59.2875C29.1923 53.6662 31.1918 49.0214 34.4882 45.4047C33.9715 44.113 32.1632 38.8172 35.0048 31.713C35.0048 31.713 39.3293 30.3542 49.2132 37.0037C53.4197 35.8394 57.7652 35.2536 62.1298 35.2625C66.5215 35.2625 70.9132 35.8412 75.0465 37.0037C84.9252 30.287 89.2548 31.713 89.2548 31.713C92.0965 38.8172 90.2882 44.113 89.7715 45.4047C93.0627 49.0214 95.0673 53.6042 95.0673 59.2875C95.0673 79.1172 82.9928 83.5089 71.497 84.8005C73.3673 86.4125 74.9845 89.5125 74.9845 94.3589C74.9845 101.267 74.9173 106.821 74.9173 108.567C74.9173 109.921 75.8887 111.533 78.472 111.016C88.7263 107.551 97.6365 100.958 103.95 92.1662C110.263 83.374 113.661 72.8241 113.667 62C113.667 33.4542 90.5465 10.3334 62.0007 10.3334Z"
                  fill="white"
                />
              </svg>
            </div>
            <h3 className="virtual-card-find-icon-label">GitHub</h3>
          </a>
          <a
            href="https://wa.me/919347744815"
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
                  d="M113.666 61.9999C113.666 33.4799 90.5197 10.3333 61.9997 10.3333C33.4797 10.3333 10.333 33.4799 10.333 61.9999C10.333 87.0066 28.1063 107.828 51.6663 112.633V77.4999H41.333V61.9999H51.6663V49.0833C51.6663 39.1116 59.778 30.9999 69.7497 30.9999H82.6663V46.4999H72.333C69.4913 46.4999 67.1663 48.8249 67.1663 51.6666V61.9999H82.6663V77.4999H67.1663V113.408C93.258 110.825 113.666 88.8149 113.666 61.9999Z"
                  fill="white"
                />
              </svg>
            </div>
            <h3 className="virtual-card-find-icon-label">WhatsApp</h3>
          </a>
        </div>
      </div>
      <div className="virtual-card-services">
        <img
          src={ServicesDesktopBackground}
          className="virtual-card-services-background desktop"
        />
        <div className="virtual-card-services-background-wrapper mobile">
          <img
            src={ServicesMobileBackground}
            className="virtual-card-services-background "
          />
        </div>
        <h2>Our Services</h2>
        <div className="virtual-card-services-container">
          <div className="virtual-card-services-set">
            <h3>Website Development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Lectus cursus platea
              lobortis id sit nibh ullamcorpo.
            </p>
            <img src={ServicesDesktopCardBackground} className="desktop" />
            <img src={ServicesMobileCardBackground} className="mobile" />
          </div>
          <div className="virtual-card-services-set">
            <h3>Website Development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Lectus cursus platea
              lobortis id sit nibh ullamcorpo.
            </p>
            <img src={ServicesDesktopCardBackground} className="desktop" />
            <img src={ServicesMobileCardBackground} className="mobile" />
          </div>
          <div className="virtual-card-services-set">
            <h3>Website Development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Lectus cursus platea
              lobortis id sit nibh ullamcorpo.
            </p>
            <img src={ServicesDesktopCardBackground} className="desktop" />
            <img src={ServicesMobileCardBackground} className="mobile" />
          </div>
          <div className="virtual-card-services-set">
            <h3>Website Development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Lectus cursus platea
              lobortis id sit nibh ullamcorpo.
            </p>
            <img src={ServicesDesktopCardBackground} className="desktop" />
            <img src={ServicesMobileCardBackground} className="mobile" />
          </div>
          <div className="virtual-card-services-set">
            <h3>Website Development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Lectus cursus platea
              lobortis id sit nibh ullamcorpo.
            </p>
            <img src={ServicesDesktopCardBackground} className="desktop" />
            <img src={ServicesMobileCardBackground} className="mobile" />
          </div>
          <div className="virtual-card-services-set">
            <h3>Website Development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Lectus cursus platea
              lobortis id sit nibh ullamcorpo.
            </p>
            <img src={ServicesDesktopCardBackground} className="desktop" />
            <img src={ServicesMobileCardBackground} className="mobile" />
          </div>
        </div>
      </div>
      <div className="virtual-card-products">
        <img
          src={ProductsDesktopBackground}
          className="virtual-card-products-background desktop"
        />
        <img
          src={ProductsMobileBackground}
          className="virtual-card-products-background mobile"
        />
        <h2>Our Products</h2>
        <div className="virtual-card-products-container">
          <div className="virtual-card-products-set">
            <div className="virtual-card-products-set-img">
              <img src={ProductsSampleServices} />
            </div>
            <h3>Website Development</h3>
          </div>
          <div className="virtual-card-products-set">
            <div className="virtual-card-products-set-img">
              <img src={ProductsSampleServices} />
            </div>
            <h3>Website Development</h3>
          </div>
          <div className="virtual-card-products-set">
            <div className="virtual-card-products-set-img">
              <img src={ProductsSampleServices} />
            </div>
            <h3>Website Development</h3>
          </div>
          <div className="virtual-card-products-set">
            <div className="virtual-card-products-set-img">
              <img src={ProductsSampleServices} />
            </div>
            <h3>Website Development</h3>
          </div>
          <div className="virtual-card-products-set">
            <div className="virtual-card-products-set-img">
              <img src={ProductsSampleServices} />
            </div>
            <h3>Website Development</h3>
          </div>
          <div className="virtual-card-products-set">
            <div className="virtual-card-products-set-img">
              <img src={ProductsSampleServices} />
            </div>
            <h3>Website Development</h3>
          </div>
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
            <h3>Frontend Developer</h3>
            <section>
              <h4>Koios Engineering Solution </h4>
              <p>May 2024 - Present</p>
            </section>
          </div>
          <div className="virtual-card-experience-set">
            <h3>Frontend Developer Intern</h3>
            <section>
              <h4>Koios Engineering Solution </h4>
              <p>January 2024 - April 2024</p>
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
      <div className="virtual-card-testimony">
        <h2>What People Say</h2>
        <div className="virtual-card-testimony-container">
          <div className="virtual-card-testimony-dark virtual-card-testimony-left"></div>
          <div className="virtual-card-testimony-dark virtual-card-testimony-right"></div>
          <div className="virtual-card-testimony-set-container">
            <div className="virtual-card-testimony-set-slide desktop">
              <div className="virtual-card-testimony-set">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Lectus cursus platea
                  lobortis id. Sit nibh ullamcorper in libero donec enim auctor.
                  Quam eleifend magna aliquet ut. Turpis gravida quis
                </p>
                <section>
                  <div className="virtual-card-testimony-info">
                    <img
                      src={TestimonySample}
                      style={{ gridArea: "box-1" }}
                      alt="Shreyas Photo"
                    />
                    <h4 style={{ gridArea: "box-2" }}>Shreyas 1</h4>
                    <span style={{ gridArea: "box-3" }}>13 Dec 2024</span>
                  </div>
                  <div className="virtual-card-testimony-star">
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                  </div>
                </section>
              </div>
              <div className="virtual-card-testimony-set">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Lectus cursus platea
                  lobortis id. Sit nibh ullamcorper in libero donec enim auctor.
                  Quam eleifend magna aliquet ut. Turpis gravida quis
                </p>
                <section>
                  <div className="virtual-card-testimony-info">
                    <img
                      src={TestimonySample}
                      style={{ gridArea: "box-1" }}
                      alt="Shreyas Photo"
                    />
                    <h4 style={{ gridArea: "box-2" }}>Shreyas 2</h4>
                    <span style={{ gridArea: "box-3" }}>13 Dec 2024</span>
                  </div>
                  <div className="virtual-card-testimony-star">
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                  </div>
                </section>
              </div>
              <div className="virtual-card-testimony-set">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Lectus cursus platea
                  lobortis id. Sit nibh ullamcorper in libero donec enim auctor.
                  Quam eleifend magna aliquet ut. Turpis gravida quis
                </p>
                <section>
                  <div className="virtual-card-testimony-info">
                    <img
                      src={TestimonySample}
                      style={{ gridArea: "box-1" }}
                      alt="Shreyas Photo"
                    />
                    <h4 style={{ gridArea: "box-2" }}>Shreyas 3</h4>
                    <span style={{ gridArea: "box-3" }}>13 Dec 2024</span>
                  </div>
                  <div className="virtual-card-testimony-star">
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                  </div>
                </section>
              </div>
              <div className="virtual-card-testimony-set">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Lectus cursus platea
                  lobortis id. Sit nibh ullamcorper in libero donec enim auctor.
                  Quam eleifend magna aliquet ut. Turpis gravida quis
                </p>
                <section>
                  <div className="virtual-card-testimony-info">
                    <img
                      src={TestimonySample}
                      style={{ gridArea: "box-1" }}
                      alt="Shreyas Photo"
                    />
                    <h4 style={{ gridArea: "box-2" }}>Shreyas 4</h4>
                    <span style={{ gridArea: "box-3" }}>13 Dec 2024</span>
                  </div>
                  <div className="virtual-card-testimony-star">
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                  </div>
                </section>
              </div>
              <div className="virtual-card-testimony-set">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Lectus cursus platea
                  lobortis id. Sit nibh ullamcorper in libero donec enim auctor.
                  Quam eleifend magna aliquet ut. Turpis gravida quis
                </p>
                <section>
                  <div className="virtual-card-testimony-info">
                    <img
                      src={TestimonySample}
                      style={{ gridArea: "box-1" }}
                      alt="Shreyas Photo"
                    />
                    <h4 style={{ gridArea: "box-2" }}>Shreyas 5</h4>
                    <span style={{ gridArea: "box-3" }}>13 Dec 2024</span>
                  </div>
                  <div className="virtual-card-testimony-star">
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                  </div>
                </section>
              </div>
              <div className="virtual-card-testimony-set">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Lectus cursus platea
                  lobortis id. Sit nibh ullamcorper in libero donec enim auctor.
                  Quam eleifend magna aliquet ut. Turpis gravida quis
                </p>
                <section>
                  <div className="virtual-card-testimony-info">
                    <img
                      src={TestimonySample}
                      style={{ gridArea: "box-1" }}
                      alt="Shreyas Photo"
                    />
                    <h4 style={{ gridArea: "box-2" }}>Shreyas 1</h4>
                    <span style={{ gridArea: "box-3" }}>13 Dec 2024</span>
                  </div>
                  <div className="virtual-card-testimony-star">
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                  </div>
                </section>
              </div>
              <div className="virtual-card-testimony-set">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Lectus cursus platea
                  lobortis id. Sit nibh ullamcorper in libero donec enim auctor.
                  Quam eleifend magna aliquet ut. Turpis gravida quis
                </p>
                <section>
                  <div className="virtual-card-testimony-info">
                    <img
                      src={TestimonySample}
                      style={{ gridArea: "box-1" }}
                      alt="Shreyas Photo"
                    />
                    <h4 style={{ gridArea: "box-2" }}>Shreyas 2</h4>
                    <span style={{ gridArea: "box-3" }}>13 Dec 2024</span>
                  </div>
                  <div className="virtual-card-testimony-star">
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                  </div>
                </section>
              </div>
              <div className="virtual-card-testimony-set">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Lectus cursus platea
                  lobortis id. Sit nibh ullamcorper in libero donec enim auctor.
                  Quam eleifend magna aliquet ut. Turpis gravida quis
                </p>
                <section>
                  <div className="virtual-card-testimony-info">
                    <img
                      src={TestimonySample}
                      style={{ gridArea: "box-1" }}
                      alt="Shreyas Photo"
                    />
                    <h4 style={{ gridArea: "box-2" }}>Shreyas 3</h4>
                    <span style={{ gridArea: "box-3" }}>13 Dec 2024</span>
                  </div>
                  <div className="virtual-card-testimony-star">
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                  </div>
                </section>
              </div>
              <div className="virtual-card-testimony-set">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Lectus cursus platea
                  lobortis id. Sit nibh ullamcorper in libero donec enim auctor.
                  Quam eleifend magna aliquet ut. Turpis gravida quis
                </p>
                <section>
                  <div className="virtual-card-testimony-info">
                    <img
                      src={TestimonySample}
                      style={{ gridArea: "box-1" }}
                      alt="Shreyas Photo"
                    />
                    <h4 style={{ gridArea: "box-2" }}>Shreyas 4</h4>
                    <span style={{ gridArea: "box-3" }}>13 Dec 2024</span>
                  </div>
                  <div className="virtual-card-testimony-star">
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                  </div>
                </section>
              </div>
              <div className="virtual-card-testimony-set">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Lectus cursus platea
                  lobortis id. Sit nibh ullamcorper in libero donec enim auctor.
                  Quam eleifend magna aliquet ut. Turpis gravida quis
                </p>
                <section>
                  <div className="virtual-card-testimony-info">
                    <img
                      src={TestimonySample}
                      style={{ gridArea: "box-1" }}
                      alt="Shreyas Photo"
                    />
                    <h4 style={{ gridArea: "box-2" }}>Shreyas 5</h4>
                    <span style={{ gridArea: "box-3" }}>13 Dec 2024</span>
                  </div>
                  <div className="virtual-card-testimony-star">
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                  </div>
                </section>
              </div>
              <div className="virtual-card-testimony-set">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Lectus cursus platea
                  lobortis id. Sit nibh ullamcorper in libero donec enim auctor.
                  Quam eleifend magna aliquet ut. Turpis gravida quis
                </p>
                <section>
                  <div className="virtual-card-testimony-info">
                    <img
                      src={TestimonySample}
                      style={{ gridArea: "box-1" }}
                      alt="Shreyas Photo"
                    />
                    <h4 style={{ gridArea: "box-2" }}>Shreyas 1</h4>
                    <span style={{ gridArea: "box-3" }}>13 Dec 2024</span>
                  </div>
                  <div className="virtual-card-testimony-star">
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                  </div>
                </section>
              </div>
              <div className="virtual-card-testimony-set">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Lectus cursus platea
                  lobortis id. Sit nibh ullamcorper in libero donec enim auctor.
                  Quam eleifend magna aliquet ut. Turpis gravida quis
                </p>
                <section>
                  <div className="virtual-card-testimony-info">
                    <img
                      src={TestimonySample}
                      style={{ gridArea: "box-1" }}
                      alt="Shreyas Photo"
                    />
                    <h4 style={{ gridArea: "box-2" }}>Shreyas 2</h4>
                    <span style={{ gridArea: "box-3" }}>13 Dec 2024</span>
                  </div>
                  <div className="virtual-card-testimony-star">
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                  </div>
                </section>
              </div>
              <div className="virtual-card-testimony-set">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Lectus cursus platea
                  lobortis id. Sit nibh ullamcorper in libero donec enim auctor.
                  Quam eleifend magna aliquet ut. Turpis gravida quis
                </p>
                <section>
                  <div className="virtual-card-testimony-info">
                    <img
                      src={TestimonySample}
                      style={{ gridArea: "box-1" }}
                      alt="Shreyas Photo"
                    />
                    <h4 style={{ gridArea: "box-2" }}>Shreyas 3</h4>
                    <span style={{ gridArea: "box-3" }}>13 Dec 2024</span>
                  </div>
                  <div className="virtual-card-testimony-star">
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                  </div>
                </section>
              </div>
              <div className="virtual-card-testimony-set">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Lectus cursus platea
                  lobortis id. Sit nibh ullamcorper in libero donec enim auctor.
                  Quam eleifend magna aliquet ut. Turpis gravida quis
                </p>
                <section>
                  <div className="virtual-card-testimony-info">
                    <img
                      src={TestimonySample}
                      style={{ gridArea: "box-1" }}
                      alt="Shreyas Photo"
                    />
                    <h4 style={{ gridArea: "box-2" }}>Shreyas 4</h4>
                    <span style={{ gridArea: "box-3" }}>13 Dec 2024</span>
                  </div>
                  <div className="virtual-card-testimony-star">
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                  </div>
                </section>
              </div>
              <div className="virtual-card-testimony-set">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Lectus cursus platea
                  lobortis id. Sit nibh ullamcorper in libero donec enim auctor.
                  Quam eleifend magna aliquet ut. Turpis gravida quis
                </p>
                <section>
                  <div className="virtual-card-testimony-info">
                    <img
                      src={TestimonySample}
                      style={{ gridArea: "box-1" }}
                      alt="Shreyas Photo"
                    />
                    <h4 style={{ gridArea: "box-2" }}>Shreyas 5</h4>
                    <span style={{ gridArea: "box-3" }}>13 Dec 2024</span>
                  </div>
                  <div className="virtual-card-testimony-star">
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                  </div>
                </section>
              </div>
              <div className="virtual-card-testimony-set">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Lectus cursus platea
                  lobortis id. Sit nibh ullamcorper in libero donec enim auctor.
                  Quam eleifend magna aliquet ut. Turpis gravida quis
                </p>
                <section>
                  <div className="virtual-card-testimony-info">
                    <img
                      src={TestimonySample}
                      style={{ gridArea: "box-1" }}
                      alt="Shreyas Photo"
                    />
                    <h4 style={{ gridArea: "box-2" }}>Shreyas 1</h4>
                    <span style={{ gridArea: "box-3" }}>13 Dec 2024</span>
                  </div>
                  <div className="virtual-card-testimony-star">
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                  </div>
                </section>
              </div>
              <div className="virtual-card-testimony-set">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Lectus cursus platea
                  lobortis id. Sit nibh ullamcorper in libero donec enim auctor.
                  Quam eleifend magna aliquet ut. Turpis gravida quis
                </p>
                <section>
                  <div className="virtual-card-testimony-info">
                    <img
                      src={TestimonySample}
                      style={{ gridArea: "box-1" }}
                      alt="Shreyas Photo"
                    />
                    <h4 style={{ gridArea: "box-2" }}>Shreyas 2</h4>
                    <span style={{ gridArea: "box-3" }}>13 Dec 2024</span>
                  </div>
                  <div className="virtual-card-testimony-star">
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                  </div>
                </section>
              </div>
              <div className="virtual-card-testimony-set">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Lectus cursus platea
                  lobortis id. Sit nibh ullamcorper in libero donec enim auctor.
                  Quam eleifend magna aliquet ut. Turpis gravida quis
                </p>
                <section>
                  <div className="virtual-card-testimony-info">
                    <img
                      src={TestimonySample}
                      style={{ gridArea: "box-1" }}
                      alt="Shreyas Photo"
                    />
                    <h4 style={{ gridArea: "box-2" }}>Shreyas 3</h4>
                    <span style={{ gridArea: "box-3" }}>13 Dec 2024</span>
                  </div>
                  <div className="virtual-card-testimony-star">
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                  </div>
                </section>
              </div>
              <div className="virtual-card-testimony-set">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Lectus cursus platea
                  lobortis id. Sit nibh ullamcorper in libero donec enim auctor.
                  Quam eleifend magna aliquet ut. Turpis gravida quis
                </p>
                <section>
                  <div className="virtual-card-testimony-info">
                    <img
                      src={TestimonySample}
                      style={{ gridArea: "box-1" }}
                      alt="Shreyas Photo"
                    />
                    <h4 style={{ gridArea: "box-2" }}>Shreyas 4</h4>
                    <span style={{ gridArea: "box-3" }}>13 Dec 2024</span>
                  </div>
                  <div className="virtual-card-testimony-star">
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                  </div>
                </section>
              </div>
              <div className="virtual-card-testimony-set">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Lectus cursus platea
                  lobortis id. Sit nibh ullamcorper in libero donec enim auctor.
                  Quam eleifend magna aliquet ut. Turpis gravida quis
                </p>
                <section>
                  <div className="virtual-card-testimony-info">
                    <img
                      src={TestimonySample}
                      style={{ gridArea: "box-1" }}
                      alt="Shreyas Photo"
                    />
                    <h4 style={{ gridArea: "box-2" }}>Shreyas 5</h4>
                    <span style={{ gridArea: "box-3" }}>13 Dec 2024</span>
                  </div>
                  <div className="virtual-card-testimony-star">
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                  </div>
                </section>
              </div>
            </div>
            <div className="virtual-card-testimony-set-slide mobile">
              <div className="virtual-card-testimony-set">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Lectus cursus platea
                  lobortis id. Sit nibh ullamcorper in libero donec enim auctor.
                  Quam eleifend magna aliquet ut. Turpis gravida quis
                </p>
                <section>
                  <div className="virtual-card-testimony-info">
                    <img
                      src={TestimonySample}
                      style={{ gridArea: "box-1" }}
                      alt="Shreyas Photo"
                    />
                    <h4 style={{ gridArea: "box-2" }}>Shreyas 1</h4>
                    <span style={{ gridArea: "box-3" }}>13 Dec 2024</span>
                  </div>
                  <div className="virtual-card-testimony-star">
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                  </div>
                </section>
              </div>
              <div className="virtual-card-testimony-set">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Quam eleifend magna
                  aliquet ut. Turpis gravida quis. Lectus cursus platea lobortis
                  id. Sit nibh ullamcorper in libero donec enim auctor. Quam
                  eleifend magna aliquet ut. Turpis gravida quis.
                </p>
                <section>
                  <div className="virtual-card-testimony-info">
                    <img
                      src={TestimonySample}
                      style={{ gridArea: "box-1" }}
                      alt="Shreyas Photo"
                    />
                    <h4 style={{ gridArea: "box-2" }}>Shreyas 2</h4>
                    <span style={{ gridArea: "box-3" }}>13 Dec 2024</span>
                  </div>
                  <div className="virtual-card-testimony-star">
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                  </div>
                </section>
              </div>
              <div className="virtual-card-testimony-set">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Lectus cursus platea
                  lobortis id. Sit nibh ullamcorper in libero donec enim auctor.
                  Quam eleifend magna aliquet ut. Turpis gravida quis
                </p>
                <section>
                  <div className="virtual-card-testimony-info">
                    <img
                      src={TestimonySample}
                      style={{ gridArea: "box-1" }}
                      alt="Shreyas Photo"
                    />
                    <h4 style={{ gridArea: "box-2" }}>Shreyas 3</h4>
                    <span style={{ gridArea: "box-3" }}>13 Dec 2024</span>
                  </div>
                  <div className="virtual-card-testimony-star">
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                  </div>
                </section>
              </div>
              <div className="virtual-card-testimony-set">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Lectus cursus platea
                  lobortis id. Sit nibh ullamcorper in libero donec enim auctor.
                  Quam eleifend magna aliquet ut. Turpis gravida quis
                </p>
                <section>
                  <div className="virtual-card-testimony-info">
                    <img
                      src={TestimonySample}
                      style={{ gridArea: "box-1" }}
                      alt="Shreyas Photo"
                    />
                    <h4 style={{ gridArea: "box-2" }}>Shreyas 4</h4>
                    <span style={{ gridArea: "box-3" }}>13 Dec 2024</span>
                  </div>
                  <div className="virtual-card-testimony-star">
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                  </div>
                </section>
              </div>
              <div className="virtual-card-testimony-set">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Lectus cursus platea
                  lobortis id. Sit nibh ullamcorper in libero donec enim auctor.
                  Quam eleifend magna aliquet ut. Turpis gravida quis
                </p>
                <section>
                  <div className="virtual-card-testimony-info">
                    <img
                      src={TestimonySample}
                      style={{ gridArea: "box-1" }}
                      alt="Shreyas Photo"
                    />
                    <h4 style={{ gridArea: "box-2" }}>Shreyas 5</h4>
                    <span style={{ gridArea: "box-3" }}>13 Dec 2024</span>
                  </div>
                  <div className="virtual-card-testimony-star">
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                    <img src={TestimonyStar} />
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="virtual-card-connect">
        <div className="virtual-card-connect-container">
          <img
            src={ConnectDesktopBackground}
            alt="Lets Connect Background Image"
            className="virtual-card-connect-background desktop"
          />
          <img
            src={ConnectMobileBackground}
            alt="Lets Connect Background Image"
            className="virtual-card-connect-background mobile"
          />
          <div className="heading">
            <h2>Lets Connect</h2>
            <div className="virtual-card-socials">
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M10.488 14.7203L15.25 21.0693H22.25L14.392 10.5913L20.93 3.06934H18.28L13.163 8.95534L8.75 3.06934H1.75L9.26 13.0843L2.32 21.0693H4.97L10.488 14.7203ZM16.25 19.0693L5.75 5.06934H7.75L18.25 19.0693H16.25Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M12 0.0693359C8.74 0.0693359 8.333 0.0843359 7.053 0.141336C5.775 0.201336 4.905 0.402336 4.14 0.699336C3.351 1.00534 2.681 1.41634 2.014 2.08334C1.347 2.75034 0.935 3.41934 0.63 4.20934C0.333 4.97434 0.131 5.84434 0.072 7.12234C0.012 8.40234 0 8.80934 0 12.0693C0 15.3293 0.015 15.7363 0.072 17.0163C0.132 18.2933 0.333 19.1643 0.63 19.9293C0.936 20.7173 1.347 21.3883 2.014 22.0553C2.681 22.7213 3.35 23.1343 4.14 23.4393C4.906 23.7353 5.776 23.9383 7.053 23.9973C8.333 24.0573 8.74 24.0693 12 24.0693C15.26 24.0693 15.667 24.0543 16.947 23.9973C18.224 23.9373 19.095 23.7353 19.86 23.4393C20.648 23.1333 21.319 22.7213 21.986 22.0553C22.652 21.3883 23.065 20.7203 23.37 19.9293C23.666 19.1643 23.869 18.2933 23.928 17.0163C23.988 15.7363 24 15.3293 24 12.0693C24 8.80934 23.985 8.40234 23.928 7.12234C23.868 5.84534 23.666 4.97334 23.37 4.20934C23.064 3.42034 22.652 2.75034 21.986 2.08334C21.319 1.41634 20.651 1.00434 19.86 0.699336C19.095 0.402336 18.224 0.200336 16.947 0.141336C15.667 0.0813359 15.26 0.0693359 12 0.0693359ZM12 2.22934C15.203 2.22934 15.585 2.24534 16.85 2.30034C18.02 2.35534 18.655 2.54934 19.077 2.71534C19.639 2.93234 20.037 3.19234 20.459 3.61134C20.878 4.03134 21.138 4.43034 21.355 4.99234C21.519 5.41434 21.715 6.04934 21.768 7.21934C21.825 8.48534 21.838 8.86534 21.838 12.0693C21.838 15.2733 21.823 15.6543 21.764 16.9193C21.703 18.0893 21.508 18.7243 21.343 19.1463C21.119 19.7083 20.864 20.1063 20.444 20.5283C20.025 20.9473 19.62 21.2073 19.064 21.4243C18.644 21.5883 17.999 21.7843 16.829 21.8373C15.555 21.8943 15.18 21.9073 11.97 21.9073C8.759 21.9073 8.384 21.8923 7.111 21.8333C5.94 21.7723 5.295 21.5773 4.875 21.4123C4.306 21.1883 3.915 20.9333 3.496 20.5133C3.075 20.0943 2.806 19.6893 2.596 19.1333C2.431 18.7133 2.237 18.0683 2.176 16.8983C2.131 15.6383 2.115 15.2493 2.115 12.0543C2.115 8.85834 2.131 8.46834 2.176 7.19334C2.237 6.02334 2.431 5.37934 2.596 4.95934C2.806 4.38934 3.075 3.99934 3.496 3.57834C3.915 3.15934 4.306 2.88934 4.875 2.68034C5.295 2.51434 5.926 2.31934 7.096 2.25934C8.371 2.21434 8.746 2.19934 11.955 2.19934L12 2.22934ZM12 5.90734C8.595 5.90734 5.838 8.66734 5.838 12.0693C5.838 15.4743 8.598 18.2313 12 18.2313C15.405 18.2313 18.162 15.4713 18.162 12.0693C18.162 8.66434 15.402 5.90734 12 5.90734ZM12 16.0693C9.79 16.0693 8 14.2793 8 12.0693C8 9.85934 9.79 8.06934 12 8.06934C14.21 8.06934 16 9.85934 16 12.0693C16 14.2793 14.21 16.0693 12 16.0693ZM19.846 5.66434C19.846 6.45934 19.2 7.10434 18.406 7.10434C17.611 7.10434 16.966 6.45834 16.966 5.66434C16.966 4.87034 17.612 4.22534 18.406 4.22534C19.199 4.22434 19.846 4.87034 19.846 5.66434Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M20.447 20.5213H16.893V14.9523C16.893 13.6243 16.866 11.9153 15.041 11.9153C13.188 11.9153 12.905 13.3603 12.905 14.8543V20.5213H9.351V9.06934H12.765V10.6303H12.811C13.288 9.73034 14.448 8.78034 16.181 8.78034C19.782 8.78034 20.448 11.1503 20.448 14.2353L20.447 20.5213ZM5.337 7.50234C4.193 7.50234 3.274 6.57634 3.274 5.43734C3.274 4.29934 4.194 3.37434 5.337 3.37434C6.477 3.37434 7.401 4.29934 7.401 5.43734C7.401 6.57634 6.476 7.50234 5.337 7.50234ZM7.119 20.5213H3.555V9.06934H7.119V20.5213ZM22.225 0.0693359H1.771C0.792 0.0693359 0 0.843336 0 1.79834V22.3403C0 23.2963 0.792 24.0693 1.771 24.0693H22.222C23.2 24.0693 24 23.2963 24 22.3403V1.79834C24 0.843336 23.2 0.0693359 22.222 0.0693359H22.225Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
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
        </div>
      </div>
      <div className="virtual-card-footer">
        <div className="virtual-card-footer-container">
          <section>
            <Link to="/">
              <img src={Logo} alt="Koios Studio Logo" />
            </Link>

            <div className="virtual-card-footer-link-container">
              <a href="#">Privacy Policy</a>
              <span></span>
              <a href="#">T&C</a>
            </div>
          </section>
          <div className="virtual-card-footer-line"></div>
          <section>
            <p>© {currentYear} Reserved </p>
            <span>
              Crafted by <Link to="/">Koios Studio</Link>
            </span>
          </section>
        </div>
      </div>
    </div>
  );
}

export default MudigetiSantosh;
