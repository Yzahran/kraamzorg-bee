import React from "react";
import "./Footer.css";
import logo from "../assets/images/Logo.webp"; // adjust path
import { FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Left: Logo & copyright */}
        <div className="footer-column">
          <img src={logo} alt="Kraamzorg Bee logo" className="footer-logo" />
          <p>© 2025 Alle rechten voorbehouden | Kraamzorg Bee</p>
        </div>

        {/* Middle: Links */}
        <div className="footer-column">
          <h4>Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/over-ons">Over ons</Link></li>
            <li><Link to="/werkgebied">Werkgebied</Link></li>
            <li><Link to="/vergoedingen">Vergoedingen</Link></li>
            <li><Link to="/werken-bij">Werken bij</Link></li>
            <li><Link to="/inschrijven">Inschrijven</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Right: Contact & Socials */}
        <div className="footer-column">
          <h4>Contact</h4>
          <p>Tel: +31 85 004 8342</p>
          <p>Email: info@kraamzorgbee.nl</p>
        </div>

        <div className="footer-column">
          <h4>Socials</h4>
          <div className="social-icons">
            <a href="https://instagram.com/kraamzorgbee" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://wa.me/31850048342" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            <a href="https://tiktok.com/@kraamzorgbee" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
