import type { MetadataRoute } from "next";
import { getArticles, toEnArticle, type Endpoint } from "@/lib/microcms";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://pursuit-dao.com";

// 記事公開後もサイトマップが追随するように1時間ごとに再生成する
export const revalidate = 3600;

const staticPaths = [
  "",
  "/concept",
  "/service",
  "/sovereignty",
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
      // 英語版がある記事は/en側のURLも登録する
      if (toEnArticle(a)) {
        articleEntries.push({
          url: `${siteUrl}/en/${endpoint}/${a.id}`,
          lastModified: new Date(a.revisedAt ?? a.publishedAt),
        });
      }
    }
  }

  return [
    ...staticPaths.map((p) => ({
      url: `${siteUrl}${p}`,
      lastModified: new Date(),
    })),
    // 英語版の固定ページ（トップは/en）
    ...["/en", ...staticPaths.filter((p) => p !== "").map((p) => `/en${p}`)].map((p) => ({
      url: `${siteUrl}${p}`,
      lastModified: new Date(),
    })),
    ...articleEntries,
  ];
}
