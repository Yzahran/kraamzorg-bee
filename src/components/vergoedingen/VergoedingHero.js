import React from "react";
import SharedHero from "../reusable/SharedHero";
import bgImage from "../../assets/images/sleeping-baby-2.jpg";

const VergoedingHero = () => {
  return (
    <SharedHero
      backgroundImage={bgImage}
      title="Vergoedingen kraamzorg"
      subtitle="Zorgeloos genieten van jouw kraamtijd"
      buttonText="Werkgebied"
      buttonLink="/werkgebied"
      breadcrumbCurrent="Vergoedingen"
    />
  );
};

export default VergoedingHero; 