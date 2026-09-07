import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Web3 / RWA",
  description:
    "Web3.0 / RWA（Real World Asset）Token Development。投機ではなく、価値の所在を明確にし、信頼を担保し、継承するための仕組みとして。",
  alternates: { canonical: "/web3", languages: { ja: "/web3", en: "/en/web3" } },
};

export default function Web3Page() {
  return (
    <>
      <section className="border-b border-neutral-200 bg-emerald-950 text-white">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <p className="text-sm font-medium tracking-wide text-emerald-300">New Initiative</p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
            Web3.0 / RWA（Real World Asset）
            <br className="hidden md:block" />
            Token Development
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-emerald-50 md:text-lg">
            Pursuitは、Web3.0およびRWA（Real World Asset）トークン領域において新規プロダクト開発を進めています。
            それは投機のためではなく、価値の所在を明確にし、信頼を担保し、継承するための仕組みとしてです。
          </p>
        </div>
      </section>

      <section className="border-b border-neutral-200">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <SectionHeading
            eyebrow="Our Definition of RWA"
            title="RWAトークンとは、「正しい価値の証明」である。"
            description="Pursuitが取り組むRWA（Real World Asset）トークン開発は、金融的な投機や価格変動を目的としたものではありません。"
          />
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-neutral-700">
            現実世界に存在する価値――事業、知的資産、権利、実績、信用――を
            <strong>「なぜ価値があるのか」「どのように生まれ、積み重ねられてきたのか」</strong>
            を含めて記録し、説明可能な形で証明するための
            <strong>価値証明のインフラ</strong>として設計しています。
          </p>
          <div className="mt-10">
            <h3 className="text-lg font-semibold">Pursuitが想定するRWAの対象</h3>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {[
                "事業やプロジェクトの実績・履歴",
                "知的財産・ノウハウ・設計思想",
                "ブランドや信用の蓄積",
                "人・組織・地域に紐づく価値",
              ].map((t) => (
                <div key={t} className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
                  <p className="text-sm leading-relaxed text-neutral-700">{t}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-lg font-semibold">トークンは「目的」ではない</h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                トークンは、価値の所在や履歴を社会的に説明可能にするための<strong>手段</strong>です。
                Pursuitは、「なぜその価値が存在するのか」「誰が、どのように関与してきたのか」
                「なぜ次世代に残すべきなのか」を説明できる設計を重視します。
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-lg font-semibold">新たな事業開発としてのRWAトークン</h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                PursuitにおけるRWAトークン開発は、単なる技術検証ではなく、
                <strong>「価値をどのように事業として成立させ、社会に定着させるか」</strong>
                までを含めた新たな事業開発の取り組みです。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8">
          <Link
            href="/contact"
            className="rounded-xl bg-neutral-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
          >
            お問い合わせ
          </Link>
        </div>
      </section>
    </>
  );
}
