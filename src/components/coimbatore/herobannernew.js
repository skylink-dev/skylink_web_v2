export default function HeroBanner() {
  return (
    <section
      style={{
        position: "relative",
        background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
        color: "#1e293b",
        paddingTop: "8rem",
        paddingBottom: "9rem",
        overflow: "hidden",
        textAlign: "center",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <style>
        {`
          @keyframes pulseText {
            0%, 100% { color: #e40386ff; transform: scale(.9); }
            50% { color: #d4159bff; transform: scale(.98); }
          }


        
          /* Responsive adjustments with bigger minimum font sizes */
          h1 {
        font-size: clamp(3.5rem, 5vw, 4.5rem);
            line-height: 1.15;
          }

          p {
  font-size: clamp(1.4rem, 2.2vw, 1.6rem);
            line-height: 1.8;
          }

          button {
font-size: clamp(1.25rem, 2vw, 1.4rem);
  padding: clamp(1rem, 1.5vw, 1.2rem) clamp(2.5rem, 4vw, 3rem);
          }
        `}
      </style>

      <div
        style={{
          position: "relative",
          maxWidth: "60rem",
          margin: "0 auto",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
        }}
      >
        <h1
          style={{ fontWeight: 800, marginBottom: "1.8rem", color: "#0f172a" }}
        >
          Coimbatore’s Premium{" "}
          <span
            style={{
              display: "inline-block",
              animation: "pulseText 2.5s infinite",
            }}
          >
            High-Speed Fibernet
          </span>{" "}
          Broadband
        </h1>

        <p
          style={{
            color: "#475569",
            marginBottom: "3rem",
            maxWidth: "42rem",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Experience lightning-fast, reliable, and unlimited internet for homes
          and businesses in Coimbatore. Stay connected with seamless performance
          and unmatched support.
        </p>

        <button
          style={{
            backgroundColor: "#1e40af",
            color: "white",
            fontWeight: 600,
            borderRadius: "9999px",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "#1d4ed8";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "#1e40af";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          Request a Free Callback
        </button>
      </div>
    </section>
  );
}
