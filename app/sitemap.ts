import type { MetadataRoute } from "next";
import { getArticles, type Endpoint } from "@/lib/microcms";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://pursuit-dao.com";

const staticPaths = [
  "",
  "/concept",
  "/service",
  "/web3",
  "/company",
  "/contact",
  "/privacy",
  "/news",
  "/insights",
  "/works",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const endpoints: Endpoint[] = ["news", "insights", "works"];
  const articleEntries: MetadataRoute.Sitemap = [];

  for (const endpoint of endpoints) {
    const { contents } = await getArticles(endpoint, { limit: 100 });
    for (const a of contents) {
      articleEntries.push({
        url: `${siteUrl}/${endpoint}/${a.id}`,
        lastModified: new Date(a.revisedAt ?? a.publishedAt),
      });
    }
  }

  return [
    ...staticPaths.map((p) => ({
      url: `${siteUrl}${p}`,
      lastModified: new Date(),
    })),
    ...articleEntries,
  ];
}
