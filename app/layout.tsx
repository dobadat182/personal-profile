import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

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
  title: "Dat Do | Frontend Developer",
  description: "Frontend Developer",
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
      </body>
    </html>
  );
}
