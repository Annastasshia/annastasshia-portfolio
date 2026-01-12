import { projectGroups } from "../data/projectGroups";
import ProjectCard from "../components/ProjectCard";

function Group({ title, subtitle, items }) {
  return (
    <section style={{ padding: "32px 0" }}>
      <h2 style={{ marginBottom: 8 }}>{title}</h2>
      <p style={{ maxWidth: 820 }}>{subtitle}</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 14,
          marginTop: 16,
        }}
      >
        {items.map((p) => (
          <ProjectCard
            key={p.slug}
            project={{ ...p, link: `/work/${p.slug}` }}
          />
        ))}
      </div>
    </section>
  );
}

export default function WorkIndex() {
  return (
    <main className="container section">
      <h1>Work</h1>
      <p>Two specialties, six projects, one consistent template.</p>

      {projectGroups.map((g) => (
        <Group
          key={g.id}
          title={g.title}
          subtitle={g.subtitle}
          items={g.items}
        />
      ))}
    </main>
  );
}
