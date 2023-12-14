import React from 'react'

const Donatebtn = () => {
    const handleDonateClick = () => {
        // Hardcoded JSON payload
        const donationData = {
          name: 'John Doe',
          phoneNumber: '1234567890',
          address: '123 Main St, City',
          product: 'Green Fodder',
          type: 'One-Time',
          dateTime: '2023-12-31T12:00:00', // Date and time in ISO format
          amount: 50.00,
        };
    
        // Backend API URL
        const apiUrl = 'https://your-backend-api-url/donate';
    
        // Sending POST request
        fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(donationData),
        })
          .then(response => response.json())
          .then(data => {
            console.log('Donation successful:', data);
            // Handle success, e.g., show a thank you message to the user
          })
          .catch(error => {
            console.error('Error donating:', error);
            // Handle error, e.g., show an error message to the user
          });
      };
    
      return (
        <button className="btn btn-success text-center" onClick={handleDonateClick}>
          Donate Now
        </button>
      );
}

export default Donatebtn
