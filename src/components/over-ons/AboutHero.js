import React from "react";
import "./AboutHero.css";
import bgImage from "../../assets/images/pregnant.webp"; // replace with your image
import { Link } from "react-router-dom";

const AboutHero = () => {
return (
    <section
      className="about-hero"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="about-hero-overlay">
        <div className="about-hero-content">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span className="current">Over ons</span>
          </nav>
          <h1 className="hero-title">
            Over ons
            <br />
            <span className="hero-subtitle">Liefdevolle zorg, vanuit het hart</span>
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

export default AboutHero;
