import React from "react";
import "../Donation/Donation.css";


const Donation = ({ image, title, description, categoryId, backgroundColor }) => {
  const categoryLink = `/donate#${categoryId}`;
  


  return (
    <>
      <div className="donation-type card mb-3 " style={{backgroundColor}} >
       <div className="donation-img-container img-fluid">
       <img
          src={image}
          alt={title}
          className="  donation-image img-fluid"
        />
       </div>
        <div className="card-body" >
          <h3 className="card-title donation-title">{title}</h3>
          <p className="card-text donation-description">{description}</p>
          <a href={categoryLink}><button className="btn btn-success btn-donate">DONATE NOW</button></a>
        </div>
      </div>
    </>
  );
};

export default Donation;
