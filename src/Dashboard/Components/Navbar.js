// components/Navbar.js
import React from 'react';
import { Navbar as BootstrapNavbar, Container, Nav } from 'react-bootstrap';

const Navbar = ({ activeTab, setActiveTab }) => {
  return (
    <BootstrapNavbar bg="light" expand="lg" className="flex-shrink-0">
      <Container>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="flex-column">
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
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
