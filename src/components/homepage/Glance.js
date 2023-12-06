import React from 'react'

export default function Glance({ svgPath, title } ) {
  return (
    <div className="rectangular-tile">
      <img className="icon" src={svgPath} alt="Icon" />
      <div className="title">{title}</div>
    </div>
  );
  
}
