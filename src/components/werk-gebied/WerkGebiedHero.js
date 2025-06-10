import React from "react";
import SharedHero from "../reusable/SharedHero";
import bgImage from "../../assets/images/hero-bg.webp";

const WerkgebiedHero = () => {
  return (
    <SharedHero
      backgroundImage={bgImage}
      title="Ons werkgebied"
      subtitle="Altijd persoonlijke kraamzorg bij jou in de buurt"
      buttonText="Inschrijven"
      buttonLink="/inschrijven"
      breadcrumbCurrent="Werkgebied"
    />
  );
};

export default WerkgebiedHero;
