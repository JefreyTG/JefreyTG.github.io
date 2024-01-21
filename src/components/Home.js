// Home.js
import React from 'react';
import './Home.css';
import mainImage from "../images/istockphoto-1856888927-1024x1024.jpg"
import htmlLogo from'../images/logos/html-logo.png';
import jsLogo from '../images/logos/js-logo.png';
import cssLogo from '../images/logos/css-logo.png';
import reactLogo from '../images/logos/react-logo.png';
import nodejsLogo from '../images/logos/nodejs-logo.png';


const Home = () => {
  return (
    <div className="home-container">
      <div className="home-title-description-div">
  <h1 className="home-title">Bienvenido !!</h1>
  <p className="home-description">
    ¡Este es mi  rincón digital! Soy un apasionado desarrollador frontend con habilidades en tecnologías web modernas. Explora mi portafolio para descubrir proyectos emocionantes y conocer más sobre mi enfoque para construir experiencias web excepcionales.
  </p>
</div>
<div className="home-image">
  <img src={mainImage} alt="Mi Imagen" className="main-image" />
</div>
     
<div className="tech-icons">
        <img src={htmlLogo} alt="HTML5 Icon" className="icon" />
        <img src={cssLogo} alt="CSS Icon" className="icon" />
        <img src={jsLogo} alt="JavaScript Icon" className="icon" />
        <img src={reactLogo} alt="React Icon" className="icon" />
        <img src={nodejsLogo} alt='NodeJS Icon' className='icon'/>
      </div>
    </div>
  );
};

export default Home; 
