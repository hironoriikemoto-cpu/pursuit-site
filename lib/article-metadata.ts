import type { Metadata } from "next";
import type { Article, Endpoint } from "./microcms";
import { excerptFromHtml } from "./format";

// news / insights / works の記事詳細ページ共通のメタデータ生成
export function articleMetadata(endpoint: Endpoint, article: Article): Metadata {
  const description = article.excerpt ?? excerptFromHtml(article.body);
  return {
    title: article.title,
    description,
    alternates: { canonical: `/${endpoint}/${article.id}` },
    openGraph: {
      type: "article",
      title: article.title,
      description,
      publishedTime: article.publishedAt,
      images: article.thumbnail
        ? [{ url: article.thumbnail.url }]
        : [{ url: "/ogp.png", width: 1200, height: 630 }],
    },
  };
}
