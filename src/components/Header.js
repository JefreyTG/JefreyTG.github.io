// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/tech-ter-logo3.svg';
import './Header.css';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="nav-bar">
        <Link to="/home">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <div className="nav-links">
          <Link to="/home" className="hover:text-gray-300">Home</Link>
          <Link to="/projects" className="hover:text-gray-300">Projects</Link>
          <Link to="/services" className="hover:text-gray-300">Services</Link>
          <Link to="/videos" className="hover:text-gray-300">Videos</Link>
          <Link to="/about-me" className="hover:text-gray-300">About Me</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
        </div>
        <p className="text-sm">WEB DEVELOPER</p>
      </nav>
    </header>
  );
};

export default Header;
