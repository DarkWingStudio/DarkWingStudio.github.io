export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  problem: string;
  tags: string[];
  category: string;
  status: "Live" | "In Development" | "Prototype" | "Experimental";
  liveUrl?: string;
  githubUrl?: string;
  accent: string;
  number: string;
}

export const projects: Project[] = [
  {
    id: "daykit",
    name: "DayKit",
    tagline: "A collection of small everyday utilities",
    description:
      "DayKit is a focused collection of everyday utility tools — password checker, text cleaner, focus timer, and countdown. Built around the idea that useful tools should be simple and distraction-free.",
    problem:
      "Small productivity tasks get scattered across dozens of browser tabs and unrelated apps.",
    tags: ["React", "JavaScript", "CSS"],
    category: "Utility · Web",
    status: "Live",
    liveUrl: "https://daykit.netlify.app/",
    githubUrl: "https://github.com/DarkWingStudio",
    accent: "#f0f0f0",
    number: "01",
  },
  {
    id: "opensourcehub",
    name: "OpenSourceHub",
    tagline: "GitHub intelligence for finding strong open source projects",
    description:
      "A GitHub intelligence platform for discovering strong open-source projects quickly. Uses the GitHub GraphQL API with a Supabase backend cache (6-hour TTL) to stay within API rate limits while keeping results fresh.",
    problem:
      "Finding genuinely active and well-maintained open-source projects to contribute to is harder than it should be.",
    tags: ["React", "Vite", "Supabase", "GraphQL"],
    category: "Tool · Developer",
    status: "Live",
    liveUrl: "https://opensourcehub.lovable.app",
    githubUrl: "https://github.com/DarkWingStudio/OpenSourceHub",
    accent: "#cccccc",
    number: "02",
  },
];
