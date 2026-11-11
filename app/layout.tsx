import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arium Networks — Wireless Infrastructure & Strapi CMS Platform",
  description:
    "Arium Networks web platform powered by Strapi v5 Headless CMS, modular Dynamic Zones, and Next.js App Router.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-midnight text-white min-h-screen overflow-hidden antialiased">
        {children}
      </body>
    </html>
  );
}
