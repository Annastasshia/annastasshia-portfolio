import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

function Section({ title, children }) {
  return (
    <section style={{ padding: "32px 0" }}>
      <h2 style={{ marginBottom: 8 }}>{title}</h2>
      {children}
    </section>
  );
}

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="container section">
        <h1>Project not found</h1>
        <p>
          <Link to="/work" className="link">Back to Work</Link>
        </p>
      </main>
    );
  }

  const s = project.sections;

  return (
    <main className="container section">
      <p style={{ marginBottom: 12 }}>
        <Link to="/work" className="link">← Back to Work</Link>
      </p>

      <h1 style={{ marginBottom: 10 }}>{project.title}</h1>
      <p style={{ maxWidth: 820 }}>{project.summary}</p>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 14 }}>
        <span className="card" style={{ padding: "6px 10px", boxShadow: "none" }}>
          Role: {project.role}
        </span>
        <span className="card" style={{ padding: "6px 10px", boxShadow: "none" }}>
          Timeline: {project.timeline}
        </span>
      </div>

      <Section title="Overview">
        <p>{s.overview}</p>
      </Section>

      <Section title="Responsibilities">
        <ul>
          {s.responsibilities.map((item) => (
            <li key={item} style={{ marginBottom: 6 }}>
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Process">
        <ol>
          {s.process.map((step) => (
            <li key={step} style={{ marginBottom: 6 }}>
              {step}
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Results">
        <ul>
          {s.results.map((item) => (
            <li key={item} style={{ marginBottom: 6 }}>
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Tools">
        <p>{project.sections.tools.join(" · ")}</p>
      </Section>

      {project.links?.length ? (
        <Section title="Links">
          <ul>
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
    </main>
  );
}
