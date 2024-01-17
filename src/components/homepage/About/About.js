// src/components/AboutSection/AboutSection.js
import React from "react";
import "./About.css";
import aboutImg from "../../../assets/about-img.jpg";


const AboutSection = () => {
  const placeholderImageUrl = "./about-img.jpg"

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
            Founded in 1961, Koderma Gaushala is a venerable sanctuary committed
            to the welfare of cows, embodying the timeless ethos of reverence
            towards these gentle beings. Nestled in the heart of Koderma, our
            journey began with a vision to provide compassionate care to
            abandoned and distressed cows. Over the decades, we have evolved
            into a haven where tradition meets modernity, ensuring the
            well-being of our sacred residents. With a legacy rooted in love and
            respect for all bovine life, we strive to uphold the principles of
            Gau Seva, fostering a sustainable and harmonious environment.
            Join us in preserving this legacy and supporting our mission to
            safeguard the divine creatures who have graced our sanctuary for
            generations. Your generous contribution empowers us to continue this
            noble legacy. Stand with us in our commitment to the welfare of
            these sacred beings. Donate now and become a cherished part of our
            journey, ensuring a brighter and compassionate future for our
            beloved cows. Read More
          </p>



        </div>

      </div>
    </div>
  );
};

export default AboutSection;
