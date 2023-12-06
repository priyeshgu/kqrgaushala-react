// src/components/GenerositySection/GenerositySection.js
import React from 'react';
import './GenerositySection.css'; // Add your styles here

const GenerositySection = () => {
  return (
    <div className="generosity-section container text-center">
      <h2>Occasions of Generosity</h2>
      <p>A made-up subtitle</p>

      <div className="generosity-icons">
        {/* Placeholder Icons (Replace with actual icon components or images) */}
        <div className="generosity-icon">
          <img src="placeholder_icon1.png" alt="Celebration" />
          <p>Celebration</p>
        </div>

        <div className="generosity-icon">
          <img src="placeholder_icon2.png" alt="In Memory Of" />
          <p>In Memory Of</p>
        </div>

        <div className="generosity-icon">
          <img src="placeholder_icon3.png" alt="In Honor Of" />
          <p>In Honor Of</p>
        </div>
      </div>

      {/* Donate Button */}
      <div className="text-center mt-3">
        <button className="btn btn-success btn-donate">Donate</button>
      </div>
    </div>
  );
};

export default GenerositySection;
