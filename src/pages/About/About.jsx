import "./About.css";

function About() {
  return (
    <>
      {/* ================= ABOUT ================= */}

      <section id="about" className="section">
        <h2>About Me</h2>

        <div className="about-content">
          <p>
            I am a Software Engineering student at
            Adama Science and Technology University.
            I started my studies in 2024.
          </p>

          <p>
            I enjoy learning new technologies, solving
            programming problems, and building web applications.
          </p>

          <p>
            My goal is to become a professional Full-Stack
            Software Developer and contribute to impactful
            software projects.
          </p>
        </div>
      </section>

      {/* ================= STATS ================= */}

      <section id="stats" className="stats">
        <div className="stat-card">
          <h2>10+</h2>
          <p>Projects Completed</p>
        </div>

        <div className="stat-card">
          <h2>6+</h2>
          <p>Technologies</p>
        </div>

        <div className="stat-card">
          <h2>100+</h2>
          <p>Coding Problems</p>
        </div>

        <div className="stat-card">
          <h2>2+</h2>
          <p>Years Learning</p>
        </div>
      </section>
    </>
  );
}

export default About;
