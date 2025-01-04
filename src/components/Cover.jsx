import React from "react";
import "./Cover.css"; // Include a CSS file for styling

const Cover = () => {
  return (
    <div className="cover">
      {/* Left Column: Text Section */}
      <div className="cover-text">
        <h1>Welcome to My Portfolio</h1>
        <p>
          Hi, I'm Raisun Lakra, a passionate developer with expertise in
          creating efficient and scalable web solutions, Machine Learning and
          Data Science. Check out my work below!
        </p>
        <button className="cta-button">Explore My Work</button>
      </div>

      {/* Right Column: Image Section */}
      <div className="cover-image">
        <img
          src="https://via.placeholder.com/400"
          alt="Portfolio Profile"
          className="profile-image"
        />
      </div>
    </div>
  );
};

export default Cover;
