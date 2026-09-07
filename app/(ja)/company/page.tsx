import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Company",
  description:
    "株式会社Pursuit（Pursuit inc.）の会社概要。2026年2月5日設立。AI開発／業務システム開発／Webアプリ開発／構想設計・伴走支援／RWAトークン領域での新規プロダクト開発。",
  alternates: { canonical: "/company", languages: { ja: "/company", en: "/en/company" } },
};

const overview = [
  { label: "会社名", value: "株式会社Pursuit（Pursuit inc.）" },
  { label: "設立日", value: "2026年2月5日" },
  { label: "本店所在地", value: "東京都中央区銀座一丁目12番4号 N&E BLD.6階" },
  { label: "代表取締役", value: "池本 博則" },
  { label: "取締役", value: "江口 天（共同創業者）" },
  { label: "資本金", value: "100万円" },
];

const businesses = [
  "Enterprise AI基盤「Pursuit Sovereignty」の開発・提供（Knowledge構造化・AI評価・継続改善）",
  "AI開発／AI活用支援",
  "業務システム開発（要件整理・設計・開発・改善）",
  "Webアプリ開発（企画・設計・開発・運用）",
  "構想設計・伴走支援（新規事業・プロダクト設計）",
  "RWA（Real World Asset）トークン領域での新規プロダクト開発（価値の証明・保護・継承）",
];

export default function CompanyPage() {
  return (
    <>
      <section className="border-b border-neutral-200">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <p className="text-sm font-medium tracking-wide text-neutral-500">Company</p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
            株式会社Pursuit
          </h1>
          <p className="mt-2 text-lg text-neutral-500">Pursuit inc.</p>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <SectionHeading eyebrow="Overview" title="会社概要" />
          <dl className="mt-8 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
            {overview.map((row, i) => (
              <div
                key={row.label}
                className={`grid gap-1 px-6 py-4 md:grid-cols-[180px_1fr] md:gap-6 ${
                  i > 0 ? "border-t border-neutral-200" : ""
                }`}
              >
                <dt className="text-sm font-semibold text-neutral-500">{row.label}</dt>
                <dd className="text-sm text-neutral-800">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <SectionHeading eyebrow="Business" title="事業内容" />
          <ul className="mt-8 space-y-3">
            {businesses.map((b) => (
              <li
                key={b}
                className="rounded-2xl border border-neutral-200 bg-white px-6 py-4 text-sm text-neutral-800 shadow-sm"
              >
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
