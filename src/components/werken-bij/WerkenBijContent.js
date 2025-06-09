import React from "react";
import "./WerkenBijContent.css";
import herobgImage from "../../assets/images/hero-bg.webp";
import { Link } from "react-router-dom";

const WerkenBijContent = () => {
  return (
    <section className="werken-bij-content-section">
      <div className="werken-bij-content-container">
        <div className="content-text">
          <h2 className="section-title">
            Bij Kraamzorg Bee draait alles<br />
            om persoonlijke aandacht,<br />
            vertrouwen en warmte.
          </h2>
          <p>
            Wij zijn een kleinschalige, groeiende kraamzorgorganisatie in Zuid-Holland en 
            zoeken collega's die met dezelfde passie en toewijding gezinnen willen 
            ondersteunen tijdens hun kraamtijd.
          </p>
          <Link to="/inschrijven" className="content-cta-button">
            Solliciteren
          </Link>
        </div>

        <div className="content-image">
          <img src={herobgImage} alt="Kraamzorg Bee baby" />
        </div>
      </div>
    </section>
  );
};

export default WerkenBijContent; 