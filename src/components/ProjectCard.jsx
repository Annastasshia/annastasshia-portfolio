import { Link } from "react-router-dom";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project, variant = "webdesign" }) {
  const isInstructional = variant === "instructional";

  return (
    <Link
      to={project.link}
      className={`${styles.card} ${isInstructional ? styles.id : styles.web}`}
      aria-label={`View project: ${project.title}`}
    >
      <div className={styles.top}>
        <h3 className={styles.title}>{project.title}</h3>
        <span className={styles.meta}>
          {project.timeline ? project.timeline : ""}
        </span>
      </div>

      <p className={styles.summary}>{project.summary}</p>

      {project.tags?.length ? (
        <div className={styles.tags} aria-label="Project tags">
          {project.tags.slice(0, 3).map((t) => (
            <span
              key={t}
              className={`${styles.tag} ${isInstructional ? styles.tagId : styles.tagWeb}`}
            >
              {t}
            </span>
          ))}
        </div>
      ) : null}

      <div className={styles.footer}>
        <span className={`${styles.cta} ${isInstructional ? styles.ctaId : styles.ctaWeb}`}>
          View case study →
        </span>
      </div>
    </Link>
  );
}
