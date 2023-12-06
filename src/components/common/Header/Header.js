import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <div>
      <div className="container">
        <nav className="header-div navbar navbar-expand-lg navbar-light px-0">

          <a className="navbar-brand me-auto" href="/">
            <h3 className='logo'>Shree Koderma Gaushala</h3>
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link header-item" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link header-item" href="/about">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link header-item" href="google.com">Contact Us</a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button className="btn btn-success btn-donate">Donate</button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
 