import React, { useState, useEffect } from "react";
import vCardsJS from "vcards-js";
import { Link } from "react-router-dom";
import "./TKSstyle.css";
import "./KESstyle.css";
import Logo from "./assets/KES Logo.png";
import TKSLogo from "./assets/Footer Company Logo.png";
import BannerDesktopBackround from "./assets/KES Desktop Banner.png";
import BannerMobileBackround from "./assets/KES Mobile Banner.png";
import BannerPart from "./assets/KES Desktop Banner Part.png";
import Verified from "./assets/Verified.png";
import PersonPhoto from "/VishalPujar.jpeg";
import AboutDesktopBackground from "./assets/KES Desktop About.png";
import AboutMobileBackground from "./assets/KES Mobile About.png";
import CallIcon from "./assets/KES Call Icon.png";
import EmailIcon from "./assets/KES Email Icon.png";
import LocationIcon from "./assets/KES Location Icon.png";
import AboutArrow from "./assets/KES Get in Touch Arrow.png";
import ServicesDesktopCardBackground from "./assets/KES Desktop Services Card.png";
import WatchDesktopBackground from "./assets/KES Desktop Watch.png";
import SkillsDesktopBackground from "./assets/KES Desktop Skills.png";
import SkillsMobileBackground from "./assets/KES Mobile Skills.png";
import ExperienceDesktopBackground from "./assets/KES Desktop Experience.png";
import ContactDesktopBackground from "./assets/KES Desktop Contact.png";
import ContactMobileBackground from "./assets/KES Mobile Contact.png";
import TestimonySample from "./assets/Testimony.jpg";
import TestimonyStar from "./assets/Testimony Star.png";
import KESconnect from "./KESconnect";

const scheduleKeys = ["S", "M", "T", "W", "T2", "F", "S2"];
const rotationPerStep = 360 / 7;

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
    endTime: "07:00 PM",
  },
  T: {
    day: "TUESDAY",
    available: true,
    startTime: "09:00 AM",
    endTime: "07:00 PM",
  },
  W: {
    day: "WEDNESDAY",
    available: true,
    startTime: "09:00 AM",
    endTime: "07:00 PM",
  },
  T2: {
    day: "THURSDAY",
    available: true,
    startTime: "09:00 AM",
    endTime: "07:00 PM",
  },
  F: {
    day: "FRIDAY",
    available: true,
    startTime: "09:00 AM",
    endTime: "07:00 PM",
  },
  S2: {
    day: "SATURDAY",
    available: true,
    startTime: "09:00 AM",
    endTime: "07:00 PM",
  },
};

function VishalPujar() {
  const handleDownloadVCard = async () => {
    const vCard = vCardsJS();

    vCard.firstName = "Vishal Pujar";
    vCard.cellPhone = "+916360788781";
    vCard.email = "vishalpujar14261@gmail.com";
    vCard.organization = "Koios Studio";

    const imageBase64 = await getBase64FromImage(
      `${window.location.origin}/VishalPujar.jpeg`
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
  const [rotation, setRotation] = useState(0);

  const handleDayClick = (newDay) => {
    if (newDay === selectedDay) return;
    const newIndex = scheduleKeys.indexOf(newDay);
    setRotation(newIndex * rotationPerStep);
    setSelectedDay(newDay);
  };

  const { day, available, startTime, endTime } = schedule[selectedDay];

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const currentYear = new Date().getFullYear();
  return (
    <div className="virtual-card virtual-card-KES">
      <div className="virtual-card-bottom-bar mobile">
        <a onClick={handleDownloadVCard} className="virtual-card-white-button">
          <p>Save Contact</p>
        </a>
        <a
          href="https://www.linkedin.com/in/vishal-pujar-58a249136/"
          target="_blank"
          className="virtual-card-banner-button"
        >
          <section>
            <p>Know More</p>
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
                <div className="virtual-card-banner-left-logo">
                  <img src={Logo} alt="Koios Emgineering Soltuions Logo" />
                  <span>Koios Engineering Solutions</span>
                </div>
                <h1>
                  Vishal Pujar
                  <img src={Verified} />
                </h1>
              </section>
              <p>
                Handle mechanical engineering side of company. Track projects,
                give design inputs and ensure smooth functioning of the
                vertical.
              </p>
            </div>
            <a
              href="https://www.linkedin.com/in/vishal-pujar-58a249136/"
              target="_blank"
              className="virtual-card-white-button desktop"
            >
              <p>Know More</p>
            </a>
            <img src={BannerPart} className="virtual-card-banner-left-img" />
          </div>
          <div className="virtual-card-banner-right">
            <img src={PersonPhoto} />
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
          <h2>CTO</h2>
          <p>
            Competitive, detail oriented by nature and engineer by profession.
            Work everyday to make best use of both ends to get best possible
            outcome.
          </p>
        </div>
      </div>
      <div className="virtual-card-reach">
        <h2>Get in Touch</h2>
        <div className="virtual-card-reach-container">
          <section>
            <a
              href="https://mail.google.com/mail/?view=cm&to=vishalpujar14261@gmail.com"
              target="_blank"
              className="virtual-card-reach-set"
            >
              <div className="virtual-card-reach-set-text">
                <img src={EmailIcon} />
                <div className="virtual-card-reach-set-content">
                  <h3>Email Me</h3>
                  <p>vishalpujar14261@gmail.com</p>
                </div>
              </div>
              <img src={AboutArrow} />
            </a>
            <a
              href="tel:+916360788781"
              target="_blank"
              className="virtual-card-reach-set"
            >
              <div className="virtual-card-reach-set-text">
                <img src={CallIcon} />
                <div className="virtual-card-reach-set-content">
                  <h3>Contact</h3>
                  <p>+91 63607 88781</p>
                </div>
              </div>
              <img src={AboutArrow} />
            </a>
            <a
              href="https://maps.app.goo.gl/xjjtRet4ZB5sZuz7A"
              target="_blank"
              className="virtual-card-reach-set"
            >
              <div className="virtual-card-reach-set-text">
                <img src={LocationIcon} />
                <div className="virtual-card-reach-set-content">
                  <h3>Location</h3>
                  <p>Office</p>
                </div>
              </div>
              <img src={AboutArrow} />
            </a>
          </section>
        </div>
      </div>
      <div className="virtual-card-find">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="293"
          height="293"
          viewBox="0 0 293 293"
          fill="none"
          className="virtual-card-find-background virtual-card-find-yellow"
        >
          <g filter="url(#filter0_f_835_306)">
            <ellipse
              cx="146.519"
              cy="146.608"
              rx="45.6329"
              ry="46.076"
              fill="#FFBF00"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_835_306"
              x="0.885742"
              y="0.531616"
              width="291.266"
              height="292.152"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="50"
                result="effect1_foregroundBlur_835_306"
              />
            </filter>
          </defs>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="540"
          height="540"
          viewBox="0 0 540 540"
          fill="none"
          className="virtual-card-find-background virtual-card-find-white"
        >
          <g filter="url(#filter0_f_835_305)">
            <circle cx="270" cy="270" r="70" fill="white" />
          </g>
          <defs>
            <filter
              id="filter0_f_835_305"
              x="0"
              y="0"
              width="540"
              height="540"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="100"
                result="effect1_foregroundBlur_835_305"
              />
            </filter>
          </defs>
        </svg>
        <h2>Discover X Follow</h2>
        <div className="virtual-card-find-container">
          <a
            href="https://www.linkedin.com/in/vishal-pujar-58a249136/"
            target="_blank"
            className="virtual-card-find-set"
          >
            <div className="virtual-card-find-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                viewBox="0 0 70 70"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M57.6535 0C60.7116 0 63.6445 1.21484 65.8069 3.37726C67.9694 5.53969 69.1842 8.47257 69.1842 11.5307V57.6535C69.1842 60.7116 67.9694 63.6445 65.8069 65.8069C63.6445 67.9694 60.7116 69.1842 57.6535 69.1842H11.5307C8.47257 69.1842 5.53969 67.9694 3.37726 65.8069C1.21484 63.6445 0 60.7116 0 57.6535V11.5307C0 8.47257 1.21484 5.53969 3.37726 3.37726C5.53969 1.21484 8.47257 0 11.5307 0H57.6535ZM19.2178 26.905C18.1985 26.905 17.2208 27.3099 16.5 28.0307C15.7792 28.7515 15.3743 29.7292 15.3743 30.7485V49.9664C15.3743 50.9857 15.7792 51.9634 16.5 52.6842C17.2208 53.405 18.1985 53.8099 19.2178 53.8099C20.2372 53.8099 21.2148 53.405 21.9356 52.6842C22.6565 51.9634 23.0614 50.9857 23.0614 49.9664V30.7485C23.0614 29.7292 22.6565 28.7515 21.9356 28.0307C21.2148 27.3099 20.2372 26.905 19.2178 26.905ZM30.7485 23.0614C29.7292 23.0614 28.7515 23.4663 28.0307 24.1872C27.3099 24.908 26.905 25.8856 26.905 26.905V49.9664C26.905 50.9857 27.3099 51.9634 28.0307 52.6842C28.7515 53.405 29.7292 53.8099 30.7485 53.8099C31.7679 53.8099 32.7455 53.405 33.4663 52.6842C34.1872 51.9634 34.5921 50.9857 34.5921 49.9664V35.8989C35.7644 34.5767 37.7438 33.0239 39.9462 32.0823C41.2261 31.5365 43.1517 31.3135 44.4893 31.7363C44.933 31.8489 45.3282 32.1025 45.6155 32.4589C45.8153 32.728 46.1228 33.3276 46.1228 34.5921V49.9664C46.1228 50.9857 46.5277 51.9634 47.2486 52.6842C47.9694 53.405 48.947 53.8099 49.9664 53.8099C50.9857 53.8099 51.9634 53.405 52.6842 52.6842C53.405 51.9634 53.8099 50.9857 53.8099 49.9664V34.5921C53.8099 32.0169 53.1565 29.7261 51.7959 27.8889C50.5439 26.223 48.7916 25.0013 46.7954 24.4028C43.3285 23.3151 39.4888 23.9185 36.9251 25.0178C36.1044 25.3708 35.3049 25.7712 34.5306 26.217C34.3695 25.3314 33.9026 24.5304 33.2115 23.9537C32.5203 23.3771 31.6487 23.0613 30.7485 23.0614ZM19.2178 15.3743C18.1985 15.3743 17.2208 15.7792 16.5 16.5C15.7792 17.2208 15.3743 18.1985 15.3743 19.2178C15.3743 20.2372 15.7792 21.2148 16.5 21.9356C17.2208 22.6565 18.1985 23.0614 19.2178 23.0614C20.2372 23.0614 21.2148 22.6565 21.9356 21.9356C22.6565 21.2148 23.0614 20.2372 23.0614 19.2178C23.0614 18.1985 22.6565 17.2208 21.9356 16.5C21.2148 15.7792 20.2372 15.3743 19.2178 15.3743Z"
                  fill="white"
                />
              </svg>
            </div>
            <h3 className="virtual-card-find-icon-label">LinkedIn</h3>
          </a>
          <a
            href="https://www.instagram.com/vish_mpujar"
            target="_blank"
            className="virtual-card-find-set"
          >
            <div className="virtual-card-find-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
              >
                <path
                  d="M44.112 0C48.6118 0.0119997 50.8957 0.0359991 52.8676 0.0919978L53.6436 0.119997C54.5395 0.151996 55.4235 0.191995 56.4914 0.239994C60.7472 0.439989 63.6511 1.11197 66.1989 2.09995C68.8388 3.11593 71.0627 4.49189 73.2866 6.71184C75.3213 8.71072 76.8951 11.1296 77.8983 13.7997C78.8863 16.3476 79.5583 19.2515 79.7583 23.5114C79.8063 24.5754 79.8462 25.4594 79.8782 26.3594L79.9022 27.1353C79.9622 29.1033 79.9862 31.3872 79.9942 35.8871L79.9982 38.8711V44.1109C80.008 47.0285 79.9773 49.946 79.9062 52.8627L79.8822 53.6387C79.8503 54.5387 79.8102 55.4227 79.7623 56.4866C79.5623 60.7465 78.8823 63.6465 77.8983 66.1984C76.8951 68.8684 75.3213 71.2873 73.2866 73.2862C71.2878 75.321 68.8689 76.8949 66.1989 77.8981C63.6511 78.8861 60.7472 79.5581 56.4914 79.7581L53.6436 79.8781L52.8676 79.9021C50.8957 79.9581 48.6118 79.9861 44.112 79.9941L41.1282 79.9981H35.8925C32.9737 80.0084 30.0549 79.9777 27.1369 79.9061L26.3609 79.8821C25.4114 79.8461 24.4621 79.8048 23.5131 79.7581C19.2573 79.5581 16.3535 78.8861 13.8016 77.8981C11.133 76.8944 8.71561 75.3205 6.71794 73.2862C4.68182 71.2877 3.10655 68.8688 2.10217 66.1984C1.11422 63.6505 0.442253 60.7465 0.242263 56.4866L0.122269 53.6387L0.10227 52.8627C0.0285383 49.9461 -0.00479694 47.0285 0.00227507 44.1109V35.8871C-0.00879595 32.9696 0.020539 30.0521 0.0902709 27.1353L0.118269 26.3594C0.150268 25.4594 0.190266 24.5754 0.238263 23.5114C0.438253 19.2515 1.11022 16.3516 2.09817 13.7997C3.1049 11.1285 4.68293 8.70953 6.72194 6.71184C8.71845 4.67808 11.1345 3.10422 13.8016 2.09995C16.3535 1.11197 19.2533 0.439989 23.5131 0.239994C24.577 0.191995 25.465 0.151996 26.3609 0.119997L27.1369 0.0959974C30.0535 0.0249302 32.971 -0.00573865 35.8885 0.00399961L44.112 0ZM40.0003 19.9995C34.6962 19.9995 29.6094 22.1066 25.8588 25.8572C22.1083 29.6079 20.0013 34.6948 20.0013 39.999C20.0013 45.3032 22.1083 50.3902 25.8588 54.1408C29.6094 57.8915 34.6962 59.9985 40.0003 59.9985C45.3043 59.9985 50.3911 57.8915 54.1417 54.1408C57.8922 50.3902 59.9992 45.3032 59.9992 39.999C59.9992 34.6948 57.8922 29.6079 54.1417 25.8572C50.3911 22.1066 45.3043 19.9995 40.0003 19.9995ZM40.0003 27.9993C41.576 27.9991 43.1364 28.3092 44.5924 28.912C46.0483 29.5148 47.3713 30.3985 48.4857 31.5125C49.6001 32.6266 50.4842 33.9493 51.0875 35.4051C51.6908 36.8609 52.0014 38.4212 52.0017 39.997C52.0019 41.5729 51.6918 43.1333 51.089 44.5893C50.4862 46.0452 49.6026 47.3682 48.4885 48.4827C47.3745 49.5972 46.0518 50.4813 44.5961 51.0846C43.1403 51.6878 41.58 51.9985 40.0043 51.9987C36.8218 51.9987 33.7697 50.7345 31.5194 48.4841C29.2691 46.2337 28.0049 43.1816 28.0049 39.999C28.0049 36.8165 29.2691 33.7643 31.5194 31.514C33.7697 29.2636 36.8218 27.9993 40.0043 27.9993M61.0032 13.9997C59.6772 13.9997 58.4055 14.5264 57.4678 15.4641C56.5302 16.4018 56.0034 17.6735 56.0034 18.9995C56.0034 20.3256 56.5302 21.5973 57.4678 22.535C58.4055 23.4726 59.6772 23.9994 61.0032 23.9994C62.3292 23.9994 63.6009 23.4726 64.5386 22.535C65.4762 21.5973 66.0029 20.3256 66.0029 18.9995C66.0029 17.6735 65.4762 16.4018 64.5386 15.4641C63.6009 14.5264 62.3292 13.9997 61.0032 13.9997Z"
                  fill="white"
                />
              </svg>
            </div>
            <h3 className="virtual-card-find-icon-label">Instagram</h3>
          </a>
        </div>
      </div>
      <div className="virtual-card-services">
        <h2>Our Services</h2>
        <div className="virtual-card-services-container">
          <div className="virtual-card-services-set">
            <h3>Vehicle Design</h3>
            <p>
              We provide design services for Ev 2 wheelers , 3 Wheelers and
              customized Vehicles requirements.
            </p>
            <img src={ServicesDesktopCardBackground} />
          </div>
          <div className="virtual-card-services-set">
            <h3>Vehicle Manufacturing</h3>
            <p>
              We specialize in Vehicle prototype manufacturing and integration
              and testing.
            </p>
            <img src={ServicesDesktopCardBackground} />
          </div>
          <div className="virtual-card-services-set">
            <h3>Product Manufacturing</h3>
            <p>
              We specialize in product manufacturing for various application
              with high end manufacturing equipment to meeting the manufacturing
              accuracy needed.
            </p>
            <img src={ServicesDesktopCardBackground} />
          </div>
          <div className="virtual-card-services-set">
            <h3>3D Scanning</h3>
            <p>
              We provide vehicle specific 3d scanning services for product
              development.
            </p>
            <img src={ServicesDesktopCardBackground} />
          </div>
          <div className="virtual-card-services-set">
            <h3>3D Printing</h3>
            <p>
              We have 3d Printing facility to manufacture prototypes and batch
              production with material such as : pla , abs , Nylon , petg.
            </p>
            <img src={ServicesDesktopCardBackground} />
          </div>
          <div className="virtual-card-services-set">
            <h3>3D Modeling</h3>
            <p>
              We provide design services for special purpose machine design and
              mechanical products.
            </p>
            <img src={ServicesDesktopCardBackground} />
          </div>
        </div>
      </div>
      <div className="virtual-card-watch">
        <h2>Working Hours</h2>
        <div className="virtual-card-watch-container">
          <div className="virtual-card-watch-weeks">
            {scheduleKeys.map((dayKey, index) => (
              <button
                key={index}
                className={
                  selectedDay === dayKey ? "virtual-card-watch-active-week" : ""
                }
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
              style={{
                transform: `rotate(${rotation}deg)`,
              }}
            />
            <img
              src={Logo}
              className="virtual-card-watch-frame-logo"
              style={{
                transform:
                  screenWidth < 1200
                    ? `rotate(${rotation}deg) translateX(140px) translateY(-15px) rotate(${-rotation}deg)`
                    : `rotate(${rotation}deg) translateX(310px) translateY(-30px) rotate(${-rotation}deg)`,
              }}
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
                    {startTime} <br />-<br /> {endTime}
                  </p>
                ) : (
                  <p>Not Working</p>
                )}
              </section>
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
              <h3>3D Modeling</h3>
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
              <h3>Vehicle Engineering</h3>
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
              <h3> Project Management</h3>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="virtual-card-experience">
        <h2>Work Experience</h2>
        <div className="virtual-card-experience-container">
          <div className="virtual-card-experience-set">
            <h3>CEO</h3>
            <section>
              <h4>Koios Engineering Solutions </h4>
              <p>October 2022 - Present</p>
            </section>
          </div>
          <div className="virtual-card-experience-set">
            <h3>Frontend Developer Intern</h3>
            <section>
              <h4>Wulkin Innovation </h4>
              <p>March 2022 - October 2022</p>
            </section>
          </div>
          <div className="virtual-card-experience-set">
            <h3>Frontend Developer</h3>
            <section>
              <h4>Trelleborg sealing solutions</h4>
              <p>February 2021 - Hebruary 2022</p>
            </section>
          </div>
        </div>
        <img
          src={ExperienceDesktopBackground}
          className="virtual-card-experience-background"
        />
      </div> */}
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
      <KESconnect />
      <div className="virtual-card-footer">
        <div className="virtual-card-footer-container">
          <section>
            <Link to="/">
              <img src={TKSLogo} alt="Koios Studio Logo" />
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

export default VishalPujar;
