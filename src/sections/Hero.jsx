import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Intro">
      <p className={styles.kicker}>Web Design Manager • Instructional Design • Front-End Systems</p>

      <h1 className={styles.title}>Instructional Design & Front-End Web Lead</h1>

      <p className={styles.lede}>
        I build training programs, documentation platforms, and production-ready web systems
        that turn complex standards into repeatable, team-wide execution.
      </p>

      <p className={styles.support}>
        Training decks, enablement sites, WCAG compliance, and UI systems — I design to reduce
        friction and improve delivery.
      </p>

      <p className={styles.current}>
        <strong>Currently:</strong> Web Design Manager focused on instructional design, performance,
        accessibility, and scalable front-end systems.
      </p>

      <div className={styles.actions}>
        <a className={styles.primary} href="#work">
          View work
        </a>
        <a className={styles.secondary} href="#contact">
          Contact
        </a>
      </div>
    </section>
  );
}
