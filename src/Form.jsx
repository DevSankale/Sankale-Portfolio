import React from "react";

export default function Form() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  function handleChange(event) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value
    }));
  }

  function handleSubmit(event) {
    console.log(formData);
    // You can perform additional actions here if needed
  }

  return (
    <div>
      <form
        className="form"
        action="https://formsubmit.co/sankalejoseph@gmail.com"
        method="POST" 
        id="Contact"
        onSubmit={handleSubmit}
      >
        <label htmlFor="firstName">First Name</label>
        <br />
        <input
          type="text"
          id="firstName"
          name="firstName"
          required
          onChange={handleChange}
          value={formData.firstName}
        />
        <br />
        <label htmlFor="lastName">Last Name</label>
        <br />
        <input
          type="text"
          id="lastName"
          name="lastName"
          required
          onChange={handleChange}
          value={formData.lastName}
        />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          required
          onChange={handleChange}
          value={formData.email}
        />
        <br /><br />
        <textarea
          placeholder="Message Me..."
          required
          onChange={handleChange}
          name="message"
          value={formData.message}
        />
        <br />
        
        {/* Optional hidden fields */}
        <input type="hidden" name="_subject" value="New Contact Form Submission" />
        
        {/* Corrected _next field */}
        <input type="hidden" name="_next" value="https://devsankale.github.io/Sankale-Portfolio/" />

        <button type="submit" className="js-button">
          SUBMIT
        </button>
      </form>
    </div>
  );
}