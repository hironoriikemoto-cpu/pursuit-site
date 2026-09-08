import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Service",
  description:
    "Enterprise AI基盤（Pursuit of Sovereignty）、AI開発・活用支援、業務システム開発、Webアプリ開発、構想設計・伴走支援。構想を「作って終わり」にしない。運用・改善・定着までを前提に、価値を実装します。",
  alternates: { canonical: "/service", languages: { ja: "/service", en: "/en/service" } },
};

const services: { en: string; ja: string; body: string; href?: string }[] = [
  {
    en: "Enterprise AI Sovereignty",
    ja: "企業AI基盤の構築（Pursuit of Sovereignty）",
    body: "自社Knowledge×AI評価×継続改善のサイクルを企業内に構築するEnterprise AI基盤。Enterprise PoC（実データでのベースライン測定→評価→改善）からご一緒します。",
    href: "/sovereignty",
  },
  {
    en: "AI Development",
    ja: "AI開発・活用支援",
    body: "生成AI・業務AIの企画／設計／開発、業務プロセスへの組み込み・自動化、PoCから本実装への移行支援。",
  },
  {
    en: "System Development",
    ja: "業務システム開発",
    body: "業務理解・要件整理から、業務／管理システムの企画・開発、既存システムの再設計・改善、運用前提の拡張支援。",
  },
  {
    en: "Web Application",
    ja: "Webアプリ開発",
    body: "Webアプリの企画・設計・開発、MVP立ち上げ、UI/UX設計、運用・改善フェーズの継続支援。",
  },
  {
    en: "Consulting & Design",
    ja: "構想設計・伴走支援",
    body: "新規事業構想・プロダクト設計、技術選定・アーキテクチャ設計、開発ロードマップ策定、プロジェクト伴走。",
  },
];

export default function ServicePage() {
  return (
    <>
      <section className="border-b border-neutral-200">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <p className="text-sm font-medium tracking-wide text-neutral-500">
            Business / Service
          </p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
            具体的な提供メニュー
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-neutral-700 md:text-lg">
            構想を「作って終わり」にしない。運用・改善・定着までを前提に、価値を実装します。
          </p>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {services.map((s) => (
              <div
                key={s.en}
                className={`rounded-2xl border bg-white p-6 shadow-sm md:p-8 ${
                  s.href ? "border-2 border-emerald-900" : "border-neutral-200"
                }`}
              >
                <h2 className="text-lg font-semibold">
                  {s.en}
                  <span className="ml-2 text-sm font-medium text-neutral-500">｜{s.ja}</span>
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-neutral-700">{s.body}</p>
                {s.href && (
                  <Link
                    href={s.href}
                    className="mt-4 inline-block text-sm font-semibold text-emerald-900 underline decoration-emerald-200 underline-offset-4 hover:decoration-emerald-900"
                  >
                    Pursuit of Sovereigntyの詳細へ →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-50">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <SectionHeading
            eyebrow="Contact"
            title="価値の芽から、ご相談ください。"
            description="まだ整理できていなくて構いません。Pursuitは「事業として成立させたい」という想いを起点に、最適な形を一緒に追求します。"
          />
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-xl bg-neutral-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
          >
            お問い合わせ
          </Link>
        </div>
      </section>
    </>
  );
}
