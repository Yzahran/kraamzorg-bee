import React from "react";
import "./WerkGebiedHero.css";
import bgImage from "../../assets/images/hero-bg.webp"; // Replace with your custom background
import { Link } from "react-router-dom";

const WerkgebiedHero = () => {
  return (
    <section
      className="werkgebied-hero"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="werkgebied-hero-overlay">
        <div className="werkgebied-hero-content">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span className="current">Werkgebied</span>
          </nav>
          <h1 className="hero-title">
            Ons werkgebied
            <br />
            <span className="hero-subtitle">Altijd persoonlijke kraamzorg bij jou in de buurt</span>
          </h1>
          <Link to="/inschrijven" className="yellow-button">
            Inschrijven
          </Link>
        </div>
      </div>
      <svg className="about-hero-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150">
        <path fill="#ffffff" d="M0,80 C480,160 960,0 1440,80 L1440,160 L0,160 Z"></path>
      </svg>
    </section>
  );
};

export default WerkgebiedHero;
