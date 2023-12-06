// src/components/NewsletterSection/NewsletterSection.js
import React from 'react';
import './NewsletterSection.css'; // Add your styles here

const NewsletterSection = () => {
  // Placeholder image URLs
//   const leftImageSrc = 'https://via.placeholder.com/150'; // Replace with actual URL
  const rightImageSrc = 'https://via.placeholder.com/300x400'; // Replace with actual URL

  return (
    <div className="newsletter-section container">
      <div className="row justify-content-center align-items-center">
        {/* Left Part with Text and Input */}
        <div className="col-md-6 mb-4 mb-md-0">
          <h2>Stay Connected: Subscribe to Our Newsletter</h2>
          <p>A made-up subheading</p>

          {/* Input Box and Subscribe Button */}
          <div className="input-group">
            <input type="email" className="form-control" placeholder="Enter your email" aria-label="Email" />
            <button className="btn btn-success" type="button">Subscribe</button>
          </div>
        </div>

        {/* Right Part with Image */}
        <div className="col-md-6">
          <img src={rightImageSrc} alt="Newsletter" className="img-fluid rounded" />
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
