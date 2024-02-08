import React, { useState } from 'react';
import './NewsletterSection.css';
import newsletterImg from '../../../assets/newsletter.png';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrorMessage('');
    setSubscriptionStatus('');
  };

  const subscribe = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && emailRegex.test(email)) {
      fetch('http://13.235.67.241/emailentry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })
        .then(response => response.json())
        .then(data => {
          console.log('API response:', data);
          // Assume the API returns some information indicating success
          setSubscriptionStatus('success');
        })
        .catch(error => {
          console.error('Error:', error);
          // Handle error or show an error message to the user
          setSubscriptionStatus('fail');
        });
    } else {
      setSubscriptionStatus('error');
    }
  };

  const renderMessage = () => {
    if (subscriptionStatus === 'success') {
      return <div className="text-success mt-2">Thank you for subscribing!</div>;
    } else if (subscriptionStatus === 'fail') {
      return <div className="text-danger mt-2">Subscription failed. Please try again later.</div>;
    } else if (subscriptionStatus === 'error') {
      return <div className="text-danger mt-2">Invalid email format. Please enter a valid email address.</div>;
    }
    return null;
  };

  return (
    <div className="newsletter-section container mb-5">
      <div className="row justify-content-center">
        <div className="newsletter-input-sec col-md-6 col-12 mb-4 mb-md-0 d">
          <h2 className='newsletter-heading'>Stay Connected: Subscribe to Our Newsletter</h2>
          <p className='newsletter-subheading'>Receive updates, stories, and ways to make a difference in your inbox.</p>

          <div className="input-group">
            <input
              type="email"
              className="mb-3 col-12 form-control"
              placeholder="ENTER YOUR EMAIL"
              aria-label="Email"
              value={email}
              onChange={handleEmailChange}
            />
            <button
              className="newsletter-sub-btn btn btn-success col-12"
              type="button"
              onClick={subscribe}
            >
              SUBSCRIBE
            </button>
          </div>

          {renderMessage()}
        </div>

        <div className="newsletter-right-sec col-12 col-md-6">
          <img src={newsletterImg} alt="Newsletter" className="img-fluid newsletter-img" />
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
