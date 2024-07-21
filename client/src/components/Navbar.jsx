import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoSfia from '../assets/logo_sfia.png'
import '../styles/Navbar.css';
import Login from './Login';

const Navbar = ({ onLogin, isLoggedIn, onToggleProfile, profile }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo-link">
          <img src={logoSfia} alt="SFIA Logo" className="logo" />
          <div className="logo-text">
          </div>
        </Link>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`nav-list ${isMenuOpen ? 'show' : ''}`}>
          <li>
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/download" className={`nav-link ${location.pathname === '/download' ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>
              Download
            </Link>
          </li>
          <li>
            <Link to="/reference" className={`nav-link ${location.pathname === '/reference' ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>
              Reference
            </Link>
          </li>
          <li>
            <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>
              About us
            </Link>
          </li>
        </ul>
        <div className="auth-buttons">
          {!isLoggedIn ? (
            <Login onLogin={onLogin} />
          ) : profile && profile.imageUrl ? (
            <img
              src={profile.imageUrl}
              alt="Profile"
              style={{ width: '40px', height: '40px', borderRadius: '50%', cursor: 'pointer' }}
              onClick={onToggleProfile}
            />
          ) : (
            <button onClick={onToggleProfile}>Profile</button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;