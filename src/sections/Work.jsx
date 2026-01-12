import { projectGroups } from "../data/projectGroups";
import ProjectCard from "../components/ProjectCard";

function Group({ title, subtitle, items }) {
  return (
    <div style={{ padding: "32px 0" }}>
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
            project={{
              ...p,
              link: `/work/${p.slug}`, // internal page for every card
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function Work() {
  const [instructional, webdesign] = projectGroups;

  return (
    <section id="work" style={{ padding: "48px 0" }}>
      <Group
        title={instructional.title}
        subtitle={instructional.subtitle}
        items={instructional.items}
      />
      <Group
        title={webdesign.title}
        subtitle={webdesign.subtitle}
        items={webdesign.items}
      />
    </section>
  );
}
