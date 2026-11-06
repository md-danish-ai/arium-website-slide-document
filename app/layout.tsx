import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arium Networks — Architecture & Dynamic Widgets Presentation",
  description:
    "Technical architecture presentation and Strapi CMS widgets showcase for Arium Networks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-midnight text-white min-h-screen overflow-hidden">
        {children}
      </body>
    </html>
  );
}
