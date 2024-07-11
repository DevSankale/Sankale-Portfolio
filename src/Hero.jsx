import React from "react";
import potrait from "./images/DSC_33634.jpg"

function Hero(){
  return (
  <div className="homepage js-homepage">
    <p id="welcome"> Welcome,</p>
    <div class="welcome-div">
        <div class="details">
          <h1>I <b class="name-intro">AM</b> SANKALE.</h1>
          <p>
          <h4>A Web Developer.</h4>
          </p>
        </div>
        <img src={potrait} alt="Potrait" id="pic1" /> 
     
    </div>
    
  </div>
  )
}

export default Hero