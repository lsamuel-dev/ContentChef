import './ContactForm.css';

function ContactForm() {
  return (
    <form className="contact-form">
      <div className="form-group">
        <label>First Name:</label>
        <input type="text" name="firstName" />
      </div>
      
      <div className="form-group">
        <label>Last Name:</label>
        <input type="text" name="lastName" />
      </div>
      
      <div className="form-group">
        <label>Email:</label>
        <input type="email" name="email" />
      </div>
      
      <div className="form-group">
        <label>Comments:</label>
        <textarea name="comments"></textarea>
      </div>
      
      <button type="submit">Send Message</button>
    </form>
  );
}

export default ContactForm;