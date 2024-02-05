import React, { useState } from 'react';
import DonationProduct from '../DonationProduct/DonationProduct';
import Popup from '../Popup/Popup';
import ThankYou from "../Popup-thankyou/ThankYou";
import Razorpay_btn from '../../Razorpay/Razorpay_btn';


const DonationCategory = ({ category }) => {
  const [customAmount, setCustomAmount] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [donationInfo, setDonationInfo] = useState(null);
  const [showThankYou, setShowThankYou] = useState(false);
  const [thankYouData, setThankYouData] = useState(null);

  const closePopup = () => {
    setShowPopup(false);
  };
  const handleCustomAmountChange = (event) => {
    const inputAmount = event.target.value.replace(/[^0-9]/g, ''); 
    setCustomAmount(inputAmount);
  };
  const handleShowThankYou = (show,formData) => {
    setShowThankYou(show);
    setThankYouData(formData);
  };
  const handleDonateNowClick = () => {
    if (customAmount === '' || parseInt(customAmount) === 0) {
      setErrorMessage('Please enter an amount greater than 0');
    } else {
      // Perform your donation logic here
      // For now, you can clear the error message
        // Pass the category information to the DonationProduct component
        // const categoryInfo = {
        //   categoryName: 'Custom Donation',
        // };
        const donationInfo = {
          amount: customAmount,
          type: 'Custom', // You can use 'Custom' or any identifier for custom donations
          productName: 'Custom Donation', // Customize as needed
          units: 1 // You can adjust this based on your requirements
        };
      setErrorMessage('');
      setDonationInfo(donationInfo);
      
      setShowPopup(true);
    }
  };

  return (
    <div className="donation-category mb-5  mt-5 container text-center" id={category.categoryName}>
      <h2 className="category-heading">{category.categoryName}</h2>
      <div className="products-container d-flex flex-row flex-wrap justify-content-center row ">
        {category.donations.map((product) => (
          <DonationProduct key={product.nameEnglish} product={product} category={category} />
        ))}

        {/* <div>for custom amount</div> */}

        <div className="donation-product col-10 d-none d-md-block">
        <div className="d-flex flex-row justify-content-center">
        <div className="product-names col-4">
        <h3 className="product-name">Donate any Custom Amount</h3>
        <p className="product-description">कोई भी राशि दान करें</p>
        </div>
        <div className="quantity-section row col-4">
              <input
                type="text"
                className="custom-amount-input form-control"
                placeholder="Enter Amount"
                value={customAmount}
                onChange={handleCustomAmountChange}
              />
            </div>

            {/* Custom Donate Section for Phone */}
        <div className="donate-btn-sec col-4 ">
        <Razorpay_btn handleDonateNow={handleDonateNowClick} />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
        </div>
        </div>
        <div className="donation-product col-md-2 d-sm-block d-md-none py-3">
        <div className="d-flex flex-column align-items-center">
        <div className="product-names col-12">
        <h3 className="product-name">Donate any Amount</h3>
        <p className="product-description">कोई भी राशि दान करें</p>
        </div>
        <div className="quantity-section col-7 mt-3">
              <input
                type="text"
                className="custom-amount-input form-control"
                placeholder="Enter Amount"
                value={customAmount}
                onChange={handleCustomAmountChange}
              />
            </div>
        <div className="donate-btn-sec col-12 mt-3 ">
        <Razorpay_btn handleDonateNow={handleDonateNowClick} />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
        </div>
        </div>

      </div>
      {showPopup && <Popup onShowThankYou={handleShowThankYou}  donationInfo={donationInfo} onClose={closePopup} />}
      {  showThankYou && <ThankYou onClose={() => setShowThankYou(false)} formData={thankYouData}/>}
    
    </div>
    
  );
};

export default DonationCategory;
