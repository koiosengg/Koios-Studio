import React, { useState } from "react";
import Logo from "./assets/Footer Company Logo.png";
import BannerDesktopBackround from "./assets/TKS Desktop Banner.png";
import BannerMobileBackround from "./assets/TKS Mobile Banner.png";
import Verified from "./assets/Verified.png";
import MahiRastogi from "./assets/TemplateTKS Person.png";
import MarqueeStar from "./assets/Marquee Star.png";
import AboutDesktopBackground from "./assets/TKS Desktop About.png";
import AboutMobileBackground from "./assets/TKS Mobile About.png";
import DesktopStar from "./assets/TKS Desktop Star.png";
import ReachDesktopBackground from "./assets/TKS Desktop Reach.png";
import CallIcon from "./assets/TKS Call Icon.png";
import EmailIcon from "./assets/TKS Email Icon.png";
import LocationIcon from "./assets/TKS Location Icon.png";
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
import PenIcon from "./assets/Pen Icon.png";
import ExperienceDesktopBackground from "./assets/TKS Desktop Experience.png";
import ExperienceMobileBackground from "./assets/TKS Mobile Experience.png";
import ContactDesktopBackground from "./assets/TKS Desktop Contact.png";
import ContactMobileBackground from "./assets/TKS Mobile Contact.png";

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

function TemplateTKS() {
  const [selectedDay, setSelectedDay] = useState("S");

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  const { day, available, startTime, endTime } = schedule[selectedDay];

  return (
    <div className="virtual-card">
      <div className="virtual-card-bottom-bar mobile">
        <a href="#" className="virtual-card-white-button">
          <p>Save Contact</p>
        </a>
        <a href="#" className="virtual-card-black-button">
          <p>View Portfolio</p>
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
                  Daniel Jacob
                  <img src={Verified} />
                </h1>
                <div className="virtual-card-banner-designation">
                  <span>UX Designer</span>
                </div>
              </section>
              <p>
                Lorem ipsum dolor sit amet consectetur. Lectus cursus platea
                lobortis id. Sit nibh ullamcorper in libero.
              </p>
            </div>
            <a href="#" className="virtual-card-white-button desktop">
              <p>View Portfolio</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
              >
                <path
                  d="M1.81111 13.707L0.400116 12.293L5.68911 6.99998L0.400116 1.70698L1.81511 0.292976L7.1001 5.58598C7.47505 5.96103 7.68568 6.46965 7.68568 6.99998C7.68568 7.5303 7.47505 8.03892 7.1001 8.41397L1.81111 13.707Z"
                  fill="#121212"
                />
              </svg>
            </a>
          </div>
          <div className="virtual-card-banner-right">
            <img src={MahiRastogi} />
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
          <h2>Project Manager</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Lectus cursus platea
            lobortis id. Sit nibh ullamcorper in libero donec enim auctor. Quam
            eleifend magna aliquet ut. Turpis gravida quis ut ipsum vestibulum
            justo viverra.
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
          className="virtual-card-reach-background"
        />
        <div className="virtual-card-reach-container">
          <section>
            <a href="#" className="virtual-card-reach-set">
              <img src={CallIcon} />
              <p>0191819101910</p>
            </a>
            <a href="#" className="virtual-card-reach-set">
              <img src={EmailIcon} />
              <p>you@company.com</p>
            </a>
            <a href="#" className="virtual-card-reach-set">
              <img src={LocationIcon} />
              <p>Bangalore</p>
            </a>
          </section>
          <section>
            <a href="#" className="virtual-card-reach-set">
              <img src={LocationIcon} />
              <p>
                No.315/64, off Holiday Village Road, Thalaghattapura Post,
                Mallasandra, Bengaluru, Karnataka 560109
              </p>
            </a>
          </section>
        </div>
      </div>
      <div className="virtual-card-services">
        <img
          src={ServicesDesktopBackground}
          className="virtual-card-services-background desktop"
        />
        <img
          src={ServicesMobileBackground}
          className="virtual-card-services-background mobile"
        />
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
        <h2>Skills & Expertise</h2>
        <div className="virtual-card-skills-container">
          <div className="virtual-card-skills-set">
            <img src={PenIcon} />
            <h3>UI Design</h3>
          </div>
          <div className="virtual-card-skills-set">
            <img src={PenIcon} />
            <h3>UI Design</h3>
          </div>
          <div className="virtual-card-skills-set">
            <img src={PenIcon} />
            <h3>UI Design</h3>
          </div>
          <div className="virtual-card-skills-set">
            <img src={PenIcon} />
            <h3>UI Design</h3>
          </div>
          <div className="virtual-card-skills-set">
            <img src={PenIcon} />
            <h3>UI Design</h3>
          </div>
          <div className="virtual-card-skills-set">
            <img src={PenIcon} />
            <h3>UI Design</h3>
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
            <h3>User Experience Designer</h3>
            <section>
              <h4>Microsoft </h4>
              <p>2023 - Present</p>
            </section>
          </div>
          <div className="virtual-card-experience-set">
            <h3>User Research</h3>
            <section>
              <h4>Microsoft </h4>
              <p>2023 - Present</p>
            </section>
          </div>
          <div className="virtual-card-experience-set">
            <h3>UI Designer</h3>
            <section>
              <h4>Microsoft </h4>
              <p>2023 - Present</p>
            </section>
          </div>
          <div className="virtual-card-experience-set">
            <h3>Intern Designer</h3>
            <section>
              <h4>Microsoft </h4>
              <p>2023 - Present</p>
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
      </div>
    </div>
  );
}

export default TemplateTKS;
