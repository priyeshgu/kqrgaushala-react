// src/components/Footer/Footer.js
import React from 'react';
import './Footer.css'; // Add your styles here

const Footer = () => {
  return (
    <footer className="footer-section d-flex flex-column align-items-center ">
      <div>

        <div className=" mb-5 mt-4 row footer-items-row">
          {/* Links Column */}
          <div className="col-md-4">
            <h4>Pages</h4>
            <a href='/' className='footer-links'> <p>Home</p></a>
            <a href='/about' className='footer-links'> <p>About Us</p></a>
            <a href='/contact' className='footer-links'> <p>Contact Us</p></a>
            <a href='/donate' className='footer-links'> <p>Donate</p></a>
            <a href='/policy' className='footer-links'> <p>Policies | T&C</p></a>

          </div>

          {/* Address Column */}
          <div className="col-md-4">
            <h4>Donate </h4>
            <a href='/donate' className='footer-links'> <p>Gaushala Maintenance </p></a>
            <a href='/donate' className='footer-links'> <p>Food For Cows </p></a>
            <a href='/donate' className='footer-links'> <p>Adopt a Cow/Calf</p></a>
            <a href='/donate' className='footer-links'> <p>Gopalastmi Mela Donation</p></a>
          </div>

          {/* Email Column */}
          <div className="col-md-4">
            <h4>Reach Us</h4>
            <a href='mailto:kqrgaushala@gmail.com' rel="noopener noreferrer" target='_blank' className='footer-links'> <p>kqrgaushala@gmail.com</p></a>
            <a rel="noopener noreferrer" target='_blank' href='https://maps.app.goo.gl/5TWVAyKh86TjY95i7' className='footer-links'> <p>Shree Koderma Gaushala, Yadutand,</p> <p>PO Jhumri Telaiya, Dist Koderma</p> <p>Jharkhand, PIN 825409 </p> </a>
          </div>




        </div>
        <div className='footer-map-div'>
          <iframe
            className='footer-map'
            title='Shree Koderma Gaushala Location'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3632.895646013444!2d85.53156647481264!3d24.41969266275423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f3748f33c21cf9%3A0x471e1db7e10fbe3a!2sShree%20Koderma%20Gaushala%2C%20Jhumri%20Telaiya!5e0!3m2!1sen!2sin!4v1705502872964!5m2!1sen!2sin"
            width="1080"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
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