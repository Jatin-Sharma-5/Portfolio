import React, { useEffect } from 'react';
import './Resume.css'; 

const skills = [
  { name: 'JavaScript', image: 'path/to/javascript.png' },
  { name: 'React', image: 'path/to/react.png' },
  { name: 'HTML', image: 'path/to/html.png' },
  { name: 'CSS', image: 'path/to/css.png' },
  { name: 'Node.js', image: 'path/to/node.png' },
  { name: 'Express', image: 'path/to/express.png' },
  { name: 'MongoDB', image: 'path/to/mongodb.png' },
];

function Resume() {
  useEffect(() => {
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card, index) => {
      card.style.transitionDelay = `${index * 100}ms`;
      card.classList.add('slide-in'); 
    });
  }, []);

  return (
    <div className="resume-container">
      <header className="resume-header">
        <h1>Jatin Sharma</h1>
        <h2>Full-Stack Developer</h2>
        <p className="tagline">Crafting seamless web experiences.</p>
      </header>

      <section className="skills">
        <h2>Skills</h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <img src={skill.image} alt={skill.name} />
              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Resume;
