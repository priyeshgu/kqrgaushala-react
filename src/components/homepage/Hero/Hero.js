import React, { useEffect } from 'react';
import './Hero.css'
import bannervid from '../../../assets/banner.mp4'
import bannervidM from '../../../assets/bannerM.mp4'
import logo from '../../../assets/logo.png'
import LanguageSelector from '../../../pages/LanguageSelector/LanguageSelector';
import { translatePageContent, getLanguagePreference, saveTranslatedContent, getTranslatedContent } from '../../../pages/TranslateUtils'; // Import translation functions




const Hero = () => {
  useEffect(() => {
    const fetchData = async () => {
      const language = getLanguagePreference();
      if (language === 'hi') {
        const componentName = 'Hero';
        const translatedContent = getTranslatedContent(componentName, language);
        if (!translatedContent) {
          const translatedText = await translatePageContent();
          if(translatedText!==undefined){
          saveTranslatedContent(componentName, language, translatedText);
          }
        }
      }
    };

    fetchData();
  }, []);
  
  return (
    <>

      <div className=" col-md-12 hero-section video-container">

        <video autoPlay loop muted playsInline>
          <source src={bannervid} type="video/mp4" />
        </video>
        <nav className="navbar navbar-expand-lg navbar-light hero-navbar col-11 hero-navbar">

          <a className="navbar-brand me-auto" href="/">
            <img src={logo} alt='logo' className='navbar-logo' />
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav ">
            <ul className="navbar-nav mx-auto nav-links ">
              <li className="nav-item ml-auto">
                <a className="nav-link header-item" href="/">Home</a>
              </li>
              <li className="nav-item ml-auto">
                <a className="nav-link header-item" href="/about">About Us</a>
              </li>
              <li className="nav-item ml-auto">
                <a className="nav-link header-item" href="/contact">Contact Us</a>
              </li>
              <li className="nav-item ml-auto ">
                <div className=" header-item langselector" ><LanguageSelector/></div>
              </li>
              
            </ul>
            <ul className="navbar-nav ">
              <li className="nav-item ml-auto">
                <a href='/donate'><button className="btn btn-success hero-header-btn">Donate</button></a>
              </li>
            </ul>
            <ul className="navbar-nav ">
              
            </ul>
          </div>
        </nav>
        

        <div className="hero-text">
          <h1 className="hero-heading display-sm-6">त्वं माता सर्वदेवानां त्वं च यज्ञस्य कारणम्।</h1>
          <h1 className="hero-heading display-sm-6">त्वं तीर्थं सर्वतीर्थानां नमस्तेऽस्तु सदानघे।।</h1>
          <p className="hero-subheading">Hey! The destroyer of sins, you are the mother of all gods. You are the reason for yajna.</p>
          <p className="hero-subheading">Among all the ‘pilgrimages’, you are the most holy. I bow down to you.</p>
          <p className='hero-subheading-lst'> - SKANDPURAN</p>
          <a href="/donate" className="btn btn-success btn-donate-hero">DONATE FOR GAU SEVA</a>
        </div>
      </div>
      <div className="  hero-section-mobile video-container">

        <video autoPlay loop muted playsInline>
          <source src={bannervidM} type="video/mp4" />
        </video>
        <nav className="navbar navbar-expand-lg navbar-light hero-navbar col-11">

          <a className="navbar-brand me-auto" href="/">
            <img src={logo} alt='logo' className='navbar-logo' />
          </a>

          <button className="mobile-nav-btn navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse nav-test" id="navbarNav">
            <ul className="navbar-nav mx-auto nav-links ">
              <li className="nav-item">
                <a className="nav-link header-item" href="/">Home</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link header-item" href="/about">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link header-item" href="/contact">Contact Us</a>
              </li>
              <li className="nav-item ml-auto ">
                <div className=" header-item langselector" ><LanguageSelector/></div>
              </li>
            </ul>
            <ul className="navbar-nav ">
              <li className="nav-item ">
                <a href='/donate'><button className="btn btn-success hero-header-btn">Donate</button></a>
              </li>
            </ul>
          </div>
        </nav>
        <div>
        </div>

        <div className="hero-text">
          <h1 className="hero-heading heading-first display-sm-6" >Transform Compassion into Action</h1>
         
          
          <div className='btn-donate-hero-div-m'>
          <a href="/donate" className="btn btn-success btn-donate-hero">DONATE FOR GAU SEVA</a>
          </div>
        </div>
      </div>




    </>
  );
};

export default Hero;