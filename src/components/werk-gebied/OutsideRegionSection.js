import React from "react";
import "./OutsideRegionSection.css";
import backgroundImage from "../../assets/images/pregnant.webp";
import { Link } from "react-router-dom";

const OutsideRegionSection = () => {
  return (
    <section className="outside-region-section">
      <div className="outside-region-container">
        {/* Main Content Card */}
        <div className="outside-region-card">
          <div className="outside-region-content">
            <div className="outside-region-badge">
              <span>🌍 Buiten ons werkgebied?</span>
            </div>
            <h2 className="outside-region-title">
              Woon je buiten deze regio?
            </h2>
            <p className="outside-region-paragraph">
              Geen probleem. Neem gerust contact met ons op. We bespreken graag samen
              de mogelijkheden om jou toch te ondersteunen. Bij Kraamzorg Bee denken we
              altijd in oplossingen en doen we ons best om iedereen te helpen waar dat
              mogelijk is.
            </p>
            
            <div className="outside-region-actions">
              <Link to="/contact" className="primary-cta-button">
                <span>Contact opnemen</span>
              </Link>
              <Link to="/inschrijven" className="secondary-cta-button">
                <span>Inschrijven →</span>
              </Link>
            </div>
          </div>
          
          <div className="outside-region-image">
            <img src={backgroundImage} alt="Zwangere vrouw" />
            <div className="image-overlay"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OutsideRegionSection;
