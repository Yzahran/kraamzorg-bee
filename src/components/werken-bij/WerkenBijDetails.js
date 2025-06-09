import React from "react";
import "./WerkenBijDetails.css";

const WerkenBijDetails = () => {
  return (
    <section className="werken-bij-details-section">
      <div className="werken-bij-details-container">
        <div className="details-column">
          <h3 className="details-title">Wat bieden wij jou?</h3>
          <div className="details-list">
            <p className="detail-item">
              <span className="heart-icon">♥</span>
              <span>Een kleinschalig, hecht team waar persoonlijke aandacht centraal staat</span>
            </p>
            <p className="detail-item">
              <span className="heart-icon">♥</span>
              <span>Ruimte voor jouw eigen inbreng en ontwikkeling</span>
            </p>
            <p className="detail-item">
              <span className="heart-icon">♥</span>
              <span>Flexibele uren en diensten in jouw regio</span>
            </p>
            <p className="detail-item">
              <span className="heart-icon">♥</span>
              <span>Ondersteuning vanuit een organisatie die écht luistert naar haar medewerkers</span>
            </p>
          </div>
        </div>

        <div className="details-column">
          <h3 className="details-title">Wie zoeken wij?</h3>
          <div className="details-list">
            <p className="detail-item">
              <span className="heart-icon">♥</span>
              <span>Gediplomeerde kraamverzorgenden of studenten in opleiding</span>
            </p>
            <p className="detail-item">
              <span className="heart-icon">♥</span>
              <span>Een warm hart voor gezinnen</span>
            </p>
            <p className="detail-item">
              <span className="heart-icon">♥</span>
              <span>Betrokken, flexibel en zelfstandig</span>
            </p>
            <p className="detail-item">
              <span className="heart-icon">♥</span>
              <span>Bekend met de regio Zuid-Holland of bereid hier te werken</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WerkenBijDetails; 