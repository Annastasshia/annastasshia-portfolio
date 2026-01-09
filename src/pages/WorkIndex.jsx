import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function WorkIndex() {
  return (
    <main className="container section">
      <h1>Work</h1>
      <p>Selected projects with consistent structure for quick review.</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 14,
          marginTop: 16,
        }}
      >
        {projects.map((p) => (
          <ProjectCard
            key={p.slug}
            project={{ ...p, link: `/work/${p.slug}` }}
          />
        ))}
      </div>
    </main>
  );
}
