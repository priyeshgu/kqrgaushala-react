import React, { useState, useEffect } from 'react';
import DonationCategory from '../DonationCategory/DonationCategory';
import './Donationmain.css'

const Donationmain = () => {
  const [donationCategories, setDonationCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://192.168.1.96:3001/donationCategories?type=categories');
        const data = await response.json();
        setDonationCategories(data.donationCategories);
      } catch (error) {
        console.error('Error fetching data:', error);

      }
    };

    fetchData();
  }, []);

  return (
    <div>   
      {donationCategories.map((category) => (
        <DonationCategory key={category.categoryName} category={category} />
      ))}
    </div>
  );
};

export default Donationmain;
