import { useState } from "react";
import "./Projects.css";
import AddisEatsImage from "../../assets/Addis_eats.png";
import EcommerceImage from "../../assets/ecommerc.png";
import comodoImage from "../../assets/comobo.png";
import calculatorImage from "../../assets/calculator.png";
import portfolioImage from "../../assets/portfolio.png";
import chatbotImage from "../../assets/chatbot.png";

function Projects() {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "🍽️ Addis Eats",
      image: AddisEatsImage,
      description:
        "A food-ordering React application for browsing dishes, searching by category, managing favorites and cart items, signing in, and placing orders.",
      technology: "React, Zustand, React Router, JavaScript",
      github: "https://github.com/Edldev12/addis_eats_react",
      demo: "https://addis-eats-react-beryl.vercel.app/",
    },
    {
      title: "🛒 Ecommerce Project",
      image: EcommerceImage,
      description:
        "A full-stack ecommerce application with product browsing, cart management, checkout, order history, and reorder functionality.",
      technology: "React, JavaScript, CSS",
      github: "https://github.com/Edldev12/Ecommerce-project",
      demo: "https://edlawit-ecommercevercelapp.vercel.app/",
    },
    {
      title: "🤖 AI Chatbot",
      image: chatbotImage,
      description:
        "A full-stack AI chatbot built with React, Vite, Node.js, and Express, featuring Groq-powered responses, user authentication, and session management.",
      technologies: [
        "React",
        "Vite",
        "JavaScript",
        "Node.js",
        "Express.js",
        "Groq API",
        "SQLite"
      ],
      github: "https://github.com/Edldev12/Chatbot",
      live: "https://chatbot-git-main-edlawit-tsegaye.vercel.app",
    },
    {
      title: "🍹 Comodo Juice House",
      image: comodoImage,
      description:
        "A responsive juice ordering app with menu browsing, search, filtering, favorites, cart, checkout, order history, dark mode, localStorage, and responsive design.",
      technology: "HTML, CSS, JavaScript, LocalStorage",
      github: "https://github.com/Edldev12/Comodo-juice-house",
      demo: "https://edldev12.github.io/Comodo-juice-house/",
    },
    {
      title: "🧮 Calculator Web App",
      image: calculatorImage,
      description:
        "A responsive calculator featuring dark/light mode, calculation history, keyboard support, and smooth animations.",
      technology: "HTML, CSS, JavaScript",
      github: "https://github.com/Edldev12/CodeAlpha_Calculator",
      demo: "https://edldev12.github.io/CodeAlpha_Calculator/",
    },

    {
      title: "🌐 Personal Portfolio",
      image: portfolioImage,
      description:
        "A responsive portfolio website showcasing my skills, education, projects, and contact information.",
      technology: "HTML, CSS, JavaScript",
      github: "https://github.com/Edldev12/CodeAlpha_Portfolio",
      demo: "https://edldev12.github.io/CodeAlpha_Portfolio/",
    },

    {
      title: "🏦 Addis Bank Management System",
      description:
        "A banking system that manages customer accounts, deposits, withdrawals, transfers, and transaction history.",
      technology: "Python, OOP, SOLID, Design Patterns",
      github: "https://github.com/Edldev12/AddisBank-System",
      demo: null,
    },

    {
      title: "🏥 Hospital Management System",
      description:
        "A full-stack hospital management system for managing patients, doctors, appointments, and medical records.",
      technology: "Spring Boot, MySQL, React, JWT",
      github: "https://github.com/Edldev12/hospital-management",
      demo: null,
    },

    {
      title: "📦 Product Data Management System",
      description:
        "A JavaScript application for fetching, displaying, searching, filtering, and analyzing product data.",
      technology: "JavaScript, HTML, CSS, DummyJSON API",
      github:
        "https://github.com/Edldev12/Product-Data-Management-System",
      demo: null,
    },

    {
      title: "🎓 Nexus Academy",
      description:
        "An education-focused web project built as part of my full-stack development learning journey.",
      technology: "React, JavaScript, CSS",
      github: null,
      demo: null,
    },
  ];

  const visibleProjects = showAll
    ? projects
    : projects.slice(0, 3);

  return (
    <section id="projects" className="section projects-section">
      <h2>My Projects</h2>

      <p className="projects-intro">
        Some of the projects I have built while learning and
        developing my software engineering skills.
      </p>

      <div className="projects-container">
        {visibleProjects.map((project, index) => (
          <div className="project-card" key={index}>
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
              />
            )}

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <p>
                <strong>Technology:</strong>{" "}
                {project.technology}
              </p>

              <div className="project-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All / Show Less Button */}
      <div className="projects-button-container">
        <button
          className="view-projects-btn"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "View All Projects"}
        </button>
      </div>
    </section>
  );
}

export default Projects;

