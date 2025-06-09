import React from "react";
import "./VergoedingInfo.css";
// import InfoCard from "../reusable/InfoCard";

const VergoedingInfo = () => {
  return (
    <section className="vergoeding-info-section">
      <div className="vergoeding-info-container">
        <div className="vergoeding-intro">
          <h2>Hoeveel uur kraamzorg krijg je?</h2>
          <p>
            Het aantal uren kraamzorg dat je ontvangt, wordt bepaald aan de hand van het Landelijk Indicatieprotocol Kraamzorg. 
            Hierbij wordt gekeken naar jouw persoonlijke situatie, zoals de bevalling, gezinssamenstelling en gezondheid. 
            Tijdens het intakegesprek bespreken we dit samen en stemmen we de zorg af op jouw wensen en behoeften.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VergoedingInfo; 