import React from 'react';
import '../Donation/Donation.css';

const Donation = ({ image, title, description }) => {
    return (
<div className="donation-type card mb-3">
      <img src={image} alt={title} className="card-img-top rounded-circle donation-image" />
      <div className="card-body">
        <h3 className="card-title donation-title">{title}</h3>
        <p className="card-text donation-description">{description}</p>
        <button className="btn btn-success btn-donate">Donate</button>
      </div>
    </div>
    );
}

export default Donation;
