import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KESHAV-CMD | Developer Portfolio",
  description:
    "Developer portfolio of Keshav Jha — building interactive browser experiences, scientific simulations, games, and useful applications.",
  keywords: [
    "Keshav Jha",
    "KESHAV-CMD",
    "developer",
    "portfolio",
    "web developer",
    "games",
    "simulations",
  ],
  authors: [{ name: "Keshav Jha" }],
  openGraph: {
    title: "KESHAV-CMD | Developer Portfolio",
    description:
      "Interactive developer portfolio featuring games, simulations, and web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}