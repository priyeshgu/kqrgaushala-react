import React from "react";
import "./Membership.css";

export default function Membership() {
  return (
    <div className="mb-5 mt-4 container text-center">
      <h2 className="membership-heading">Become a Yearly Member</h2>
      <p className="membership-subheading mb-3">
        
      Empower change with a <strong>₹ 1100</strong> Yearly Membership for old and sick cows, and receive a special certificate!
      </p>

      <button className="btn btn-success membership-btn">
        Become a Member
      </button>
    </div>
  );
}
