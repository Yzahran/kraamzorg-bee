import React from "react";
import "./VergoedingHero.css";
import bgImage from "../../assets/images/sleeping-baby-2.jpg";
import { Link } from "react-router-dom";

const VergoedingHero = () => {
  return (
    <section
      className="vergoeding-hero"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="vergoeding-hero-overlay">
        <div className="vergoeding-hero-content">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span className="current">Vergoedingen</span>
          </nav>
          <h1 className="hero-title">
            Vergoedingen kraamzorg
            <br />
            <span className="hero-subtitle">Zorgeloos genieten van jouw kraamtijd</span>
          </h1>
          <Link to="/werkgebied" className="yellow-button">
            Werkgebied
          </Link>
        </div>
      </div>
      <svg className="about-hero-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150">
        <path fill="#ffffff" d="M0,80 C480,160 960,0 1440,80 L1440,160 L0,160 Z"></path>
      </svg>
    </section>
  );
};

export default VergoedingHero; 