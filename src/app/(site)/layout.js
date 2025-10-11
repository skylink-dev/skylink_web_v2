import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./custom.css"
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import BeforeFooter from "@/components/BeforeFooter";
import PageLoaderWrapper from "@/components/PageLoaderWrapper";
import dynamic from "next/dynamic";
import { Providers } from "./Providers";

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
  description: "Speed You Need. Connection You Trust. Entertainment You Love",
};

export default function RootLayout({children}) {
  return (
    <html lang="en" className="theme-att-2022 isPC isChrome isLandscape hydrated">
      <link precedence="default" rel="preconnect" href="https://fonts.googleapis.com" />
      <link precedence="default" rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link precedence="default" href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Manrope:wght@200..800&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      <link rel="icon" href="/favicon.png" sizes="any" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PageLoaderWrapper>
          <Providers>
            <Header></Header>
            {children}
            <BeforeFooter></BeforeFooter>
            <Footer></Footer>
          </Providers>
        </PageLoaderWrapper>
      </body>
    </html>
  );
}
