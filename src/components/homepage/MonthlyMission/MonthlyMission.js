import React, { useState, useEffect, useRef } from 'react';
import './MonthlyMission.css';
import Popup from '../../donate/Popup/Popup';
import ThankYou from "../../donate/Popup-thankyou/ThankYou";


const MonthlyMission = () => {
  const subscriptionAmounts = [500, 1000, 2000, 3000, 5000,];
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [thankYouData, setThankYouData] = useState(null);

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
  };
  console.log(selectedAmount, 17)
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
    else {
      setSelectedAmount(null);
    }
  };
  const handleShowThankYou = (show, formData) => {
    setShowThankYou(show);
    setThankYouData(formData);
  };
  const closePopup = () => {
    setShowPopup(false);
    setSelectedAmount(null);
  };
  const componentRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the clicked element is outside the component
      if (componentRef.current && !componentRef.current.contains(event.target)) {
        // Reset the selected amount to null or update the state as needed
        setSelectedAmount(null);
      }
    };

    // Attach the event listener to the document
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener when the component is unmounted
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={componentRef} className="monthly-mission container mt-5">
      <h2 className='monthly-mission-heading'>Support our cause with a donation</h2>
      <p className='monthly-mission-subheading'>Your donation will directly support and care for the well-being of the cows in our gaushala, providing them with essential care, nourishment, and a safe environment.</p>

      <div className="subscription-buttons">
        {subscriptionAmounts.map((amount, index) => (
          <button
            key={index}
            className={`monthly-mission-btn btn btn-primary mx-2 mb-2 ${selectedAmount === amount ? 'selected' : ''
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
          disabled={selectedAmount === null}>Donate Now</button>
      </div>
      {/* {showPopup.show && <Popup onClose={() => setShowPopup({ ...showPopup, show: false })} donationInfo={showPopup} />} */}
      {showPopup && <Popup onShowThankYou={handleShowThankYou} donationInfo={showPopup} onClose={closePopup} />}
      {showThankYou && <ThankYou onClose={() => setShowThankYou(false)} formData={thankYouData} />}
    </div>
  );
};

export default MonthlyMission;
