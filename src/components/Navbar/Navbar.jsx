// Navbar.jsx

import { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { Bio } from "../../data/constants";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const handleLinkClick = (id) => {
    setMenuOpen(false);

    // Wait for the menu to close before scrolling
    setTimeout(() => {
      const element = document.getElementById(id);
      const yOffset = -100; // Adjust this value based on your navbar height
      const yPosition = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: yPosition, behavior: 'smooth' });
    }, 300); // Adjust timeout if necessary
  };

  const toggleMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.setAttribute('data-theme', darkMode ? 'light' : 'dark');
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={getImageUrl("nav/logo.svg")} alt="Logo" />
        <a className={styles.title} href="/">Avni Gupta</a>
      </div>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.svg")
              : getImageUrl("nav/menuIcon.svg")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}>
          <li><a href="#about" onClick={() => handleLinkClick('about')}>About</a></li>
          <li><a href="#skills" onClick={() => handleLinkClick('skills')}>Skills</a></li>
          <li><a href="#experience" onClick={() => handleLinkClick('experience')}>Experience</a></li>
          <li><a href="#projects" onClick={() => handleLinkClick('projects')}>Projects</a></li>
          <li><a href="#contact" onClick={() => handleLinkClick('contact')}>Contact</a></li>
        </ul>
        <div className={styles.socialLinks}>
          <a href={Bio.github} target="_blank" rel="noopener noreferrer">
            <img src={getImageUrl("nav/githubIcon.svg")} alt="GitHub" className={styles.socialIcon} />
          </a>
          <a href={Bio.linkedin} target="_blank" rel="noopener noreferrer">
            <img src={getImageUrl("nav/linkedinIcon.svg")} alt="LinkedIn" className={styles.socialIcon} />
          </a>
          <img
            className={styles.modeToggle}
            src={getImageUrl(darkMode ? "nav/lightModeIcon.svg" : "nav/darkModeIcon.svg")}
            alt="Toggle Mode"
            onClick={toggleMode}
          />
        </div>
      </div>
    </nav>
  );
};
