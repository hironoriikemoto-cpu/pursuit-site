import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { demoVideoUrl } from "@/lib/site-config";

// トップページの動画・デモ紹介セクション。
// lib/site-config.ts の demoVideoUrl を設定すると動画プレイヤーに切り替わる。
export default function DemoVideoSection({ locale = "ja" }: { locale?: "ja" | "en" }) {
  const prefix = locale === "en" ? "/en" : "";
  const t =
    locale === "en"
      ? {
          eyebrow: "Movie / Demo",
          title: "See Pursuit of Sovereignty in action.",
          description:
            "A short walkthrough of the KNOW → JUDGE → IMPROVE cycle — from feeding your knowledge to AI, to evaluation and continuous improvement.",
          comingSoon: "Demo movie coming soon",
          note: "An interactive demo and walkthrough video are in preparation.",
          cta: "Request an early demo",
          more: "About Pursuit of Sovereignty",
        }
      : {
          eyebrow: "Movie / Demo",
          title: "動画とデモで、Pursuit of Sovereigntyを知る。",
          description:
            "自社のKnowledgeをAIに与え、評価し、改善する——KNOW → JUDGE → IMPROVEの循環を、デモと動画でわかりやすくご紹介します。",
          comingSoon: "デモ動画 近日公開",
          note: "体験デモと解説動画を準備中です。公開までしばらくお待ちください。",
          cta: "先行デモを希望する",
          more: "Pursuit of Sovereigntyを見る",
        };

  return (
    <section className="border-b border-neutral-200 bg-neutral-50">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} description={t.description} />
        <div className="mt-10 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
          {demoVideoUrl ? (
            <div className="relative aspect-video w-full">
              <iframe
                src={demoVideoUrl}
                title={t.title}
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="relative flex aspect-video w-full flex-col items-center justify-center bg-emerald-950 px-6 text-center">
              <Image
                src="/logo/pursuit_symbol_white.svg"
                alt=""
                width={72}
                height={84}
                className="h-16 w-auto opacity-90 md:h-20"
              />
              <p className="mt-5 text-lg font-semibold text-white md:text-xl">
                {t.comingSoon}
              </p>
              <p className="mt-2 max-w-md text-xs leading-relaxed text-emerald-200 md:text-sm">
                {t.note}
              </p>
            </div>
          )}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={`${prefix}/contact`}
            className="rounded-xl bg-neutral-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
          >
            {t.cta}
          </Link>
          <Link
            href={`${prefix}/sovereignty`}
            className="rounded-xl border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-50"
          >
            {t.more}
          </Link>
        </div>
      </div>
    </section>
  );
}
