import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import styles from "./ProjectPage.module.css";

function Section({ title, children }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      {children}
    </section>
  );
}

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className={styles.page}>
        <h1>Project not found</h1>
        <p>
          <Link to="/work" className="link">
            Back to Work
          </Link>
        </p>
      </main>
    );
  }

  const s = project.sections;
  const isGallery = project.type === "gallery";

  return (
    <main className={styles.page}>
      <div className={styles.back}>
        <Link to="/work" className="link">
          ← Back to Work
        </Link>
      </div>

      <h1>{project.title}</h1>
      <p>{project.summary}</p>

      <div className={styles.meta}>
        <span className={styles.metaItem}>Role: {project.role}</span>
        <span className={styles.metaItem}>Timeline: {project.timeline}</span>
      </div>

      <Section title="Overview">
        <p>{s.overview}</p>
      </Section>

      <Section title="Responsibilities">
        <ul className={styles.list}>
          {s.responsibilities.map((item) => (
            <li key={item} className={styles.listItem}>
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Process">
        <ol className={styles.list}>
          {s.process.map((step) => (
            <li key={step} className={styles.listItem}>
              {step}
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Results">
        <ul className={styles.list}>
          {s.results.map((item) => (
            <li key={item} className={styles.listItem}>
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Tools">
        <p className={styles.tools}>{s.tools.join(" · ")}</p>
      </Section>

      {project.links?.length ? (
        <Section title="Links">
          <ul className={styles.list}>
            {project.links.map((l) => (
              <li key={l.url}>
                <a className="link" href={l.url} target="_blank" rel="noreferrer">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      {isGallery ? (
        <Section title="Samples">
          <div className={styles.gallery}>
            {project.samples.map((item) => (
              <article key={item.id} className={styles.sample}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.sampleImage}
                />

                <div>
                  <h3 className={styles.sampleTitle}>{item.title}</h3>
                  <p className={styles.sampleBlurb}>{item.blurb}</p>
                  <a
                    className="link"
                    href={item.ctaUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.ctaLabel}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </Section>
      ) : null}
    </main>
  );
}
