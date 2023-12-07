// Glance.js
import React from 'react';
import './Glance.css'; 

export default function Glance({ svgPath, title }) {
  return (
    <div className="glance-tile">
      <div className="icon-square">
        <img className="icon" src={svgPath} alt="Icon" />
      </div>
      <div className="title">{title}</div>
    </div>
  );
}
