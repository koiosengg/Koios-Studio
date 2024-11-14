import React from "react";
import ContactFromBackground from "../../assets/Contact/Contact Form Background.png";
import GoogleMap from "./GoogleMap";

function Form() {
  return (
    <div className="contact-form">
      <img src={ContactFromBackground} className="contact-form-background" />
      <div className="banner-heading">
        <h1>Get In Touch</h1>
        <p>Talk to us and we will help you reach out as soon as possible.</p>
      </div>
      <div className="contact-form-container">
        <GoogleMap />
        <form>
          <section>
            <fieldset>
              <label>First name*</label>
              <input placeholder="John" />
            </fieldset>
            <fieldset>
              <label>Last name*</label>
              <input placeholder="Doe" />
            </fieldset>
          </section>
          <fieldset>
            <label>Email address*</label>
            <input placeholder="you@company.com" />
          </fieldset>
          <fieldset>
            <label>Mobile number*</label>
            <input placeholder="9999999999" />
          </fieldset>
          <fieldset>
            <label>How can we help you?</label>
            <textarea placeholder="Type here" />
          </fieldset>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
