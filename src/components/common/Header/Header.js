import React from 'react';
import './Header.css';
import 'bootstrap/dist/js/bootstrap.min';
import logo from '../../../assets/logo.png'
import LanguageSelector from '../../../pages/LanguageSelector/LanguageSelector';

export default function Header() {
  return (
    <div>
      <div className="container">
        <nav className="header-div navbar navbar-expand-lg navbar-light px-0">

          <a className="navbar-brand me-auto" href="/">
          <img src={logo} alt='logo' className='comm-header-logo' />
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item ml-auto">
                <a className="nav-link header-item" href="/">Home</a>
              </li>
              <li className="nav-item ml-auto">
                <a className="nav-link header-item" href="/about">About Us</a>
              </li>
              <li className="nav-item ml-auto">
                <a className="nav-link header-item" href="/contact">Contact Us</a>
              </li>
              <li className="nav-item ml-auto langselectorHead">
              
                < LanguageSelector/>
                
              </li>
            </ul>
            <ul className="navbar-nav header-donate-button ">
              <li className="nav-item ml-auto header-donate-button">
                <a href='/donate'><button className="btn btn-success header-btn-donate">Donate</button></a>
              </li>
            </ul>
            

          </div>
        </nav>
      </div>
     
    </div>
  );
}

