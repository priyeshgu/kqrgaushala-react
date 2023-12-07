import React from "react";
import "../Donation/Donation.css";

const Donation = ({ image, title, description }) => {
  return (
    <>
      <div className="donation-type card mb-3">
        
       <div className="donation-img-container img-fluid">
       <img
          src={image}
          alt={title}
          className="  donation-image img-fluid"
        />
       </div>
        <div className="card-body">
          <h3 className="card-title donation-title">{title}</h3>
          <p className="card-text donation-description">{description}</p>
          <button className="btn btn-success btn-donate">DONATE NOW</button>
        </div>
      </div>
    </>
  );
};

export default Donation;
