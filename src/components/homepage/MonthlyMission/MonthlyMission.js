import React, { useState } from 'react';
import './MonthlyMission.css';
import Popup from '../../donate/Popup/Popup';

const MonthlyMission = () => {
  const subscriptionAmounts = [500, 1000, 2000, 3000, 5000,];
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
  };
  const handleSubscribe = () => {
    // Check if an amount is selected
    if (selectedAmount !== null) {
      // Additional hardcoded data
      const additionalData = {
        amount: selectedAmount,
        type: 'Membership', // Assuming type for monthly subscription
        productName: 'Monthly Membership', // Hardcoded product name
        units: 1, // Assuming 1 unit for monthly subscription
      };

      // Set the popup state with the additional data
      setShowPopup({ ...additionalData, show: true });
    }
  };

  return (
    <div className="monthly-mission container mt-5">
      <h2 className='monthly-mission-heading'>Join Monthly Mission</h2>
      <p className='monthly-mission-subheading'>Support our cause with a monthly contribution</p>

      <div className="subscription-buttons">
        {subscriptionAmounts.map((amount, index) => (
          <button
          key={index}
          className={`monthly-mission-btn btn btn-primary mx-2 mb-2 ${
            selectedAmount === amount ? 'selected' : ''
          }`}
          onClick={() => handleAmountSelect(amount)}
        >
            ₹{amount}
          </button>
        ))}
      </div>

      {/* Subscribe Button */}
      <div className="text-center mt-3">
        <button className="monthly-mission-sub-btn btn btn-success btn-subscribe " onClick={handleSubscribe}
          disabled={selectedAmount === null}>SUBSCRIBE</button>
      </div>
      {showPopup.show && <Popup onClose={() => setShowPopup({ ...showPopup, show: false })} donationInfo={showPopup} />}
    </div>
  );
};

export default MonthlyMission;
