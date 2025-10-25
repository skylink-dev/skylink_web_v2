"use client";

import { useState } from "react";

const faqs = [
  {
    question:
      "What makes Skylink different from other broadband providers in Coimbatore?",
    answer:
      "Skylink isn't just another internet provider — we're a local network built in Coimbatore, for Coimbatore. With over 10 years of experience, we combine high-speed fibernet connectivity with personal, city-based support — ensuring faster resolutions, better uptime, and a service that truly understands your needs.",
  },
  {
    question: "Do Skylink broadband plans include OTT and TV channels?",
    answer:
      "Yes. Every Skylink plan comes bundled with OTT access and TV channels — so you don't need to pay extra for cables, setup boxes, or streaming apps. One connection covers it all.",
  },
  {
    question: "Are Skylink connections suitable for businesses too?",
    answer:
      "Absolutely. We offer customized broadband solutions with static IPs, SLA-backed uptime, and dedicated account support — designed for offices, retail outlets, and enterprises across Coimbatore.",
  },
  {
    question: "How fast and reliable is Skylink's internet in Coimbatore?",
    answer:
      "Our advanced fibernet network delivers speeds up to 1 Gbps with 99.9% uptime, ensuring smooth streaming, remote work, and uninterrupted business operations — even during peak hours.",
  },
  {
    question: "Is installation and router free with Skylink?",
    answer:
      "Yes, we provide free installation, router, and setup with all new connections in Coimbatore — with no hidden charges or activation fees.",
  },
  {
    question: "How do I get a new Skylink connection?",
    answer:
      "Simply check connection availability in your area or request a free callback. Our Coimbatore team will help you choose a plan and schedule installation — usually within 24 hours.",
  },
];

// Custom SVG chevron icon component
const ChevronIcon = ({ isOpen }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      transition: "transform 0.3s ease",
      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
    }}
  >
    <path
      d="M7 10L12 15L17 10"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function SkylinkFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: "80px 20px",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "60px",
          }}
        >
          <h1
            style={{
              fontSize: "48px",
              fontWeight: "700",
              color: "#ffffff",
              marginBottom: "16px",
              letterSpacing: "-0.02em",
            }}
          >
            Frequently Asked Questions
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "rgba(255, 255, 255, 0.9)",
              fontWeight: "400",
            }}
          >
            Find quick answers about Skylink's fibernet broadband plans & prices
            in Coimbatore
          </p>
        </div>

        {/* FAQ Items */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={{
                background: "rgba(255, 255, 255, 0.95)",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 8px 16px rgba(0, 0, 0, 0.15)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 4px 6px rgba(0, 0, 0, 0.1)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Question */}
              <div
                onClick={() => toggleFAQ(index)}
                style={{
                  padding: "24px 28px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#1a202c",
                    margin: "0",
                    lineHeight: "1.5",
                  }}
                >
                  {faq.question}
                </h3>
                <div
                  style={{
                    flexShrink: 0,
                    color: "#667eea",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ChevronIcon isOpen={openIndex === index} />
                </div>
              </div>

              {/* Answer */}
              <div
                style={{
                  maxHeight: openIndex === index ? "500px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.4s ease, padding 0.4s ease",
                  padding: openIndex === index ? "0 28px 24px 28px" : "0 28px",
                }}
              >
                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: "1.7",
                    color: "#4a5568",
                    margin: "0",
                    paddingTop: "4px",
                  }}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div
          style={{
            textAlign: "center",
            marginTop: "60px",
          }}
        >
          <p
            style={{
              fontSize: "16px",
              color: "rgba(255, 255, 255, 0.9)",
              marginBottom: "20px",
            }}
          >
            Still have questions?
          </p>
          <button
            style={{
              padding: "14px 32px",
              fontSize: "16px",
              fontWeight: "600",
              color: "#667eea",
              background: "#ffffff",
              border: "none",
              borderRadius: "12px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 6px 16px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 4px 12px rgba(0, 0, 0, 0.15)";
            }}
          >
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}
