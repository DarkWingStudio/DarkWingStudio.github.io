import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rohit Kumar — Frontend Developer & Creative Technologist",
  description:
    "I'm Rohit Kumar, a frontend developer and student who enjoys building websites and digital products from idea to working interface. Focused on React, JavaScript, and interactive web experiences.",
  keywords: [
    "Rohit Kumar",
    "Frontend Developer",
    "DarkWingStudio",
    "React Developer",
    "Creative Technologist",
    "Web Developer India",
    "JavaScript Developer",
    "Tailwind CSS",
  ],
  authors: [{ name: "Rohit Kumar", url: "https://github.com/DarkWingStudio" }],
  creator: "Rohit Kumar",
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "Rohit Kumar — Frontend Developer & Creative Technologist",
    description:
      "Frontend developer focused on thoughtful interfaces, interactive experiences, and digital products that actually work.",
    siteName: "Rohit Kumar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohit Kumar — Frontend Developer",
    description: "Frontend developer building thoughtful, interactive web experiences.",
    creator: "@Darkwingstudio",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
