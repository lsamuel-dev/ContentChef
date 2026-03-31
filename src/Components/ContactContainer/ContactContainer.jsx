import { useState } from 'react';
import './ContactContainer.css';

function ContactContainer() {
  // Requirement: Manage own state for form fields 
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    comments: ''
  });

  // Requirement: Controlled component logic 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert(`Thank you, ${formData.firstName}! The Chef has received your message.`);
    // Reset form after submission
    setFormData({ firstName: '', lastName: '', email: '', comments: '' });
  };

  return (
    <div className="contact-container">
      <h2>Contact the Chef</h2>
      <p>Have a question about your recipe? Send us a message!</p>
      
      <form className="contact-form" onSubmit={handleSubmit}>
        {/* Requirement: First Name Field [cite: 49] */}
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Requirement: Last Name Field [cite: 50] */}
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Requirement: Email Field [cite: 51] */}
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Requirement: Comments Field [cite: 52] */}
        <div className="form-group">
          <label>Comments:</label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </div>
  );
}

export default ContactContainer;