import React from "react";
import { MdSpeed, MdRouter, MdTv, MdMovie, MdHeadset } from "react-icons/md";

export default function WhyProduct() {
  const features = [
    { icon: <MdSpeed size={28} />, text: "Upto 1Gbps Speed & Unlimited data" },
    { icon: <MdRouter size={28} />, text: "Free router & installation" },
    { icon: <MdTv size={28} />, text: "950 TV Channels" },
    { icon: <MdMovie size={28} />, text: "30 OTT Platforms" },
    { icon: <MdHeadset size={28} />, text: "24/7 Customer Support" },
  ];

  return (
    <section
      style={{
        paddingTop: "5rem",
        paddingBottom: "5rem",
        backgroundColor: "#f1f5f9",
        fontFamily: "'Inter', sans-serif",
        color: "#1e293b",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: "64rem",
          margin: "0 auto",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
        }}
      >
        {/* Heading with gradient animated "Coimbatore" */}
        <h2
          style={{
            fontSize: "2.25rem",
            fontWeight: 700,
            marginBottom: "2.5rem",
            lineHeight: 1.2,
          }}
        >
          Why Skylink Broadband in{" "}
          <span
            style={{
              background:
                "linear-gradient(90deg, #3b82f6, #9333ea, #facc15, #3b82f6)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
              animation: "gradientSlide 3s linear infinite",
            }}
          >
            Coimbatore
          </span>
        </h2>

        {/* Features Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "white",
                padding: "1.5rem",
                borderRadius: "1rem",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                display: "flex",
                alignItems: "center",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "default",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.12)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
              }}
            >
              <div
                style={{
                  minWidth: "50px",
                  minHeight: "50px",
                  borderRadius: "50%",
                  backgroundColor: "#3b82f6",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: 700,
                  marginRight: "1rem",
                }}
              >
                {feature.icon}
              </div>
              <span
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.5,
                  textAlign: "left",
                }}
              >
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Gradient animation keyframes */}
      <style>
        {`
          @keyframes gradientSlide {
            0% { background-position: 0% 50%; }
            100% { background-position: 200% 50%; }
          }
        `}
      </style>
    </section>
  );
}
