import React, { useState } from "react";
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
import PersonPhoto from "/MudigetiSantosh.jpg";
import AboutDesktopBackground from "./assets/KES Desktop About.png";
import AboutMobileBackground from "./assets/KES Mobile About.png";
import CallIcon from "./assets/KES Call Icon.png";
import EmailIcon from "./assets/KES Email Icon.png";
import LocationIcon from "./assets/KES Location Icon.png";
import AboutArrow from "./assets/KES Get in Touch Arrow.png";
import ServicesDesktopCardBackground from "./assets/KES Desktop Services Card.png";
import ProductsDesktopBackground from "./assets/KES Desktop Products.png";
import ProductsMobileBackground from "./assets/KES Mobile Products.png";
import ProductsSampleServices from "./assets/Sample Services.png";
import WatchDesktopBackground from "./assets/KES Desktop Watch.png";
import SkillsDesktopBackground from "./assets/KES Desktop Skills.png";
import SkillsMobileBackground from "./assets/TKS Mobile Skills.png";
import ExperienceDesktopBackground from "./assets/KES Desktop Experience.png";
import ExperienceMobileBackground from "./assets/TKS Mobile Experience.png";
import ContactDesktopBackground from "./assets/KES Desktop Contact.png";
import ContactMobileBackground from "./assets/TKS Mobile Contact.png";
import TestimonySample from "./assets/Testimony.jpg";
import TestimonyStar from "./assets/Testimony Star.png";
import ConnectDesktopBackground from "./assets/KES Desktop Connect.png";
import ConnectMobileBackground from "./assets/TKS Mobile Connect.png";

const scheduleKeys = ["S", "M", "T", "W", "T2", "F", "S2"];
const rotationPerStep = 360 / 7;

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

function TemplateKES() {
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
  const [rotation, setRotation] = useState(0);

  const handleDayClick = (newDay) => {
    if (newDay === selectedDay) return;
    const newIndex = scheduleKeys.indexOf(newDay);
    setRotation(newIndex * rotationPerStep);
    setSelectedDay(newDay);
  };

  const { day, available, startTime, endTime } = schedule[selectedDay];

  const currentYear = new Date().getFullYear();
  return (
    <div className="virtual-card virtual-card-KES">
      <div className="virtual-card-bottom-bar mobile">
        <a onClick={handleDownloadVCard} className="virtual-card-white-button">
          <p>Save Contact</p>
        </a>
        <a
          href="https://www.linkedin.com/in/santosh09062002/"
          target="_blank"
          className="virtual-card-banner-button"
        >
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
                <div className="virtual-card-banner-left-logo">
                  <img src={Logo} alt="Koios Emgineering Soltuions Logo" />
                  <span>Koios Engineering Solutions</span>
                </div>
                <h1>
                  Matt Henry
                  <img src={Verified} />
                </h1>
              </section>
              <p>
                Lorem ipsum dolor sit amet consectetur. Lectus cursus platea
                lobortis id. Sit nibh ullamcor er in libero.
              </p>
            </div>
            <a href="#" className="virtual-card-white-button desktop">
              <p>View Portfolio</p>
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
          <h2>Software Engineerr</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Lectus cursus platea
            lobortis id. Sit nibh ullamcorper in libero donec enim auctor. Quam
            eleifend magna aliquet ut. Turpis gravida quis ut ipsum vestibulum
            justo viverra.
          </p>
        </div>
      </div>
      <div className="virtual-card-reach">
        <h2>Get in Touch</h2>
        <div className="virtual-card-reach-container">
          <section>
            <a href="#" className="virtual-card-reach-set">
              <div className="virtual-card-reach-set-text">
                <img src={EmailIcon} />
                <div className="virtual-card-reach-set-content">
                  <h3>Email Me</h3>
                  <p>you@company.com</p>
                </div>
              </div>
              <img src={AboutArrow} />
            </a>
            <a href="#" className="virtual-card-reach-set">
              <div className="virtual-card-reach-set-text">
                <img src={CallIcon} />
                <div className="virtual-card-reach-set-content">
                  <h3>Contact</h3>
                  <p>+91 839383938</p>
                </div>
              </div>
              <img src={AboutArrow} />
            </a>
            <a href="#" className="virtual-card-reach-set">
              <div className="virtual-card-reach-set-text">
                <img src={LocationIcon} />
                <div className="virtual-card-reach-set-content">
                  <h3>Location</h3>
                  <p>Manipal</p>
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
          <g filter="url(#filter0_f_781_1016)">
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
              id="filter0_f_781_1016"
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
                result="effect1_foregroundBlur_781_1016"
              />
            </filter>
          </defs>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="540"
          height="473"
          viewBox="0 0 540 473"
          fill="none"
          className="virtual-card-find-background virtual-card-find-white"
        >
          <g filter="url(#filter0_f_781_1015)">
            <circle cx="270" cy="270" r="70" fill="white" />
          </g>
          <defs>
            <filter
              id="filter0_f_781_1015"
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
                result="effect1_foregroundBlur_781_1015"
              />
            </filter>
          </defs>
        </svg>
        <h2>Discover X Follow</h2>
        <div className="virtual-card-find-container">
          <a href="#" target="_blank" className="virtual-card-find-set">
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
          <a href="#" target="_blank" className="virtual-card-find-set">
            <div className="virtual-card-find-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="81"
                height="80"
                viewBox="0 0 81 80"
                fill="none"
              >
                <path
                  d="M80.5999 40.1003C80.5999 17.9649 62.635 0 40.4997 0C18.3643 0 0.399414 17.9649 0.399414 40.1003C0.399414 59.5088 14.1939 75.6692 32.4796 79.3985V52.1303H24.4596V40.1003H32.4796V30.0752C32.4796 22.3358 38.7753 16.0401 46.5147 16.0401H56.5398V28.0702H48.5197C46.3142 28.0702 44.5097 29.8747 44.5097 32.0802V40.1003H56.5398V52.1303H44.5097V80C64.7603 77.995 80.5999 60.9123 80.5999 40.1003Z"
                  fill="white"
                />
              </svg>
            </div>
            <h3 className="virtual-card-find-icon-label">Facebook</h3>
          </a>
          <a href="#" target="_blank" className="virtual-card-find-set">
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
          <a href="#" target="_blank" className="virtual-card-find-set">
            <div className="virtual-card-find-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
              >
                <path
                  d="M24.8097 17.8334C26.9397 17.8334 28.9097 18 30.7097 18.4934C32.513 18.8234 33.9897 19.4834 35.2997 20.3067C36.613 21.1312 37.5963 22.2856 38.2497 23.77C38.9063 25.2534 39.2363 27.07 39.2363 29.0467C39.2363 31.3567 38.743 33.3334 37.5963 34.8167C36.613 36.3034 34.973 37.62 33.0063 38.61C35.793 39.4367 37.923 40.92 39.2363 42.8967C40.5497 44.8734 41.3663 47.35 41.3663 50.1534C41.3663 52.4634 40.873 54.44 40.053 56.09C39.2363 57.74 37.923 59.2234 36.4463 60.2134C34.8416 61.2733 33.0687 62.0533 31.203 62.52C29.2363 63.0167 27.2697 63.3467 25.303 63.3467H3.33301V17.8334H24.8097ZM23.4963 36.3C25.2997 36.3 26.7763 35.8067 27.923 34.9834C29.0697 34.16 29.563 32.6734 29.563 30.86C29.563 29.87 29.3963 28.88 29.0697 28.2234C28.743 27.5667 28.2497 27.0667 27.5963 26.5734C26.9283 26.1982 26.2099 25.9209 25.463 25.75C24.643 25.5834 23.8263 25.5834 22.8397 25.5834H13.333V36.3034L23.4963 36.3ZM23.9897 55.76C24.973 55.76 25.9563 55.5934 26.7763 55.43C27.5963 55.2634 28.4163 54.9367 29.0697 54.44C29.735 53.9546 30.2933 53.3373 30.7097 52.6267C31.0363 51.8034 31.3663 50.8134 31.3663 49.66C31.3663 47.35 30.7097 45.7 29.3997 44.5467C28.0863 43.5567 26.283 43.0634 24.153 43.0634H13.333V55.7634L23.9897 55.76ZM55.6297 55.5934C56.9408 56.9134 58.9074 57.5734 61.5297 57.5734C63.333 57.5734 64.973 57.08 66.283 56.2567C67.5963 55.2656 68.4163 54.2756 68.743 53.2867H76.7763C75.463 57.2434 73.4963 60.0467 70.8763 61.86C68.2497 63.51 65.1363 64.5 61.3663 64.5C58.9546 64.5036 56.5634 64.0559 54.3163 63.18C52.2934 62.4256 50.4903 61.1792 49.0697 59.5534C47.5441 58.0379 46.4182 56.1676 45.793 54.11C44.973 51.9667 44.643 49.66 44.643 47.02C44.643 44.5467 44.973 42.24 45.793 40.0934C46.5796 38.0254 47.7476 36.1235 49.2363 34.4867C50.7097 33.0034 52.513 31.6867 54.4797 30.86C56.6689 29.9811 59.0072 29.5329 61.3663 29.54C64.153 29.54 66.613 30.0367 68.743 31.19C70.8763 32.3434 72.513 33.6634 73.823 35.6434C75.1363 37.4567 76.123 39.6 76.7763 41.91C77.103 44.2167 77.2663 46.5267 77.103 49.1634H53.333C53.333 51.8034 54.3163 54.2767 55.6297 55.5967M65.9563 38.2834C64.8097 37.13 63.0063 36.47 60.873 36.47C59.6222 36.4513 58.3851 36.7337 57.2663 37.2934C56.283 37.79 55.6297 38.45 54.973 39.11C54.3658 39.7449 53.9659 40.5494 53.8263 41.4167C53.6597 42.2434 53.4963 42.9 53.4963 43.56H68.2497C67.923 41.0867 67.103 39.44 65.9563 38.2834ZM51.5297 20.9667H69.8897V25.42H51.533L51.5297 20.9667Z"
                  fill="white"
                />
              </svg>
            </div>
            <h3 className="virtual-card-find-icon-label">Behance</h3>
          </a>
          <a href="#" target="_blank" className="virtual-card-find-set">
            <div className="virtual-card-find-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
              >
                <path
                  d="M53 70C53 70 53 62.4333 53 60C53 57.9 53.5 53.4667 51.3333 51.6667C55.9667 51.2333 59.6 49.7333 63 46.6667C66.4 43.6 68 38.9667 68 31.6667C68 26.6667 67.1667 23.3333 64.6667 20C65.6333 17.4 65.8 13.3333 64.6667 10C59.4667 10 54.7667 13.5667 53 15C51.7 14.6667 48.5667 13.3333 43 13.3333C37.4333 13.3333 34.3 14.6667 33 15C31.2333 13.5667 26.5333 10 21.3333 10C20.2 13.3333 20.3667 17.4 21.3333 20C18.8333 23.3333 18 26.6667 18 31.6667C18 38.9667 19.6 43.6 23 46.6667C26.4 49.7333 30.0333 51.2333 34.6667 51.6667C32.5 53.4667 33 57.9 33 60C33 62.4333 33 70 33 70"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M33 63.3333C28.3 63.3333 23.5333 61.4666 20.7 59.3666C17.9 57.2666 17.0667 53.8333 13 51.6666"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="virtual-card-find-icon-label">GitHub</h3>
          </a>
        </div>
      </div>
      <div className="virtual-card-services">
        <h2>Our Services</h2>
        <div className="virtual-card-services-container">
          <div className="virtual-card-services-set">
            <h3>Website Development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Lectus cursus platea
              lobortis id sit nibh ullamcorpo.
            </p>
            <img src={ServicesDesktopCardBackground} />
          </div>
          <div className="virtual-card-services-set">
            <h3>Website Development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Lectus cursus platea
              lobortis id sit nibh ullamcorpo.
            </p>
            <img src={ServicesDesktopCardBackground} />
          </div>
          <div className="virtual-card-services-set">
            <h3>Website Development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Lectus cursus platea
              lobortis id sit nibh ullamcorpo.
            </p>
            <img src={ServicesDesktopCardBackground} />
          </div>
          <div className="virtual-card-services-set">
            <h3>Website Development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Lectus cursus platea
              lobortis id sit nibh ullamcorpo.
            </p>
            <img src={ServicesDesktopCardBackground} />
          </div>
          <div className="virtual-card-services-set">
            <h3>Website Development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Lectus cursus platea
              lobortis id sit nibh ullamcorpo.
            </p>
            <img src={ServicesDesktopCardBackground} />
          </div>
          <div className="virtual-card-services-set">
            <h3>Website Development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Lectus cursus platea
              lobortis id sit nibh ullamcorpo.
            </p>
            <img src={ServicesDesktopCardBackground} />
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
                position: "absolute",
                width: "40px",
                height: "40px",
                transform: `rotate(${rotation}deg) translateX(310px) translateY(-30px) rotate(${-rotation}deg)`,
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
        <img
          src={ExperienceDesktopBackground}
          className="virtual-card-experience-background desktop"
        />
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
            <h2>Let's</h2>
            <h2>Connect</h2>
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
        </div>
      </div>
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

export default TemplateKES;
