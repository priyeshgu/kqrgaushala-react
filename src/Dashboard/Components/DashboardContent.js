// components/DashboardContent.js
import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import ReactToPrint from 'react-to-print';
import Navbar from './Navbar';
import DonatorsListTable from './DonatorsListTable';

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

  const handleDeleteDonator = (donatorId) => {
    // Handle delete logic here
    // You can make a DELETE request to the backend
    // and then update the donators state
    // Example:
    // fetch(`http://your-api-endpoint/donators/${donatorId}`, {
    //   method: 'DELETE',
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     // Update donators state after successful deletion
    //     setDonators((prevDonators) =>
    //       prevDonators.filter((donator) => donator.id !== donatorId)
    //     );
    //   })
    //   .catch((error) => {
    //     console.error('Error deleting donator:', error);
    //   });
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

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
              content={() => <DonatorsListTable donators={donators} onDelete={handleDeleteDonator} />}
            />

            {/* Donators List Table */}
            <DonatorsListTable donators={donators} onDelete={handleDeleteDonator} />
          </div>
        )}
      </Container>
    </div>
  );
};

export default DashboardContent;
