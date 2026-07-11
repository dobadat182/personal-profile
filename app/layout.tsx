import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import ScrollProgress from "@/components/layouts/ScrollProgress";
import { Analytics } from "@vercel/analytics/next"

const satoshi = localFont({
  src: "../fonts/Satoshi-Variable.ttf",
  variable: "--font-satoshi",
  weight: "100 900",
});

const cabinet = localFont({
  src: "../fonts/CabinetGrotesk-Variable.ttf",
  variable: "--font-cabinet",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: "Dat Do | Frontend Developer",
  description:
    "I design and build refined web experiences with TypeScript, React, and Next.js — fast, accessible, and ready to scale.",
  openGraph: {
    title: "Dat Do | Frontend Developer",
    description:
      "I design and build refined web experiences with TypeScript, React, and Next.js — fast, accessible, and ready to scale.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dat Do | Frontend Developer",
    description:
      "I design and build refined web experiences with TypeScript, React, and Next.js — fast, accessible, and ready to scale.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "scroll-smooth antialiased",
        satoshi.variable,
        cabinet.variable,
      )}
    >
      <body id="top" className="flex min-h-full flex-col font-sans">
        <Header />
        {children}
        <Footer />
        <ScrollProgress />
      </body>

      <Analytics />
    </html>
  );
}
