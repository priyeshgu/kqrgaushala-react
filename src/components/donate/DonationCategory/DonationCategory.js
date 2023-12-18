import React from 'react';
import DonationProduct from '../DonationProduct/DonationProduct';


const DonationCategory = ({ category }) => {
  return (
    <div className="donation-category mb-5 container text-center">
      <h2 className="category-heading">{category.categoryName}</h2>
      <div className="products-container d-flex flex-row flex-wrap justify-content-center row ">
        {category.donations.map((product) => (
          <DonationProduct key={product.nameEnglish} product={product} />
        ))}
        <div>for custom amount</div>
      </div>
    </div>
  );
};

export default DonationCategory;
