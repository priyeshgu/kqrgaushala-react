import React, { useState } from 'react';
import './DonationProduct.css';

const DonationProduct = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (value) => {
    // Add validation if needed
    setQuantity(quantity + value);
  };

  return (
    <div className="donation-product col-2 mx-2">
      <h3 className="product-name">{product.nameEnglish}</h3>
      <p className="product-description">({product.nameHindi})</p>
      <div className="quantity-container">
        <button className='quantity-btn btn mr-1' onClick={() => handleQuantityChange(-1)}>-</button>
        <span>{quantity}</span>
        <button className='quantity-btn btn ml-1' onClick={() => handleQuantityChange(1)}>+</button>
      </div>
      <p className="product-amount">Amount: {product.costPerUnit * quantity}</p>
      <button className="btn donate-button">Donate</button>
    </div>
  );
};

export default DonationProduct;
