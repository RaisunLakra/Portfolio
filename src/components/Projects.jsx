import React from "react";
import "./Projects.css"; // Include a CSS file for styling

const Projects = () => {
  const projects = [
    {
      title: "Chatbox with Encryption",
      description:
        "A real-time chatbox built in C++ using socket programming. Messages are encrypted before transmission.",
      image: "https://via.placeholder.com/400",
      githubLink: "https://github.com/your-repo/chatbox-encryption",
    },
    {
      title: "File Encryption Tool",
      description:
        "A C++ project for encrypting single or multiple files with multithreading support for enhanced performance.",
      image: "https://via.placeholder.com/400",
      githubLink: "https://github.com/your-repo/file-encryption-tool",
    },
    {
      title: "Todo List GUI",
      description:
        "A user-friendly GUI application in C++ for managing and tracking daily tasks.",
      image: "https://via.placeholder.com/400",
      githubLink: "https://github.com/your-repo/todo-list-gui",
    },
  ];

  return (
    <div className="projects">
      <h2>My Projects</h2>
      {projects.map((project, index) => (
        <div
          key={index}
          className={`project ${index % 2 === 0 ? "even" : "odd"}`}
        >
          <div className="project-details">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              View on GitHub
            </a>
          </div>
          <div className="project-image">
            <img src={project.image} alt={project.title} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
