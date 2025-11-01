"use client";
import Image from "next/image";

export default function TvOttPartners() {
const ottLogos = [
"/assets/501 SUN TV.png",
"/assets/502 VIJAY TV .png",
"/assets/503 ZEE TAMIL.png",
"/assets/504 K TV.png",
"/assets/505 COLORS TAMIL.png",
"/assets/506 SUN LIFE.png",
"/assets/507 ADITHYA TV.png",
"/assets/508 DISCOVERY TAMIL.png",
"/assets/509 KALAIGNAR TV.png",
"/assets/510 VIJAY SUPER.png",
"/assets/511 MEGA TV.png",
"/assets/512 KALAIGNAR SIRIPOLLI.png",
"/assets/513 Jaya TV.png",
"/assets/514 RAJ TV.png",
"/assets/515 MEGA 24.png",
"/assets/516 RAJ NAGAICHUVAI.png",
"/assets/517 DD TAMIL.png",
"/assets/518 DD PUDHUCHERRY.png",
"/assets/519 POLIMER TV.png",
"/assets/520 MK TV.png",
"/assets/521 MK SIX.png",
"/assets/522 PEPPERS TV.png",
"/assets/523 VASANTH TV.png",
"/assets/524 VELICHAM TV.png",
"/assets/525 PUTHUYUGAM TV.png",
"/assets/526 MAKKAL TV.png",
"/assets/527 CAPTAIN TV.png",
"/assets/528 TAMILAN TV.png",
"/assets/529 IMAYAM TV.png",
"/assets/530 Moon TV.png",
"/assets/531 VENDHAR TV.png",
"/assets/532 THANTHI ONE.png",
"/assets/533 MATHIMUGAM TV.png",
"/assets/534 DD PUDHUCHERRY.png",
"/assets/535 Malar TV.png",
"/assets/536 Vaanvil TV.png",
"/assets/537 IBC Tamil.png",
"/assets/540 ZEE THIRAI.png",
"/assets/541 KALAIGNAR MURASU.png",
"/assets/542 JAYA MOVIES.png",
"/assets/543 RAJ DIGITAL PLUS.png",
"/assets/544 &FLIX.png",
"/assets/545 SONY PIX.png",
"/assets/550 SUN MUSIC.png",
"/assets/551 VIJAY TAKKAR.png",
"/assets/552 ISAI ARUVI.png",
"/assets/553 JAYA MAX.png",
"/assets/554 RAJ MUSIC.png",
"/assets/555 MEGA MUSIC.png",
"/assets/556 MK TUNES.png",
"/assets/557 TUNES 6.png",
"/assets/558 7S MUSIC.png",
"/assets/584 SUN NEWS.png",
"/assets/585 KALAIGNAR SEITHIGAL.png",
"/assets/586 NEWS 18 TAMIL NADU.png",
"/assets/587 JAYA PLUS.png",
"/assets/588 RAJ NEWS.png",
"/assets/589 POLIMER NEWS.png",
"/assets/590 THANTHI TV.png",
"/assets/591 PUTHIYA THALAIMURAI.png",
"/assets/592 NEW 7 TAMIL.png",
"/assets/593 CAPTAIN NEWS.png",
"/assets/594 NEWS TAMIL 24-7.png",
"/assets/595 NEWS J.png",
"/assets/596 MALAI MURASU.png",
"/assets/597 VELICHAM TV.png",
"/assets/598 Sathiyam TV.png",
"/assets/599 Win TV.png",
"/assets/600 1 Yes News.png",
"/assets/601 M Nadu.png",
"/assets/602 Tamil Janam.png",
"/assets/604 Star Sports 1 Tamil.png",
"/assets/605 Sony Sports Ten 4.png",
"/assets/611 NICK.png",
"/assets/612 POGO.png",
"/assets/613 SONY YAY.png",
"/assets/614 CARTOON NETWORK.png",
"/assets/615 DISCOVERY KIDS.png",
"/assets/616 CHUTTI TV.png",
"/assets/617 SONIC.png",
"/assets/618 ETV Balabharat SD.png",
"/assets/619 HUNGAMA.png",
"/assets/620 DISNEY CHANNEL.png",
"/assets/621 SUPER HUNGAMA.png",
"/assets/622 DISNEY JUNIOR.png",
"/assets/623 GUBBARE.png",
"/assets/629 NGC TAMIL.png",
"/assets/630 TRAVEL XP TAMIL.png",
"/assets/631 HISTORY TV 18 TAMIL.png",
"/assets/632 SONY BBC EARTH TAMIL.png",
"/assets/633 NGC WILD TAMIL.png",
"/assets/634 STAR LIFE.png",
"/assets/640 SVBC TTD.png",
"/assets/641 SVBC 2.png",
"/assets/642 SRI SANKARA TV.png",
"/assets/643 SAI TV.png",
"/assets/644 AASTHA TAMIL.png",
"/assets/645 MADHA TV.png",
"/assets/646 ANGEL TV HD.png",
"/assets/647 NAMBIKKAI TV.png",
"/assets/648 Jothi.png",
"/assets/649 Aaseervatham TV.png",
"/assets/651 Tamil Naptool.png",
"/assets/654 SUN TV HD.png",
"/assets/655 VIJAY TV HD.png",
"/assets/656 ZEE TAMIL HD.png",
"/assets/657 COLORS TAMIL HD.png",
"/assets/658 VIJAY SUPER HD.png",
"/assets/659 K TV HD.png",
"/assets/660 JAYA TV HD.png",
"/assets/661 DD TAMIL.png",
"/assets/662 ZEE THIRAI HD.png",
"/assets/663 &FLIX HD.png",
"/assets/664 SONY PIX HD.png",
"/assets/665 SUN MUSIC HD.png",
"/assets/666 Star Sports 1 Tamil HD.png",
"/assets/667 Sony Sports Ten 4 HD.png",
"/assets/668 DISNEY CHANNEL HD.png",
"/assets/669 ETV Balabharat HD.png",
"/assets/670 DISCOVERY CHANNEL HD.png",
"/assets/671 HISTORY TV 18 TAMIL HD.png",
"/assets/672 TRAVEL XP TAMIL HD.png",
"/assets/673 SONY BBC EARTH TAMIL HD.png",
"/assets/674 ANIMAL PLANET TAMIL HD.png",
"/assets/675 NGC TAMIL HD.png",
"/assets/676 NGC WILD TAMIL HD.png",
"/assets/677 Star Life.png",
];


  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "#ffffff",
        padding: "6rem 0",
        fontFamily: "Inter, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative Backgrounds */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "5%",
          width: "70px",
          height: "70px",
          background: "linear-gradient(135deg, #dbeafe 0%, #93c5fd 100%)",
          borderRadius: "50%",
          opacity: 0.3,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          bottom: "25%",
          right: "5%",
          width: "60px",
          height: "60px",
          background: "linear-gradient(135deg, #93c5fd 0%, #2563eb 100%)",
          borderRadius: "50%",
          opacity: 0.2,
        }}
      ></div>

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 2.5rem",
          textAlign: "center",
        }}
      >
        {/* Header Section */}
        <div style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "clamp(2.5rem, 3vw, 3rem)",
              fontWeight: 700,
              color: "#111827",
              marginBottom: "1rem",
              letterSpacing: "-0.02em",
            }}
          >
            Included{" "}
            <span
              style={{
                color: "#2563eb",
                background: "linear-gradient(135deg, #dc2626, #ef4444)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              TV & OTT Partners
            </span>
          </h2>
          <p
            style={{
              color: "#6b7280",
              fontSize: "1.6rem",
              maxWidth: "500px",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
          >
            Stream unlimited entertainment with 20+ premium OTT apps and popular
            TV channels.
          </p>
        </div>

        {/* Logo Slider */}
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            padding: "2rem 0",
          }}
        >
          {/* Gradient Overlays */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: "120px",
              background: "linear-gradient(90deg, #ffffff 0%, transparent 100%)",
              zIndex: 2,
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              width: "120px",
              background:
                "linear-gradient(270deg, #ffffff 0%, transparent 100%)",
              zIndex: 2,
            }}
          ></div>

          {/* First Row */}
          <div
            style={{
              display: "flex",
              gap: "3rem",
              animation: "scroll 40s linear infinite",
              marginBottom: "2rem",
            }}
          >
            {[...ottLogos].map((logo, index) => (
              <div
                key={index}
                style={{
                  flexShrink: 0,
                  width: "160px",
                  height: "100px",
                  position: "relative",
                  opacity: 1,
                  transition: "all 0.3s ease",
                  padding: "0.75rem",
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "scale(1.08)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 20px rgba(0,0,0,0.12)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 2px 8px rgba(0,0,0,0.06)";
                }}
              >
                <Image
                  src={logo.startsWith("/assets/") ? logo : `/assets/${logo}`}
                  alt="OTT Logo"
                  width={150}
                  height={90}
                  style={{ objectFit: "contain" }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>

          {/* Second Row (Reverse Animation) */}
          <div
            style={{
              display: "flex",
              gap: "3rem",
              animation: "scrollReverse 35s linear infinite",
            }}
          >
            {[...ottLogos].reverse().map((logo, index) => (
              <div
                key={index}
                style={{
                  flexShrink: 0,
                  width: "160px",
                  height: "100px",
                  position: "relative",
                  opacity: 1,
                  transition: "all 0.3s ease",
                  padding: "0.75rem",
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "scale(1.08)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 20px rgba(0,0,0,0.12)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 2px 8px rgba(0,0,0,0.06)";
                }}
              >
                <Image
                  src={logo.startsWith("/assets/") ? logo : `/assets/${logo}`}
                  alt="OTT Logo"
                  width={150}
                  height={90}
                  style={{ objectFit: "contain" }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
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
            transform: translateX(calc(-160px * 10 - 3rem * 10));
          }
        }
        @keyframes scrollReverse {
          0% {
            transform: translateX(calc(-160px * 10 - 3rem * 10));
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
