import "./Navbar.css"; // Include a CSS file for styling
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"; // For icons

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Navigation Links */}
      <ul className="nav-links">
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#ResumeOverview">Resume Overview</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Get in Touch</a>
        </li>
      </ul>

      {/* Contact Icons */}
      <div className="contact-icons">
        <a
          href="https://www.linkedin.com/in/raisunlakra18"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/RaisunLakra"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a href="mailto:raisunlakra18@gmail.com" aria-label="Gmail">
          <FaEnvelope />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
