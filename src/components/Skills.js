import React from 'react';
import './Skills.css';

function Skills() {
  const skills = [
    {category: "Programming", items: ["JavaScript", "Python", "React"]},
    {category: "Design", items: ["UI/UX Design", "Figma", "Canva"]},
    {category: "Soft Skills", items: ["Problem-Solving", "Teamwork", "Communication"]}
  ];

  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-list">
        {skills.map((skillGroup, index) => (
          <div key={index} className="skill-category">
            <h3>{skillGroup.category}</h3>
            <ul>
              {skillGroup.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
