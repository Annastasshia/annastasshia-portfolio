export default function Navbar() {
    return (
      <header style={{ borderBottom: "1px solid #e5e5e5" }}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "16px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ fontWeight: 700 }}>Annastasshia Ames</div>
          <nav style={{ display: "flex", gap: 16 }}>
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>
    );
  }
  