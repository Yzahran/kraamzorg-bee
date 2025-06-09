import React from "react";
import "./Footer.css";
import logo from "../assets/images/Logo.webp"; // adjust path
import { FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";

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
            <li><a href="/">Home</a></li>
            <li><a href="/over-ons">Over ons</a></li>
            <li><a href="/werkgebied">Werkgebied</a></li>
            <li><a href="/vergoedingen">Vergoedingen</a></li>
            <li><a href="/werken-bij">Werken bij</a></li>
            <li><a href="/inschrijven">Inschrijven</a></li>
            <li><a href="/contact">Contact</a></li>
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
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaWhatsapp /></a>
            <a href="#"><FaTiktok /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
