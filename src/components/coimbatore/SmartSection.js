"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';

// Custom SVG Icons with red theme
const WifiIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 20h.01M8.5 16.5a5 5 0 017 0M5 13a10 10 0 0114 0M2 10a15 15 0 0120 0"
      stroke="#dc2626"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const TvIcon = () => (
  <svg
    width="24"
    height="24"
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
      stroke="#dc2626"
      strokeWidth="2"
    />
    <path
      d="M17 2l-5 5-5-5"
      stroke="#dc2626"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
      stroke="#dc2626"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const BuildingIcon = () => (
  <svg
    width="24"
    height="24"
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
      stroke="#dc2626"
      strokeWidth="2"
    />
    <path
      d="M9 22V18h6v4M9 6h6M9 10h6M9 14h6"
      stroke="#dc2626"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const ClockIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="10" stroke="#dc2626" strokeWidth="2" />
    <path
      d="M12 6v6l4 2"
      stroke="#dc2626"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const ShieldIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
      stroke="#dc2626"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function SmartSection() {
  const router = useRouter();
  const [columns, setColumns] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      setColumns(window.innerWidth < 768 ? 1 : 2);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2
            style={{
              fontSize: "clamp(2.8rem, 4vw, 3rem)",
              fontWeight: "700",
              marginBottom: "20px",
              color: "#1f2937",
              letterSpacing: "-0.02em",
            }}
          >
            Smart Homes.{" "}
            <span style={{ 
              color: "#dc2626",
              background: "linear-gradient(135deg, #dc2626, #ef4444)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>Smarter Businesses.</span>
          </h2>
          <p style={{ 
            color: "#6b7280", 
            maxWidth: "600px", 
            margin: "0 auto",
            fontSize: "1.6rem",
            lineHeight: "1.6",
          }}>
            Fast, reliable Skylink fibernet broadband for homes and businesses in Coimbatore.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gap: "40px",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {/* Homes Card */}
          <div style={{
            backgroundColor: "#fff",
            padding: "40px 32px",
            borderRadius: "20px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
            border: "1px solid #f3f4f6",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "translateY(-8px)";
            e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.12)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.08)";
          }}
          >
            <h3
              style={{
                fontSize: "2rem",
                fontWeight: "600",
                color: "#dc2626",
                marginBottom: "16px",
              }}
            >
              For Homes
            </h3>
            <p style={{ 
              color: "#6b7280", 
              marginBottom: "32px",
              fontSize: "1.5rem",
              lineHeight: "1.6",
            }}>
              Everything your family needs in one affordable plan.
            </p>

            <div style={{ marginBottom: "32px" }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginBottom: "20px",
                padding: "12px 16px",
                borderRadius: "10px",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#fef2f2";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
              >
                <div style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "#fef2f2",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#dc2626",
                }}>
                  <WifiIcon />
                </div>
                <span style={{ 
                  fontSize: "1.5rem", 
                  fontWeight: "600",
                  color: "#374151",
                }}>Ultra-fast Wi-Fi</span>
              </div>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginBottom: "20px",
                padding: "12px 16px",
                borderRadius: "10px",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#fef2f2";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
              >
                <div style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "#fef2f2",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#dc2626",
                }}>
                  <TvIcon />
                </div>
                <span style={{ 
                  fontSize: "1.5rem", 
                  fontWeight: "600",
                  color: "#374151",
                }}>TV + OTT</span>
              </div>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                padding: "12px 16px",
                borderRadius: "10px",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#fef2f2";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
              >
                <div style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "#fef2f2",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#dc2626",
                }}>
                  <PhoneIcon />
                </div>
                <span style={{ 
                  fontSize: "1.5rem", 
                  fontWeight: "600",
                  color: "#374151",
                }}>Voice Services</span>
              </div>
            </div>

            <button
              onClick={() => router.push('/internet')}
              style={{
                backgroundColor: "#dc2626",
                color: "#fff",
                padding: "16px 32px",
                borderRadius: "12px",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                fontWeight: "600",
                fontSize: "1.5rem",
                width: "100%",
                boxShadow: "0 4px 16px rgba(220, 38, 38, 0.3)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#b91c1c";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(220, 38, 38, 0.4)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "#dc2626";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(220, 38, 38, 0.3)";
              }}
            >
              Check Availability
            </button>
          </div>

          {/* Businesses Card */}
          <div style={{
            backgroundColor: "#fff",
            padding: "40px 32px",
            borderRadius: "20px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
            border: "1px solid #f3f4f6",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "translateY(-8px)";
            e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.12)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.08)";
          }}
          >
            <h3
              style={{
                fontSize: "2rem",
                fontWeight: "600",
                color: "#dc2626",
                marginBottom: "16px",
              }}
            >
              For Businesses
            </h3>
            <p style={{ 
              color: "#6b7280", 
              marginBottom: "32px",
              fontSize: "1.5rem",
              lineHeight: "1.6",
            }}>
              Reliable internet for offices and operations.
            </p>

            <div style={{ marginBottom: "32px" }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginBottom: "20px",
                padding: "12px 16px",
                borderRadius: "10px",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#fef2f2";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
              >
                <div style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "#fef2f2",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#dc2626",
                }}>
                  <BuildingIcon />
                </div>
                <span style={{ 
                  fontSize: "1.5rem", 
                  fontWeight: "600",
                  color: "#374151",
                }}>Up to 1 Gbps</span>
              </div>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginBottom: "20px",
                padding: "12px 16px",
                borderRadius: "10px",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#fef2f2";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
              >
                <div style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "#fef2f2",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#dc2626",
                }}>
                  <ClockIcon />
                </div>
                <span style={{ 
                  fontSize: "1.5rem", 
                  fontWeight: "600",
                  color: "#374151",
                }}>24/7 Support</span>
              </div>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                padding: "12px 16px",
                borderRadius: "10px",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#fef2f2";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
              >
                <div style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "#fef2f2",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#dc2626",
                }}>
                  <ShieldIcon />
                </div>
                <span style={{ 
                  fontSize: "1.5rem", 
                  fontWeight: "600",
                  color: "#374151",
                }}>99.9% Reliability</span>
              </div>
            </div>

            <button
              onClick={() => router.push('/contact-us')}
              style={{
                backgroundColor: "#dc2626",
                color: "#fff",
                padding: "16px 32px",
                borderRadius: "12px",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                fontWeight: "600",
                fontSize: "1.5rem",
                width: "100%",
                boxShadow: "0 4px 16px rgba(220, 38, 38, 0.3)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#b91c1c";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(220, 38, 38, 0.4)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "#dc2626";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(220, 38, 38, 0.3)";
              }}
            >
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}