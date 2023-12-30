import React from "react";
import "./Contact.css";
import callIcon from "../../assets/contactpage/call.svg";
import mailIcon from "../../assets/contactpage/mail.svg";
import locationIcon from "../../assets/contactpage/location.svg";

export default function Contact() {
  return (
    <div>
      <div className="contact-map text-center container">
        

        <div className="contact-details d-flex flex-row flex-wrap justify-content-center mb-3">
          <div className="mx-3 contact-card col-md-3 col-12 d-flex flex-column align-items-center ">
            <img
              className="contact-logo"
              src={locationIcon}
              alt="location-icon"
            ></img>
            <a
              className="contact-link"
              href="https://maps.app.goo.gl/NSULHZfxoQo7hv7n6"
              target="_blank" 
              rel="noreferrer"
            >
              <p className="contact-link-desc">Shree Koderma Gaushala, Jhumri Telaiya, Jharkhand 825409</p>
            </a>
          </div>
          <div className="mx-3 contact-card col-md-3 col-12 d-flex flex-column align-items-center ">
            <img
              className="contact-logo"
              src={mailIcon}
              alt="location-icon"
            ></img>
            <a
              className="contact-link"
              href="https://maps.app.goo.gl/NSULHZfxoQo7hv7n6"
              target="_blank" 
              rel="noreferrer"
            >
              <p className="contact-link-desc">maicreation@gmail.com</p>
            </a>
          </div>
          <div className="mx-3 contact-card col-md-3 col-12 d-flex flex-column align-items-center ">
            <img
              className="contact-logo"
              src={callIcon}
              alt="location-icon"
            ></img>
            <a
              className="contact-link"
              href="https://maps.app.goo.gl/NSULHZfxoQo7hv7n6"
              target="_blank" 
              rel="noreferrer"
            >
              <p className="contact-link-desc">+91-dummy-number-98</p>
            </a>
          </div>
          
        <iframe
          className="map-iframe mt-5"
          title="Koderma Gaushala Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14531.583144019596!2d85.5341414!3d24.4196878!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f3748f33c21cf9%3A0x471e1db7e10fbe3a!2sShree%20Koderma%20Gaushala%2C%20Jhumri%20Telaiya!5e0!3m2!1sen!2sin!4v1702921486008!5m2!1sen!2sin"
          // width="600"
          // height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
          
        </div>
      </div>
    </div>
  );
}
