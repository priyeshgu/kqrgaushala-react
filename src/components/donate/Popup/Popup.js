import axios from 'axios';
import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import "./Popup.css";

const Popup = ({ onClose, donationInfo, onShowThankYou }) => {
  const generateReceiptId = () => {
    // Generate a receipt ID in the format SKG-XXXX where XXXX are 4 random numbers
    const randomNumbers = Math.floor(1000 + Math.random() * 9000);
    return `SKG-${randomNumbers}`;
  };
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone_num: "",
    pan_number: "",
    datetime: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    order_id: generateReceiptId(),
  });

  const [formValid, setFormValid] = useState(true);
  const [validations, setValidations] = useState({
    isValidEmail: true,
    isValidPhoneNumber: true,
    isValidPanNumber: true,
  });

  useEffect(() => {
    if (donationInfo) {
      setFormData((prevData) => ({
        ...prevData,
        amount: donationInfo.amount,
        type: donationInfo.type,
        product: donationInfo.productName,
        units: donationInfo.units,
      }));
    }
  }, [donationInfo]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validate phone number
    if (name === "phone_num") {
      // Allow only numeric characters and limit to 10 digits
      const validatedValue = value.replace(/\D/g, '').substr(0, 10);
      setFormData({
        ...formData,
        [name]: validatedValue,
      });
      return;
    }

    // Validate address
    if (name === "address") {
      // Limit to a maximum of 85 characters
      const validatedValue = value.substr(0, 85);
      setFormData({
        ...formData,
        [name]: validatedValue,
      });
      return;
    }

    // Validate email
    if (name === "email") {
      // Simple email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValidEmail = emailRegex.test(value);

      setFormData({
        ...formData,
        [name]: value,
      });

      setValidations({
        ...validations,
        isValidEmail,
      });
      return;
    }

    // Validate PAN number
    if (name === "pan_number") {
      // Allow only alphanumeric characters and limit to 10 characters
      const validatedValue = value.replace(/[^a-zA-Z0-9]/g, '').substr(0, 10);
      setFormData({
        ...formData,
        [name]: validatedValue,
      });
      return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDonateNow = async () => {
    // Perform additional validation if needed
    const isValid = validateForm();

    if (isValid) {
      // Donation logic here

      // Initiate Payment
      initiatePayment(formData);

      onClose();
      // onShowThankYou(true, updatedFormData);
    } else {
      // Display error message
      setFormValid(false);
    }
  };

  const initiatePayment = async (requestData) => {
    try {
      const response = await axios.post('https://api.kqrgaushala.org/create-order', {
        amount: formData.amount,
        receiptId: requestData.receiptId,
        paymentDateTime: requestData.paymentDateTime,
      });

      const { order, razorpayKey } = response.data;

      // Use the order ID to initiate payment on the frontend
      const options = {
        key:  razorpayKey,
        amount: order.amount,
        currency: order.currency,
        order_id: order.id,
        name: 'Shree Koderma Gaushala Samity',
        description: 'Purchase Description',
        image: '/static/media/logo.9e32bea34c96b422baca.png',
        handler: async function (response) {
          // Handle successful payment
         
          try {
            // Call your API here
            const response = await fetch("https://api.kqrgaushala.org/donate", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(requestData),
            });

            // Check if the request was successful
            if (response.ok) {
              // Handle successful API response
             
             
             
              // onClose();
              onShowThankYou(true, requestData);
            } else {
              // Handle API error
              console.error("API error:", response.statusText);
            }
          } catch (error) {
            // Handle network error
            console.error("Network error:", error.message);
          }
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error('Error initiating payment:', error);
    }
  };

  const validateForm = () => {
    // Check if all mandatory fields are filled
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    const isValidPhoneNumber = /^\d{10}$/.test(formData.phone_num);
    const isValidPanNumber = /^[a-zA-Z0-9]{10}$/.test(formData.pan_number);

    setValidations({
      isValidEmail,
      isValidPhoneNumber,
      isValidPanNumber,
    });

    return (
      formData.name !== "" &&
      formData.address !== "" &&
      isValidEmail &&
      isValidPhoneNumber &&
      (formData.pan_number === "" || isValidPanNumber)
    );
  };

  const handleClose = () => {
    // Reset form validation state when closing the modal
    setFormValid(true);
    onClose();
  };

  return (
    <Modal show={true} onHide={handleClose} className="modal">
      <Modal.Header>
        <Modal.Title>Donation Details</Modal.Title>
        <Button variant="secondary" onClick={handleClose}>
          <span aria-hidden="true">&times;</span>
        </Button>
      </Modal.Header>
      <Modal.Body>
        {formValid ? null : (
          <div className="error-message">
            Please fill in all mandatory fields.
          </div>
        )}
        <div className="popup-form-group">
          <label htmlFor="fullName">
            Full Name<span>*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="popup-form-group">
          <label htmlFor="address">
            Address<span>*</span>
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
            Email<span>*</span>
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {!formValid && !validations.isValidEmail && (
            <div className="error-message">Please enter a valid email address.</div>
          )}
        </div>
        <div className="popup-form-group">
          <label htmlFor="phoneNumber">
            Phone Number<span>*</span>
          </label>
          <input
            type="tel"
            id="phone_num"
            name="phone_num"
            value={formData.phone_num}
            onChange={handleChange}
            required
          />
          {!formValid && !validations.isValidPhoneNumber && (
            <div className="error-message">Please enter a valid phone number.</div>
          )}
        </div>
        <div className="popup-form-group">
          <label htmlFor="panCard">
            PAN Card (Mandatory for 80G Exemption)
          </label>
          <input
            type="text"
            id="pan_number"
            name="pan_number"
            value={formData.pan_number}
            onChange={handleChange}
          />
          {!formValid && !validations.isValidPanNumber && (
            <div className="error-message">
              Please enter a valid PAN number (alphanumeric, exactly 10 characters).
            </div>
          )}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondry" onClick={handleClose}>
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
