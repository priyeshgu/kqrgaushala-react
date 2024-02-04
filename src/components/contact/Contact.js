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
              <p className="contact-link-desc">kqrgaushala@gmail.com</p>
            </a>
          </div>
          
          
        
          
        </div>
      </div>
    </div>
  );
}
