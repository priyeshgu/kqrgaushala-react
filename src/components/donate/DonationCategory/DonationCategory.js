import React, { useState } from 'react';
import DonationProduct from '../DonationProduct/DonationProduct';


const DonationCategory = ({ category }) => {
  const [customAmount, setCustomAmount] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
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
      setErrorMessage('');
    }
  };

  return (
    <div className="donation-category mb-5 container text-center">
      <h2 className="category-heading">{category.categoryName}</h2>
      <div className="products-container d-flex flex-row flex-wrap justify-content-center row ">
        {category.donations.map((product) => (
          <DonationProduct key={product.nameEnglish} product={product} />
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
        <div className="donate-btn-sec col-4 ">
        <button className="btn donate-button " onClick={handleDonateNowClick}>Donate Now</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
        </div>
        </div>

      </div>
    </div>
  );
};

export default DonationCategory;
