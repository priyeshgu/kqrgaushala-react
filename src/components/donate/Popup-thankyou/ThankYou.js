// ThankYou.js
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './ThankYou.css';
import { Link } from 'react-router-dom';

const ThankYou = ({ onClose }) => {
  return (
    <Modal show={true} onHide={onClose} className="thank-you-popup" >
       <Modal.Header>
        <Modal.Title >Thank You For Your Donation</Modal.Title>
        <Button variant="secondary" onClick={onClose}>
          <span aria-hidden="true">&times;</span>
        </Button>
      </Modal.Header>
      <Modal.Body className="thank-you-body">
        <p className="thank-you-message">
          Your donation has made a difference! We're incredibly grateful for your support.
        </p>
        <p className="receipt-link">
          Click here to download your donation receipt:
          <Link to="/download-receipt" className="receipt-link-button">
            Download Receipt
          </Link>
        </p>
      </Modal.Body>
      <Modal.Footer className="thank-you-footer">
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ThankYou;
