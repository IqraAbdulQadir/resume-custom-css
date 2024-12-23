"use client";

import React from 'react';


const projects = [
  {
    title: 'Project One',
    description: 'A brief description of Project One.',
    image: '/ai.jpg',
    technologies: ['React', 'Node.js', 'CSS'],
    liveLink: 'https://example.com/project1',
    sourceLink: 'https://github.com/username/project1',
  },
  {
    title: 'Project Two',
    description: 'A brief description of Project Two.',
    image: '/ai.jpg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    liveLink: 'https://example.com/project2',
    sourceLink: 'https://github.com/username/project2',
  },

  {
    title: 'Project One',
    description: 'A brief description of Project One.',
    image: '/ai.jpg',
    technologies: ['React', 'Node.js', 'CSS'],
    liveLink: 'https://example.com/project1',
    sourceLink: 'https://github.com/username/project1',
  },
  {
    title: 'Project Two',
    description: 'A brief description of Project Two.',
    image: '/ai.jpg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    liveLink: 'https://example.com/project2',
    sourceLink: 'https://github.com/username/project2',
  },
  // Add more projects as needed
];

const ProjectsPage: React.FC = () => {
  return (
 
      <main className="main-content">
        <section className="projects-section">
          <h1>My Projects</h1>
          <p>Here are some of the projects I&apos;ve worked on. Click on the links to view them live or check out the source code.</p>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div className="project-card" key={index}>
                <img src={project.image} alt={project.title} className="project-image" />
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className="technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span className="tech" key={techIndex}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-button">View Live</a>
                  <a href={project.sourceLink} target="_blank" rel="noopener noreferrer" className="project-button">Source Code</a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

  );
};

export default ProjectsPage;
