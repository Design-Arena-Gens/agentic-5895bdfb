import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adcraze | Performance-Driven Digital Advertising That Scales Revenue",
  description: "Stop wasting ad spend. Adcraze delivers performance-based advertising that scales your revenue—not your costs. We only win when you win.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
