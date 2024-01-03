import React, { useState } from "react";
import "./Membership.css";
import Popup from '../../donate/Popup/Popup';

export default function Membership() {
  const [showPopup, setShowPopup] = useState(false);
  const handleBecomeMember = () => {
    const additionalData = {
      amount: 1100, // Hardcoded amount
      type: "Membership", // Hardcoded type
      productName: "Yearly Membership", // Hardcoded product name
      units: 1, // Hardcoded units
    };
    setShowPopup({...additionalData,show:true});
  };
  
  return (
    <div className="mb-5 mt-4 container text-center">
      <h2 className="membership-heading">Become a Yearly Member</h2>
      <p className="membership-subheading mb-3">
        
      Empower change with a <strong>₹ 1100</strong> Yearly Membership for old and sick cows, and receive a special certificate!
      </p>

      <button className="btn btn-success membership-btn" onClick={handleBecomeMember}>
        Become a Member
      </button>
      {showPopup.show && <Popup onClose={() => setShowPopup({ ...showPopup, show: false })} donationInfo={showPopup} />}
    </div>
  );
}
