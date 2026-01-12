import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <p className={styles.kicker}>
        Web Design Manager · Instructional Design · Front-End Systems
      </p>

      <h1 className={styles.title}>
        Instructional Design{" "}
        <span className={styles.accent}> &amp; Front-End Web Lead</span>
      </h1>

      <p className={styles.lede}>
        I build training programs, documentation platforms, and production-ready web systems that
        turn complex standards into repeatable, team-wide execution.
      </p>

      <p className={styles.support}>
        Training decks, enablement sites, WCAG compliance, and UI systems — I design to reduce
        friction and improve delivery.
      </p>

      {/* Pick ONE: styles.currentId (orange) OR styles.currentWeb (green) */}
      <div className={`${styles.current} ${styles.currentId}`}>
        <span className={styles.currentLabel}>Currently:</span>
        <span>
          Web Design Manager focused on instructional design, performance, accessibility, and
          scalable front-end systems.
        </span>
      </div>

      <div className={styles.actions}>
        <Link className={styles.primary} to="#contact">
          Contact
        </Link>
        <Link className={styles.secondary} to="/work">
          View work
        </Link>
      </div>
    </section>
  );
}
