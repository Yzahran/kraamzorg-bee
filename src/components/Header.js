import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../assets/images/Logo.webp';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Helper function to check if a link is active
  const isActiveLink = (path) => {
    if (path === '/' && location.pathname === '/') {
      return true;
    }
    return path !== '/' && location.pathname.startsWith(path);
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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
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

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && <div className="mobile-menu-overlay" onClick={closeMobileMenu}></div>}

        <nav className={`main-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <ul className="nav-links">
            <li><Link to="/" className={isActiveLink('/') ? 'active' : ''} onClick={closeMobileMenu}>Home</Link></li>
            <li><Link to="/over-ons" className={isActiveLink('/over-ons') ? 'active' : ''} onClick={closeMobileMenu}>Over ons</Link></li>
            <li><Link to="/werkgebied" className={isActiveLink('/werkgebied') ? 'active' : ''} onClick={closeMobileMenu}>Werkgebied</Link></li>
            <li><Link to="/vergoedingen" className={isActiveLink('/vergoedingen') ? 'active' : ''} onClick={closeMobileMenu}>Vergoedingen</Link></li>
            <li><Link to="/werken-bij" className={isActiveLink('/werken-bij') ? 'active' : ''} onClick={closeMobileMenu}>Werken bij</Link></li>
            <li><Link to="/inschrijven" className={isActiveLink('/inschrijven') ? 'active' : ''} onClick={closeMobileMenu}>Inschrijven</Link></li>
            <li><Link to="/contact" className={isActiveLink('/contact') ? 'active' : ''} onClick={closeMobileMenu}>Contact</Link></li>
            <li><Link to="/inschrijven" className="cta-button" onClick={closeMobileMenu}>Inschrijven</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
