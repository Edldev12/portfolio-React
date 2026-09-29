import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Connect your backend API, EmailJS, or Formspree logic here
    console.log("Form Submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section contact-section">
      <h2>Contact Me</h2>

      <p className="contact-intro">
        If you would like to work with me or discuss a project, feel free to contact me.
      </p>

      <div className="contact-container">
        {/* Contact Links */}
        <div className="contact-info">
          <p>
            📧 <strong>Email:</strong>{" "}
            <a href="mailto:edlawitdigital3@gmail.com">
              edlawitdigital3@gmail.com
            </a>
          </p>

          <p>
            💻 <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/Edldev12"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/Edldev12
            </a>
          </p>

          <p>
            🔗 <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/edlawit-tsegaye-teshome-a94474421/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>
          </p>
        </div>

        {/* Contact Form */}
        <div className="contact-form-wrapper">
          {submitted ? (
            <p className="success-message">
              Thank you! Your message has been sent successfully.
            </p>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;