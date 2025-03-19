import React from "react";
import DesktopBackground from "../assets/TKS Desktop Contact.png";

function Contact() {
  return (
    <div className="virtual-card-contact">
      <img
        src={DesktopBackground}
        className="virtual-card-contact-background"
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
  );
}

export default Contact;
