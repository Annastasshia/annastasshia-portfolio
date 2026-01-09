import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Work from "./sections/Work";
import WorkIndex from "./pages/WorkIndex";
import ProjectPage from "./pages/ProjectPage";

function Home() {
  return (
    <main className="container section">
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
  );
}

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<WorkIndex />} />
        <Route path="/work/:slug" element={<ProjectPage />} />
      </Routes>
    </div>
  );
}
