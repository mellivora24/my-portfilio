import React from 'react';

function Skills() {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Git'];

  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;