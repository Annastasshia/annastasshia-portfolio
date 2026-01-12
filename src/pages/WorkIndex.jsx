import { projectGroups } from "../data/projectGroups";
import ProjectCard from "../components/ProjectCard";
import styles from "./WorkIndex.module.css";

function Group({ title, subtitle, items, accent }) {
  const isInstructional = accent === "instructional";

  return (
    <section className={styles.group}>
      <div
        className={`${styles.groupWell} ${
          isInstructional ? styles.wellId : styles.wellWeb
        }`}
      >
        <header
          className={`${styles.groupHeader} ${
            isInstructional ? styles.headerId : styles.headerWeb
          }`}
        >
          <p className={styles.groupKicker}>Specialty</p>
          <h2 className={styles.groupTitle}>{title}</h2>
          <p className={styles.groupSubtitle}>{subtitle}</p>
        </header>

        <div className={styles.grid}>
          {items.map((p) => (
            <ProjectCard
              key={p.slug}
              project={{ ...p, link: `/work/${p.slug}` }}
              variant={isInstructional ? "instructional" : "webdesign"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function WorkIndex() {
  return (
    <main className={`container ${styles.page}`}>
      <header className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Work</h1>
        <p className={styles.pageSubtitle}>
          Two specialties, consistent structure, and outcomes you can scan fast.
        </p>
      </header>

      {projectGroups.map((g) => (
        <Group
          key={g.id}
          title={g.title}
          subtitle={g.subtitle}
          items={g.items}
          accent={g.accent}
        />
      ))}
    </main>
  );
}
