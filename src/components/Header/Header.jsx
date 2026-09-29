import { useState } from "react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu when a navigation link is clicked
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <h1 className="logo">
          <a href="#home">Edldev.</a>
        </h1>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Navigation Menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="#home" onClick={handleLinkClick}>Home</a>
          </li>
          <li>
            <a href="#about" onClick={handleLinkClick}>About</a>
          </li>
          <li>
            <a href="#skills" onClick={handleLinkClick}>Skills</a>
          </li>
          <li>
            <a href="#projects" onClick={handleLinkClick}>Projects</a>
          </li>
          <li>
            <a href="#certificates" onClick={handleLinkClick}>Certificates</a>
          </li>
          <li>
            <a href="#contact" onClick={handleLinkClick}>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;