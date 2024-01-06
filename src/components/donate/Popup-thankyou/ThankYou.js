import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './Thankyou.css';
import jsPDF from 'jspdf';

const ThankYou = ({ onClose, formData,showDownloadCertificateButton }) => {
  const [downloadingReceipt, setDownloadingReceipt] = useState(false);
  const [downloadingCertificate, setDownloadingCertificate] = useState(false);

  const generatePDFReceipt = () => {
    const doc = new jsPDF();
    console.log(formData,12)

    // Add content to the PDF:
    doc.text('Shree Koderma Gaushala', 10, 10);
    doc.text('Donation Receipt', 10, 20);
    doc.text(`Donor Name: ${formData.name}`, 10, 30);
    doc.text(`Donation Amount: ${formData.amount}`, 10, 40);
    doc.text(`Donor Number: ${formData.phone_num}`, 10, 50);
    doc.text(`Donor email: ${formData.email}`, 10, 60);
    doc.text(`Donor Address: ${formData.address}`, 10, 70);
    doc.text(`Donation Product: ${formData.product}`, 10, 80);
    doc.text(`Donation Type: ${formData.type}`, 10, 90);
    doc.text(`Donation units: ${formData.units}`, 10, 100);
    doc.text(`Donation Pan Number: ${formData.pan_number}`, 10, 110);

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
