import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import styles from "./Work.module.css";

export default function Work() {
  const reduceMotion = useReducedMotion();

  const cardAnim = {
    rest: { y: 0 },
    hover: { y: reduceMotion ? 0 : -4 },
  };

  return (
    <section id="work" className={styles.section}>
      <h2 className={styles.heading}>Work</h2>

      <div className={styles.grid}>
        <motion.article
          className={`${styles.card} ${styles.instructional}`}
          initial="rest"
          whileHover="hover"
          animate="rest"
          variants={cardAnim}
        >
          <h3>Instructional Design + Enablement</h3>
          <p>
            I design training systems and documentation that help teams execute complex standards
            with clarity, consistency, and confidence.
          </p>
          <Link to="/work/instructional-design" className={styles.cta}>
            View instructional projects →
          </Link>
        </motion.article>

        <motion.article
          className={`${styles.card} ${styles.webdesign}`}
          initial="rest"
          whileHover="hover"
          animate="rest"
          variants={cardAnim}
        >
          <h3>Web Design + Product Execution</h3>
          <p>
            I design and build user-centered interfaces and systems that translate product requirements
            into scalable, production-ready solutions.
          </p>
          <Link to="/work/web-design" className={styles.cta}>
            View web design projects →
          </Link>
        </motion.article>
      </div>
    </section>
  );
}

