// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Importa los estilos globales si los tienes
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Si estás interesado en medir el rendimiento de tu aplicación, puedes descomentar esta línea
// Learn more: https://bit.ly/CRA-vitals

