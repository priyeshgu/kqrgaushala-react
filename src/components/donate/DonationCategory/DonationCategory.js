import React, { useState } from 'react';
import DonationProduct from '../DonationProduct/DonationProduct';
import Popup from '../Popup/Popup';


const DonationCategory = ({ category }) => {
  const [customAmount, setCustomAmount] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [donationInfo, setDonationInfo] = useState(null);

  const closePopup = () => {
    setShowPopup(false);
  };
  const handleCustomAmountChange = (event) => {
    const inputAmount = event.target.value.replace(/[^0-9]/g, ''); 
    setCustomAmount(inputAmount);
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
    <div className="donation-category mb-5 container text-center">
      <h2 className="category-heading">{category.categoryName}</h2>
      <div className="products-container d-flex flex-row flex-wrap justify-content-center row ">
        {category.donations.map((product) => (
          <DonationProduct key={product.nameEnglish} product={product} category={category} />
        ))}
        {/* <div>for custom amount</div> */}
        <div className="donation-product ">
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
        <div className="donate-btn-sec col-4 ">
        <button className="btn donate-button " onClick={handleDonateNowClick}>Donate Now</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
        </div>
        </div>

      </div>
      {showPopup && <Popup donationInfo={donationInfo} onClose={closePopup} />}
    
    </div>
    
  );
};

export default DonationCategory;
