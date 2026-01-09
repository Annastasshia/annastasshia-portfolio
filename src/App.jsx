import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Work from "./sections/Work";


export default function App() {
  return (
    <div style={{ fontFamily: "system-ui" }}>
      <Navbar />

      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 24px" }}>
        <Hero />

        <Work />

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
