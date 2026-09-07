import Link from "next/link";
import Image from "next/image";
import type { Article, Endpoint } from "@/lib/microcms";
import { formatDate } from "@/lib/format";

export default function ArticleCard({
  endpoint,
  article,
  locale = "ja",
}: {
  endpoint: Endpoint;
  article: Article;
  locale?: "ja" | "en";
}) {
  const prefix = locale === "en" ? "/en" : "";
  return (
    <Link
      href={`${prefix}/${endpoint}/${article.id}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:shadow-md"
    >
      {article.thumbnail && (
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-100">
          <Image
            src={article.thumbnail.url}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition group-hover:scale-[1.02]"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-3 text-xs text-neutral-500">
          <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
          {article.category && (
            <span className="rounded-full border border-neutral-200 px-2 py-0.5">
              {article.category}
            </span>
          )}
        </div>
        <h3 className="mt-3 text-base font-semibold leading-snug group-hover:underline decoration-neutral-300 underline-offset-4">
          {article.title}
        </h3>
        {article.excerpt && (
          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-600">
            {article.excerpt}
          </p>
        )}
      </div>
    </Link>
  );
}
