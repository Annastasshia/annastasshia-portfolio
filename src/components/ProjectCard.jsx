import { Link } from "react-router-dom";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project }) {
  const isInternal = project.link?.startsWith("/");

  const CardInner = (
    <>
      <div className={styles.header}>
        <h3 className={styles.title}>{project.title}</h3>
        <span className={styles.ext} aria-hidden="true">
          ↗
        </span>
      </div>

      <p className={styles.desc}>{project.description || project.summary}</p>

      <div className={styles.tags}>
        {project.tags.map((tag) => (
          <span key={tag} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
    </>
  );

  if (isInternal) {
    return (
      <Link className={styles.card} to={project.link}>
        {CardInner}
      </Link>
    );
  }

  return (
    <a className={styles.card} href={project.link} target="_blank" rel="noreferrer">
      {CardInner}
    </a>
  );
}
