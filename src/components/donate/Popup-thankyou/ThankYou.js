import React from 'react';
import { Modal,Button } from 'react-bootstrap';
import './ThankYou.css';

const ThankYou = ({ onClose }) => {
  return (
    <Modal show={true} onHide={onClose} className="thank-you-modal">
      <Modal.Header closeButton>
        <Modal.Title>Thank You for Your Donation!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Your donation has been successfully received.</p>
        {/* Add any additional thank you messages or details here */}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ThankYou;
