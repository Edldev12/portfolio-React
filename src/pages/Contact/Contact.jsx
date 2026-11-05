
import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [autoReplyFailed, setAutoReplyFailed] = useState(false);

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
    setAutoReplyFailed(false);

    try {
      // 1. Send the visitor's message to Formspree
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

      if (!response.ok) {
        throw new Error(
          result.errors?.map((error) => error.message).join(", ") ||
          "Unable to submit your message."
        );
      }

      // 2. Send an automatic thank-you email using EmailJS
      try {
        await emailjs.send(
          "service_rs1at1u",
          "template_ym0qxz4",
          {
            to_email: formData.email,
            from_name: formData.name,
          },
          "bE8cEcdj4XXhngHkA"
        );
      } catch (error) {
        console.error("EmailJS error:", error);
        setAutoReplyFailed(true);
      }

      // 3. Reset the form
      setStatus("success");

      setFormData({
        name: "",
        email: "",
        message: "",
      });

    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error.message ||
        "Unable to send your message. Please try again."
      );
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <h2>Contact Me</h2>

      <p className="contact-intro">
        If you would like to work with me or discuss a project,
        feel free to contact me.
      </p>

      <div className="contact-container">

        {/* Contact Information */}
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

          {status === "success" ? (
            <div className="success-message" role="status">
              <p>
                ✅ Thank you! Your message has been sent successfully.
              </p>

              {autoReplyFailed && (
                <p className="error-message">
                  Your message reached me, but the automatic
                  confirmation email could not be sent.
                </p>
              )}

              {!autoReplyFailed && (
                <p>
                  📧 A confirmation email has been sent to your inbox.
                </p>
              )}

              <button
                type="button"
                className="submit-btn"
                onClick={() => {
                  setStatus("idle");
                  setAutoReplyFailed(false);
                }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  autoComplete="name"
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
                  autoComplete="email"
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
                {status === "sending"
                  ? "Sending..."
                  : "Send Message"}
              </button>
            </form>
          )}

        </div>
      </div>
    </section>
  );
}

export default Contact;
