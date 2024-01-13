import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'This HTML code defines the structure of a web page for the "Grand Hotel." It includes a navigation menu with links and social media, along with a main area that showcases the hotel\'s welcome, a descriptive paragraph, and a button to view rooms and rates.',
      technologies: ['HTML', 'CSS'],
      link: 'https://jefreytg.github.io/simple-hotel-landingpage/', // Agrega el enlace del proyecto aquí
      // ... other fields as needed
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Description of project 2.',
      technologies: ['Node.js', 'Express', 'MongoDB'],
      link: 'https://example.com/project2', // Agrega el enlace del proyecto aquí
      // ... other fields as needed
    },
    // Add more projects as necessary
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projects-container">
      <h2>Mis Proyectos</h2>
      <div className="project-list">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div>
              <strong>Technologies:</strong>{' '}
              {project.technologies.join(', ')}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Ver Proyecto
            </a>
            {/* Alternatively, you can use a button for a modal */}
            <button onClick={() => handleProjectClick(project)}>Ver Preview</button>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            {/* Add more project details as needed */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
