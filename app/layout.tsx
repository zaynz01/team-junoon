import type { Metadata } from "next";
import {
  Oswald,
  Barlow_Condensed,
  Barlow,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";

// Oswald 700 = ultra-condensed tall letterforms — matches the brand's aggressive condensed identity
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-data",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://teamjunoon.com"),
  title: "Team Junoon — Race Pakistan '27",
  description:
    "Highbrow College's official Race Pakistan competitor. Engineering a world-class 1:20 scale CO2-powered F1 chassis from first principles.",
  keywords: ["Team Junoon", "Race Pakistan", "Highbrow College", "Formula motorsport", "Karachi"],
  openGraph: {
    title: "Team Junoon — Race Pakistan '27",
    description:
      "Highbrow College's official Race Pakistan competitor. Obsession. Engineered.",
    images: ["/hero-car.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Team Junoon — Race Pakistan '27",
    images: ["/hero-car.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`
          ${oswald.variable}
          ${barlowCondensed.variable}
          ${barlow.variable}
          ${jetbrainsMono.variable}
          bg-black text-white antialiased overflow-x-hidden
        `}
      >
        {children}
      </body>
    </html>
  );
}
