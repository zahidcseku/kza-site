import type { Metadata } from "next";
import { Instrument_Serif, Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "./components/SmoothScroll";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-archivo",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KZA — Khan Zahid Architects",
  description:
    "A studio of architects in Khulna, Bangladesh — making places that belong to their weather and their people.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-palette="terra"
      className={`${instrumentSerif.variable} ${archivo.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
