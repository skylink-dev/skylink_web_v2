import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import BeforeFooter from "@/components/BeforeFooter";
import PageLoaderWrapper from "@/components/PageLoaderWrapper";
import { Providers } from "./Providers";
import AutoContactLauncher from "@/components/contact/AutoContactLauncher";

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
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* ✅ Font optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Manrope:wght@200..800&family=Montserrat:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-white text-slate-900`}
      >
        <PageLoaderWrapper>
          <Providers>
            <Header />
            <main className="min-h-screen mt-25 lg:mt-20">{children}</main>
            <BeforeFooter />
            <Footer />
            <AutoContactLauncher delay={3000} cookieExpiry={7} />
          </Providers>
        </PageLoaderWrapper>
      </body>
    </html>
  );
}
