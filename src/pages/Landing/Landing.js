import React from 'react'
import Hero from '../../components/homepage/Hero/Hero'
import Donation from '../../components/homepage/Donation/Donation'
export default function Landing() {
  const donationData = [
    {
      id: 1,
      title: 'Type 1',
      description: 'Description for Type 1',
      image: 'path/to/image1.jpg',
    },
    {
      id: 2,
      title: 'Type 2',
      description: 'Description for Type 2',
      image: 'path/to/image2.jpg',
    },
    {
      id: 3,
      title: 'Type 4',
      description: 'Description for Type 2',
      image: 'path/to/image2.jpg',
    },
    {
      id: 4,
      title: 'Type 2',
      description: 'Description for Type 2',
      image: 'path/to/image2.jpg',
    }
    // Add more donation types as needed
  ];

  return (
    <>
    <Hero/>
    <div className="container mt-5">
      <div className="row">
        {donationData.map((donationType) => (
          <div key={donationType.id} className="col-md-6 col-lg-3">
            <Donation {...donationType} />
          </div>
        ))}
      </div>
    </div>
    </>
  )
}
