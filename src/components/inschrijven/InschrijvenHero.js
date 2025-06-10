import React from "react";
import SharedHero from "../reusable/SharedHero";
import bgImage from "../../assets/images/pregnant.webp";

const InschrijvenHero = () => {
  return (
    <SharedHero
      backgroundImage={bgImage}
      title="Inschrijven voor kraamzorg"
      subtitle="Jouw kraamtijd, onze zorg – eenvoudig geregeld"
      buttonText="Werkgebied"
      buttonLink="/werkgebied"
      breadcrumbCurrent="Inschrijven"
    />
  );
};

export default InschrijvenHero; 