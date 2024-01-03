import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import "./Popup.css";



const Popup = ({ onClose, donationInfo }) => {
 

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone_num: "",
    pan_number: "",
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

  const [formValid, setFormValid] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validate phone number
    if (name === "phone_num") {
      // Allow only numeric characters
      if (!/^\d*$/.test(value)) {
        return;
      }
    }

    // Validate email
    if (name === "email") {
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

  const handleDonateNow = async () => {
    // Perform additional validation if needed
    const isValid = validateForm();

    if (isValid) {
      // Donation logic here
      console.log("Donation Details:", formData);
      try {
        // Call your API here
        const response = await fetch("http://192.168.1.8:3001/donate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        // Check if the request was successful
        if (response.ok) {
          // Handle successful API response
          console.log("Donation successful!");
          onClose();
          

        } else {
          // Handle API error
          console.error("API error:", response.statusText);
        }
      } catch (error) {
        // Handle network error
        console.error("Network error:", error.message);
      }
      
    } 
    else {
      // Display error message
      setFormValid(false);
    }
  };

  const validateForm = () => {
    // Check if all mandatory fields are filled
    return (
      true
      // formData.name !== "" &&
      // formData.address !== "" &&
      // formData.email !== "" &&
      // formData.phone_num !== ""
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
            Full Name<span>*</span>:
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
            id="phone_num"
            name="phone_num"
            value={formData.phone_num}
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
            id="pan_number"
            name="pan_number"
            value={formData.pan_number}
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
