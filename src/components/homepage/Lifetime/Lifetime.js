import React, { useState } from "react";
import "./Lifetime.css";
import Popup from '../../donate/Popup/Popup'
import ThankYou from "../../donate/Popup-thankyou/ThankYou";

const Lifetime=()=> {
  const [showPopup, setShowPopup] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [thankYouData, setThankYouData] = useState(null);

  const handleBecomeMember = () => {
    const additionalData = {
      amount: 21000, // Hardcoded amount
      type: "Membership", // Hardcoded type
      productName: "Lifetime Membership", // Hardcoded product name
      units: 1, // Hardcoded units
    };
    setShowPopup({...additionalData,show:true});
  };
  const handleShowThankYou = (show,formData) => {
    setShowThankYou(show);
    setThankYouData(formData);
  };
  const closePopup = () => {
    setShowPopup(false);
  };
  return (
    <div className="mb-5 mt-4 container text-center">
      <h2 className="lifetime-heading">Join us for Lifetime Membership</h2>
      <p className="lifetime-subheading mb-3">
        
      Empower change with a <strong>₹ 21000</strong> Lifetime Membership for old and sick cows, and receive a special certificate!
      </p>

      <button className="btn btn-success lifetime-btn" onClick={handleBecomeMember}>
        Become a Member
      </button>
      {/* {showPopup.show && <Popup onClose={() => setShowPopup({ ...showPopup, show: false })} donationInfo={showPopup} />} */}
      {showPopup && <Popup onShowThankYou={handleShowThankYou}  donationInfo={showPopup} onClose={closePopup} />}
      {  showThankYou && <ThankYou showDownloadCertificateButton={true} onClose={() => setShowThankYou(false)} formData={thankYouData}/>}
    </div>
  );
}

export default Lifetime;