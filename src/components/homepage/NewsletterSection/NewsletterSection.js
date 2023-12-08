import React from 'react';
import './NewsletterSection.css'
import newsletterImg from '../../../assets/newsletter.png';

const NewsletterSection = () => {
  return (
    <div className="newsletter-section container mb-5">
      <div className="row justify-content-center">
        <div className="newsletter-input-sec col-md-6 col-12 mb-4 mb-md-0 d">
          <h2 className='newsletter-heading'>Stay Connected: Subscribe to Our Newsletter</h2>
          <p className='newsletter-subheading'>Receive updates, stories, and ways to make a difference in your inbox.</p>

          <div className="input-group">
            <input  type="newsletter-input" className=" mb-3 col-12 form-control" placeholder="ENTER YOUR EMAIL" aria-label="Email" />
            <button className="newsletter-sub-btn btn btn-success col-12" type="button">SUBSCRIBE</button>
          </div>
        </div>

        <div className="newsletter-right-sec col-12 col-md-6 ">
          <img  src={newsletterImg} alt="Newsletter" className="img-fluid newsletter-img" />
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
