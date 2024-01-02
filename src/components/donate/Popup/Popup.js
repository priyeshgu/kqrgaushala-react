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

  const [formValid, setFormValid] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validate phone number
    if (name === 'phoneNumber') {
      // Allow only numeric characters
      if (!/^\d*$/.test(value)) {
        return;
      }
    }

    // Validate email
    if (name === 'email') {
      // Allow any characters in the email field
      setFormData({
        ...formData,
        [name]: value,
      });
      return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDonateNow = () => {
    // Perform additional validation if needed
    const isValid = validateForm();

    if (isValid) {
      // Donation logic here
      console.log('Donation Details:', formData);
      onClose();
    } else {
      // Display error message
      setFormValid(false);
    }
  };

  const validateForm = () => {
    // Check if all mandatory fields are filled
    return (
      formData.fullName !== '' &&
      formData.address !== '' &&
      formData.email !== '' &&
      formData.phoneNumber !== ''
    );
  };

  const handleClose = () => {
    // Reset form validation state when closing the modal
    setFormValid(true);
    onClose();
  };

  return (
    <Modal show={true} onHide={handleClose} className='modal'>
      <Modal.Header>
        <Modal.Title>Donation Details</Modal.Title>
        <Button variant="secondary" onClick={handleClose}>
          <span aria-hidden="true">&times;</span>
        </Button>
      </Modal.Header>
      <Modal.Body>
        {formValid ? null : (
          <div className="error-message">Please fill in all mandatory fields.</div>
        )}
        <div className="popup-form-group">
          <label htmlFor="fullName">
            Full Name<span>*</span>:
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="popup-form-group">
          <label htmlFor="address">
            Address<span>*</span>:
          </label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="popup-form-group">
          <label htmlFor="email">
            Email<span>*</span>:
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="popup-form-group">
          <label htmlFor="phoneNumber">
            Phone Number<span>*</span>:
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="popup-form-group">
  <label htmlFor="panCard">
    PAN Card<span>*</span>: (Mandatory for 80G Exemption)
  </label>
  <input
    type="text"
    id="panCard"
    name="panCard"
    value={formData.panCard}
    onChange={handleChange}
  />
</div>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
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
