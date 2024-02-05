import React, { useState } from "react";
import "./DonationProduct.css";
import Popup from "../Popup/Popup";
import ThankYou from "../Popup-thankyou/ThankYou";
import Razorpay_btn from "../../Razorpay/Razorpay_btn";

const DonationProduct = ({ product, category }) => {
  const [quantity, setQuantity] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [donationInfo, setDonationInfo] = useState(null);
  const [showThankYou, setShowThankYou] = useState(false);
  const [thankYouData, setThankYouData] = useState(null);

  const handleShowThankYou = (show, formData) => {
    setShowThankYou(show);
    setThankYouData(formData);
  };

  const handleQuantityChange = (value) => {
    const newQuantity = quantity + value;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleDonateNow = async () => {
    const donationData = {
      amount: product.costPerUnit * quantity,
      type: `${category.categoryName}`,
      productName: product.nameEnglish,
      units: quantity,
    };

    // Set donation information in state
    setDonationInfo(donationData);

    try {
      // Make API call to create the order on the server
      const response = await fetch("http://127.0.0.1:3001/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: donationData.amount,
          currency: "INR", // Change currency as needed
          donatorInfo: {} // Add donator information here if needed
        }),
      });

      if (response.ok) {
        const { order } = await response.json();

        // Open Razorpay popup with order details
        Razorpay_btn.openPopup(order);
        setShowPopup(true);
      } else {
        console.error("Failed to create order:", response.statusText);
      }
    } catch (error) {
      console.error("Error creating order:", error.message);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
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

          <div className="">
         <Razorpay_btn handleDonateNow={handleDonateNow}/>
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
          <div>
            <Razorpay_btn handleDonateNow={handleDonateNow}/>
          </div>
        </div>
      </div>

      {showPopup && (
        <Popup
          onShowThankYou={handleShowThankYou}
          donationInfo={donationInfo}
          onClose={closePopup}
        />
      )}
      {showThankYou && (
        <ThankYou
          onClose={() => setShowThankYou(false)}
          formData={thankYouData}
        />
      )}
    </>
  );
};

export default DonationProduct;
