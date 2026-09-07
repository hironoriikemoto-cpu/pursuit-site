import type { Metadata } from "next";
import type { Article, Endpoint } from "./microcms";
import { excerptFromHtml } from "./format";

// news / insights / works の記事詳細ページ共通のメタデータ生成
export function articleMetadata(
  endpoint: Endpoint,
  article: Article,
  locale: "ja" | "en" = "ja"
): Metadata {
  const description = article.excerpt ?? excerptFromHtml(article.body);
  const prefix = locale === "en" ? "/en" : "";
  // 英語版が存在する記事のみ日英を相互にhreflangで紐付ける
  const hasEn = Boolean(article.title_en && article.body_en);
  return {
    title: article.title,
    description,
    alternates: {
      canonical: `${prefix}/${endpoint}/${article.id}`,
      ...(hasEn || locale === "en"
        ? {
            languages: {
              ja: `/${endpoint}/${article.id}`,
              en: `/en/${endpoint}/${article.id}`,
            },
          }
        : {}),
    },
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
