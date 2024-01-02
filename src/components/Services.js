import uiCard from '../images/card-images/ui-card.jpeg';
import uxCard from '../images/card-images/ux-card.jpeg';
import rsCard from '../images/card-images/rs-card2.jpeg';
import dxCard from '../images/card-images/dx-card2.jpeg';
import fwCard from '../images/card-images/fw-card.jpeg';
import apiCard from '../images/card-images/api-card2.jpeg';

import './Services.css';



const ServiceCards= ()=>{

    return(
        <div className='cards-container'>
        <div className="card">
            <div className="face front">
                <img src={uiCard} alt="UI tarjeta"></img>
                <h1>Desarrollo UI</h1>
            </div>
            <div className="face back">
                <h2>Desarrollo UI</h2>
                <p>Crear y diseñar la interfaz de usuario de una aplicación web o sitio. Esto incluye la disposición de elementos, diseño visual y estilo.</p>
            </div>
        </div>

        <div className="card">
        <div className="face front">
            <img src={uxCard} alt="UX tarjeta"></img>
            <h1>Desarrollo UX</h1>
        </div>
        <div className="face back">
            <h2>Desarrollo UX</h2>
            <p>Mejorar la experiencia general del usuario al interactuar con la interfaz. Esto implica asegurar que la navegación sea intuitiva y que los usuarios puedan realizar tareas de manera eficiente.</p>
        </div>
    </div>

    <div className="card">
        <div className="face front">
            <img src={rsCard} alt="UI tarjeta"></img>
            <h1>Responsive Web Sites</h1>
        </div>
        <div className="face back">
            <h2>Responsive Web Sites</h2>
            <p>Garantizar que las páginas web sean compatibles con varios dispositivos y tamaños de pantalla.
            Esto se logra mediante el uso de diseño receptivo y técnicas de diseño adaptativo.</p>
        </div>
    </div>
    
    <div className="card">
        <div className="face front">
            <img src={dxCard} alt="UI tarjeta"></img>
            <h1>Diseño: </h1>
        </div>
        <div className="face back">
            <h2>Diseño: </h2>
            <p>Convertir los diseños proporcionados por diseñadores gráficos o equipos de diseño en código HTML, CSS y JavaScript funcional.</p>
        </div>
    </div>

    <div className="card">
        <div className="face front">
            <img src={fwCard} alt="UI tarjeta"></img>
            <h1>FrameWorks: </h1>
        </div>
        <div className="face back">
            <h2>FrameWorks: </h2>
            <p>Utilizar frameworks front-end como React, Angular o Vue.js para construir aplicaciones web interactivas y dinámicas.</p>
        </div>
    </div>
    <div className="card">
        <div className="face front">
            <img src={apiCard} alt="UI tarjeta"></img>
            <h1>Integración de APIs: </h1>
        </div>
        <div className="face back">
            <h2>Integración de APIs: </h2>
            <p>Conectar la interfaz de usuario con servicios externos y APIs para acceder a datos y funcionalidades adicionales.</p>
        </div>
    </div>
    
    </div>







        
    )
};

export default ServiceCards;