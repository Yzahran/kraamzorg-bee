import React from "react";
import "./InschrijvenContent.css";

const InschrijvenContent = () => {
  return (
    <section className="inschrijven-content-section">
      <div className="inschrijven-content-container">
        <div className="content-intro">
          <h3 className="intro-title">
            Wil je je aanmelden voor kraamzorg bij Kraamzorg Bee?
          </h3>
          <p className="intro-text">
            Dat kan heel eenvoudig via ons online inschrijfformulier. Zo ben je verzekerd van 
            persoonlijke en liefdevolle zorg tijdens deze bijzondere periode.
          </p>
        </div>
        
        <div className="form-container">
          <iframe 
            src="https://kraamzorgbee.mijngeboortezorg.nl/Aanvragen/kraamzorg?mode=frame"
            title="Kraamzorg Aanvraag Formulier"
            className="registration-form"
            frameBorder="0"
          />
        </div>
      </div>
    </section>
  );
};

export default InschrijvenContent; 