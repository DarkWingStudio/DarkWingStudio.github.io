import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // Replace with the actual deployed URL once deployed
  const baseUrl = "https://rohitkumar.dev";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
