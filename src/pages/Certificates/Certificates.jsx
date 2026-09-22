import "./Certificates.css";

function Certificates() {
  return (
    <section id="certificates" className="section certificates-section">
      <h2>Certificates</h2>

      <div className="certificate-container">

        {/* Data Analysis Certificate */}
        <div className="certificate-card">
          <img
            src="/certeficate/data-analysis-fundamentals.png"
            alt="Data Analysis Fundamentals Certificate"
          />

          <h3>Data Analysis Fundamentals</h3>

          <p>
            Verified Certificate of Nanodegree Program Completion.
          </p>

          <p>
            <strong>Issued by:</strong> Great College Ethiopia
          </p>

          <a
            href="https://www.udacity.com/certificate/e/388e795c-c2b4-11ef-b901-f73095e56685"
            target="_blank"
            rel="noopener noreferrer"
            className="certificate-btn"
          >
            📄 View Certificate
          </a>
        </div>

        {/* C++ Certificate */}
        <div className="certificate-card">
          <img
            src="/certeficate/cpp-certificate.jpg"
            alt="C++ Programming Certificate"
          />

          <h3>C++ Programming Certificate</h3>

          <p>
            Successfully completed the{" "}
            <strong>C++ Certification Course</strong> from{" "}
            <strong>Programming Hub</strong>, demonstrating knowledge
            of C++ programming, object-oriented programming, and
            problem-solving fundamentals.
          </p>

          <a
            href="/certeficate/Edlawit Tsegaye_C++.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="certificate-btn"
          >
            📄 View Certificate
          </a>
        </div>

        {/* Current Certifications */}
        <div className="certificate-card current-certificates">
          <div className="certificate-placeholder">
            📚
          </div>

          <h3>Currently Learning</h3>

          <p>
            I am currently working on developing my software
            engineering skills and completing professional
            certifications.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Certificates;
