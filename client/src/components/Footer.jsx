import React from 'react';
import { Link } from 'react-router-dom';
import logoSfia from '../assets/logo_sfia.png'
import '../styles/Footer.css';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-top">
            <Link to="/" className="footer-logo-link">
              <img src={logoSfia} alt="SFIA Logo" className="footer-logo" />
              <div className="footer-logo-text">
              </div>
            </Link>
            <ul className="footer-links">
              <li>
                <Link to="/" className="footer-link">Home</Link>
              </li>
              <li>
                <Link to="/download" className="footer-link">Download</Link>
              </li>
              <li>
                <Link to="/reference" className="footer-link">Reference</Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">About us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <a href="http://www.ecpe.nu.ac.th/web" target="_blank" rel="noopener noreferrer" className="copyright-link">
            © 2024 Department of Electrical and Computer Engineering Faculty of Engineering Naresuan University
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;