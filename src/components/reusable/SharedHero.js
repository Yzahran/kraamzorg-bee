import React from "react";
import "./SharedHero.css";
import { Link } from "react-router-dom";

const SharedHero = ({ 
  backgroundImage, 
  title, 
  subtitle, 
  buttonText, 
  buttonLink, 
  breadcrumbCurrent,
  className = ""
}) => {
  return (
    <section
      className={`shared-hero ${className}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="shared-hero-overlay">
        <div className="shared-hero-content">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span className="current">{breadcrumbCurrent}</span>
          </nav>
          <h1 className="hero-title">
            {title}
            <br />
            <span className="hero-subtitle">{subtitle}</span>
          </h1>
          <Link to={buttonLink} className="yellow-button">
            {buttonText}
          </Link>
        </div>
      </div>
      <svg className="shared-hero-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150">
        <path fill="#ffffff" d="M0,80 C480,160 960,0 1440,80 L1440,160 L0,160 Z"></path>
      </svg>
    </section>
  );
};

export default SharedHero; 