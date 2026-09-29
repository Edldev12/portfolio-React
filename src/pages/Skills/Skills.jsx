import { skills } from "../../data/skillsData";
import "./Skills.css";

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-heading">
        <span className="section-label">// MY SKILLS</span>

        <h2>
          Technologies I <span>Work With</span>
        </h2>

        <p>
          Technologies and tools I use to build modern,
          scalable, and user-focused applications.
        </p>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => {
          const IconComponent = skill.icon;

          return (
            <div className="skill-item" key={index}>
              {/* Skill name + percentage */}
              <div className="skill-header">
                <div className="skill-title">
                  <div
                    className="skill-icon"
                    style={{ color: skill.color }}
                  >
                    <IconComponent />
                  </div>

                  <span>{skill.name}</span>
                </div>

                <span className="skill-level">
                  {skill.level}%
                </span>
              </div>

              {/* Progress bar */}
              <div className="skill-progress">
                <div
                  className="skill-progress-bar"
                  style={{
                    width: `${skill.level}%`,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;