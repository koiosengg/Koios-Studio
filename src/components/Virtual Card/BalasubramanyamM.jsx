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
import PersonPhoto from "/BalasubramanyamM.jpg";
import AboutDesktopBackground from "./assets/KES Desktop About.png";
import AboutMobileBackground from "./assets/KES Mobile About.png";
import CallIcon from "./assets/KES Call Icon.png";
import EmailIcon from "./assets/KES Email Icon.png";
import LocationIcon from "./assets/KES Location Icon.png";
import AboutArrow from "./assets/KES Get in Touch Arrow.png";
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

function BalasubramanyamM() {
  const handleDownloadVCard = async () => {
    const vCard = vCardsJS();

    vCard.firstName = "Balasubramanyam M";
    vCard.cellPhone = "+918296853717";
    vCard.email = "kespvtltd2023@gmail.com";
    vCard.organization = "Koios Engineering Solutions";

    const imageBase64 = await getBase64FromImage(
      `${window.location.origin}/BalasubramanyamM.jpg`
    );
    vCard.photo.embedFromString(imageBase64, "imagejpg");

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
          href="#"
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
                  Balasubramanyam M
                  <img src={Verified} />
                </h1>
              </section>
              <p>
                Looking after companies Financial Compliance, Statutory
                compliance and Books of accounts management.
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
          <h2>Compliance & Finance</h2>
          <p>
            Responsible for ensuring the company adheres to all financial and
            statutory compliance requirements. Oversee the accurate maintenance
            of books of accounts, ensuring transparency and regulatory
            alignment.
          </p>
        </div>
      </div>
      <div className="virtual-card-reach">
        <h2>Get in Touch</h2>
        <div className="virtual-card-reach-container">
          <section>
            <a
              href="https://mail.google.com/mail/?view=cm&to=kespvtltd2023@gmail.com"
              target="_blank"
              className="virtual-card-reach-set"
            >
              <div className="virtual-card-reach-set-text">
                <img src={EmailIcon} />
                <div className="virtual-card-reach-set-content">
                  <h3>Email Me</h3>
                  <p>kespvtltd2023@gmail.com</p>
                </div>
              </div>
              <img src={AboutArrow} />
            </a>
            <a
              href="tel:+918296853717"
              target="_blank"
              className="virtual-card-reach-set"
            >
              <div className="virtual-card-reach-set-text">
                <img src={CallIcon} />
                <div className="virtual-card-reach-set-content">
                  <h3>Contact</h3>
                  <p>+91 82968 53717</p>
                </div>
              </div>
              <img src={AboutArrow} />
            </a>
            <a
              href="https://maps.app.goo.gl/e2NBaPiNyMoR7eqE9"
              target="_blank"
              className="virtual-card-reach-set"
            >
              <div className="virtual-card-reach-set-text">
                <img src={LocationIcon} />
                <div className="virtual-card-reach-set-content">
                  <h3>Location</h3>
                  <p>Bangalore</p>
                </div>
              </div>
              <img src={AboutArrow} />
            </a>
          </section>
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
              <h3>Microsoft Excel</h3>
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
              <h3>ERP Software</h3>
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
              <h3>Power BI</h3>
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
              <h3>Financial Process</h3>
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
              <h3>Statutory Compliance</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="virtual-card-experience">
        <h2>Work Experience</h2>
        <div className="virtual-card-experience-container">
          <div className="virtual-card-experience-set">
            <h3>Compliance & Finance</h3>
            <section>
              <h4>Koios Engineering Solution </h4>
              <p>Present</p>
            </section>
          </div>
          <div className="virtual-card-experience-set">
            <h3>Finance Associate </h3>
            <section>
              <h4>LTD Scriptbox Advisors pvt ltd </h4>
              <p> 2 yrs</p>
            </section>
          </div>
        </div>
        <img
          src={ExperienceDesktopBackground}
          className="virtual-card-experience-background"
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

export default BalasubramanyamM;
