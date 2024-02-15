import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './Thankyou.css';
import jsPDF from 'jspdf';
import logo from '../../../assets/logo.png'
import certYearly from '../../../assets/cert.png'
import certLifetime from '../../../assets/cert2.png'
import axios from 'axios';


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
    doc.text(`Date:                                  ${formData.datetime}`, 20, 70);

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

  const receiptData =  generatePDFReceipt();

  const recieptblob = new Blob([receiptData], { type: 'application/pdf' });
  const sendEmail = async (email,sub,filename,blob) => {
    try {
      await axios.post('https://api.kqrgaushala.org/send-email', {
        to: email,
        subject : sub,
        text: 'Thank you for your support ,\n\nPlease find your donation reciept and certificate(if any) attached with this email.\n\nBest regards\n\ Shree Koderma Gaushala Samity .',
        filename:filename,
        pdf: blob
      }, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }});
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };
  
  const downloadReceipt = async () => {
    setDownloadingReceipt(true);

    try {
      
      const url = URL.createObjectURL(recieptblob);

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
  const certificateData = generateCert();

  const certblob = new Blob([certificateData], { type: 'application/pdf' });
  const handleDownloadCertificate = async () => {
    setDownloadingCertificate(true);

    try {
      // Logic to generate or fetch the PDF receipt (replace with your implementation)
      
      const url = URL.createObjectURL(certblob);

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
  const certificateCondition=()=>{
    
    if (showDownloadCertificateButton){
      sendEmail(formData.email,'Membership Certificate from Sri Koderma Gaushala Samity','certificate.pdf',certblob)
    }
  }


  return (
    <Modal show={true}  className="thank-you-popup">
      <Modal.Header>
        <Modal.Title>Thank You For Your Donation</Modal.Title>
        <Button variant="secondary" onClick={() => { onClose(); sendEmail(formData.email,'Donation Reciept from Sri Koderma Gaushala Samity','reciept.pdf',recieptblob);certificateCondition(); }}>
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
        <p>The reciept and other documents(if any) will be sent to your email shortly</p>
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
      </Modal.Footer>
    </Modal>
  );
};

export default ThankYou;
