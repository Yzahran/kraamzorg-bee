import React from 'react';
import VergoedingHero from '../components/vergoedingen/VergoedingHero';
import VergoedingIntro from '../components/vergoedingen/VergoedingIntro';
import VergoedingInfo from '../components/vergoedingen/VergoedingInfo';
import VergoedingCTA from '../components/vergoedingen/VergoedingCTA';

const Vergoedingen = () => {
  return (
    <div className="vergoedingen-page">
      <VergoedingHero />
      <VergoedingIntro />
      <VergoedingInfo />
      <VergoedingCTA />
    </div>
  );
};

export default Vergoedingen; 