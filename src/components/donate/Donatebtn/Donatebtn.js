import React from 'react'

const Donatebtn = () => {
    const handleDonateClick = () => {

      const currentDateTime = new Date().toISOString();

      // Format the date and time for PostgreSQL (remove the 'T' and 'Z')
      const formattedDateTime = currentDateTime.replace('T', ' ').replace('Z', '');
        // Hardcoded JSON payload
        const donationData = {
          name: 'John Doe',
          phone_num: '1234567890',
          email: 'abc@xyz.com',
          address: '123 Main St City',
          product: 'Green Fodder',
          type: 'One-Time',
          dateTime:formattedDateTime, // Date and time in ISO format
          amount: 50.00,
          pan_number:'abc123456789'
        };
    
        // Backend API URL
        const apiUrl = 'http://localhost:3001/api/donate';
    
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
