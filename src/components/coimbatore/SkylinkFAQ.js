"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What makes Skylink different from other broadband providers in Coimbatore?",
    answer: "Skylink isn't just another internet provider — we're a local network built in Coimbatore, for Coimbatore. With over 10 years of experience, we combine high-speed fibernet connectivity with personal, city-based support — ensuring faster resolutions, better uptime, and a service that truly understands your needs."
  },
  {
    question: "Do Skylink broadband plans include OTT and TV channels?",
    answer: "Yes. Every Skylink plan comes bundled with OTT access and TV channels — so you don't need to pay extra for cables, setup boxes, or streaming apps. One connection covers it all."
  },
  {
    question: "Are Skylink connections suitable for businesses too?",
    answer: "Absolutely. We offer customized broadband solutions with static IPs, SLA-backed uptime, and dedicated account support — designed for offices, retail outlets, and enterprises across Coimbatore."
  },
  {
    question: "How fast and reliable is Skylink's internet in Coimbatore?",
    answer: "Our advanced fibernet network delivers speeds up to 1 Gbps with 99.9% uptime, ensuring smooth streaming, remote work, and uninterrupted business operations — even during peak hours."
  },
  {
    question: "Is installation and router free with Skylink?",
    answer: "Yes, we provide free installation, router, and setup with all new connections in Coimbatore — with no hidden charges or activation fees."
  },
  {
    question: "How do I get a new Skylink connection?",
    answer: "Simply check connection availability in your area or request a free callback. Our Coimbatore team will help you choose a plan and schedule installation — usually within 24 hours."
  }
];

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
        background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
        padding: "60px 20px",
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Pattern */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at 20% 80%, rgba(31, 41, 55, 0.03) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(31, 41, 55, 0.03) 0%, transparent 50%)`,
        }}
      />

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(3rem, 6vw, 4rem)",
              fontWeight: "800",
              color: "#1f2937",
              marginBottom: "24px",
              letterSpacing: "-0.02em",
              textShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
            }}
          >
            Frequently Asked Questions
          </h1>
          <p
            style={{
              fontSize: "1.5rem",
              color: "#64748b",
              fontWeight: "400",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
          >
            Find quick answers about Skylink's fibernet broadband plans & prices in Coimbatore
          </p>
        </div>

        {/* FAQ Items */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginBottom: "60px",
          }}
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={{
                background: "rgba(255, 255, 255, 0.95)",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s ease",
                cursor: "pointer",
                border: "1px solid rgba(220, 38, 38, 0.1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(0, 0, 0, 0.15)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.borderColor = "rgba(220, 38, 38, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.1)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(220, 38, 38, 0.1)";
              }}
            >
              {/* Question */}
              <div
                onClick={() => toggleFAQ(index)}
                style={{
                  padding: "28px 32px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "24px",
                  background: openIndex === index ? "linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)" : "white",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.35rem",
                    fontWeight: "600",
                    color: "#1a202c",
                    margin: "0",
                    lineHeight: "1.6",
                    flex: 1,
                  }}
                >
                  {faq.question}
                </h3>
                <div
                  style={{
                    flexShrink: 0,
                    color: "#dc2626",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "rgba(220, 38, 38, 0.1)",
                    transition: "all 0.3s ease",
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
                  padding: openIndex === index ? "0 32px 28px 32px" : "0 32px",
                  background: "white",
                }}
              >
                <p
                  style={{
                    fontSize: "1.2rem",
                    lineHeight: "1.7",
                    color: "#4a5568",
                    margin: "0",
                    paddingTop: "12px",
                  }}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div
          style={{
            background: "rgba(255, 255, 255, 0.95)",
            borderRadius: "20px",
            padding: "40px",
            textAlign: "center",
            marginBottom: "40px",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3
            style={{
              fontSize: "2.2rem",
              fontWeight: "700",
              color: "#1a202c",
              marginBottom: "16px",
            }}
          >
            Still Can't Find Your Answer?
          </h3>
          <p
            style={{
              fontSize: "1.4rem",
              color: "#4a5568",
              marginBottom: "24px",
              lineHeight: "1.6",
            }}
          >
            Our dedicated support team is here to help you with any questions about our services.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "20px",
              marginBottom: "32px",
            }}
          >
            {[
              { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
</svg>
, label: "24/7 Support", value: "+91 99441-99445" },
              { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
</svg>
, label: "Email", value: "info@skylink.net.in" },
              { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
, label: "Response Time", value: "< 30 mins" },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  textAlign: "center",
                  padding: "20px",
                  background: "#f8fafc",
                  borderRadius: "12px",
                  border: "1px solid #e2e8f0",
                }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "8px" }}>{item.icon}</div>
                <div style={{ fontWeight: "600", color: "#334155", marginBottom: "4px", fontSize: "1.8rem" }}>
                  {item.label}
                </div>
                <div style={{ color: "#64748b", fontWeight: "500", fontSize: "1.5rem" }}>{item.value}</div>
              </div>
            ))}
          </div>

          {/* Footer CTA */}
          <button
            onClick={() => window.location.href = 'tel:+919944199445'}
            style={{
              padding: "16px 40px",
              fontSize: "1.125rem",
              fontWeight: "600",
              color: "white",
              background: "linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)",
              border: "none",
              borderRadius: "12px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 8px 25px rgba(220, 38, 38, 0.3)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 12px 30px rgba(220, 38, 38, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 25px rgba(220, 38, 38, 0.3)";
            }}
          >
            Contact Support Now
          </button>
        </div>
      </div>
    </div>
  );
}