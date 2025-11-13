import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import BeforeFooter from "@/components/BeforeFooter";
import PageLoaderWrapper from "@/components/PageLoaderWrapper";
import { Providers } from "./Providers";
import AutoContactLauncher from "@/components/contact/AutoContactLauncher";
import SocialSidebar from "@/components/SocialSidebar";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Skylink",
  description: "Speed You Need. Connection You Trust. Entertainment You Love",
};

export default function RootLayout({ children }) {
  // ✅ Get env values or fallback to “xxxx”
  const googleMapsKey =
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "xxxx";
  const googleTagKey =
    process.env.NEXT_PUBLIC_GOOGLE_TAG_KEY || "xxxx";

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* ✅ Font preconnects */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Manrope:wght@200..800&family=Montserrat:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.png" sizes="any" />

        {/* ✅ Google Maps API (with fallback) */}
        <Script
          src={`https://maps.googleapis.com/maps/api/js?key=${googleMapsKey}&libraries=places,geometry`}
          strategy="beforeInteractive"
        />

        {/* ✅ Google Tag Manager (with fallback) */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${googleTagKey}');
            `,
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-white text-slate-900`}
      >
        {/* ✅ GTM NoScript fallback */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${googleTagKey}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <PageLoaderWrapper>
          <Providers>
            <Header />
            <SocialSidebar />
            <main className="min-h-screen mt-33 lg:mt-18">{children}</main>
            <BeforeFooter />
            <Footer />
            <AutoContactLauncher delay={3000} cookieExpiry={7} />
          </Providers>
        </PageLoaderWrapper>
      </body>
    </html>
  );
}
