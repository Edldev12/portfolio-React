// src/components/skills/Skills.jsx

import { skills } from "../../data/skillsData";
import "./Skills.css";

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">
        <span>//</span> MY SKILLS
      </h2>

      <div className="skills-grid">
        {skills.map((skill, index) => {
          const IconComponent = skill.icon;

          return (
            <div key={index} className="skill-card">

              {/* Icon */}
              <div
                className="skill-icon"
                style={{ "--icon-hover-color": skill.color }}
              >
                <IconComponent />
              </div>

              {/* Skill name + percentage */}
              <div className="skill-header">
                <p className="skill-name">{skill.name}</p>
                <span className="skill-level">{skill.level}%</span>
              </div>

              {/* Progress bar */}
              <div className="skill-progress">
                <div
                  className="skill-progress-bar"
                  style={{
                    width: `${skill.level}%`,
                    backgroundColor: skill.color,
                    boxShadow: `0 0 10px ${skill.color}`,
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