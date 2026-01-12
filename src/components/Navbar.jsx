import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function getInitialTheme() {
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;

  // fall back to system preference
  const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
  return prefersDark ? "dark" : "light";
}

export default function Navbar() {
  const [theme, setTheme] = useState(() => getInitialTheme());

  useEffect(() => {
    const root = document.documentElement; // <html>
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const isDark = theme === "dark";

  function toggleTheme() {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }

  return (
    <header className={styles.header}>
      {/* NEW: top row */}
      <div className={styles.topRow}>
        <div className={styles.topLeft}>
          {/* optional: put a short status line here later */}
        </div>

        <button
  type="button"
  className={`${styles.themeToggle} ${isDark ? styles.isDark : styles.isLight}`}
  onClick={toggleTheme}
  aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
  aria-pressed={isDark}
>
<span className={styles.label} aria-hidden="true">
  <span className={styles.labelLight}>Light</span>
  <span className={styles.labelDark}>Dark</span>
</span>


  <span className={styles.knob} aria-hidden="true">
    <span className={styles.icon}>{isDark ? "🌙" : "☀️"}</span>
  </span>
</button>

      </div>

      {/* existing nav row */}
      <nav className={styles.nav}>
        <Link className={styles.brand} to="/">
          Annastasshia R. Ames
        </Link>

        <div className={styles.links}>
          {/* keep your current NavLinks */}
          <NavLink className={styles.link} to="/work">
            Work
          </NavLink>

          {/* example: keep any dropdown you already built here */}

          <NavLink className={styles.link} to="/about">
            About
          </NavLink>

          <a className={styles.link} href="#contact">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
