import Link from "next/link";
import Image from "next/image";
import type { Article, Endpoint } from "@/lib/microcms";
import { formatDate } from "@/lib/format";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://pursuit-dao.com";

const sectionLabels: Record<Endpoint, string> = {
  news: "News",
  insights: "Insights",
  works: "Works",
};

export default function ArticleDetail({
  endpoint,
  article,
  locale = "ja",
}: {
  endpoint: Endpoint;
  article: Article;
  locale?: "ja" | "en";
}) {
  const prefix = locale === "en" ? "/en" : "";
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    datePublished: article.publishedAt,
    dateModified: article.revisedAt ?? article.publishedAt,
    image: article.thumbnail ? [article.thumbnail.url] : undefined,
    author: { "@type": "Organization", name: "株式会社Pursuit", url: siteUrl },
    publisher: {
      "@type": "Organization",
      name: "株式会社Pursuit",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo/pursuit_logo_horizontal_color.svg`,
      },
    },
    mainEntityOfPage: `${siteUrl}${prefix}/${endpoint}/${article.id}`,
    inLanguage: locale === "en" ? "en" : "ja",
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}${prefix || "/"}` },
      {
        "@type": "ListItem",
        position: 2,
        name: sectionLabels[endpoint],
        item: `${siteUrl}${prefix}/${endpoint}`,
      },
      { "@type": "ListItem", position: 3, name: article.title },
    ],
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="mx-auto w-full max-w-3xl px-5 py-16 md:px-8 md:py-24">
        <nav aria-label={locale === "en" ? "Breadcrumb" : "パンくず"} className="text-xs text-neutral-500">
          <Link href={prefix || "/"} className="hover:text-neutral-900">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href={`${prefix}/${endpoint}`} className="hover:text-neutral-900">
            {sectionLabels[endpoint]}
          </Link>
        </nav>
        <div className="mt-6 flex items-center gap-3 text-sm text-neutral-500">
          <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
          {article.category && (
            <span className="rounded-full border border-neutral-200 px-2.5 py-0.5 text-xs">
              {article.category}
            </span>
          )}
          {article.client && <span className="text-xs">{article.client}</span>}
        </div>
        <h1 className="mt-3 text-2xl font-semibold leading-snug md:text-3xl">
          {article.title}
        </h1>
        {article.thumbnail && (
          <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-neutral-100">
            <Image
              src={article.thumbnail.url}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
              priority
            />
          </div>
        )}
        <div
          className="prose prose-neutral mt-10 max-w-none prose-headings:font-semibold prose-a:text-emerald-900"
          dangerouslySetInnerHTML={{ __html: article.body }}
        />
        <div className="mt-12 border-t border-neutral-200 pt-8">
          <Link
            href={`${prefix}/${endpoint}`}
            className="text-sm font-semibold text-neutral-700 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-900"
          >
            ← {locale === "en" ? `Back to ${sectionLabels[endpoint]}` : `${sectionLabels[endpoint]} 一覧へ戻る`}
          </Link>
        </div>
      </div>
    </article>
  );
}
