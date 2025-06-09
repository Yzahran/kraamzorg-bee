import React from "react";
import "./WerkenBijHero.css";
import bgImage from "../../assets/images/pregnant.webp"; // replace with appropriate image
import { Link } from "react-router-dom";

const WerkenBijHero = () => {
  return (
    <section
      className="werken-bij-hero"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="werken-bij-hero-overlay">
        <div className="werken-bij-hero-content">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span className="current">Werken bij</span>
          </nav>
          <h1 className="hero-title">
            Werken bij Kraamzorg Bee
            <br />
            <span className="hero-subtitle">Word jij ons nieuwe gezicht in de kraamzorg?</span>
          </h1>
          <Link to="/werkgebied" className="yellow-button">
            Werkgebied
          </Link>
        </div>
      </div>
      <svg className="werken-bij-hero-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150">
        <path fill="#ffffff" d="M0,80 C480,160 960,0 1440,80 L1440,160 L0,160 Z"></path>
      </svg>
    </section>
  );
};

export default WerkenBijHero; 