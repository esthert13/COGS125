import React from 'react';
import {motion} from 'framer-motion';
import './Projects.css';

function Projects() {
  const projectData = [
    {title: "Project 1", description: "This portfolio focuses on the usage of React. The current rendition utilizes framer motion to create interactive animations/designs and make the site look alive! It also has mobile layout compatibility."},
    {title: "Project 2", description: "WIP"},
    {title: "Project 3", description: "WIP"},
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-cards">
        {projectData.map((project, index) => (
          <motion.div
            className="project-card"
            whileHover={{scale: 1.05, boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)"}}
            transition={{type: "spring", stiffness: 300}}
            key={index}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;