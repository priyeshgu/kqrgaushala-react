import React from 'react';
import './MonthlyMission.css'

const MonthlyMission = () => {
  const subscriptionAmounts = [500, 1000, 2000, 3000, 5000,];

  return (
    <div className="monthly-mission container mt-5">
      <h2 className='monthly-mission-heading'>Join Monthly Mission</h2>
      <p className='monthly-mission-subheading'>Support our cause with a monthly contribution</p>

      <div className="subscription-buttons">
        {subscriptionAmounts.map((amount, index) => (
          <button key={index} className="monthly-mission-btn btn btn-primary mx-2 mb-2">
            ₹{amount}
          </button>
        ))}
      </div>

      {/* Subscribe Button */}
      <div className="text-center mt-3">
        <button className="monthly-mission-sub-btn btn btn-success btn-subscribe ">SUBSCRIBE</button>
      </div>
    </div>
  );
};

export default MonthlyMission;
