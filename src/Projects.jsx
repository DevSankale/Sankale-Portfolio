import React from "react";

function Projects({ id, backgroundImage, title, link, description }) {

  const styles = {
    backgroundImage:`url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    padding: "20px",
    borderRadius: "10px",
    height: "250px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
     transition: "transform 0.3s ease",
    
  };

  return (
    <div className="imagecontainer" style={styles}>
      <p>{id}</p>
    
      <h3 id="topicHead">{title}</h3>
      <a href={link} target="_blank" rel="noopener noreferrer" id="project-link">
        <img
          src="./images/icons8-external-link-64.png"
          className="linkimage"
          alt="External link"
        />
      </a>
      
    </div>
  );
}

export default Projects;
