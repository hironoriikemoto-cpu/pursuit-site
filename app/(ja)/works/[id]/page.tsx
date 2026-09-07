import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleDetail from "@/components/ArticleDetail";
import { getArticle } from "@/lib/microcms";
import { articleMetadata } from "@/lib/article-metadata";

export const revalidate = 60;

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const article = await getArticle("works", id);
  return article ? articleMetadata("works", article) : {};
}

export default async function WorkDetailPage({ params }: Props) {
  const { id } = await params;
  const article = await getArticle("works", id);
  if (!article) notFound();
  return <ArticleDetail endpoint="works" article={article} />;
}
