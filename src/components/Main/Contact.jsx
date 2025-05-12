import React from "react";
import { Helmet } from "react-helmet-async";

function Contact() {
  return (
    <div className="p-contact">
      <Helmet>
        <title>Contact Us</title>
        <meta
          name="description"
          content="Explore Koios' Website Designing services including responsive design and UI/UX development."
        />
      </Helmet>
      <div className="p-text">
        <div className="p-get-in-touch">Get In Touch</div>
        <div className="p-talk-to-us">
          Talk to us and we will help you reach out as soon as possible.
        </div>
        <form action="https://formspree.io/f/mdoqjbpz" method="post">
          <div className="p-form-logo">
            <div className="p-contact-form">
              <div className="p-fullname">
                <label>
                  Full Name<span style={{ color: "#ffbf00" }}>*</span>
                </label>
                <input
                  className="p-input"
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  required
                  autoComplete="given-name"
                />
              </div>
              <div className="p-email">
                <label>
                  Email address<span style={{ color: "#ffbf00" }}>*</span>
                </label>
                <input
                  className="p-input"
                  type="text"
                  placeholder="you@company.com"
                  required
                  autoComplete="email"
                  name="email"
                />
              </div>
              <div className="p-number">
                <label>
                  Mobile number<span style={{ color: "#ffbf00" }}>*</span>
                </label>
                <input
                  className="p-input"
                  type="tel"
                  placeholder="99999 99999"
                  required
                  name="number"
                  maxLength="10"
                />
              </div>
              <div className="p-how-can-we-help">
                <label>How can we help you?</label>
                <textarea
                  className="p-textarea"
                  placeholder="Type Here"
                ></textarea>
              </div>
              <input
                type="submit"
                className="p-submit-button"
                value="Submit"
                required
                name="message"
              />
            </div>
            <div className="p-moving-logo">
              <div className="p-explore-services">
                EXPLORE THE SERVICES WE PROVIDE
              </div>
              <div className="p-list1">
                <div className="p-logo-slider">
                  <div className="p-logo-slide-track">
                    <div className="p-slide rev">
                      <p>WEBSITE DESIGNING</p>
                    </div>
                    <div className="p-slide rev">
                      <p>WEBSITE DEVELOPMENT</p>
                    </div>
                    <div className="p-slide rev">
                      <p>APP DEVELOPMENT</p>
                    </div>
                    <div className="p-slide rev">
                      <p>COMPANY BRANDING</p>
                    </div>
                    <div className="p-slide rev">
                      <p>WEBSITE DESIGNING</p>
                    </div>
                    <div className="p-slide rev">
                      <p>WEBSITE DEVELOPMENT</p>
                    </div>
                    <div className="p-slide rev">
                      <p>APP DEVELOPMENT</p>
                    </div>
                    <div className="p-slide rev">
                      <p>COMPANY BRANDING</p>
                    </div>
                    <div className="p-slide rev">
                      <p>WEBSITE DESIGNING</p>
                    </div>
                    <div className="p-slide rev">
                      <p>UI/UX</p>
                    </div>
                    <div className="p-slide rev">
                      <p>Social Media Marketing</p>
                    </div>
                    <div className="p-slide rev">
                      <p>Digital Marketing</p>
                    </div>
                    <div className="p-slide rev">
                      <p>SEO</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-list2">
                <div className="p-logo-slider rev">
                  <div className="p-logo-slide-track rev">
                    <div className="p-slide rev">
                      <p>WEBSITE DESIGNING</p>
                    </div>
                    <div className="p-slide rev">
                      <p>WEBSITE DEVELOPMENT</p>
                    </div>
                    <div className="p-slide rev">
                      <p>APP DEVELOPMENT</p>
                    </div>
                    <div className="p-slide rev">
                      <p>COMPANY BRANDING</p>
                    </div>
                    <div className="p-slide rev">
                      <p>WEBSITE DESIGNING</p>
                    </div>
                    <div className="p-slide rev">
                      <p>WEBSITE DEVELOPMENT</p>
                    </div>
                    <div className="p-slide rev">
                      <p>APP DEVELOPMENT</p>
                    </div>
                    <div className="p-slide rev">
                      <p>COMPANY BRANDING</p>
                    </div>
                    <div className="p-slide rev">
                      <p>WEBSITE DESIGNING</p>
                    </div>
                    <div className="p-slide rev">
                      <p>UI/UX</p>
                    </div>
                    <div className="p-slide rev">
                      <p>Social Media Marketing</p>
                    </div>
                    <div className="p-slide rev">
                      <p>Digital Marketing</p>
                    </div>
                    <div className="p-slide rev">
                      <p>SEO</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
