import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Videos.css'; // Asegúrate de que la ruta sea correcta y el archivo exista

const Videos = () => {
  // Estado para almacenar la lista de videos
  const [videos, setVideos] = useState([]);

  // Efecto para cargar videos desde la API de YouTube al montar el componente
  useEffect(() => {
    const apiKey = 'AIzaSyDk1RZxFtSaZ-OkWpeglMdYkdstUstkalk';
    const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=desarrollo web&key=${apiKey}&type=video`;

    // Realizar la solicitud a la API de YouTube
    axios.get(apiUrl)
      .then(response => {
        setVideos(response.data.items);
      })
      .catch(error => {
        console.error('Error al cargar videos:', error);
      });
  }, []); // La dependencia vacía asegura que se ejecute solo al montar el componente

  return (
    <div className="videos-container">
      <h2>WEB DEVELOPMENT VIDEOS</h2>
      <ul>
        {videos.map(video => (
          <li key={video.id.videoId} className="video-card">
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              title={video.snippet.title}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <div className="video-details">
              <p className="video-title">{video.snippet.title}</p>
              {/* Agrega más detalles si es necesario, como descripción del video */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Videos;
