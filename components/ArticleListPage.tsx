import ArticleCard from "@/components/ArticleCard";
import SectionHeading from "@/components/SectionHeading";
import { getArticles, type Endpoint } from "@/lib/microcms";

export default async function ArticleListPage({
  endpoint,
  eyebrow,
  title,
  description,
}: {
  endpoint: Endpoint;
  eyebrow: string;
  title: string;
  description: string;
}) {
  const { contents } = await getArticles(endpoint, { limit: 50 });

  return (
    <section>
      <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        {contents.length === 0 ? (
          <p className="mt-10 text-sm text-neutral-600">まだ記事がありません。</p>
        ) : (
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {contents.map((a) => (
              <ArticleCard key={a.id} endpoint={endpoint} article={a} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
