import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleDetail from "@/components/ArticleDetail";
import { getArticle, toEnArticle } from "@/lib/microcms";
import { articleMetadata } from "@/lib/article-metadata";

export const revalidate = 60;

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const article = await getArticle("news", id);
  const en = article ? toEnArticle(article) : null;
  return en ? articleMetadata("news", en, "en") : {};
}

export default async function EnNewsDetailPage({ params }: Props) {
  const { id } = await params;
  const article = await getArticle("news", id);
  const en = article ? toEnArticle(article) : null;
  if (!en) notFound();
  return <ArticleDetail endpoint="news" article={en} locale="en" />;
}
