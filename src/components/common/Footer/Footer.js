// src/components/Footer/Footer.js
import React from 'react';
import './Footer.css'; // Add your styles here

const Footer = () => {
  return (
    <footer className="footer-section container ">
      <div className="container">
        <div className="row">
          {/* Email Column */}
          <div className="col-md-4">
            <h4>Email</h4>
            <p>info@example.com</p>
          </div>

          {/* Address Column */}
          <div className="col-md-4">
            <h4>Address</h4>
            <p>123 Street, City, Country</p>
          </div>

          {/* Phone Column */}
          <div className="col-md-4">
            <h4>Phone</h4>
            <p>+1 (123) 456-7890</p>
          </div>
        </div>

        {/* Vertical Line Separator */}
        <hr className="vertical-line" />

        {/* Social Media Icons and Copyright */}
        <div className="row align-items-center">
          {/* Social Media Icons */}
          <div className="col-md-12 mb-3 mb-md-0 text-center text-md-start">
            <i className="fab fa-facebook-square fa-lg"></i>
            <i className="fab fa-instagram fa-lg"></i>
            <i className="fab fa-twitter fa-lg"></i>
            {/* Add more social media icons as needed */}
          </div>

          {/* Copyright */}
          <div className="col-md-12 text-center text-md-end">
            <p>&copy; Shree Koderma Gaushala</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
