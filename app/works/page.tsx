import type { Metadata } from "next";
import ArticleListPage from "@/components/ArticleListPage";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Works",
  description: "Pursuit inc.の実績・事例のご紹介。",
  alternates: { canonical: "/works" },
};

export default function WorksPage() {
  return (
    <ArticleListPage
      endpoint="works"
      eyebrow="Works"
      title="実績・事例"
      description="Pursuitが手がけたプロジェクトの実績・事例をご紹介します。"
    />
  );
}
