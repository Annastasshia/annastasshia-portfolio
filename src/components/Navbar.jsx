import { NavLink, Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.brand}>
          Annastasshia Ames
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          {/* Work dropdown */}
          <div className={styles.dropdown}>
            <NavLink to="/work" className={styles.navLink}>
              Work
            </NavLink>

            <div className={styles.menu} role="menu" aria-label="Work categories">
              <Link to="/work/instructional-design" className={styles.menuItem} role="menuitem">
                Instructional Design + Enablement
              </Link>
              <Link to="/work/web-design" className={styles.menuItem} role="menuitem">
                Web Design + Product Execution
              </Link>
            </div>
          </div>

          {/* Page anchors remain */}
          <a className={styles.navLink} href="/#about">
            About
          </a>
          <a className={styles.navLink} href="/#contact">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
