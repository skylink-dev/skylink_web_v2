import React, { useState, useEffect } from "react";

// Custom SVG Icons
const WifiIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 20h.01M8.5 16.5a5 5 0 017 0M5 13a10 10 0 0114 0M2 10a15 15 0 0120 0"
      stroke="#4f46e5"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const TvIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="2"
      y="7"
      width="20"
      height="13"
      rx="2"
      stroke="#4f46e5"
      strokeWidth="2"
    />
    <path
      d="M17 2l-5 5-5-5"
      stroke="#4f46e5"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
      stroke="#4f46e5"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const BuildingIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="4"
      y="2"
      width="16"
      height="20"
      rx="2"
      stroke="#4f46e5"
      strokeWidth="2"
    />
    <path
      d="M9 22V18h6v4M9 6h6M9 10h6M9 14h6"
      stroke="#4f46e5"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const ClockIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="10" stroke="#4f46e5" strokeWidth="2" />
    <path
      d="M12 6v6l4 2"
      stroke="#4f46e5"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const ShieldIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
      stroke="#4f46e5"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function SmartSection() {
  const [columns, setColumns] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      setColumns(window.innerWidth < 768 ? 1 : 2);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardStyle = {
    backgroundColor: "#fff",
    padding: "32px",
    borderRadius: "1rem",
    boxShadow: "0 10px 15px rgba(0,0,0,0.1)",
  };

  const buttonStyle = {
    backgroundColor: "#4f46e5",
    color: "#fff",
    padding: "12px 24px",
    borderRadius: "0.5rem",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  const featureStyle = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "12px",
  };

  return (
    <section style={{ backgroundColor: "#f9fafb", padding: "64px 16px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "700",
              marginBottom: "16px",
            }}
          >
            Smart Homes.{" "}
            <span style={{ color: "#4f46e5" }}>Smarter Businesses.</span>
          </h2>
          <p style={{ color: "#4b5563", maxWidth: "600px", margin: "0 auto" }}>
            Fast, reliable Skylink fibernet broadband for homes and businesses
            in Coimbatore.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gap: "48px",
          }}
        >
          {/* Homes Card */}
          <div style={cardStyle}>
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: "600",
                color: "#4f46e5",
                marginBottom: "16px",
              }}
            >
              For Homes
            </h3>
            <p style={{ color: "#4b5563", marginBottom: "16px" }}>
              Everything your family needs in one affordable plan.
            </p>

            <div style={{ marginBottom: "24px" }}>
              <div style={featureStyle}>
                <WifiIcon />
                <span>Ultra-fast Wi-Fi</span>
              </div>
              <div style={featureStyle}>
                <TvIcon />
                <span>TV + OTT</span>
              </div>
              <div style={featureStyle}>
                <PhoneIcon />
                <span>Voice Services</span>
              </div>
            </div>

            <button
              style={buttonStyle}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#4338ca")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#4f46e5")
              }
            >
              Check Availability
            </button>
          </div>

          {/* Businesses Card */}
          <div style={cardStyle}>
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: "600",
                color: "#4f46e5",
                marginBottom: "16px",
              }}
            >
              For Businesses
            </h3>
            <p style={{ color: "#4b5563", marginBottom: "16px" }}>
              Reliable internet for offices and operations.
            </p>

            <div style={{ marginBottom: "28px" }}>
              <div style={featureStyle}>
                <BuildingIcon />
                <span>Up to 1 Gbps</span>
              </div>
              <div style={featureStyle}>
                <ClockIcon />
                <span>24/7 Support</span>
              </div>
              <div style={featureStyle}>
                <ShieldIcon />
                <span>99.9% Reliability</span>
              </div>
            </div>

            <button
              style={buttonStyle}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#4338ca")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#4f46e5")
              }
            >
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
