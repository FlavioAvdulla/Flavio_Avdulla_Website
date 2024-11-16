import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Projects.css";
import { texts } from "../../assets/assets.js";

const Projects = () => {
  const [expandedProjects, setExpandedProjects] = useState({});
  const navigate = useNavigate();

  const toggleShowMore = (id) => {
    setExpandedProjects((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleImageClick = (id) => {
    console.log(`Image with id ${id} clicked`);
    if (id === "1") {
      navigate("/Polaris_Online_Store");
    }
    if (id === "2") {
      navigate("/Mens_SkinCare");
    }
    if (id === "3") {
      navigate("/Logo_Designs");
    }
    if (id === "4") {
      navigate("/Fruit_mix");
    }
  };

  return (
    <div className="projects-container">
      <div className="project-content">
        <h1>MY PROJECTS</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div className="content-grid">
        {texts.map((text, index) => (
          <div
            key={text._id}
            className="projects"
            style={{animationDelay: `${index * 0.1}s`}}
            onClick={() => handleImageClick(text._id)}
          >
            <div className="projects-text-container">
              <h1>{text.project_title}</h1>
              <p>
                {expandedProjects[text._id]
                  ? text.description
                  : `${text.description.substring(0, 70)}...`}
              </p>
              <button
                className="show-more-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleShowMore(text._id);
                }}
              >
                {expandedProjects[text._id] ? "Show Less" : "Show More"}
              </button>
            </div>
            <img src={text.image} alt={text.project_title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
