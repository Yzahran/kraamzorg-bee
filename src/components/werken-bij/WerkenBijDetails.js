import React from "react";
import "./WerkenBijDetails.css";
import logo from "../../assets/images/Logo.webp";

const WerkenBijDetails = () => {
  return (
    <section className="werken-bij-details-section">
      <div className="werken-bij-details-container">
        {/* Section Header */}
        <div className="details-header">
          <div className="details-badge">
            <span>Waarom Kraamzorg Bee?</span>
          </div>
          <h2 className="details-main-title">
            Samen maken we van elke kraamtijd een warme en onvergetelijke ervaring
          </h2>
        </div>

        {/* Details Grid */}
        <div className="details-grid">
          <div className="details-column left-column">
            <div className="column-header">
    
              <h3 className="details-title">Wat bieden wij jou?</h3>
            </div>
            <div className="details-list">
              <div className="detail-item">
                <div className="detail-icon">
                  <span className="detail-dot"></span>
                </div>
                <div className="detail-content">
                  <span>Een kleinschalig, hecht team waar persoonlijke aandacht centraal staat</span>
                </div>
              </div>
              <div className="detail-item">
                <div className="detail-icon">
                  <span className="detail-dot"></span>
                </div>
                <div className="detail-content">
                  <span>Ruimte voor jouw eigen inbreng en ontwikkeling</span>
                </div>
              </div>
              <div className="detail-item">
                <div className="detail-icon">
                  <span className="detail-dot"></span>
                </div>
                <div className="detail-content">
                  <span>Flexibele uren en diensten in jouw regio</span>
                </div>
              </div>
              <div className="detail-item">
                <div className="detail-icon">
                  <span className="detail-dot"></span>
                </div>
                <div className="detail-content">
                  <span>Ondersteuning vanuit een organisatie die écht luistert naar haar medewerkers</span>
                </div>
              </div>
            </div>
          </div>

          <div className="details-column right-column">
            <div className="column-header">
              <h3 className="details-title">Wie zoeken wij?</h3>
            </div>
            <div className="details-list">
              <div className="detail-item">
                <div className="detail-icon">
                  <span className="detail-dot"></span>
                </div>
                <div className="detail-content">
                  <span>Gediplomeerde kraamverzorgenden of studenten in opleiding</span>
                </div>
              </div>
              <div className="detail-item">
                <div className="detail-icon">
                  <span className="detail-dot"></span>
                </div>
                <div className="detail-content">
                  <span>Een warm hart voor gezinnen</span>
                </div>
              </div>
              <div className="detail-item">
                <div className="detail-icon">
                  <span className="detail-dot"></span>
                </div>
                <div className="detail-content">
                  <span>Betrokken, flexibel en zelfstandig</span>
                </div>
              </div>
              <div className="detail-item">
                <div className="detail-icon">
                  <span className="detail-dot"></span>
                </div>
                <div className="detail-content">
                  <span>Bekend met de regio Zuid-Holland of bereid hier te werken</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WerkenBijDetails; 