import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './Thankyou.css';
import jsPDF from 'jspdf';
import logo from '../../../assets/logo.png'

const ThankYou = ({ onClose, formData,showDownloadCertificateButton}) => {
  const [downloadingReceipt, setDownloadingReceipt] = useState(false);
  const [downloadingCertificate, setDownloadingCertificate] = useState(false);

  const generatePDFReceipt = () => {
    const doc = new jsPDF({
      unit: 'mm',
      format: 'a4',
      orientation: 'portrait',
      height:30,
    });
    // Add logo
    const logoWidth = 25; // Adjust the width of the logo
    const logoHeight = 25; // Adjust the height of the logo
    doc.addImage(logo, 'PNG', 15, 12, logoWidth, logoHeight);

    doc.setFont('helvetica', 'bold');

  // Add gaushala name in bold
  doc.text('SHREE KODERMA GAUSHALA SAMITY', 55, 20);
  // Reset font to normal
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.text('Yadutand, PO Jhumri Telaiya, Koderma, Jharkhand 825409', 65, 25); 
  doc.setFontSize(16);
  doc.text('Donation Receipt', 88, 35);
  doc.setFontSize(12);
  doc.text(`Reciept No:                        ${formData.receiptId}`, 20, 60);
  doc.text(`Date:                                  ${formData.date.split('T')[0]}`, 20, 70);

  doc.text(`Donated By:                        ${formData.name}`, 20, 80);
  doc.text(`Donation Amount:               Rs. ${formData.amount}`, 20, 90);
  doc.text(`Donor Phone Number:        ${formData.phone_num}`, 20, 100);
  doc.text(`Donor email:                        ${formData.email}`, 20, 110);
  doc.text(`Donor Address:                   ${formData.address}`, 20, 120);
  doc.text(`Donation Pan Number:       ${formData.pan_number.toUpperCase() }`, 20, 130);
  doc.text(`Donation For:                      ${formData.product}`, 20, 140);
  doc.text(`Units Donated:                    ${formData.units}`, 20, 150);
  doc.text(`Donation Type:                   ${formData.type}`, 20, 160);
  
  doc.setFontSize(12)
  doc.text(`Tax exempted under section 80G(5)(iii) of Income tax vide registration No. AANAS2643FF20231`,20,180);
  doc.setFontSize(8)
  doc.text('Please note this is an electronically generated receipt, hence does not require a signature or stamp',45,190);
  
  // ... Add more content as needed

  return doc.output('blob'); // Output as a blob for download
  };

  const downloadReceipt = async () => {
    setDownloadingReceipt(true);

    try {
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

  useEffect(() => {
    console.log("download triggered")
    // Trigger the download action when the component mounts
    downloadReceipt();
  
    // Cleanup function to ensure it runs only once
    return () => {
      // Clear any resources or subscriptions if needed
    };
  }, []); // Empty dependency array ensures this effect runs once on mount

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
