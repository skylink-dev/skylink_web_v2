"use client";
import { useState } from 'react';
import ContactForm from '../contact/ContactForm';

export default function HeroBanner() {
  const [showContactForm, setShowContactForm] = useState(false);
  return (
    <section
      style={{
        position: "relative",
        background: "linear-gradient(135deg, #fef2f2 0%, #fecaca 100%)",
        color: "#1e293b",
        paddingTop: "10rem",
        paddingBottom: "10rem",
        overflow: "hidden",
        textAlign: "center",
        fontFamily: "'Inter', sans-serif",
        marginTop: "2rem",
      }}
    >
      <style>
        {`
          @keyframes pulseText {
            0%, 100% { 
              color: #dc2626; 
              transform: scale(1); 
              text-shadow: 0 4px 12px rgba(220, 38, 38, 0.2);
            }
            50% { 
              color: #ef4444; 
              transform: scale(1.02); 
              text-shadow: 0 6px 20px rgba(239, 68, 68, 0.3);
            }
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }

          h1 {
            font-size: clamp(3.5rem, 5vw, 4.5rem);
            line-height: 1.15;
          }

          p {
            font-size: clamp(1.4rem, 2.2vw, 1.6rem);
            line-height: 1.8;
          }

          button {
            font-size: clamp(1.5rem, 2vw, 1.4rem);
            padding: clamp(1rem, 1.5vw, 1.2rem) clamp(2.5rem, 4vw, 3rem);
          }
        `}
      </style>

      {/* Background Elements */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "100px",
          height: "100px",
          background: "linear-gradient(135deg, #fecaca 0%, #f87171 100%)",
          borderRadius: "50%",
          opacity: 0.6,
          animation: "float 6s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          right: "8%",
          width: "80px",
          height: "80px",
          background: "linear-gradient(135deg, #f87171 0%, #ef4444 100%)",
          borderRadius: "50%",
          opacity: 0.4,
          animation: "float 4s ease-in-out infinite reverse",
        }}
      />

      <div
        style={{
          position: "relative",
          maxWidth: "75rem",
          margin: "0 auto",
          paddingLeft: "2rem",
          paddingRight: "2rem",
        }}
      >
        <h1
          style={{
            fontWeight: 800,
            marginBottom: "2rem",
            color: "#0f172a",
            letterSpacing: "-0.02em",
          }}
        >
          Coimbatore's Premium{" "}
          <span
            style={{
              display: "inline-block",
              animation: "pulseText 2.5s infinite",
              background: "linear-gradient(135deg, #dc2626, #ef4444)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
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
            maxWidth: "48rem",
            marginLeft: "auto",
            marginRight: "auto",
            fontSize: "1.5rem",
            fontWeight: 500,
          }}
        >
          Experience lightning-fast, reliable, and unlimited internet for homes
          and businesses in Coimbatore. Stay connected with seamless performance
          and unmatched support.
        </p>

        {/* Stats Section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2rem",
            marginBottom: "3rem",
            maxWidth: "50rem",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {[
            { number: "1Gbps", label: "Max Speed" },
            { number: "99.9%", label: "Uptime" },
            { number: "24/7", label: "Support" },
            { number: "0", label: "Hidden Costs" },
          ].map((stat, index) => (
            <div
              key={index}
              style={{
                textAlign: "center",
                padding: "1.5rem",
                background: "rgba(255, 255, 255, 0.8)",
                borderRadius: "1rem",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(254, 202, 202, 0.3)",
              }}
            >
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: 700,
                  color: "#dc2626",
                  marginBottom: "0.5rem",
                }}
              >
                {stat.number}
              </div>
              <div style={{ color: "#64748b", fontWeight: 600 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <button
          style={{
            backgroundColor: "#dc2626",
            color: "white",
            fontWeight: 700,
            borderRadius: "9999px",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 8px 25px rgba(220, 38, 38, 0.3)",
            transition: "all 0.3s ease",
            position: "relative",
            overflow: "hidden",
          }}
          onClick={() => setShowContactForm(true)}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "#b91c1c";
            e.currentTarget.style.transform = "translateY(-3px)";
            e.currentTarget.style.boxShadow = "0 12px 30px rgba(220, 38, 38, 0.4)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "#dc2626";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 8px 25px rgba(220, 38, 38, 0.3)";
          }}
        >
          Request a Free Callback
          <div
            style={{
              position: "absolute",
              top: "-50%",
              left: "-50%",
              width: "200%",
              height: "200%",
              background: "linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)",
              transform: "rotate(45deg)",
              transition: "all 0.3s ease",
            }}
          />
        </button>
      </div>
      {showContactForm && <ContactForm onClose={() => setShowContactForm(false)} />}
    </section>
  );
}