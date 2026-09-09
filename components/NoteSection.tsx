import SectionHeading from "@/components/SectionHeading";
import { getNoteArticles } from "@/lib/note";
import { noteUrl } from "@/lib/site-config";
import { formatDate } from "@/lib/format";

// トップページの「noteの最新記事」セクション（noteUrl設定時のみ表示）
export default async function NoteSection() {
  const articles = await getNoteArticles(3);
  if (!noteUrl || articles.length === 0) return null;

  return (
    <section className="border-b border-neutral-200">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8">
        <div className="flex items-end justify-between">
          <SectionHeading
            eyebrow="note"
            title="noteで、日々の挑戦を発信中。"
            description="開発の裏側やPoCでの学びなど、コーポレートサイトには載らない「中の人」の発信はnoteでお届けしています。"
          />
          <a
            href={noteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-sm font-semibold text-neutral-700 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-900"
          >
            noteを見る ↗
          </a>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {articles.map((a) => (
            <a
              key={a.link}
              href={a.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:shadow-md"
            >
              {a.thumbnail && (
                <div className="aspect-[1.91/1] w-full overflow-hidden bg-neutral-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={a.thumbnail}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition group-hover:scale-[1.02]"
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs text-neutral-500">
                  {a.pubDate ? formatDate(a.pubDate) : ""}
                  <span className="ml-2 rounded-full border border-neutral-200 px-2 py-0.5">note</span>
                </p>
                <h3 className="mt-3 text-base font-semibold leading-snug group-hover:underline decoration-neutral-300 underline-offset-4">
                  {a.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
