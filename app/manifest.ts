import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rohit Kumar — Frontend Developer",
    short_name: "Rohit Kumar",
    description: "Frontend developer focused on thoughtful interfaces, interactive experiences, and digital products that actually work.",
    start_url: "/",
    display: "standalone",
    background_color: "#050505",
    theme_color: "#050505",
    icons: [
      {
        src: "/icon.webp",
        sizes: "192x192",
        type: "image/webp",
        purpose: "maskable",
      },
      {
        src: "/icon.webp",
        sizes: "512x512",
        type: "image/webp",
        purpose: "maskable",
      }
    ],
  };
}
