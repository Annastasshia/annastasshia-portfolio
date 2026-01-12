import { motion, useReducedMotion } from "framer-motion";
import styles from "./Hero.module.css";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 12 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.5,
        delay: reduceMotion ? 0 : 0.06 * i,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className={styles.hero} aria-label="Intro">
      <motion.p
        className={styles.kicker}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0}
      >
        Web Design Manager • Instructional Design • Front-End Systems
      </motion.p>

      <motion.h1
        className={styles.title}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={1}
      >
        Instructional Design & Front-End Web Lead
      </motion.h1>

      <motion.p
        className={styles.lede}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={2}
      >
        I build training programs, documentation platforms, and production-ready web systems
        that turn complex standards into repeatable, team-wide execution.
      </motion.p>

      <motion.p
        className={styles.support}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={3}
      >
        Training decks, enablement sites, WCAG compliance, and UI systems — designed to reduce friction
        and improve delivery.
      </motion.p>

      {/* Proof signal row */}
      <motion.ul
        className={styles.proof}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={4}
      >
        <li>Core Web Vitals</li>
        <li>WCAG accessibility</li>
        <li>AI enablement</li>
        <li>Production front-end</li>
      </motion.ul>

      <motion.p
        className={styles.current}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={5}
      >
        <strong>Currently:</strong> Web Design Manager focused on instructional design, performance,
        accessibility, and scalable front-end systems.
      </motion.p>

      <motion.div
        className={styles.actions}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={6}
      >
        <a className={styles.primary} href="#work">
          View work
        </a>
        <a className={styles.secondary} href="#contact">
          Contact
        </a>
      </motion.div>
    </section>
  );
}
