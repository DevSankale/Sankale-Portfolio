import React from "react";

function Footer(){
  return (
    <div className="footerContainer">
      <a href="#welcome" className="BacktoTop">Back to the Top.</a>
      <div className="footerinfo">
        <div>
          <h3>Mission</h3>
          <br></br>
          <p>As a passionate frontend developer, my mission is to create engaging, user-centric web experiences that seamlessly blend aesthetics and functionality. I strive to leverage my expertise in HTML, CSS, JavaScript, and React to build responsive and intuitive interfaces that not only meet client needs but also inspire and delight users. Through continuous learning and collaboration, I aim to contribute to innovative projects that push the boundaries of web development and enhance digital interactions</p>
        </div>
        <div>
          <h3>About</h3>
          <br></br>
          <p>A skilled web developer with a strong foundation in development technologies, I am passionate about creating dynamic and user-friendly web applications. Proficient in HTML, CSS, and JavaScript, as well as modern frameworks like React, I excel at translating design concepts into responsive and interactive interfaces. My problem-solving abilities and attention to detail allow me to troubleshoot efficiently and optimize performance. Additionally, my experience with version control systems like Git supports effective collaboration within teams, ensuring code integrity and smooth project workflows.

</p>
        </div>
        <div>
          
          
          <p><a href="#welcome" class="link">Home</a></p>
          <p><a href="#About" class="link">About</a></p>
          <p><a href="#Project" class="link">Projects</a></p>
         
        </div>
      </div>
      <div className="footer">
        <p>Let's Connect.</p>
        <div className="Contact" >
          <a href="https://www.instagram.com/sankaledev/" target="_blank"><ion-icon
              name="logo-instagram"></ion-icon></a>
          <a href="https://twitter.com/SankaleDev" target="_blank"><ion-icon name="logo-twitter">
            </ion-icon></a>
          <a href="https://www.linkedin.com/in/joseph-sankale-ab4380230/" target="_blank"><ion-icon
              name="logo-linkedin">
            </ion-icon></a>
          <a href="https://github.com/DevSankale" target="_blank"><ion-icon name="logo-github"></ion-icon></a>
        </div>
        <p>Sankaledev&copy;2023.</p>  
      </div>
    </div>
 
  )
}

export default Footer