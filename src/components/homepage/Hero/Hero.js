import React from 'react';
import cowImage from '../../../assets/cow.png'
import './Hero.css'

const Hero = () => {
  return (
    <div className=" container hero-section">
      
      <div className="row hero-section">
        <div className="col-md-6 order-md-2">
          <div className="hero-image">
            <img src={cowImage} alt="Cow" className="cow-image img-fluid" />
          </div>
        </div>
        <div className="col-md-6 order-md-1 d-none d-md-block">
          <div className="hero-text">
            <h1 className="hero-heading display-sm-6">Transform compassion into action</h1>
            <p className="hero-subheading">Support Koderma Gaushala and make a lasting difference in the lives of our cherished cows.</p>
            <a href="/donate" className="btn btn-success btn-donate-hero">DONATE NOW</a>
          </div>
        </div>
        <div className="col-md-6 order-md-1 d-md-none d-sm-block">
          <div className="hero-text">
            <h1 className="hero-heading display-sm-6">Transform compassion into action</h1>
            <a href="exa" className="btn btn-success btn-donate-hero mt-4 mb-5">Donate Now</a>
            <p className="hero-subheading">Support Koderma Gaushala and make a lasting difference in the lives of our cherished cows.</p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
