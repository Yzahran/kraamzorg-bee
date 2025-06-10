import React from "react";
import SharedHero from "../reusable/SharedHero";
import bgImage from "../../assets/images/pregnant.webp";

const AboutHero = () => {
  return (
    <SharedHero
      backgroundImage={bgImage}
      title="Over ons"
      subtitle="Liefdevolle zorg, vanuit het hart"
      buttonText="Werkgebied"
      buttonLink="/werkgebied"
      breadcrumbCurrent="Over ons"
    />
  );
};

export default AboutHero;
