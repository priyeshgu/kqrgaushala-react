// src/components/AboutSection/AboutSection.js
import React from "react";
import "./AboutPhone.css";
import aboutImg from "../../../../assets/about-img.jpg";


const AboutSectionPhone = () => {
  

  return (
    <div className="about-section mt-5">
      <div className="row">
        <div className="col-12 text-center mb-3 ">
          <h2 className="about-heading">ABOUT SHREE KODERMA GAUSHALA</h2>
        </div>
        {/* Left Part with Image */}
        <div className="col-md-6">
          <img
            src={aboutImg}
            alt="Gaushala"
            className="img-fluid about-img"
          />
        </div>

        {/* Right Part with Text */}
        <div className="col-md-6">
          <p className="about-text">
            Founded in 1950, Koderma Gaushala is a venerable sanctuary committed
            to the welfare of cows, embodying the timeless ethos of reverence
            towards these gentle beings. Nestled in the heart of Koderma District, our
            journey began with a vision to provide compassionate care to
            abandoned and distressed cows. Over the decades, we have evolved
            into a haven where tradition meets modernity, ensuring the
            well-being of our sacred residents. <a href="/about">Read More</a>
          </p>
          


        </div>

      </div>
    </div>
  );
};

export default AboutSectionPhone;
