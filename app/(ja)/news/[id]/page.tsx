import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleDetail from "@/components/ArticleDetail";
import { getArticle } from "@/lib/microcms";
import { articleMetadata } from "@/lib/article-metadata";

export const revalidate = 60;

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const article = await getArticle("news", id);
  return article ? articleMetadata("news", article) : {};
}

export default async function NewsDetailPage({ params }: Props) {
  const { id } = await params;
  const article = await getArticle("news", id);
  if (!article) notFound();
  return <ArticleDetail endpoint="news" article={article} />;
}
