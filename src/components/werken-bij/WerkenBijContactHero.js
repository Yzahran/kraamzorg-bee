import React from "react";
import SharedHero from "../reusable/SharedHero";
import bgImage from "../../assets/images/pregnant.webp";

const WerkenBijContactHero = () => {
  return (
    <SharedHero
      backgroundImage={bgImage}
      title="Contact"
      subtitle="Heb je vragen? Wij staan voor je klaar"
      buttonText="Werkgebied"
      buttonLink="/werkgebied"
      breadcrumbCurrent="Contact"
    />
  );
};

export default WerkenBijContactHero; 