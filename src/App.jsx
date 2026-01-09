import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div style={{ fontFamily: "system-ui" }}>
      <Navbar />

      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 24px" }}>
        <section style={{ padding: "48px 0" }}>
          <h1 style={{ margin: 0, fontSize: 44 }}>Designer + Web Lead</h1>
          <p style={{ fontSize: 18, maxWidth: 720 }}>
            I build clean, fast websites and systems that scale—without “quick fixes”
            becoming permanent architecture.
          </p>
        </section>

        <section id="work" style={{ padding: "48px 0" }}>
          <h2>Work</h2>
          <p>Selected projects will go here next.</p>
        </section>

        <section id="about" style={{ padding: "48px 0" }}>
          <h2>About</h2>
          <p>Short bio and specialties will go here next.</p>
        </section>

        <section id="contact" style={{ padding: "48px 0" }}>
          <h2>Contact</h2>
          <p>Email + links will go here next.</p>
        </section>
      </main>
    </div>
  );
}

