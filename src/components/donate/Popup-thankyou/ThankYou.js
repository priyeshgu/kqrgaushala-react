import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './Thankyou.css';
import jsPDF from 'jspdf';
import logo from '../../../assets/logo.png'
import certYearly from '../../../assets/cert.png'
import certLifetime from '../../../assets/cert2.png'
import emailjs from 'emailjs-com';

const ThankYou = ({ onClose, formData, showDownloadCertificateButton, subscriptionType }) => {
  const [downloadingReceipt, setDownloadingReceipt] = useState(false);
  const [downloadingCertificate, setDownloadingCertificate] = useState(false);

  const generatePDFReceipt = () => {
    const doc = new jsPDF({
      unit: 'mm',
      format: 'a4',
      orientation: 'portrait',
      height: 30,
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
    doc.text('PAN No : AANAS2643F',95,30 )
    doc.setFontSize(16);
    doc.text('Donation Receipt', 90, 40);
    doc.setFontSize(12);
    
    doc.text(`Reciept No:                        ${formData.order_id}`, 20, 60);
    doc.text(`Date:                                  ${formData.datetime.split(',')[0].trim()}`, 20, 70);

    doc.text(`Donated By:                        ${formData.name}`, 20, 80);
    doc.text(`Donation Amount:               Rs. ${formData.amount}`, 20, 90);
    doc.text(`Donor Phone Number:        ${formData.phone_num}`, 20, 100);
    doc.text(`Donor email:                        ${formData.email}`, 20, 110);
    doc.text(`Donor Address:                   ${formData.address}`, 20, 120);
    doc.text(`Donation Pan Number:       ${formData.pan_number.toUpperCase()}`, 20, 130);
    doc.text(`Donation For:                      ${formData.product}`, 20, 140);
    doc.text(`Units Donated:                    ${formData.units}`, 20, 150);
    doc.text(`Donation Type:                   ${formData.type}`, 20, 160);

    doc.setFontSize(12)
    doc.text(`Tax exempted under section 80G(5)(iii) of Income tax vide registration No. AANAS2643FF20231`, 20, 180);
    doc.setFontSize(8)
    doc.text('Please note this is an electronically generated receipt, hence does not require a signature or stamp', 45, 190);

    // ... Add more content as needed

    return doc.output('blob'); // Output as a blob for download
  };


  const sendEmailWithReceipt = async () => {
    try {
      // Generate PDF receipt
      const receiptData = generatePDFReceipt();
      const blob = new Blob([receiptData], { type: 'application/pdf' });

      // Get your Email.js template ID
      const templateId = 'your_template_id_here';  // Replace with your actual template ID

      // Prepare template parameters
      const templateParams = {
        to_email: formData.email,
        from_name: 'Gaushala Test',
        message_html: 'Custom message or leave empty',  
      };

      // Send email using Email.js
      await emailjs.send('service_ygb2faq', 'template_y3he6nd', templateParams,'k-BFWBt3NnPn2negr');

      console.log('Email sent successfully!');
      console.log('sent to :' ,formData.email)
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  const downloadReceipt = async () => {
    setDownloadingReceipt(true);
    sendEmailWithReceipt()

    try {
      const receiptData =  generatePDFReceipt();

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

  // useEffect(() => {
  //   console.log("download triggered")
  //   // Trigger the download action when the component mounts
  //   downloadReceipt();
    

  //   // Cleanup function to ensure it runs only once
  //   return () => {
  //     // Clear any resources or subscriptions if needed
  //   };
  // }, []); // Empty dependency array ensures this effect runs once on mount

  const getcurrDate = () => {
    const currentDate = new Date();

    // Define months in an array for easy conversion
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    // Get day, month, and year
    const day = currentDate.getDate();
    const monthIndex = currentDate.getMonth(); // Months are zero-indexed
    const year = currentDate.getFullYear();

    // Format the date
    const formattedDate = `${day} ${months[monthIndex]} ${year}`;
    return formattedDate;
  }
  
  


  const generateCert = () => {
    const doc1 = new jsPDF({
      unit: 'mm',
      format: 'a4',
      orientation: 'landscape',
      height: 30,
    });

    const certificateImage = subscriptionType === 'lifetime' ? certLifetime : certYearly;
    doc1.addImage(certificateImage, 'PNG', 0, 0, doc1.internal.pageSize.getWidth(), doc1.internal.pageSize.getHeight());
    doc1.setFontSize(30);
    doc1.setFont('helvetica'); // Change the font family and style
    doc1.text(`${formData.name}`, 150, 127, { align: 'center' });
    doc1.setFontSize(15)
    doc1.text(`${getcurrDate()}`,129,180);
    return doc1.output('blob');

  }

  const handleDownloadCertificate = async () => {
    setDownloadingCertificate(true);

    try {
      // Logic to generate or fetch the PDF receipt (replace with your implementation)
      const receiptData = generateCert();

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
            onClick={downloadReceipt}
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
