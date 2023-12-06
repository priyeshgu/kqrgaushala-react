// src/components/AboutSection/AboutSection.js
import React from 'react';


const AboutSection = () => {
  const placeholderImageUrl = 'https://picsum.photos/800/600';

  return (
    <div className="about-section container">
      <div className="row">
        {/* Left Part with Image */}
        <div className="col-md-6">
          <img src={placeholderImageUrl} alt="Gaushala" className="img-fluid" />
        </div>

        {/* Right Part with Text */}
        <div className="col-md-6">
          <h2>About Shree Koderma Gaushala</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis orci in
            tellus vulputate, sit amet egestas purus volutpat. Sed tristique tortor et dui
            ullamcorper, et vestibulum orci laoreet.
          </p>
          {/* Add more text or details about the gaushala */}

          {/* Donate Button */}
          <div className="text-center">
            <button className="btn btn-success btn-donate">Donate</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
