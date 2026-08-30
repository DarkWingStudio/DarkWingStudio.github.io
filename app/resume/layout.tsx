import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume — Rohit Kumar | Frontend Developer",
  description:
    "View Rohit Kumar's resume. Frontend developer skilled in React, Next.js, TypeScript, Tailwind CSS, and Framer Motion. Available for freelance and full-time roles.",
  openGraph: {
    title: "Resume — Rohit Kumar | Frontend Developer",
    description:
      "Frontend developer specializing in React, Next.js, UI/UX design, and interactive web experiences. View my skills, experience, and tools.",
    url: "https://darkwingstudio.github.io/resume",
  },
  alternates: {
    canonical: "https://darkwingstudio.github.io/resume",
  },
  twitter: {
    card: "summary",
    title: "Resume — Rohit Kumar | Frontend Developer",
    description:
      "React, Next.js, TypeScript & Framer Motion. Frontend dev open to new opportunities.",
    creator: "@Darkwingstudio",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
