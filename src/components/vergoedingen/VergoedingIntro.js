import React from "react";
import "./VergoedingIntro.css";
import babyImage from "../../assets/images/sleeping-baby.jpg";
import { Link } from "react-router-dom";

const VergoedingIntro = () => {
  return (
    <section className="vergoeding-intro-section">
      <div className="vergoeding-intro-container">
        <div className="vergoeding-intro-content">
          <h2>
            Kraamzorg Bee werkt samen<br />
            met alle zorgverzekeraars.
          </h2>
          <p>
            Dat betekent dat jouw kraamzorg altijd goed geregeld is. Kraamzorg wordt 
            vergoed vanuit de basisverzekering, waardoor de kosten grotendeels worden 
            gedekt.
          </p>
          
          <h3>Wettelijke eigen bijdrage</h3>
          <p>
            Voor kraamzorg betaal je een wettelijke eigen bijdrage van € 5,40 per uur 
            (tarief 2025). Heb je een aanvullende verzekering? Dan vergoedt jouw 
            zorgverzekeraar deze eigen bijdrage vaak (deels of volledig). Informeer 
            hiervoor bij jouw eigen zorgverzekeraar.
          </p>
          
          <Link to="/inschrijven" className="dark-button">
            Inschrijven
          </Link>
        </div>
        
        <div className="vergoeding-intro-image">
          <img src={babyImage} alt="Slapende baby" />
        </div>
      </div>
    </section>
  );
};

export default VergoedingIntro; 