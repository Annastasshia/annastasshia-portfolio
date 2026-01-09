import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link className={styles.brand} to="/">
          Annastasshia Ames
        </Link>

        <nav className={styles.nav}>
          <div className={styles.dropdown}>
            <Link className={styles.link} to="/work">
              Work
            </Link>
            <div className={styles.menu}>
              {projects.map((p) => (
                <Link key={p.slug} className={styles.menuItem} to={`/work/${p.slug}`}>
                  {p.title}
                </Link>
              ))}
            </div>
          </div>

          <a className={styles.link} href="/#about">About</a>
          <a className={styles.link} href="/#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
