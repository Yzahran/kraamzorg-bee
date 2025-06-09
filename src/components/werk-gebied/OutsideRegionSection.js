import React from "react";
import "./OutsideRegionSection.css";
import backgroundImage from "../../assets/images/pregnant.webp";
import { Link } from "react-router-dom";

const OutsideRegionSection = () => {
  return (
    <section
      className="outside-region-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="outside-region-overlay">
        <div className="outside-region-content">
          <h2 className="outside-region-title">Woon je buiten deze regio?</h2>
          <p className="outside-region-paragraph">
            Geen probleem. Neem gerust contact met ons op. We bespreken graag samen
            de mogelijkheden om jou toch te ondersteunen. Bij Kraamzorg Bee denken we
            altijd in oplossingen en doen we ons best om iedereen te helpen waar dat
            mogelijk is.
          </p>
          <Link to="/inschrijven" className="outside-cta-button">
            Ik wil me inschrijven!
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OutsideRegionSection;
