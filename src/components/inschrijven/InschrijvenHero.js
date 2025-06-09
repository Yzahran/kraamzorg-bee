import React from "react";
import "./InschrijvenHero.css";
import bgImage from "../../assets/images/pregnant.webp"; // replace with appropriate image
import { Link } from "react-router-dom";

const InschrijvenHero = () => {
  return (
    <section
      className="inschrijven-hero"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="inschrijven-hero-overlay">
        <div className="inschrijven-hero-content">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span className="current">Inschrijven</span>
          </nav>
          <h1 className="hero-title">
            Inschrijven voor kraamzorg
            <br />
            <span className="hero-subtitle">Jouw kraamtijd, onze zorg – eenvoudig geregeld</span>
          </h1>
          <Link to="/werkgebied" className="yellow-button">
            Werkgebied
          </Link>
        </div>
      </div>
      <svg className="inschrijven-hero-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150">
        <path fill="#ffffff" d="M0,80 C480,160 960,0 1440,80 L1440,160 L0,160 Z"></path>
      </svg>
    </section>
  );
};

export default InschrijvenHero; 