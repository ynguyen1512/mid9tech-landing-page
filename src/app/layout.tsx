import Navbar from "@/layouts/components/Navbar";
import type { Metadata } from "next";
import { Atkinson_Hyperlegible, Outfit, Prata } from "next/font/google";
import "./globals.css";


const atkinson = Atkinson_Hyperlegible({
  subsets: ["latin"],
  variable: "--font-atkinson",
  weight: ["400", "700"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "700"],
});

const prata = Prata({
  subsets: ["latin"],
  variable: "--font-prata",
  weight: "400", 
});

// Metadata configuration
export const metadata: Metadata = {
  title: "Mid9Tech",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${atkinson.variable} ${outfit.variable} ${prata.variable}`}>
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}