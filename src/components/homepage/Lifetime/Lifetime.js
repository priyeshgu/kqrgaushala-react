import React, { useState } from "react";
import "./Lifetime.css";
import Popup from '../../donate/Popup/Popup';

export default function Lifetime() {
  const [showPopup, setShowPopup] = useState(false);
  const handleBecomeMember = () => {
    const additionalData = {
      amount: 21000, // Hardcoded amount
      type: "Membership", // Hardcoded type
      productName: "Lifetime Membership", // Hardcoded product name
      units: 1, // Hardcoded units
    };
    setShowPopup({...additionalData,show:true});
  };
  return (
    <div className="mb-5 mt-4 container text-center">
      <h2 className="lifetime-heading">Join us for Lifetime Subscription</h2>
      <p className="lifetime-subheading mb-3">
        
      Empower change with a <strong>₹ 21000</strong> Lifetime Membership for old and sick cows, and receive a special certificate!
      </p>

      <button className="btn btn-success lifetime-btn" onClick={handleBecomeMember}>
        Become a Member
      </button>
      {showPopup.show && <Popup onClose={() => setShowPopup({ ...showPopup, show: false })} donationInfo={showPopup} />}
    </div>
  );
}
