import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './ThankYou.css';
import jsPDF from 'jspdf';

const ThankYou = ({ onClose, showDownloadCertificateButton }) => {
  const [downloadingReceipt, setDownloadingReceipt] = useState(false);
  const [downloadingCertificate, setDownloadingCertificate] = useState(false);

  const generatePDFReceipt = () => {
    const doc = new jsPDF();

    // Add content to the PDF:
    doc.text('Donation Receipt', 10, 10);
    doc.text('Donor Name: John Doe', 10, 20);
    doc.text('Donation Amount: $50', 10, 30);
    // ... Add more content as needed

    return doc.output('blob'); // Output as a blob for download
  };

  const handleDownloadReceipt = async () => {
    setDownloadingReceipt(true);

    try {
      // Logic to generate or fetch the PDF receipt (replace with your implementation)
      const receiptData = await generatePDFReceipt();

      const blob = new Blob([receiptData], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'donation-receipt.pdf');

      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading receipt:', error);
    } finally {
      setDownloadingReceipt(false);
    }
  };

  const handleDownloadCertificate = async () => {
    setDownloadingCertificate(true);

    try {
      // Logic to generate or fetch the PDF receipt (replace with your implementation)
      const receiptData = await generatePDFReceipt();

      const blob = new Blob([receiptData], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'donation-cerificate.pdf');

      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading certificate:', error);
    } finally {
      setDownloadingCertificate(false);
    }
  };

  return (
    <Modal show={true} onHide={onClose} className="thank-you-popup">
      <Modal.Header>
        <Modal.Title>Thank You For Your Donation</Modal.Title>
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
          <br></br>
          <Button
            variant="primary"
            className="receipt-link-button"
            onClick={handleDownloadReceipt}
            disabled={downloadingReceipt}
          >
            {downloadingReceipt ? 'Downloading...' : 'Download Receipt'}
          </Button>
        </p>
        {showDownloadCertificateButton && (
          <p className="certificate-link">
            Click here to download your certificate:
            <br></br>
            <Button
              variant="success"
              className="certificate-link-button"
              onClick={handleDownloadCertificate}
              disabled={downloadingCertificate}
            >
              {downloadingCertificate ? 'Downloading...' : 'Download Certificate'}
            </Button>
          </p>
        )}
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