import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import PageLoaderWrapper from "@/components/PageLoaderWrapper";
import { Providers } from "./Providers";
import AutoContactLauncher from "@/components/contact/AutoContactLauncher";
import SocialSidebar from "@/components/SocialSidebar";
import ChatPopup from "@/components/ChatPopup";

import Script from "next/script";
import GlobalStructuredData from "@/components/GlobalStructuredData";
// Import default metadata from our centralized metadata module
import {defaultMetadata} from '@/lib/metadata';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * Export the default metadata for the entire site
 * This metadata will be used as the base for all pages
 * Individual pages can override specific values through their own metadata.js files
 */
export const metadata = defaultMetadata;

export default function RootLayout({ children }) {

  const googleMapsKey =
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "xxxxtest";
  const googleTagKey =
    process.env.NEXT_PUBLIC_GOOGLE_TAG_KEY || "GTM-xxxxtest";

  return (
    <html lang="en" className="scroll-smooth">
      <head>

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

          {/* 3CX Live Chat Script */}
        <Script
  src="https://downloads-global.3cx.com/downloads/livechatandtalk/v1/callus.js"
  id="tcx-callus-js"
  strategy="afterInteractive"
   charSet="utf-8"
  defer
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

              {/* ⭐ 3CX LIVE CHAT CODE — REQUIRED ⭐ */}
    {/* Automatically Loads 3CX Bubble */}
        <call-us-selector
          phonesystem-url="https://skylink.3cx.in"
          party="LiveChat226943"
        ></call-us-selector>
<call-us
          phonesystem-url="https://skylink.3cx.in"
          class="fixed text-[16px] leading-[17px] z-[99999] right-20 bottom-20 bg-blue-200"
          id="wp-live-chat-by-3CX"
          minimized="false"
          animation-style="slidefromside"
          party="LiveChat226943"
          minimized-style="bubbleright"
          allow-call="true"
          allow-video="false"
          allow-soundnotifications="true"
          enable-mute="true"
          enable-onmobile="true"
          offline-enabled="true"
          enable="true"
          ignore-queueownership="true"
          authentication="both"
          operator-name="Angel Juliet"
          show-operator-actual-name="true"
          aknowledge-received="true"
        ></call-us>

        {/* Global Structured Data */}
        <GlobalStructuredData/>

      <PageLoaderWrapper>
          <Providers>
            <Header />
            <SocialSidebar />
                 {/* CHAT POPUP ADDED BACK */}
            {/* <ChatPopup /> */}
            <main className="min-h-screen mt-33 lg:mt-18">{children}</main>
            <Footer />
            <AutoContactLauncher delay={3000} cookieExpiry={7} />
          </Providers>
        </PageLoaderWrapper>
      </body>
    </html>
  );
}
