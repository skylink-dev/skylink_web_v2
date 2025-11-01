"use client";
import Image from "next/image";

export default function TrustedPartners() {
  const logos = [
    "/assets/ABT.png",
    "/assets/amex alloys.png",
    "/assets/annapoorna.png",
    "/assets/emerald.png",
    "/assets/haribhavanam.png",
    "/assets/hoglund.png",
    "/assets/infinite.png",
    "/assets/INNOBOON.png",
    "/assets/kanmalai.png",
    "/assets/kpr college.png",
    "/assets/ksg-college-logo.png",
    "/assets/mobi.png",
    "/assets/pack and back.png",
    "/assets/prithivi.png",
    "/assets/prominanace.png",
    "/assets/rivigo.png",
    "/assets/snow man.png",
    "/assets/sns college of technologt.png",
    "/assets/vserve business.png",
    "/assets/wavicle.png",
  ];

  return (
    <section style={{
      width: "100%",
      backgroundColor: "#ffffff",
      padding: "5rem 0",
      fontFamily: "Inter, sans-serif",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background Elements */}
      <div style={{
        position: "absolute",
        top: "20%",
        left: "5%",
        width: "80px",
        height: "80px",
        background: "linear-gradient(135deg, #fef2f2 0%, #fecaca 100%)",
        borderRadius: "50%",
        opacity: 0.3,
      }}></div>
      <div style={{
        position: "absolute",
        bottom: "30%",
        right: "5%",
        width: "60px",
        height: "60px",
        background: "linear-gradient(135deg, #fecaca 0%, #f87171 100%)",
        borderRadius: "50%",
        opacity: 0.2,
      }}></div>

      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 2rem",
        textAlign: "center",
      }}>
        {/* Header Section */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={{
            fontSize: "clamp(4rem, 3vw, 2.5rem)",
            fontWeight: 700,
            color: "#111827",
            marginBottom: "1rem",
            letterSpacing: "-0.02em",
          }}>
            Trusted by{" "}
            <span style={{
              color: "#dc2626",
              background: "linear-gradient(135deg, #dc2626, #ef4444)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>4000+</span>{" "}
            Partners
          </h2>
          <p style={{
            color: "#6b7280",
            fontSize: "1.8rem",
            maxWidth: "500px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}>
            Collaborating with industry leaders across Coimbatore for reliable connectivity solutions
          </p>
        </div>

        {/* Logo Slider Container */}
        <div style={{
          position: "relative",
          overflow: "hidden",
          padding: "2rem 0",
        }}>
          {/* Gradient Overlays */}
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "100px",
            background: "linear-gradient(90deg, #ffffff 0%, transparent 100%)",
            zIndex: 2,
          }}></div>
          <div style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "100px",
            background: "linear-gradient(270deg, #ffffff 0%, transparent 100%)",
            zIndex: 2,
          }}></div>

          {/* First Slider */}
          <div style={{
            display: "flex",
            gap: "3rem",
            animation: "scroll 40s linear infinite",
            marginBottom: "2rem",
          }}>
            {[...logos].map((logo, index) => (
              <div
                key={index}
                style={{
                  flexShrink: 0,
                  width: "140px",
                  height: "80px",
                  position: "relative",
                  opacity: 1,
                  transition: "all 0.3s ease",
                  padding: "0.5rem",
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "scale(1.08)";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.12)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.06)";
                }}
              >
                <Image
                  src={logo}
                  alt="Partner Logo"
                  width={130}
                  height={72}
                  style={{ 
                    objectFit: "contain",
                  }}
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
            ))}
          </div>

          {/* Second Slider (Reverse) */}
          <div style={{
            display: "flex",
            gap: "3rem",
            animation: "scrollReverse 35s linear infinite",
          }}>
            {[...logos].reverse().map((logo, index) => (
              <div
                key={index}
                style={{
                  flexShrink: 0,
                  width: "140px",
                  height: "80px",
                  position: "relative",
                  opacity: 1,
                  transition: "all 0.3s ease",
                  padding: "0.5rem",
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "scale(1.08)";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.12)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.06)";
                }}
              >
                <Image
                  src={logo}
                  alt="Partner Logo"
                  width={130}
                  height={72}
                  style={{ 
                    objectFit: "contain",
                  }}
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-140px * 10 - 3rem * 10));
          }
        }
        @keyframes scrollReverse {
          0% {
            transform: translateX(calc(-140px * 10 - 3rem * 10));
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}