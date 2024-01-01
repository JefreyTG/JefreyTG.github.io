// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/tech-ter-logo3.svg';
import './Header.css';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="nav-bar">
        <Link to="/home" className="logo-home-link">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <div className="nav-links">
          <Link to="/home" className="home-link">Home</Link>
          <Link to="/projects" className="projects-link">Projects</Link>
          <Link to="/services" className="services-link">Services</Link>
          <Link to="/videos" className="videos-link">Videos</Link>
          <Link to="/about-me" className="about-me-link">About Me</Link>
          <Link to="/contact" className="contact-link">Contact</Link>
        </div>
        <p className="text-sm">WEB DEVELOPER</p>
      </nav>
    </header>
  );
};

export default Header;