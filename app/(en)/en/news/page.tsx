import type { Metadata } from "next";
import ArticleListPage from "@/components/ArticleListPage";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "News",
  description: "News and press releases from Pursuit inc.",
  alternates: {
    canonical: "/en/news",
    languages: { ja: "/news", en: "/en/news" },
  },
};

export default function EnNewsPage() {
  return (
    <ArticleListPage
      endpoint="news"
      eyebrow="News"
      title="News"
      description="News and press releases from Pursuit inc."
      locale="en"
    />
  );
}
