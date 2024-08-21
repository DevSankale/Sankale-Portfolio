import React from "react";

function Projects(props){


  const styles = {
    backgroundColor: "lightgray",
    color:"black"

  }
  return (

          
     
          <div className="imagecontainer" style={styles} >
        
              <p>{props.id}</p>
              <img src={props.projectCover}/>
              <h3 id="topicHead">
                {props.title}
              </h3>
              <a href={props.link}target="_blank" id="project-link">
              <img src="./images/icons8-external-link-64.png" className="linkimage"/>
              </a>
            
            <p className="textDetails">
             {props.description}
            </p>
          </div>
      
  
    
  )
}

export default Projects