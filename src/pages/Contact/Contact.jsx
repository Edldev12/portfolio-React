import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <h2>Contact Me</h2>

      <p className="contact-intro">
        If you would like to work with me or discuss a project,
        feel free to contact me.
      </p>

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
    </section>
  );
}

export default Contact;
