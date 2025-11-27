// import { ImageResponse } from "next/og";

// export const alt = "Skylink - High-Speed Internet & TV Services";
// export const contentType = "image/png";

// export const size = {
//   width: 1200,
//   height: 630,
// };

// // Generate an OG image with custom text and styling
// export default function Image() {
//   return new ImageResponse(
//     (
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           width: "100%",
//           height: "100%",
//           background: "linear-gradient(to bottom, #1E40AF, #1E3A8A)",
//           color: "white",
//           fontFamily: "Inter, sans-serif",
//           overflow: "hidden",
//           position: "relative",
//         }}
//       >
//         {/* Background decorative elements */}
//         <div
//           style={{
//             position: "absolute",
//             width: "500px",
//             height: "500px",
//             borderRadius: "50%",
//             background: "rgba(255, 255, 255, 0.1)",
//             top: "-250px",
//             right: "-100px",
//           }}
//         />
//         <div
//           style={{
//             position: "absolute",
//             width: "300px",
//             height: "300px",
//             borderRadius: "50%",
//             background: "rgba(255, 255, 255, 0.1)",
//             bottom: "-100px",
//             left: "-100px",
//           }}
//         />

//         {/* Logo placeholder */}
//         <div
//           style={{
//             fontSize: 48,
//             fontWeight: "bold",
//             marginBottom: 20,
//             display: "flex",
//             alignItems: "center",
//             gap: "12px",
//           }}
//         >
//           <svg
//             width="60"
//             height="60"
//             viewBox="0 0 24 24"
//             fill="white"
//             style={{ marginRight: "16px" }}
//           >
//             <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" />
//             <path d="M12 6c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" />
//             <circle cx="12" cy="12" r="2" />
//           </svg>
//           SKYLINK
//         </div>

//         {/* Tagline */}
//         <div
//           style={{
//             fontSize: 32,
//             maxWidth: "800px",
//             textAlign: "center",
//             fontWeight: "bold",
//             margin: "0 20px",
//           }}
//         >
//           High-Speed Internet & TV Services
//         </div>

//         {/* Sub-tagline */}
//         <div
//           style={{
//             fontSize: 24,
//             maxWidth: "650px",
//             textAlign: "center",
//             margin: "24px 20px 0",
//             color: "rgba(255, 255, 255, 0.9)",
//             lineHeight: 1.4,
//           }}
//         >
//           Speed You Need. Connection You Trust. Entertainment You Love.
//         </div>
//       </div>
//     ),
//     size
//   );
// }

import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  // Load your asset from /public folder

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#000",
        }}
      >
        {/* <img
          src={
            "https://www.skylink.net.in/newassets/metaImage/skylink_opengraph.png"
          }
          alt="OG Image"
          width={1200}
          height={630}
          style={{ objectFit: "cover" }}
        /> */}
      </div>
    ),
    size
  );
}
