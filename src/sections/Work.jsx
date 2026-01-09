import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Work() {
  return (
    <section id="work" style={{ padding: "48px 0" }}>
      <h2 style={{ marginTop: 0 }}>Work</h2>
      <p style={{ color: "#444", maxWidth: 720 }}>
        A few selected projects. Each one focuses on outcomes, not just features.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 14,
          marginTop: 16,
        }}
      >
      {projects.map((p) => (
  <ProjectCard key={p.title} project={p} />
))}
      </div>
    </section>
  );
}
