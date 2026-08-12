import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleDetail from "@/components/ArticleDetail";
import { getArticle } from "@/lib/microcms";
import { articleMetadata } from "@/lib/article-metadata";

export const revalidate = 60;

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const article = await getArticle("insights", id);
  return article ? articleMetadata("insights", article) : {};
}

export default async function InsightDetailPage({ params }: Props) {
  const { id } = await params;
  const article = await getArticle("insights", id);
  if (!article) notFound();
  return <ArticleDetail endpoint="insights" article={article} />;
}
