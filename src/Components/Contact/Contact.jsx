import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, form submission logic would go here
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container reveal">
        <div className="contact-wrapper">
          <h2 className="contact-title">Get In <span className="text-red">Touch</span></h2>
          <p className="contact-subtitle">
            Interested in going electric? Let us help you find your perfect EV.
          </p>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input 
                type="text" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name" 
                required 
                className="form-input"
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email Address" 
                required 
                className="form-input"
              />
            </div>
            <div className="form-group">
              <textarea 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message" 
                rows="5" 
                required 
                className="form-input form-textarea"
              ></textarea>
            </div>
            <button type="submit" className="btn-submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
