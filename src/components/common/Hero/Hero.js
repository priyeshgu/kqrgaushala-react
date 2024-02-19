import React from 'react';
import './Hero.css';
import fixedHeroImg from '../../../assets/cow-hero.png';

const Hero = ({ title }) => (
  <div className='hero-img-container'>
    <img src={fixedHeroImg} className='hero-img' alt='hero-img'></img>
    <div className="overlay"></div>
    <div className="heroimg-text">
      <h5>{title}</h5>
    </div>
  </div>
);



export default Hero;
