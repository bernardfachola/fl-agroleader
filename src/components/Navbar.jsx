import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const location = useLocation();

  const getLinkClass = (path) => {
    return location.pathname === path ? 'active-link' : '';
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="logo">
          <img
            src="/src/assets/logo.jpg"
            alt="Logo FL-AGROLEADER"
          />
          <span className="oki"><em>FL AGRO LEADER</em></span>
        </div>

        <button className="hamburger" onClick={toggleMenu} aria-label="Menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)} className={getLinkClass('/')}>Accueil</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)} className={getLinkClass('/about')}>À propos</Link></li>
          <li><Link to="/activities" onClick={() => setMenuOpen(false)} className={getLinkClass('/activities')}>Activités</Link></li>
          <li><Link to="/gallery" onClick={() => setMenuOpen(false)} className={getLinkClass('/gallery')}>Galerie</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)} className={getLinkClass('/contact')}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
