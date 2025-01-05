import "./GetInTouch.css"; // Include a CSS file for styling

const GetInTouch = () => {
  return (
    <div className="get-in-touch">
      <h2>Get in Touch</h2>
      <p>
        Feel free to reach out to me through any of the following platforms:
      </p>
      <div className="contact-options">
        <a
          href="https://www.linkedin.com/in/your-linkedin-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-option linkedin"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/your-github-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-option github"
        >
          GitHub
        </a>
        <a
          href="mailto:your-email@example.com"
          className="contact-option email"
        >
          Email
        </a>
      </div>
      <div className="resume-download">
        <p>You can also download my resume:</p>
        {/* <a
          href="https://drive.google.com/file/d/189XlHt59dijUFcKP8ao1HT1z8fnksf0d/view?usp=drive_link"
          download
          className="download-link"
        > */}
        <a href="src/assets/ML_Resume.pdf" download className="download-link">
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default GetInTouch;
