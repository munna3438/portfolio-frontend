import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import HashScrollHandler from "@/components/HashScrollHandler";
import { Analytics } from "@vercel/analytics/next";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"]
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"]
});

const jbmono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jbmono",
  weight: ["400", "500"]
});

export const metadata: Metadata = {
  title: "Munna — Full-Stack Developer",
  description:
    "Full-stack developer building Laravel, Next.js and Express applications for clients in Bangladesh and worldwide.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${inter.variable} ${jbmono.variable} font-body antialiased`}
      >
        {children}
        <HashScrollHandler />
        <Analytics />
      </body>
    </html>
  );
}
