import React, { useState } from "react";
import "./Projects.css";
import { texts } from "../../assets/assets.js";

const Projects = () => {
  const [expandedProjects, setExpandedProjects] = useState({});

  const toggleShowMore = (id) => {
    setExpandedProjects((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div className="projects-container">
      {texts.map((text) => (
        <div key={text._id} className="projects">
          <div className="projects-text-container">
            <h1>{text.project_title}</h1>
            <p>
              {expandedProjects[text._id]
                ? text.description
                : `${text.description.substring(0, 70)}...`}
            </p>
            <button className="show-more-btn" onClick={() => toggleShowMore(text._id)}>
              {expandedProjects[text._id] ? "Show Less" : "Show More"}
            </button>
          </div>
          <img src={require(`../../assets/assets/${text.image}.jpg`)} alt={text.project_title} />
        </div>
      ))}
    </div>
  );
};

export default Projects;
