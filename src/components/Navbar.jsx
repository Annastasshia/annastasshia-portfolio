import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a className={styles.brand} href="#">
          Annastasshia Ames
        </a>

        <nav className={styles.nav}>
          <a className={styles.link} href="#work">
            Work
          </a>
          <a className={styles.link} href="#about">
            About
          </a>
          <a className={styles.link} href="#contact">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
