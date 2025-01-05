import "./ResumeOverview.css"; // Include a CSS file for styling

const ResumeOverview = () => {
  return (
    <div className="resume-overview">
      <h2>Resume Overview</h2>

      {/* Education Section */}
      <div className="section">
        <h3>Education</h3>
        <ul className="education-list">
          <li>
            <strong>Master of Computer Application</strong>
            <br />
            Motilal Nehru National Institute of Technology Allahabad (2022 -
            Present)
            <br />
            CPI: 7.26
          </li>
          <li>
            <strong>Bachelor of Science (Hons.) Mathematics</strong>
            <br />
            St. Xavier’s College, Ranchi (2017 - 2021)
            <br />
            Percentage: 65.12%
          </li>
          <li>
            <strong>10+2 (Intermediate)</strong>
            <br />
            Lowrence Inter College, Ranchi (2017)
            <br />
            Percentage: 60%
          </li>
          <li>
            <strong>10th (Matriculation)</strong>
            <br />
            Ram Tahal Chaudhary High School, Ranchi (2014)
            <br />
            CGPA: 8.0
          </li>
        </ul>
      </div>

      {/* Projects Section */}
      <div className="section">
        <h3>Projects</h3>
        <ul className="projects-list">
          <li>
            <strong>Movie Recommendation System</strong>
            <br />
            Developed a hybrid recommendation system using collaborative and
            content-based filtering.
            <br />
            <ul>
              <li>
                Technologies: Python, Pandas, Numpy, scikit-learn, TensorFlow,
                NLTK
              </li>
              <li>
                Implemented content-based filtering using metadata like genre
                and keywords.
              </li>
              <li>
                Built collaborative filtering to provide personalized
                recommendations based on user interaction data.
              </li>
              <li>
                Combined approaches for a comprehensive and accurate system.
              </li>
            </ul>
            <a
              href="https://github.com/RaisunLakra/Movie-Recommendation"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </li>
          <li>
            <strong>Parallel File Encryptor</strong>
            <br />
            Designed high-performance encryption and decryption software in C++.
            <br />
            <ul>
              <li>
                Used parallel programming to boost encryption speed for large
                files.
              </li>
              <li>
                Implemented secure key-based mathematical operations to ensure
                data confidentiality.
              </li>
            </ul>
            <a
              href="https://github.com/RaisunLakra/Parallel-File-Encryptor"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </li>
        </ul>
      </div>

      {/* Interests and Hobbies Section */}
      <div className="section">
        <h3>Interests</h3>
        <ul className="interests-list">
          <li>Data Science and Machine Learning</li>
          <li>Artificial Intelligence and Automation</li>
          <li>Software Engineering</li>
          <li>Full-Stack Development</li>
          <li>Cloud Computing and DevOps</li>
          <li>Cybersecurity</li>
        </ul>
      </div>

      <div className="section">
        <h3>Hobbies</h3>
        <ul className="hobbies-list">
          <li>Chess</li>
        </ul>
      </div>
    </div>
  );
};

export default ResumeOverview;
