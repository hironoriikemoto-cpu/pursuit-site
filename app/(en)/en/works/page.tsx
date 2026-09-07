import type { Metadata } from "next";
import ArticleListPage from "@/components/ArticleListPage";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Works",
  description: "Selected projects and case studies by Pursuit inc.",
  alternates: {
    canonical: "/en/works",
    languages: { ja: "/works", en: "/en/works" },
  },
};

export default function EnWorksPage() {
  return (
    <ArticleListPage
      endpoint="works"
      eyebrow="Works"
      title="Works"
      description="Selected projects and case studies by Pursuit inc."
      locale="en"
    />
  );
}
