import React from "react";
import "./FinalCTA.css";
import backgroundImage from "../../assets/images/hero-bg.webp"; // Replace with your baby CTA image
import { Link } from "react-router-dom";

const FinalCTA = () => {
  return (
    <section
      className="final-cta-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="final-cta-overlay"></div>
      <div className="final-cta-content">
        <h2>Klaar voor een ontspannen kraamtijd?</h2>
        <p>
          Meld je vandaag nog aan bij Kraamzorg Bee en ervaar hoe persoonlijke,
          liefdevolle kraamzorg het verschil maakt. Na je inschrijving plannen we
          een intakegesprek, waarin we jouw wensen en behoeften bespreken. Zo zorgen
          we samen voor een warme en zorgeloze start met je baby.
        </p>
        <Link to="/inschrijven" className="final-cta-button">
          Ik wil me inschrijven!
        </Link>
      </div>
    </section>
  );
};

export default FinalCTA;