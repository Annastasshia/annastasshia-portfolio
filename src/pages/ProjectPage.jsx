import { Link, useParams } from "react-router-dom";
import styles from "./ProjectPage.module.css";
import { projectGroups } from "../data/projectGroups";

export default function ProjectPage() {
  const { slug } = useParams();

  const project =
    projectGroups.flatMap((g) => g.items).find((p) => p.slug === slug) || null;

  if (!project) {
    return (
      <main className={styles.page}>
        <p>Project not found.</p>
        <Link to="/work">Back to Work</Link>
      </main>
    );
  }

  // Placeholder image (swap later per-project)
  const previewImage =
    project.image ||
    "https://picsum.photos/seed/portfolio-project/1200/1500";

  return (
    <main className={styles.page}>
      <Link className={styles.backLink} to="/work">
        ← Back to Work
      </Link>

      <div className={styles.layout}>
        {/* LEFT: content */}
        <article className={styles.content}>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.summary}>{project.summary}</p>

          <div className={styles.metaRow}>
            {project.role && <span className={styles.pill}>Role: {project.role}</span>}
            {project.timeline && (
              <span className={styles.pill}>Timeline: {project.timeline}</span>
            )}
          </div>

          {project.sections?.overview && (
            <>
              <h2 className={styles.h2}>Overview</h2>
              <p className={styles.p}>{project.sections.overview}</p>
            </>
          )}

          {project.sections?.responsibilities?.length ? (
            <>
              <h2 className={styles.h2}>Responsibilities</h2>
              <ul className={styles.list}>
                {project.sections.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
          ) : null}

          {project.sections?.process?.length ? (
            <>
              <h2 className={styles.h2}>Process</h2>
              <ol className={styles.list}>
                {project.sections.process.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </>
          ) : null}

          {project.sections?.results?.length ? (
            <>
              <h2 className={styles.h2}>Results</h2>
              <ul className={styles.list}>
                {project.sections.results.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
          ) : null}

          {project.sections?.tools?.length ? (
            <>
              <h2 className={styles.h2}>Tools</h2>
              <p className={styles.p}>{project.sections.tools.join(" · ")}</p>
            </>
          ) : null}
        </article>

        {/* RIGHT: image + CTA */}
        <aside className={styles.side}>
          <img
            className={styles.preview}
            src={previewImage}
            alt={`${project.title} preview`}
            loading="lazy"
          />

          <a
            className={styles.viewMore}
            href={project.assetUrl || "#"}
            target={project.assetUrl ? "_blank" : undefined}
            rel={project.assetUrl ? "noreferrer" : undefined}
            aria-disabled={!project.assetUrl}
          >
            View more
          </a>
        </aside>
      </div>
    </main>
  );
}
