import React from "react";
import  { useState, useEffect } from 'react';
import './Landing.css'
import Hero from "../../components/homepage/Hero/Hero";
import Donation from "../../components/homepage/Donation/Donation";
import Glance from "../../components/homepage/Glance/Glance";
import AboutSection from "../../components/homepage/About/About";
import AboutSectionPhone from "../../components/homepage/About/AboutPhone/AboutSectionPhone";
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


export default function Landing() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


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
      <div className="donation-section-div">
        <p className="donation-heading">Choose Your Path of Compassion</p>
        <div className="row donate-tile-row">

          <div className="col-md-6 col-lg-3 col-6 donation1">

            <Donation
              backgroundColor="#554992"
              className="donation-type-1"
              image={donation1}
              title="Maintaince Expenses"
              description="Embrace Serenity, join hands in supporting the maintenance of our Gaushala"

            />



          </div>
          <div className="col-md-6 col-lg-3 col-6 donation2">
            <Donation
              backgroundColor="#0da8a7"
              image={donation2}
              title="Adopting a Cow/Calf"
              description="Explore Diverse Adoption Choices to Care for our Sacred Cows at Shree Koderma Gaushala"
            />

          </div>
          <div className="col-md-6 col-lg-3 col-6 donation2-m">
            <Donation
              backgroundColor="#0da8a7"
              image={donation2}
              title="Adopting a Cow/Calf"
              description="Explore Diverse Adoption Choices to Care for our Sacred Cows at our Gaushala"
            />

          </div>
          <div className="col-md-6 col-lg-3 col-6 donation3">
            <Donation
              backgroundColor="#1b6d98"
              image={donation3}
              title="Food Donation"
              description="Join Hands in Providing Gaushala's Nourishment, Nurturing the Lives of our Divine Cows"
            />

          </div>
          <div className="col-md-6 col-lg-3 col-6 donation4">

            <Donation
              backgroundColor="#49b179"
              image={donation4}
              title="Gauvansh Seva"
              description="Donate for Seva, Support Gopastmi Mela and Medical Expenses for our beloved cows"
            />

          </div>

        </div>

      </div>
      {/* Glance Section  */}
      <div className="mt-5 glance-sec">
        <p className="glance-heading text-center mb-4">Koderma Gaushala at a Glance</p>
        <div className="row glance-row">
          {glanceTiles.map((tile, index) => (
            <div key={index} className="col-md-2 col-4">
              <Glance {...tile} />
            </div>
          ))}
        </div>
      </div>

      {isMobile ? <AboutSectionPhone /> : <AboutSection />}
      <MonthlyMission />
      <GenerositySection />
      <Membership />
      <Lifetime />
      <NewsletterSection />
    </>
  );
}
