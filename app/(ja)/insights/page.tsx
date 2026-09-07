import type { Metadata } from "next";
import ArticleListPage from "@/components/ArticleListPage";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Insights",
  description:
    "AI・業務システム・Web3/RWA・事業開発に関するPursuit inc.のコラム・考察。",
  alternates: { canonical: "/insights", languages: { ja: "/insights", en: "/en/insights" } },
};

export default function InsightsPage() {
  return (
    <ArticleListPage
      endpoint="insights"
      eyebrow="Insights"
      title="コラム・考察"
      description="AI・業務システム・Web3/RWA・事業開発に関する考察やナレッジを発信します。"
    />
  );
}
