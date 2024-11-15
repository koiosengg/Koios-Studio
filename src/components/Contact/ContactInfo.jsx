import React from "react";
import ContactInfoBackground from "../../assets/Contact/Contact Info Background.png";
import MailIcon from "../../assets/Contact/MailIcon.svg";
import LocationIcon from "../../assets/Contact/LocationIcon.svg";
import CallIcon from "../../assets/Contact/CallIcon.svg";

function ContactInfo() {
  const contacts = [
    {
      label: "Mail Us",
      link: "mailto:info@koios.com",
      icon: MailIcon,
      text: "info@koios.com",
    },
    {
      label: "Location",
      link: "https://maps.app.goo.gl/QrLm8i7UGhHMzZ647",
      icon: LocationIcon,
      text: (
        <>
          No.315/64, Mallasandra village, <br /> Thalaghattapura Post <br />
          Bengaluru-560109
        </>
      ),
    },
    {
      label: "Call Us",
      link: "tel:+918909765654",
      icon: CallIcon,
      text: "+91 8909765654",
    },
  ];

  return (
    <div className="contact-info">
      <div className="section-heading">
        <h2>Your Support Network</h2>
        <p>
          We’re Here Whenever <br />
          You Need Us
        </p>
      </div>
      <div className="contact-info-container">
        {contacts.map((contact, index) => (
          <div className="contact-info-set" key={index}>
            <a
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={contact.label}
              className="contact-info-set-div"
            >
              <div className="heading">
                <img src={contact.icon} alt="" aria-hidden="true" />
                <h3>{contact.label}</h3>
              </div>
              <p>{contact.text}</p>
            </a>
          </div>
        ))}
      </div>
      <img src={ContactInfoBackground} className="contact-info-background" />
    </div>
  );
}

export default ContactInfo;
