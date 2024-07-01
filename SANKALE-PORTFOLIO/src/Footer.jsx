import React from "react";

function Footer(){
  return (
  <div className="footer">
        <div className="form">
        <form/>
          <label for="name">Name</label><br/>
          <input type="text" id="name" name="name" required/><br/>
          <label for="email">Email</label><br/>
          <input type="email" id="email" name="email" required/><br/><br/>
          <textarea placeholder="Message Me..." required></textarea><br/>
          <button type="submit" class="js-button">Submit</button>
        
        </div>
        <p>Lets Connect.</p>
        <div class="Contact" id="Contact">
          <a href="https://www.instagram.com/sankaledev/" target="_blank"><ion-icon
              name="logo-instagram"></ion-icon></a>
          <a href="https://twitter.com/SankaleDev" target="_blank"><ion-icon name="logo-twitter">
            </ion-icon></a>
          <a href="https://www.linkedin.com/in/joseph-sankale-ab4380230/" target="_blank"><ion-icon
              name="logo-linkedin">
            </ion-icon></a>
          <a href="https://github.com/DevSankale" target="_blank"><ion-icon name="logo-github"></ion-icon></a>
        </div>
        <p>Sankaledev&copy2023.</p>  
  </div>
  )
}

export default Footer