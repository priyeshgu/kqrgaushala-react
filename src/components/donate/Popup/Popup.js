import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './Popup.css';

const Popup = ({ onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    email: '',
    phoneNumber: '',
    panCard: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDonateNow = () => {
    // You can perform donation logic here with the formData
    // For now, let's just log the data
    console.log('Donation Details:', formData);

    // Close the popup
    onClose();
  };

  return (
    <Modal show={true} onHide={onClose}>
    <Modal.Header closeButton>
      <Modal.Title>Donation Details</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div className="popup-form-group">
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
      </div>
      <div className="popup-form-group">
              <label htmlFor="address">Address:</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="popup-form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="popup-form-group">
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <div className="popup-form-group">
              <label htmlFor="panCard">PAN Card:</label>
              <input
                type="text"
                id="panCard"
                name="panCard"
                value={formData.panCard}
                onChange={handleChange}
              />
            </div>
          
      {/* Add other form fields as needed */}
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={onClose}>
        Close
      </Button>
      <Button variant="primary" onClick={handleDonateNow}>
        Donate Now
      </Button>
    </Modal.Footer>
  </Modal>
  );
};

export default Popup;

