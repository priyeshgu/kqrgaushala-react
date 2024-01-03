import React, { useState } from "react";
import "./DonationProduct.css";
import Popup from "../Popup/Popup";
import ThankYou from "../Popup-thankyou/ThankYou";

const DonationProduct = ({ product, category }) => {
  const [quantity, setQuantity] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [donationInfo, setDonationInfo] = useState(null);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleQuantityChange = (value) => {
    const newQuantity = quantity + value;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleDonateNow = () => {
    const donationData = {
      amount: product.costPerUnit * quantity,
      type: `${category.categoryName}`,
      productName: product.nameEnglish,
      units: quantity,
    };

    // Set donation information in state
    setDonationInfo(donationData);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setShowThankYou(true);
    
  };

  return (
    <>
      <div className="donation-product col-10 d-none d-md-block">
        <div className="d-flex flex-row justify-content-center">
          <div className="product-names col-4">
            <h3 className="product-name">{product.nameEnglish}</h3>
            <p className="product-description">({product.nameHindi})</p>
          </div>

          <div className="quantity-section row col-4">
            <div className="quantity-container mr-1">
              <button
                className="quantity-btn btn mr-2"
                onClick={() => handleQuantityChange(-1)}
                disabled={quantity <= 1}
              >
                -
              </button>
              <span className="product-quantity">{quantity}</span>
              <button
                className="quantity-btn btn ml-2 mr-2"
                onClick={() => handleQuantityChange(1)}
              >
                +
              </button>
            </div>
            <p className="product-amount">₹ {product.costPerUnit * quantity}</p>
          </div>

          <div className="donate-btn-sec col-4 ">
            <button className="btn donate-button" onClick={handleDonateNow}>
              Donate Now
            </button>
          </div>
        </div>
      </div>

      {/* Donations page For phone */}
      <div className="donation-product row col-md-2 d-sm-block d-md-none py-3">
        <div className="product-names col-6">
          <h3 className="product-name mb-0">{product.nameEnglish}</h3>
          <p className="product-description">({product.nameHindi})</p>
        </div>

        <div className="product-mob-right col-6">
          <div className="quantity-and-amount row">
            <p className="product-amount">₹ {product.costPerUnit * quantity}</p>
            <div className="quantity-container mr-2">
              <button
                className="quantity-btn btn mr-1 dec-btn"
                onClick={() => handleQuantityChange(-1)}
                disabled={quantity <= 1}
              >
                <p>-</p>
              </button>
              <span>{quantity}</span>
              <button
                className="quantity-btn btn ml-1"
                onClick={() => handleQuantityChange(1)}
              >
                <p>+</p>
              </button>
            </div>
          </div>
          <button className="btn donate-button" onClick={handleDonateNow}>
            Donate
          </button>
        </div>
      </div>

      {showPopup && <Popup donationInfo={donationInfo} onClose={closePopup} />}
      {showThankYou && <ThankYou onClose={() => setShowThankYou(false)} />}
    </>
  );
};

export default DonationProduct;
