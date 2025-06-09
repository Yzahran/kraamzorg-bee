import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HeaderFloat.css';
import logo from '../assets/images/Logo.webp';

const HeaderFloat = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.header-float-menu') && !event.target.closest('.header-float')) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Floating Button */}
      <div className={`header-float ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div className="header-float-icon">
          {isMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </div>
        <span className="header-float-tooltip">Menu</span>
      </div>

      {/* Overlay */}
      {isMenuOpen && <div className="header-float-overlay" onClick={closeMenu}></div>}

      {/* Floating Menu */}
      <div className={`header-float-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="header-float-menu-header">
          <div className="header-float-logo">
            <img src={logo} alt="Kraamzorg Bee" />
          </div>
          <button className="header-float-close" onClick={closeMenu} aria-label="Close menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        <nav className="header-float-nav">
          <ul className="header-float-nav-links">
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/over-ons" onClick={closeMenu}>Over ons</Link></li>
            <li><Link to="/werkgebied" onClick={closeMenu}>Werkgebied</Link></li>
            <li><Link to="/vergoedingen" onClick={closeMenu}>Vergoedingen</Link></li>
            <li><Link to="/werken-bij" onClick={closeMenu}>Werken bij</Link></li>
            <li><Link to="/inschrijven" onClick={closeMenu}>Inschrijven</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
          </ul>
          
          <div className="header-float-cta">
            <Link to="/inschrijven" className="header-float-cta-button" onClick={closeMenu}>
              Inschrijven
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default HeaderFloat; 