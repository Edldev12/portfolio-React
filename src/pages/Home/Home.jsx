import StarfieldVisual from "../../components/hero/StarfieldVisual";
import "./Home.css";

function Home() {
  return (
    <section id="home" className="hero">
      {/* Starfield canvas isolated to the Home section only */}
      <StarfieldVisual />

      <div className="hero-content">
        <div className="hero-text">
          <p className="welcome">Hi, I'm</p>
          <h1>
            <span> Edlawit </span>Tsegaye
          </h1>
          <h2>Software Engineering Student | Full-Stack Developer</h2>
          <p>
            Passionate about building responsive, modern web applications with clean architecture and interactive UI/UX experiences.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn">View Projects</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="src\assets\edlawit imag.jpg"
            alt="Edlawit Tsegaye"
            className="profile-photo"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;