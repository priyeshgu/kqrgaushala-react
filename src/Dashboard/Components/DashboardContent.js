import React, { useState, useEffect } from 'react';
import { Nav, Navbar, Container, Table, Button } from 'react-bootstrap';
import ReactToPrint from 'react-to-print';

const DonatorsList = ({ donators }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Phone Number</th>
          <th>Email</th>
          <th>Address</th>
          <th>Product</th>
          <th>Type</th>
          <th>Amount</th>
          <th>Units</th>
        </tr>
      </thead>
      <tbody>
        {donators.map((donator) => (
          <tr key={donator.id}>
            <td>{donator.id}</td>
            <td>{donator.name}</td>
            <td>{donator.phone_num}</td>
            <td>{donator.email}</td>
            <td>{donator.address}</td>
            <td>{donator.product}</td>
            <td>{donator.type}</td>
            <td>{donator.amount}</td>
            <td>{donator.units}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

const DashboardContent = () => {
  const [activeTab, setActiveTab] = useState('donationProducts');
  const [donators, setDonators] = useState([]);

  useEffect(() => {
    // Fetch donators data when the "Donators List" tab is selected
    if (activeTab === 'donatorsList') {
      fetch('http://192.168.1.7:3001/donators')
        .then((response) => response.json())
        .then((data) => setDonators(data.data));
    }
  }, [activeTab]);

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Navbar bg="light" expand="lg" className="flex-shrink-0">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
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
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Content */}
      <Container className="mt-5 ml-3">
        {activeTab === 'donationProducts' && (
          <h3>Donation Products (Render your product table here)</h3>
        )}

        {/* Render Donators List */}
        {activeTab === 'donatorsList' && (
          <div>
            <h3>Donators List</h3>

            {/* PDF Download Button */}
            <ReactToPrint
              trigger={() => <Button variant="primary">Download PDF</Button>}
              content={() => <DonatorsList donators={donators} />}
            />
            
            {/* Donators List Table */}
            <DonatorsList donators={donators} />
          </div>
        )}
      </Container>
    </div>
  );
};

export default DashboardContent;
