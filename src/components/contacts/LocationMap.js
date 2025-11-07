import { useState, useEffect } from "react";

export default function LocationMap() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const containerStyle = {
    backgroundColor: "#f9fafb",
    padding: isMobile ? "24px 12px" : "48px 16px",
  };

  const maxWidthStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const headerStyle = {
    textAlign: "center",
    marginBottom: isMobile ? "24px" : "32px",
  };

  const titleStyle = {
    fontSize: isMobile ? "28px" : "36px",
    fontWeight: "bold",
    color: "#111827",
    marginBottom: "12px",
    lineHeight: "1.2",
  };

  const subtitleStyle = {
    fontSize: isMobile ? "16px" : "18px",
    color: "#6b7280",
  };

  const mapContainerStyle = {
    backgroundColor: "white",
    borderRadius: isMobile ? "12px" : "16px",
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    position: "relative",
    width: "100%",
    paddingBottom: isMobile ? "75%" : "50%",
  };

  const iframeStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    border: 0,
  };

  const contactGridStyle = {
    marginTop: isMobile ? "24px" : "32px",
    display: "grid",
    gridTemplateColumns: isMobile
      ? "1fr"
      : "repeat(auto-fit, minmax(250px, 1fr))",
    gap: isMobile ? "16px" : "24px",
  };

  const cardStyle = {
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    padding: isMobile ? "20px" : "24px",
    textAlign: "center",
  };

  const iconContainerStyle = {
    color: "#2563eb",
    marginBottom: "12px",
    display: "flex",
    justifyContent: "center",
  };

  const iconStyle = {
    width: isMobile ? "28px" : "32px",
    height: isMobile ? "28px" : "32px",
  };

  const cardTitleStyle = {
    fontWeight: "600",
    color: "#111827",
    marginBottom: "8px",
    fontSize: isMobile ? "16px" : "18px",
  };

  const cardTextStyle = {
    color: "#6b7280",
    fontSize: "14px",
    lineHeight: "1.5",
  };

  const buttonContainerStyle = {
    marginTop: isMobile ? "24px" : "32px",
    textAlign: "center",
  };

  const buttonStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    backgroundColor: "#2563eb",
    color: "white",
    padding: isMobile ? "12px 24px" : "12px 32px",
    borderRadius: "8px",
    fontWeight: "600",
    textDecoration: "none",
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.3s",
    fontSize: isMobile ? "14px" : "16px",
  };

  return (
    <div style={containerStyle}>
      <div style={maxWidthStyle}>
        {/* Header Section */}
        <div style={headerStyle}>
          <h1 style={titleStyle}>Visit Our Office</h1>
          <p style={subtitleStyle}>Skylink Fibernet Private Limited</p>
        </div>

        {/* Map Container */}
        <div style={mapContainerStyle}>
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Skylink%20Fibernet%20Private%20Limited+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            title="Skylink Fibernet Private Limited Location"
            style={iframeStyle}
          >
            {`<a href="https://www.gps.ie/">gps tracker sport</a>"`}
          </iframe>
        </div>

        {/* Contact Information
        <div style={contactGridStyle}>
          <div style={cardStyle}>
            <div style={iconContainerStyle}>
              <svg style={iconStyle} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 style={cardTitleStyle}>Address</h3>
            <p style={cardTextStyle}>
              Skylink Fibernet Private Limited
            </p>
          </div>

          <div style={cardStyle}>
            <div style={iconContainerStyle}>
              <svg style={iconStyle} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 style={cardTitleStyle}>Phone</h3>
            <p style={cardTextStyle}>
              +91 XXX XXX XXXX
            </p>
          </div>

          <div style={cardStyle}>
            <div style={iconContainerStyle}>
              <svg style={iconStyle} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 style={cardTitleStyle}>Business Hours</h3>
            <p style={cardTextStyle}>
              Mon - Sat: 9:00 AM - 6:00 PM
            </p>
          </div>
        </div> */}

        {/* Directions Button */}
        <div style={buttonContainerStyle}>
          <a
            href="https://maps.google.com/maps?q=Skylink%20Fibernet%20Private%20Limited"
            target="_blank"
            rel="noopener noreferrer"
            style={buttonStyle}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#1d4ed8")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#2563eb")
            }
          >
            <svg
              style={{ width: "20px", height: "20px" }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
              />
            </svg>
            Get Directions
          </a>
        </div>
      </div>
    </div>
  );
}
