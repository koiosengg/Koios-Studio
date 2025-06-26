import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [hasToggled, setHasToggled] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
    setHasToggled(true);
  };

  const handleLinkClick = () => {
    if (isMobileNavOpen) {
      setIsMobileNavOpen(false);
    }
  };
  return (
    <>
      <div className="portfolio-navbar">
        <Link to="/portfolio" className="portfolio-navbar-logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="33"
            viewBox="0 0 40 33"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.6447 32.1045C18.8223 32.3527 19.1087 32.5 19.4139 32.5H27.7948C28.5739 32.5 29.0187 31.6108 28.5516 30.9873L17.7661 16.5935C17.5132 16.256 17.5144 15.7918 17.769 15.4555L27.9465 2.01652C28.4181 1.3937 27.9739 0.5 27.1926 0.5H19.321C19.017 0.5 18.7315 0.646196 18.5538 0.892893L10.6093 11.9209C10.0727 12.6657 8.89643 12.2861 8.89643 11.3681V1.44563C8.89643 0.923371 8.47306 0.5 7.9508 0.5H0.945624C0.42337 0.5 0 0.923372 0 1.44563V11.4398C1.09249 9.70524 1.7704 7.36247 2.20282 4.13116C3.17574 12.6156 6.01046 15.1616 14.4799 16.4083C5.24812 17.5877 3.13336 20.743 2.20282 28.6213C1.67086 25.4599 1.01442 23.1061 0 21.347V31.5544C0 32.0766 0.423371 32.5 0.945624 32.5H7.9508C8.47306 32.5 8.89643 32.0766 8.89643 31.5544V21.4222C8.89643 20.5025 10.0762 20.124 10.6112 20.8721L18.6447 32.1045Z"
              fill="#FFBF00"
            />
            <ellipse
              cx="34.9879"
              cy="27.515"
              rx="4.72812"
              ry="4.72813"
              fill="#FFBF00"
            />
          </svg>
        </Link>
        <nav className="notMobile">
          <Link to="/portfolio/websites">Websites</Link>
          <span></span>
          <Link to="/portfolio/applications">Applications</Link>
          <span></span>
          <Link to="/portfolio/branding">Branding</Link>
        </nav>
        <div
          className="portfolio-mobile-navbar-open-button mobile"
          onClick={toggleMobileNav}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="12"
            viewBox="0 0 18 12"
            fill="none"
          >
            <path
              d="M0 12V10H18V12H0ZM0 7V5H18V7H0ZM0 2V0H18V2H0Z"
              fill="white"
              fill-opacity="0.8"
            />
          </svg>
        </div>
      </div>
      <div
        className={`portfolio-mobile-navbar mobile ${
          isMobileNavOpen
            ? "activeMobileNavbar"
            : hasToggled
            ? "nonactiveMobileNavbar"
            : ""
        }`}
      >
        <div
          className="portfolio-mobile-navbar-close-button"
          onClick={toggleMobileNav}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M0.999939 11L5.99994 6L10.9999 11M10.9999 1L5.99899 6L0.999939 1"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="portfolio-mobile-navbar-container">
          <nav>
            <Link onClick={handleLinkClick} to="/portfolio/websites">
              Websites
            </Link>
            <Link onClick={handleLinkClick} to="/portfolio/applications">
              Applications
            </Link>
            <Link onClick={handleLinkClick} to="/portfolio/branding">
              Branding
            </Link>
          </nav>
          <div className="portfolio-mobile-navbar-contact">
            <Link
              to="/contact"
              onClick={handleLinkClick}
              className="portfolio-mobile-navbar-contact-button"
            >
              Contact Us
            </Link>
            <section>
              <a onClick={handleLinkClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                >
                  <path
                    d="M9.5 0C7.055 0 6.74975 0.01125 5.78975 0.054C4.83125 0.099 4.17875 0.24975 3.605 0.4725C3.01325 0.702 2.51075 1.01025 2.0105 1.5105C1.51025 2.01075 1.20125 2.5125 0.9725 3.105C0.74975 3.67875 0.59825 4.33125 0.554 5.28975C0.509 6.24975 0.5 6.555 0.5 9C0.5 11.445 0.51125 11.7503 0.554 12.7103C0.599 13.668 0.74975 14.3213 0.9725 14.895C1.202 15.486 1.51025 15.9893 2.0105 16.4895C2.51075 16.989 3.0125 17.2987 3.605 17.5275C4.1795 17.7495 4.832 17.9018 5.78975 17.946C6.74975 17.991 7.055 18 9.5 18C11.945 18 12.2503 17.9888 13.2103 17.946C14.168 17.901 14.8213 17.7495 15.395 17.5275C15.986 17.298 16.4893 16.989 16.9895 16.4895C17.489 15.9893 17.7987 15.4883 18.0275 14.895C18.2495 14.3213 18.4018 13.668 18.446 12.7103C18.491 11.7503 18.5 11.445 18.5 9C18.5 6.555 18.4888 6.24975 18.446 5.28975C18.401 4.332 18.2495 3.678 18.0275 3.105C17.798 2.51325 17.489 2.01075 16.9895 1.5105C16.4893 1.01025 15.9883 0.70125 15.395 0.4725C14.8213 0.24975 14.168 0.09825 13.2103 0.054C12.2503 0.009 11.945 0 9.5 0ZM9.5 1.62C11.9023 1.62 12.1888 1.632 13.1375 1.67325C14.015 1.7145 14.4913 1.86 14.8077 1.9845C15.2292 2.14725 15.5278 2.34225 15.8442 2.6565C16.1585 2.9715 16.3535 3.27075 16.5163 3.69225C16.6392 4.00875 16.7862 4.485 16.826 5.3625C16.8687 6.312 16.8785 6.597 16.8785 9C16.8785 11.403 16.8673 11.6888 16.823 12.6375C16.7773 13.515 16.631 13.9913 16.5072 14.3077C16.3393 14.7292 16.148 15.0278 15.833 15.3442C15.5188 15.6585 15.215 15.8535 14.798 16.0163C14.483 16.1392 13.9993 16.2862 13.1217 16.326C12.1663 16.3687 11.885 16.3785 9.4775 16.3785C7.06925 16.3785 6.788 16.3673 5.83325 16.323C4.955 16.2773 4.47125 16.131 4.15625 16.0072C3.7295 15.8393 3.43625 15.648 3.122 15.333C2.80625 15.0188 2.6045 14.715 2.447 14.298C2.32325 13.983 2.17775 13.4993 2.132 12.6217C2.09825 11.6768 2.08625 11.385 2.08625 8.98875C2.08625 6.59175 2.09825 6.29925 2.132 5.343C2.17775 4.4655 2.32325 3.9825 2.447 3.6675C2.6045 3.24 2.80625 2.9475 3.122 2.63175C3.43625 2.3175 3.7295 2.115 4.15625 1.95825C4.47125 1.83375 4.9445 1.6875 5.822 1.6425C6.77825 1.60875 7.0595 1.5975 9.46625 1.5975L9.5 1.62ZM9.5 4.3785C6.94625 4.3785 4.8785 6.4485 4.8785 9C4.8785 11.5538 6.9485 13.6215 9.5 13.6215C12.0538 13.6215 14.1215 11.5515 14.1215 9C14.1215 6.44625 12.0515 4.3785 9.5 4.3785ZM9.5 12C7.8425 12 6.5 10.6575 6.5 9C6.5 7.3425 7.8425 6 9.5 6C11.1575 6 12.5 7.3425 12.5 9C12.5 10.6575 11.1575 12 9.5 12ZM15.3845 4.19625C15.3845 4.7925 14.9 5.27625 14.3045 5.27625C13.7083 5.27625 13.2245 4.79175 13.2245 4.19625C13.2245 3.60075 13.709 3.117 14.3045 3.117C14.8993 3.11625 15.3845 3.60075 15.3845 4.19625Z"
                    fill="#B9B9B9"
                  />
                </svg>
              </a>
              <a onClick={handleLinkClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                >
                  <path
                    d="M15.8353 15.339H13.1698V11.1623C13.1698 10.1663 13.1495 8.8845 11.7808 8.8845C10.391 8.8845 10.1788 9.96825 10.1788 11.0887V15.339H7.51325V6.75H10.0738V7.92075H10.1082C10.466 7.24575 11.336 6.53325 12.6357 6.53325C15.3365 6.53325 15.836 8.31075 15.836 10.6245L15.8353 15.339ZM4.50275 5.57475C3.64475 5.57475 2.9555 4.88025 2.9555 4.026C2.9555 3.1725 3.6455 2.47875 4.50275 2.47875C5.35775 2.47875 6.05075 3.1725 6.05075 4.026C6.05075 4.88025 5.357 5.57475 4.50275 5.57475ZM5.83925 15.339H3.16625V6.75H5.83925V15.339ZM17.1688 0H1.82825C1.094 0 0.5 0.5805 0.5 1.29675V16.7033C0.5 17.4202 1.094 18 1.82825 18H17.1665C17.9 18 18.5 17.4202 18.5 16.7033V1.29675C18.5 0.5805 17.9 0 17.1665 0H17.1688Z"
                    fill="#B9B9B9"
                  />
                </svg>
              </a>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
