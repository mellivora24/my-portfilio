import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'Project 1',
      description: 'A web app built with React and Node.js.',
      link: 'https://github.com/yourusername/project1',
    },
    {
      title: 'Project 2',
      description: 'A responsive portfolio website.',
      link: 'https://github.com/yourusername/project2',
    },
  ];

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;