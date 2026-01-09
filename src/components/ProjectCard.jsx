import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project }) {
  return (
    <a
      className={styles.card}
      href={project.link}
      target="_blank"
      rel="noreferrer"
    >
      <div className={styles.header}>
        <h3 className={styles.title}>{project.title}</h3>
        <span className={styles.ext} aria-hidden="true">
          ↗
        </span>
      </div>

      <p className={styles.desc}>{project.description}</p>

      <div className={styles.tags}>
        {project.tags.map((tag) => (
          <span key={tag} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}
