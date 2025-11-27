import {Geist, Geist_Mono, Inter, Montserrat, Playfair_Display, Roboto, Manrope} from "next/font/google";

// Define the fonts at the app level rather than in layout
// This is the recommended approach in Next.js for shared fonts
export const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
    display: "swap",
});

export const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
    display: "swap",
});

// Additional fonts that were previously loaded via <link> tags
export const playfair = Playfair_Display({
    variable: "--font-playfair",
    subsets: ["latin"],
    display: "swap",
    weight: ["700", "900"],
});

export const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "500"],
});

export const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
});

export const manrope = Manrope({
    variable: "--font-manrope",
    subsets: ["latin"],
    display: "swap",
});

export const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
    display: "swap",
});