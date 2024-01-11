import React from "react";
import "./GenerositySection.css";
import occasion1 from "../../../assets/occasions/occasion1.svg";
import occasion2 from "../../../assets/occasions/occasion2.svg";
import occasion3 from "../../../assets/occasions/occasion3.svg";

const GenerositySection = () => {
  return (
    <div className="generosity-section container text-center">
      <h2 className="occasions-heading">Occasions of Generosity</h2>
      <p className="occasions-subheading">
        Choose your monthly pledge and sow the seeds of sustained care for our
        cherished cows.
      </p>

      <div className="generosity-icons">
        <div className="generosity-icon ">
          <div className="occasion-icon-circle">
            <img src={occasion1} alt="Celebration" className="occasion-icon" />
          </div>
          <p className="gen-name">Celebration</p>
        </div>

        <div className="generosity-icon ">
          <div className="occasion-icon-circle">
            <img src={occasion2} alt="In Memory Of" className="occasion-icon" />
          </div>
          <p className="gen-name">In Memory Of</p>
        </div>

        <div className="generosity-icon ">
          <div className="occasion-icon-circle">
            <img src={occasion3} alt="In Honor Of" className="occasion-icon" />
          </div>
          <p className="gen-name">In Honor Of</p>
        </div>
      </div>

      {/* Donate Button */}
      <div className="text-center">
        <a href="/donate"><button className="btn btn-success occasion-donate-btn">DONATE NOW</button></a>
      </div>
    </div>
  );
};

export default GenerositySection;
