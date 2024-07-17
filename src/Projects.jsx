import React from "react";

function Projects(props){
  return (

  <div className="projects" id="Project">
     
      <div class="projectdetails">
        <div class="containerGroup">
          <div class="imagecontainer">
              <p>{props.id}</p>
              <img src={props.projectCover}/>
              <h3 id="topicHead">
                {props.title}
              </h3>
              <a href={props.link}target="_blank" id="project-link">
              <img src="./images/icons8-external-link-64.png" class="linkimage"/>
              </a>
            
            <p className="textDetails">
             {props.description}
            </p>
          </div>
        </div>
      </div>
  </div>
    
  )
}

export default Projects