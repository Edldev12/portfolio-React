import "./Skills.css";

function Skills() {
  return (
    <section id="skills" className="section">
      <h2>My Skills</h2>

      <p className="skills-intro">
        Technologies and tools I use while learning and building
        software projects.
      </p>

      <div className="skills-container">

        {/* Programming Languages */}
        <div className="skill-card">
          <div className="skill-icon">💻</div>

          <h3>Programming Languages</h3>

          <ul>
            <li>🐍 Python</li>
            <li>☕ Java</li>
            <li>🟨 JavaScript</li>
            <li>📘 C++</li>
          </ul>
        </div>

        {/* Frontend Development */}
        <div className="skill-card">
          <div className="skill-icon">🌐</div>

          <h3>Frontend Development</h3>

          <ul>
            <li>🔹 HTML</li>
            <li>🎨 CSS</li>
            <li>⚡ JavaScript</li>
            <li>⚛️ React</li>
            <li>▲ Next.js (Learning)</li>
          </ul>
        </div>

        {/* Backend Development */}
        <div className="skill-card">
          <div className="skill-icon">⚙️</div>

          <h3>Backend Development</h3>

          <ul>
            <li>🍃 Spring Boot (Learning)</li>
            <li>🐍 Python Backend</li>
          </ul>
        </div>

        {/* Database */}
        <div className="skill-card">
          <div className="skill-icon">🗄️</div>

          <h3>Database</h3>

          <ul>
            <li>🐬 MySQL</li>
          </ul>
        </div>

        {/* Development Tools */}
        <div className="skill-card">
          <div className="skill-icon">🛠️</div>

          <h3>Development Tools</h3>

          <ul>
            <li>🔧 Git</li>
            <li>🐙 GitHub</li>
            <li>💻 VS Code</li>
            <li>☕ IntelliJ IDEA</li>
            <li>📮 Postman</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Skills;
