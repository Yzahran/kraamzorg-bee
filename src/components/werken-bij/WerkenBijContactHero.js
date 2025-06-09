import React from "react";
import "./WerkenBijContactHero.css";
import bgImage from "../../assets/images/pregnant.webp"; // replace with appropriate image
import { Link } from "react-router-dom";

const WerkenBijContactHero = () => {
  return (
    <section
      className="werken-bij-contact-hero"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="werken-bij-contact-hero-overlay">
        <div className="werken-bij-contact-hero-content">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span className="current">Contact</span>
          </nav>
          <h1 className="hero-title">
            Heb je vragen? Wij staan voor je klaar.
          </h1>
          <p className="hero-description">
            Of je nu vragen hebt over kraamzorg, onze werkwijze of je wilt overleggen over jouw persoonlijke situatie: wij helpen je graag verder. Je kunt ons op verschillende manieren bereiken.
          </p>
          <Link to="/werkgebied" className="yellow-button">
            <span className="button-icon">⭐</span>
            Werkgebied
          </Link>
        </div>
      </div>
      <svg className="werken-bij-contact-hero-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150">
        <path fill="#ffffff" d="M0,80 C480,160 960,0 1440,80 L1440,160 L0,160 Z"></path>
      </svg>
    </section>
  );
};

export default WerkenBijContactHero; 