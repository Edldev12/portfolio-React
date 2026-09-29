import StarfieldVisual from "../../components/hero/StarfieldVisual";
import "./Home.css";

function Home() {
  return (
    <section id="home" className="hero">
      <StarfieldVisual />

      <div className="hero-content">
        {/* Left Side: Text Content */}
        <div className="hero-text">
          <p className="welcome">// DESIGN . CODE . CREATE .</p>
          <h1>
            <span>EDLAWIT</span> TSEGAYE
          </h1>
          <h2>Software Engineering Student | Full-Stack Developer</h2>
          <p>
            Passionate about building responsive, modern web applications with clean architecture and interactive UI/UX experiences.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn">View Projects &rarr;</a>
            <a href="#contact" className="btn btn-outline">Let's Connect</a>
          </div>
        </div>

        {/* Diagonal Glowing Line Divider */}
        <div className="hero-diagonal-divider"></div>

        {/* Right Side: Futuristic Image Frame */}
        <div className="hero-image-wrapper">
          <div className="image-frame-glow">
            <img
              src="src\assets\photo.png"
              alt="Edlawit Tsegaye"
              className="profile-photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;