import React from "react";
import SharedHero from "../reusable/SharedHero";
import bgImage from "../../assets/images/pregnant.webp";

const WerkenBijHero = () => {
  return (
    <SharedHero
      backgroundImage={bgImage}
      title="Werken bij Kraamzorg Bee"
      subtitle="Word jij ons nieuwe gezicht in de kraamzorg?"
      buttonText="Werkgebied"
      buttonLink="/werkgebied"
      breadcrumbCurrent="Werken bij"
    />
  );
};

export default WerkenBijHero; 