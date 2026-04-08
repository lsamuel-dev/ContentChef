import React from "react";
import "./ContactForm.css";

function ContactForm() {
  // Student Note: Prevents page reload to handle form data via React
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <div className="contact-container">
      <h2 style={{ textAlign: "center", color: "#000" }}>CONTACT US</h2>
      {/* id="contact" added here so the Navbar link jumps to the form */}
      <form id="contact" className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name:</label>
          <input type="text" name="firstName" required />
        </div>

        <div className="form-group">
          <label>Last Name:</label>
          <input type="text" name="lastName" required />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" required />
        </div>

        <div className="form-group">
          <label>Comments:</label>
          <textarea name="comments" required></textarea>
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm;
