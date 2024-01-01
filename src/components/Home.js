// Home.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import './Home.css';
import mainImage from "../images/istockphoto-1856888927-1024x1024.jpg"

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-title-description-div">
  <h1 className="home-title">Hola, Me llamo Jefrey...</h1>
  <p className="home-description">
    ¡Bienvenido a mi rincón digital! Soy un apasionado desarrollador frontend con habilidades en tecnologías web modernas. Explora mi portafolio para descubrir proyectos emocionantes y conocer más sobre mi enfoque para construir experiencias web excepcionales.
  </p>
</div>
<div className="home-image">
  <img src={mainImage} alt="Mi Imagen" className="main-image" />
</div>
     
      <div className="tech-icons">
        <FontAwesomeIcon icon={faHtml5} size="3x" className="icon" />
        <FontAwesomeIcon icon={faCss3} size="3x" className="icon" />
        <FontAwesomeIcon icon={faJs} size="3x" className="icon" />
        <FontAwesomeIcon icon={faReact} size="3x" className="icon" />
      </div>
    </div>
  );
};

export default Home;
