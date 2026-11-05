
import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch(
        "https://formspree.io/f/xzeeoylj",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(
          result.errors?.map((error) => error.message).join(", ") ||
          "Something went wrong. Please try again."
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "Unable to send your message. Please check your internet connection."
      );
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <h2>Contact Me</h2>

      <p className="contact-intro">
        If you would like to work with me or discuss a project, feel free to contact me.
      </p>

      <div className="contact-container">
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

        <div className="contact-form-wrapper">
          {status === "success" ? (
            <div className="success-message">
              <p>✅ Thank you! Your message has been sent successfully.</p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="submit-btn"
              >
                Send Another Message
              </button>
            </div>
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
                />
              </div>

              {status === "error" && (
                <p className="error-message" role="alert">
                  ❌ {errorMessage}
                </p>
              )}

              <button
                type="submit"
                className="submit-btn"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;