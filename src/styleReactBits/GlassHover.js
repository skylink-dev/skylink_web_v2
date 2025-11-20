import { useRef } from "react";

const GlareHover = ({
  width = "500px",
  height = "500px",
  background = "#000",
  borderRadius = "10px",
  borderColor = "#333",
  children,
  glareColor = "#ffffff",
  glareOpacity = 0.5,
  glareAngle = -45,
  glareSize = 250,
  animationDuration = 2500, // ⭐ new (in ms)
  animationDelay = 0, // ⭐ new (in ms)
  className = "",
  style = {},
}) => {
  const hex = glareColor.replace("#", "");
  let rgba = glareColor;

  if (/^[\dA-Fa-f]{6}$/.test(hex)) {
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    rgba = `rgba(${r}, ${g}, ${b}, ${glareOpacity})`;
  }

  const overlayStyle = {
    position: "absolute",
    inset: 0,
    background: `linear-gradient(${glareAngle}deg,
        hsla(0,0%,0%,0) 60%,
        ${rgba} 70%,
        hsla(0,0%,0%,0) 100%)`,
    backgroundSize: `${glareSize}% ${glareSize}%, 100% 100%`,
    backgroundRepeat: "no-repeat",
    animation: `glareMove ${animationDuration}ms ease-in-out ${animationDelay}ms infinite`,
    pointerEvents: "none",
  };

  return (
    <div
      className={`relative grid place-items-center overflow-hidden border ${className}`}
      style={{
        width,
        height,
        background,
        borderRadius,
        borderColor,
        ...style,
      }}
    >
      <style>
        {`
          @keyframes glareMove {
            0% {
              background-position: -120% -120%, 0 0;
            }
            50% {
              background-position: 120% 120%, 0 0;
            }
            100% {
              background-position: -120% -120%, 0 0;
            }
          }
        `}
      </style>

      <div style={overlayStyle} />
      {children}
    </div>
  );
};

export default GlareHover;
