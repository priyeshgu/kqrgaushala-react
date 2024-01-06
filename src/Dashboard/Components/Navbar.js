// components/Navbar.js
import React from 'react';
import { Navbar as BootstrapNavbar, Container, Nav } from 'react-bootstrap';
import './Navbar.css'; // Import the CSS file

const Navbar = ({ activeTab, setActiveTab }) => {
  return (
    <BootstrapNavbar bg="secondry"  className="custom-navbar">
      <Container>
        <Nav className="">
          <Nav.Link
            href="#donationProducts"
            active={activeTab === 'donationProducts'}
            onClick={() => setActiveTab('donationProducts')}
          >
            Donation Products
          </Nav.Link>
          <Nav.Link
            href="#donatorsList"
            active={activeTab === 'donatorsList'}
            onClick={() => setActiveTab('donatorsList')}
          >
            Donators List
          </Nav.Link>
        </Nav>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
