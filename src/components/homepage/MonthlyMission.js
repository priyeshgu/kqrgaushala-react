// src/components/MonthlyMission/MonthlyMission.js
import React from 'react';

const MonthlyMission = () => {
  const subscriptionAmounts = [500, 1000, 2000, 3000, 5000];

  return (
    <div className="monthly-mission container">
      <h2>Join Monthly Mission</h2>
      <p>Support our cause with a monthly contribution</p>

      <div className="subscription-buttons">
        {subscriptionAmounts.map((amount, index) => (
          <button key={index} className="btn btn-primary">
            ₹{amount}
          </button>
        ))}
      </div>

      {/* Subscribe Button */}
      <div className="text-center mt-3">
        <button className="btn btn-success btn-subscribe">Subscribe</button>
      </div>
    </div>
  );
};

export default MonthlyMission;
