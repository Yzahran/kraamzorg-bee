import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/images/Logo.webp';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.main-nav') && !event.target.closest('.mobile-menu-btn')) {
        closeMobileMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="site-header">
      <div className="container">
        <div className="header-logo">
          <img src={logo} alt="Kraamzorg Bee" />
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`main-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <ul className="nav-links">
            <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
            <li><Link to="/over-ons" onClick={closeMobileMenu}>Over ons</Link></li>
            <li><Link to="/werkgebied" onClick={closeMobileMenu}>Werkgebied</Link></li>
            <li><Link to="/vergoedingen" onClick={closeMobileMenu}>Vergoedingen</Link></li>
            <li><Link to="/werken-bij" onClick={closeMobileMenu}>Werken bij</Link></li>
            <li><Link to="/inschrijven" onClick={closeMobileMenu}>Inschrijven</Link></li>
            <li><Link to="/contact" onClick={closeMobileMenu}>Contact</Link></li>
            <li><Link to="/inschrijven" className="cta-button" onClick={closeMobileMenu}>Inschrijven</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
