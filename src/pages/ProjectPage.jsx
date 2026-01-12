import { Link, useParams } from "react-router-dom";
import styles from "./ProjectPage.module.css";
import { projectGroups } from "../data/projectGroups";

export default function ProjectPage() {
  const { slug } = useParams();

  const group = projectGroups.find((g) =>
    g.items.some((p) => p.slug === slug)
  );

  const project = group?.items.find((p) => p.slug === slug) || null;

  if (!project) {
    return (
      <main className={styles.page}>
        <p>Project not found.</p>
        <Link to="/work">Back to Work</Link>
      </main>
    );
  }

  const isInstructional = group?.accent === "instructional";

  const previewImage =
    project.image || "https://picsum.photos/seed/portfolio-project/1200/1500";

  return (
    <main className={styles.page}>
      <Link className={styles.backLink} to="/work">
        ← Back to Work
      </Link>

      <div className={styles.layout}>
        {/* LEFT: content */}
        <article className={styles.content}>
          <header className={styles.header}>
            <h1 className={styles.title}>{project.title}</h1>
            <p className={styles.summary}>{project.summary}</p>

            <div className={styles.metaRow}>
              {project.role && (
                <span className={`${styles.pill} ${isInstructional ? styles.pillId : styles.pillWeb}`}>
                  Role: {project.role}
                </span>
              )}
              {project.timeline && (
                <span className={`${styles.pill} ${isInstructional ? styles.pillId : styles.pillWeb}`}>
                  Timeline: {project.timeline}
                </span>
              )}
              {project.tags?.length ? (
                <span className={styles.tagLine}>
                  {project.tags.slice(0, 4).join(" · ")}
                </span>
              ) : null}
            </div>
          </header>

          {project.sections?.overview && (
            <section className={styles.section}>
              <h2 className={styles.h2}>Overview</h2>
              <p className={styles.p}>{project.sections.overview}</p>
            </section>
          )}

          {project.sections?.responsibilities?.length ? (
            <section className={styles.section}>
              <h2 className={styles.h2}>Responsibilities</h2>
              <ul className={styles.list}>
                {project.sections.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ) : null}

          {project.sections?.process?.length ? (
            <section className={styles.section}>
              <h2 className={styles.h2}>Process</h2>
              <ol className={styles.list}>
                {project.sections.process.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </section>
          ) : null}

          {project.sections?.results?.length ? (
            <section className={styles.section}>
              <h2 className={styles.h2}>Results</h2>
              <ul className={styles.list}>
                {project.sections.results.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ) : null}

          {project.sections?.tools?.length ? (
            <section className={styles.section}>
              <h2 className={styles.h2}>Tools</h2>
              <p className={styles.p}>{project.sections.tools.join(" · ")}</p>
            </section>
          ) : null}
        </article>

        {/* RIGHT: image + CTA */}
        <aside className={styles.side}>
          <div
            className={`${styles.previewWrap} ${
              isInstructional ? styles.glowId : styles.glowWeb
            }`}
          >
            <img
              className={styles.preview}
              src={previewImage}
              alt={`${project.title} preview`}
              loading="lazy"
            />
          </div>

          <a
            className={`${styles.viewMore} ${isInstructional ? styles.btnId : styles.btnWeb}`}
            href={project.assetUrl || "#"}
            target={project.assetUrl ? "_blank" : undefined}
            rel={project.assetUrl ? "noreferrer" : undefined}
            aria-disabled={!project.assetUrl}
          >
            View more →
          </a>

          <p className={styles.assetHint}>
            Deck, documentation, or repository link (opens in a new tab once added).
          </p>
        </aside>
      </div>
    </main>
  );
}
