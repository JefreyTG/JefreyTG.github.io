// src/components/Header.js
import React from 'react';
import logo from"../images/tech-ter-logo.png"
import "./Header.css"

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <img src={logo} alt="Logo" className="h-10" />
        <nav className="space-x-4">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">Projects</a>
          <a href="#" className="hover:text-gray-300">Videos</a>
          <a href="#" className="hover:text-gray-300">About Me</a>
          <a href="#" className="hover:text-gray-300">Contact</a>
        </nav>
        <p className="text-sm">Desarrollador Web</p>
      </div>
    </header>
  );
};

export default Header;
