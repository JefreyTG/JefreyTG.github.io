// Header.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/tg-tech-logo4.svg';
import './Header.css';




const Header = () => {
  useEffect(()=>{
    const navBar = document.querySelector('.nav-bar');

    const handleScroll=()=>{
      if (window.scrollY > 0) {
        navBar.classList.add('scrolled');
      } else {
        navBar.classList.remove('scrolled');
      }
    };

      window.addEventListener('scroll', handleScroll);

      return()=>{
        window.removeEventListener('scroll', handleScroll);
    };   
  }, [])


  return (
    <header className="header">
      <nav className="nav-bar">
        <Link to="/home" className="logo-home-link">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <div className="nav-links">
          <Link to="/home" className="home-link">Home</Link>
          <Link to="/services" className="services-link">Services</Link>
          <Link to="/projects" className="projects-link">Projects</Link>
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