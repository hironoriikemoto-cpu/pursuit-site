import type { Metadata } from "next";
import ArticleListPage from "@/components/ArticleListPage";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Essays and insights from Pursuit inc. on AI, business systems, Web3/RWA, and business development.",
  alternates: {
    canonical: "/en/insights",
    languages: { ja: "/insights", en: "/en/insights" },
  },
};

export default function EnInsightsPage() {
  return (
    <ArticleListPage
      endpoint="insights"
      eyebrow="Insights"
      title="Insights"
      description="Essays and insights on AI, business systems, Web3/RWA, and business development."
      locale="en"
    />
  );
}
