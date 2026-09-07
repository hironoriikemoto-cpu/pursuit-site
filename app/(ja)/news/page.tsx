import type { Metadata } from "next";
import ArticleListPage from "@/components/ArticleListPage";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "News",
  description: "Pursuit inc.からのお知らせ・プレスリリース一覧。",
  alternates: { canonical: "/news", languages: { ja: "/news", en: "/en/news" } },
};

export default function NewsPage() {
  return (
    <ArticleListPage
      endpoint="news"
      eyebrow="News"
      title="お知らせ"
      description="Pursuit inc.からのお知らせ・プレスリリースをお届けします。"
    />
  );
}
