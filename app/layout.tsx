import type { Metadata } from "next";
import { Syne, Space_Grotesk } from "next/font/google";
import CursorWrapper from "@/components/CursorWrapper";
import "./globals.css";


const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rohit Kumar — Frontend Developer & Creative Technologist",
  description:
    "Frontend developer & creative technologist. I build thoughtful, interactive web experiences using React, Next.js, and modern CSS.",
  keywords: [
    "Rohit Kumar",
    "Frontend Developer",
    "DarkWingStudio",
    "React Developer",
    "Creative Technologist",
    "Web Developer India",
    "Next.js Developer",
    "JavaScript Developer",
    "Framer Motion",
    "Tailwind CSS",
  ],
  authors: [{ name: "Rohit Kumar", url: "https://github.com/DarkWingStudio" }],
  creator: "Rohit Kumar",
  alternates: {
    canonical: "https://darkwingstudio.github.io",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://darkwingstudio.github.io",
    title: "Rohit Kumar — Frontend Developer & Creative Technologist",
    description:
      "I build thoughtful, interactive web experiences — from pixel-perfect UI to smooth motion design. React, Next.js, and modern CSS.",
    siteName: "Rohit Kumar · DarkWingStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohit Kumar — Frontend Developer",
    description: "Thoughtful web interfaces with React, Next.js & Framer Motion. Design meets code.",
    creator: "@Darkwingstudio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${syne.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Rohit Kumar",
              url: "https://darkwingstudio.github.io",
              email: "darkwingdomain@gmail.com",
              jobTitle: "Frontend Developer",
              description: "Frontend developer & creative technologist building thoughtful, interactive web experiences with React, Next.js, and modern CSS.",
              sameAs: [
                "https://github.com/DarkWingStudio",
                "https://x.com/Darkwingstudio",
                "https://reddit.com/user/darkwingstudio",
                "https://pinterest.com/DarkWingstudio",
              ],
              knowsAbout: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP", "Frontend Development", "UI/UX Design"],
            }),
          }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        <CursorWrapper />
        {children}
      </body>
    </html>
  );
}
