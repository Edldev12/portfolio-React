import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Edlawit Tsegaye</h2>

        <p className="footer-subtitle">
          Software Engineering Student | Full-Stack Developer
        </p>

        <div className="footer-links">
          <a
            href="https://github.com/Edldev12"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <span className="dot">•</span>
          <a
            href="https://www.linkedin.com/in/edlawit-tsegaye-teshome-a94474421/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <span className="dot">•</span>
          <a href="mailto:edlawitdigital3@gmail.com">Email</a>
        </div>

        <p className="footer-copyright">
          © {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;