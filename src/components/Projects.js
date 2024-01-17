import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Hotel Landing Page',
      description: 'This HTML code defines the structure of a web page for the "Grand Hotel." It includes a navigation menu with links and social media, along with a main area that showcases the hotel\'s welcome, a descriptive paragraph, and a button to view rooms and rates.',
      technologies: ['HTML', 'CSS'],
      link: 'https://jefreytg.github.io/simple-hotel-landingpage/', // Agrega el enlace del proyecto aquí
      // ... other fields as needed
    },

    {
      id: 2,
      title: 'Photographic Portfolio',
      description: 'This is a Photographic Portfolio website created using CSS, HTML, it is a responsive website were you can navigate to all the different sections',
      technologies: ['CSS', 'HTML'],
      link: 'https://jefreytg.github.io/photography-portfolio/index.html', // Agrega el enlace del proyecto aquí
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
      <h2>My Proyects</h2>
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
              Go to the Project
            </a>
            {/* Alternatively, you can use a button for a modal */}
            <button onClick={() => handleProjectClick(project)}>Preview</button>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <iframe 
            title='Project Preview'
            src={selectedProject.link}
            width='100%'
            height='500px'
            frameBorder='0'
            />            
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
