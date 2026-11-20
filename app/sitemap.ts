import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://hakim-portfolio-1c1.pages.dev/",
      lastModified: new Date("2026-11-20"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
