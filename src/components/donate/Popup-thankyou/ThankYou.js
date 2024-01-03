import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./ThankYou.css";
import { Link } from "react-router-dom";
import jsPDF from 'jspdf';

const ThankYou = ({ onClose }) => {
  const generatePDFReceipt = () => {
    const doc = new jsPDF();
  
    // Add content to the PDF:
    doc.text('Donation Receipt', 10, 10);
    doc.text('Donor Name: John Doe', 10, 20);
    doc.text('Donation Amount: $50', 10, 30);
    // ... Add more content as needed
  
    return doc.output('blob'); // Output as a blob for download
  };


  const [downloadingReceipt, setDownloadingReceipt] = useState(false);

  const handleDownloadReceipt = () => {
    setDownloadingReceipt(true); // Set state to indicate download in progress

    // Logic to generate or fetch the PDF receipt (replace with your implementation)
    const receiptData = generatePDFReceipt();

    const blob = new Blob([receiptData], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "donation-receipt.pdf");
    link.click();

    URL.revokeObjectURL(url); // Revoke the object URL after download

    setDownloadingReceipt(false); // Reset state after download
  };

  return (
    <Modal show={true} onHide={onClose} className="thank-you-modal">
      <Modal.Header closeButton>
        <Modal.Title>Thank You for Your Donation!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Your donation has been successfully received.</p>
        <p>
          Click here to download your donation receipt:
          <Link to="/download-receipt">Download</Link>
        </p>
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
