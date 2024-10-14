import React from "react";

function Footer(){
  return (
    <div className="footerContainer">
      <a href="#welcome" className="BacktoTop">Back to the Top.</a>
      <div className="footerinfo">
        <div>
          <h3>Mission</h3>
          <br></br>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem suscipit quis, quod, natus quidem deleniti a sapiente numquam aspernatur placeat dicta pariatur reprehenderit voluptatem ab ipsum sit. Excepturi, tempora vero.</p>
        </div>
        <div>
          <h3>About</h3>
          <br></br>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nesciunt dicta cum inventore dolor, illum similique cupiditate iusto placeat suscipit assumenda excepturi esse delectus obcaecati doloribus quo nulla voluptas quas?</p>
        </div>
        <div>
          <h3>Links</h3>
          <br></br>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At accusantium ratione tempora vero optio minima animi ut corporis, nostrum minus cumque reprehenderit voluptas iste eum maxime ex est. Amet, quo!</p>
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