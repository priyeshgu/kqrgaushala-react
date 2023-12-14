import React, { useState, useEffect } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/donationCategories');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map(category => (
          <li key={category.categoryName}>
            <h3>{category.categoryName}</h3>
            <ul>
              {category.donations.map(donation => (
                <li key={donation.nameEnglish}>
                  {donation.nameEnglish} - {donation.costPerUnit}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
