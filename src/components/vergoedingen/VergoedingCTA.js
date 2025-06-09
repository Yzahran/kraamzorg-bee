import React from "react";
import "./VergoedingCTA.css";
import backgroundImage from "../../assets/images/pregnant.webp";
import { Link } from "react-router-dom";

const VergoedingCTA = () => {
  return (
    <section
      className="vergoeding-cta-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="vergoeding-cta-overlay">
        <div className="vergoeding-cta-content">
          <h2>Vragen over de vergoedingen?</h2>
          <p>
            Heb je vragen over de kosten of vergoedingen? Neem gerust contact met ons 
            op. Wij helpen je graag verder.
          </p>
          <Link to="/contact" className="vergoeding-cta-button">
            Neem contact op!
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VergoedingCTA; 