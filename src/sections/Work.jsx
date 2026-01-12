import { Link } from "react-router-dom";
import styles from "./Work.module.css";

export default function Work() {
  return (
    <section id="work" className={styles.section}>
      <header className={styles.header}>
        <h2 className={styles.title}>Work</h2>
        <p className={styles.subhead}>
          Two lanes, one standard: clear systems, measurable outcomes, and work that ships.
        </p>
      </header>

      <div className={styles.grid}>
        {/* Instructional Design */}
        <Link
          to="/work/instructional-design"
          className={`${styles.card} ${styles.cardId}`}
          aria-label="View Instructional Design and Enablement work"
        >
          <div className={styles.cardTop}>
            <h3 className={styles.cardTitle}>Instructional Design + Enablement</h3>
            <span className={styles.arrow} aria-hidden="true">
              ↗
            </span>
          </div>

          <p className={styles.cardBody}>
            Training decks, documentation sites, and rollout materials that help teams execute
            consistently—without turning standards into busywork.
          </p>

          <ul className={styles.bullets} aria-label="Highlights">
            <li>Core Web Vitals training + decision framework</li>
            <li>AI best practices program + companion documentation</li>
            <li>WCAG training + testable accessibility habits</li>
          </ul>

          <span className={`${styles.cta} ${styles.ctaId}`}>View instructional work →</span>
        </Link>

        {/* Web Design */}
        <Link
          to="/work/web-design"
          className={`${styles.card} ${styles.cardWeb}`}
          aria-label="View Web Design and Product Execution work"
        >
          <div className={styles.cardTop}>
            <h3 className={styles.cardTitle}>Web Design + Product Execution</h3>
            <span className={styles.arrow} aria-hidden="true">
              ↗
            </span>
          </div>

          <p className={styles.cardBody}>
            UX-driven UI systems and front-end builds that reduce friction, improve performance, and
            hold up in real production constraints.
          </p>

          <ul className={styles.bullets} aria-label="Highlights">
            <li>SeaEO UI redesign in Figma (user stories → execution)</li>
            <li>Glitched app (React Native + Node/Express backend)</li>
            <li>Visual design samples with consistent presentation</li>
          </ul>

          <span className={`${styles.cta} ${styles.ctaWeb}`}>View web design work →</span>
        </Link>
      </div>
    </section>
  );
}
