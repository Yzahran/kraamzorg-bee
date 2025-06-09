import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/images/Logo.webp';

const Header = () => (
  <header className="site-header">
    <div className="container">
      <div className="header-logo">
        <img src={logo} alt="Kraamzorg Bee" />
      </div>
      <nav className="main-nav">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/over-ons">Over ons</Link></li>
          <li><Link to="/werkgebied">Werkgebied</Link></li>
          <li><Link to="/vergoedingen">Vergoedingen</Link></li>
          <li><Link to="/werken-bij">Werken bij</Link></li>
          <li><Link to="/inschrijven">Inschrijven</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/inschrijven" className="cta-button">Inschrijven</Link></li>
          </ul>
      </nav>
    </div>
  </header>
);

export default Header;
