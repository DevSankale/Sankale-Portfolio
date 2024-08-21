import React from "react";


export default function Form (){


  const [formData,setFormData] = React.useState({

        firstName:"",
        lastName:"",
        email:"",
        message:""

  })
  console.log(formData)
  function handleChange(event){
    return (
        setFormData((prevFormData)=>{
          return({
            ...prevFormData,
            [event.target.name]:event.target.value
          })
        })
    )
  }

  function handleSubmit(event){
          event.preventDefault()
          console.log(formData)
  }
  return (

    <div>
        <form className="form" id="Contact" onSubmit={handleSubmit}>
          <label htmlFor="fisrtName">First Name
          </label>
            <br/>
          <input 
                type="text" 
                id="firstName"
                name="firstName" 
                required
                onChange={handleChange}
                value={formData.firstName}
          />
          <br/>
          <label htmlFor="lastName">Last Name</label>
          <br/>
          <input 
                type="text" 
                id="lastName" 
                name="lastName" 
                required
                onChange={handleChange}
                value={formData.lastName}
          /><br/>
          <label htmlFor="email">
            Email
            </label><br/>
          <input 
                type="email" 
                id="email" 
                name="email" 
                required
                onChange={handleChange}
                value={formData.email}
          />
          <br/><br/>
          <textarea
                placeholder="Message Me..." 
                required
                onChange={handleChange}
                name="message"
                value={formData.message}
          />
          <br/>
          <button 
                type="submit" 
                className="js-button">
                  SUBMIT
          </button>
          </form>
     </div>

  )
}