import React from "react";
import Hero from "../../components/homepage/Hero/Hero";
import Donation from "../../components/homepage/Donation/Donation";
import Glance from "../../components/homepage/Glance";

import donation1 from "../../assets/donation/donation1.svg";
import donation2 from "../../assets/donation/donation2.svg";
import donation3 from "../../assets/donation/donation3.svg";
import donation4 from "../../assets/donation/donation4.svg";

import glance1 from '../../assets/glance/glance1.svg'
import glance2 from '../../assets/glance/glance2.svg'
import glance3 from '../../assets/glance/glance3.svg'
import glance4 from '../../assets/glance/glance4.svg'
import glance5 from '../../assets/glance/glance5.svg'
import glance6 from '../../assets/glance/glance6.svg'


export default function Landing() {
  const donationData = [
    {
      id: 1,
      title: "Gau Raksha Sevak",
      description:
        "Support the daily care, feeding, and medical needs of our sacred cows",
      image: donation1,
    },
    {
      id: 2,
      title: "Kalyan Sponsorship",
      description:
        "Sponsor the well-being of a cow with personalized attention and care",
      image: donation2,
    },
    {
      id: 3,
      title: "Green Grazing Fund",
      description:
        "Support eco-friendly efforts, including organic grazing and habitat preservation.",
      image: donation3,
    },
    {
      id: 4,
      title: "Emergency Care Fund",
      description:
        "Address medical emergencies, offering prompt veterinary care for our cows.",
      image: donation4,
    },
    // Add more donation types as needed
  ];

  const glanceTiles = [
    { svgPath: glance1, title: "200+ desi cows" },
    {
      svgPath: glance2,
      title: "Sustainable Practices",
    },
    {
      svgPath: glance3,
      title: "Organic Grazing Initiatives",
    },
    {
      svgPath: glance4,
      title: "Emergency Medical Care",
    },
    {
      svgPath: glance5,
      title: "Community Outreach Programs",
    },
    {
      svgPath: glance6,
      title: "Educational Initiatives",
    },
  ];

  return (
    <>
      <Hero />

      {/* Donation Section  */}
      <div className="container">
        <p className="donation-heading">Choose Your Path of Compassion</p>
        <div className="row">
          {donationData.map((donationType) => (
            <div key={donationType.id} className="col-md-6 col-lg-3">
              <Donation {...donationType} />
            </div>
          ))}
        </div>
      </div>

      {/* Glance Section  */}
      <div className="container mt-5">
  <p className="glance-heading text-center">Koderma Gaushala at a Glance</p>
  <div className="row glance-row">
    {glanceTiles.map((tile, index) => (
      <div key={index} className="col-md-2 col-4">
        <Glance {...tile} />
      </div>
    ))}
  </div>
</div>
    </>
  );
}
