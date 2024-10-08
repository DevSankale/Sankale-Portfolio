import React from "react";

function Footer(){
  return (
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
  )
}

export default Footer