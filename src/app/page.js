export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      <nav
        style={{
          backgroundColor: "#136f16",
          padding: "20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h1 style={{ color: "white" }}>Nalis Pharma</h1>

        <div style={{ display: "flex", gap: "20px" }}>
          <a href="/" style={{ color: "white" }}>
            Home
          </a>

          <a
            href="https://wa.me/2348161427836?text=Hello%20Nalis%20Pharma,%20I%20need%20assistance."
            target="_blank"
            style={{ color: "white", textDecoration: "none" }}
>
            Contact
          </a>
        </div>
      </nav>

      <div style={{ padding: "50px", textAlign: "center" }}>
        <h1 style={{ fontSize: "50px", color: "#136f16" }}>
          Welcome to Nalis Pharma
        </h1>

        <p>Pharmaceutical Ordering System</p>

        <a
          href="/products"
          style={{
            backgroundColor: "#136f16",
            color: "white",
            padding: "15px 25px",
            borderRadius: "8px",
            display: "inline-block",
            marginTop: "20px",
            textDecoration: "none",
          }}
        >
          View Products
        </a>
      </div>

    </main>
  );
}