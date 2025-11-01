import React from "react";
import { MdSpeed, MdRouter, MdTv, MdMovie, MdHeadset } from "react-icons/md";

export default function WhyProduct() {
  const features = [
    { icon: <MdSpeed size={32} />, text: "Upto 1Gbps Speed & Unlimited data" },
    { icon: <MdRouter size={32} />, text: "Free router & installation" },
    { icon: <MdTv size={32} />, text: "950+ Live TV Channels" },
    { icon: <MdMovie size={32} />, text: "30+ OTT Platforms" },
    { icon: <MdHeadset size={32} />, text: "24/7 Customer Support" },
  ];

  return (
    <section
      style={{
        paddingTop: "6rem",
        paddingBottom: "6rem",
        backgroundColor: "#ffffff",
        fontFamily: "'Inter', sans-serif",
        color: "#1e293b",
        textAlign: "center",
        position: "relative",
      }}
    >
      {/* Background Circle Design */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "10%",
          width: "150px",
          height: "150px",
          background: "linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%)",
          borderRadius: "50%",
          opacity: 0.6,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "10%",
          width: "100px",
          height: "100px",
          background: "linear-gradient(135deg, #e0e0e0 0%, #d0d0d0 100%)",
          borderRadius: "50%",
          opacity: 0.4,
        }}
      />

      <div
        style={{
          maxWidth: "80rem",
          margin: "0 auto",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Main Container with Gray Background */}
        <div
          style={{
            backgroundColor: "#f8fafc",
            borderRadius: "28px",
            padding: "3rem",
            boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
            border: "1px solid #e2e8f0",
            display: "block",
          }}
        >
          {/* Heading with Correct Coimbatore Text Effect */}
          <h2
            style={{
              fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
              fontWeight: 800,
              marginBottom: "3rem",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            Why Skylink Broadband in{" "}
            <span
              style={{
                display: "inline-block",
              }}
            >
              {"Coimbatore".split("").map((letter, index) => (
                <span
                  key={index}
                  style={{
                    color: index >= 0 && index <= 7 ? "#dc2626" : "#1e293b",
                    display: "inline-block",
                    animation: index >= 0 && index <= 7 ? `jump 2s infinite ${index * 0.1}s` : "none",
                    fontWeight: 800,
                  }}
                >
                  {letter}
                </span>
              ))}
            </span>
          </h2>

          {/* Features Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
              justifyItems: "center",
            }}
          >
            {features.map((feature, index) => {
              const isSupport = feature.text && feature.text.toLowerCase().includes('24/7');
              return (
                <div
                  key={index}
                  style={{
                    backgroundColor: "white",
                    padding: "2rem 1.5rem",
                    borderRadius: "1.2rem",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                    display: "flex",
                    alignItems: "center",
                    transition: "all 0.3s ease",
                    cursor: "default",
                    border: "1px solid #f1f5f9",
                    minHeight: "100px",
                    width: "100%",
                    maxWidth: isSupport ? "280px" : "100%",
                    gridColumn: isSupport ? "1 / -1" : "auto",
                    justifySelf: "center",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow = "0 12px 28px rgba(0,0,0,0.15)";
                    e.currentTarget.style.borderColor = "#fecaca";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.08)";
                    e.currentTarget.style.borderColor = "#f1f5f9";
                  }}
                >
                  <div
                    style={{
                      minWidth: "60px",
                      minHeight: "60px",
                      borderRadius: "50%",
                      backgroundColor: "#dc2626",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontWeight: 700,
                      marginRight: "1.5rem",
                      boxShadow: "0 4px 12px rgba(220, 38, 38, 0.3)",
                    }}
                  >
                    {feature.icon}
                  </div>
                  <span
                    style={{
                      fontSize: "1.5rem",
                      lineHeight: 1.5,
                      textAlign: "left",
                      fontWeight: 600,
                      color: "#374151",
                      flex: 1,
                    }}
                  >
                    {feature.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes jump {
            0%, 100% {
              transform: translateY(0);
              color: #dc2626;
            }
            25% {
              transform: translateY(-8px);
              color: #ef4444;
            }
            50% {
              transform: translateY(0);
              color: #dc2626;
            }
            75% {
              transform: translateY(-4px);
              color: #f87171;
            }
          }
        `}
      </style>
    </section>
  );
}