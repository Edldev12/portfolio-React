import "./Home.css";
import profileImage from "../../assets/edlawit imag.jpg";
function Home() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">

        {/* Left Side */}
        <div className="hero-text">

          <p className="welcome">
            👋 Welcome to my portfolio
          </p>

          <h1>
            Hi, I'm <span>Edlawit Tsegaye</span>
          </h1>

          <h2>Software Engineering Student</h2>

          <p>
            I build modern web applications and enjoy solving
            real-world problems through software development.
          </p>

          <p>
            Currently learning Python, Java, JavaScript,
            Spring Boot, React, and MySQL.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="btn">
              🚀 View Projects
            </a>

            <a
              href="/Edlawit Tsegaye CV.pdf"
              download
              className="btn"
            >
              📄 Download CV
            </a>

          </div>

        </div>

        {/* Right Side */}
        <div className="hero-image">

          <img
            src={profileImage}
            alt="Edlawit Tsegaye"
            className="profile-photo"
          />

        </div>

      </div>
    </section>
  );
}

export default Home;
