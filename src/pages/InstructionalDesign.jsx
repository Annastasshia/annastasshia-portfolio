import { projectGroups } from "../data/projectGroups";
import ProjectCard from "../components/ProjectCard";

export default function InstructionalDesign() {
  const group = projectGroups.find(
    (g) => g.id === "instructional-design"
  );

  return (
    <main className="container section">
      <h1>{group.title}</h1>
      <p>{group.subtitle}</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 14,
          marginTop: 24,
        }}
      >
        {group.items.map((p) => (
          <ProjectCard
            key={p.slug}
            project={{ ...p, link: `/work/${p.slug}` }}
          />
        ))}
      </div>
    </main>
  );
}
