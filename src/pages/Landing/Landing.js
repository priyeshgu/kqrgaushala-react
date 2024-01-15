import React from "react";
import './Landing.css'
import Hero from "../../components/homepage/Hero/Hero";
import Donation from "../../components/homepage/Donation/Donation";
import Glance from "../../components/homepage/Glance/Glance";
import AboutSection from "../../components/homepage/About/About";
import MonthlyMission from "../../components/homepage/MonthlyMission/MonthlyMission";
import GenerositySection from "../../components/homepage/GenerositySection/GenerositySection";
import NewsletterSection from "../../components/homepage/NewsletterSection/NewsletterSection";
import Membership from "../../components/homepage/Membership/Membership";
import Lifetime from "../../components/homepage/Lifetime/Lifetime";

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

const donationColors = ["#FFD700", "#32CD32", "#FF6347", "#4169E1"];

export default function Landing() {
  const donationData = [
    {
      id: 1,
      title: "Maintaince Expenses",
      description:
        "Embrace Serenity, join hands in supporting the maintenance of our Gaushala ",
      image: donation1,
      categoryId:"Maintenance"
    },
    {
      id: 2,
      title: "Adopting a Cow or a Calf",
      description:
        "Explore Diverse Adoption Choices to Care for our Sacred Cows at the Gaushala",
      image: donation2,
      categoryId:"Adoption"
    },
    {
      id: 3,
      title: "Food Donation",
      description:
        "Join Hands in Providing Gaushala's Nourishment, Nurturing the Lives of our Divine Cows",
      image: donation3,
      categoryId:"Food"
    },
    {
      id: 4,
      title: "Seva",
      description:
        "Contribute to Gaushala Seva, Supporting Gopastmi Mela and Medical Expenses for our Beloved Cows",
      image: donation4,
      categoryId:"Seva"
    },
    // Add more donation types as needed
  ];

  const glanceTiles = [
    { svgPath: glance1, title: "200+ desi cows" },
    {
      svgPath: glance2,
      title: "12+ acres of cow shed",
    },
    {
      svgPath: glance3,
      title: "150+ Volunteers",
    },
    {
      svgPath: glance4,
      title: "15+ Medical Team",
    },
    {
      svgPath: glance5,
      title: "5+ Trucks & Tractors",
    },
    {
      svgPath: glance6,
      title: "100+ Surgeries Done",
    },
  ];

  return (
    <>
      <Hero />

      {/* Donation Section  */}
      <div className="container">
        <p className="donation-heading">Choose Your Path of Compassion</p>
        <div className="row">
          {donationData.map((donationType, index) => (
            <div key={donationType.id} className="col-md-6 col-lg-3 col-6">
              <Donation {...donationType} color={donationColors[index]} />
            </div>
          ))}
        </div>
      </div>

      {/* Glance Section  */}
      <div className="container mt-5">
        <p className="glance-heading text-center mb-4">Koderma Gaushala at a Glance</p>
        <div className="row glance-row">
          {glanceTiles.map((tile, index) => (
            <div key={index} className="col-md-2 col-4">
              <Glance {...tile} />
            </div>
          ))}
        </div>
      </div>

      <AboutSection/>
      <MonthlyMission/>
      <GenerositySection/>
      <Membership/>
      <Lifetime/>
      <NewsletterSection/>
    </>
  );
}
