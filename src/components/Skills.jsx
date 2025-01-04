import React from "react";
import "./Skills.css"; // Include a CSS file for styling

const Skills = () => {
  const skills = [
    "C",
    "C++",
    "Python",
    "Java",
    "JavaScript",
    "SQL",
    "Django",
    "Git",
    "Linux",
    "Bash Scripting",
  ];

  return (
    <div className="skills">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
