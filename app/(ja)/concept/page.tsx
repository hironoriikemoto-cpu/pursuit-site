import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Concept",
  description:
    "まだ形になっていない価値を、追求し続ける。そして、生まれた価値を、守る。Pursuit inc.の思想とロゴコンセプト。",
  alternates: { canonical: "/concept", languages: { ja: "/concept", en: "/en/concept" } },
};

export default function ConceptPage() {
  return (
    <>
      <section className="border-b border-neutral-200">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <p className="text-sm font-medium tracking-wide text-neutral-500">
            Concept / Philosophy
          </p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
            まだ形になっていない価値を、追求し続ける。
            <br className="hidden md:block" />
            そして、生まれた価値を、守る。
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-neutral-700 md:text-lg">
            まだ形になっていない価値を追求し続けること。そして、生まれた価値を守ること。
            Pursuitは、未定義で不確かな領域に踏み込み、価値を見出し、それを一過性の流行で終わらせることなく、
            社会に定着する&ldquo;価値&rdquo;として守り抜くための会社である。
          </p>
        </div>
      </section>

      {/* Pursuit of Sovereignty — 思想の核 */}
      <section className="border-b border-neutral-200 bg-emerald-950 text-white">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <p className="text-sm font-medium tracking-wide text-emerald-300">
            Pursuit of Sovereignty
          </p>
          <h2 className="mt-2 text-2xl font-semibold leading-snug md:text-3xl">
            私たちが追求してきたのは、価値の「主権」。
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-emerald-50">
            価値を追求し、守る——この営みの本質は、価値を生み出した人・組織・地域が、
            その価値を自ら理解し、証明し、育て、次代へ継承できる状態、
            すなわち<strong>「主権（Sovereignty）」</strong>を持つことだと私たちは考えます。
          </p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-emerald-50">
            主権が失われるとき、価値は他者の物差しでしか測られなくなり、やがて忘れられていきます。
            Pursuitは、テクノロジーの力で主権を一人ひとり、一社一社の手に取り戻し、
            <strong>新しい社会をつくる挑戦を支援し続ける会社であり続けます。</strong>
          </p>
        </div>
      </section>

      {/* 主権の系譜 */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <SectionHeading
            eyebrow="The Lineage of Sovereignty"
            title="テクノロジーの進化は、主権の追求の歴史。"
            description="私たちが向き合ってきたテーマは、いずれも「主権」という一つの軸の上にあります。"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              {
                theme: "DAO",
                en: "Economic / Organizational Sovereignty",
                ja: "組織と経済の主権",
                body: "中央への依存から離れ、参加者自身が意思決定と価値の分配を担う。組織のあり方そのものを、構成員の手に取り戻す。",
              },
              {
                theme: "Semantic Web",
                en: "Knowledge Sovereignty",
                ja: "知識の主権",
                body: "散在する情報を意味として構造化し、知を検索可能な資産に変える。知識を、それを生み出した者の手で扱えるようにする。",
              },
              {
                theme: "AI",
                en: "Cognitive Sovereignty",
                ja: "認知の主権",
                body: "判断と知性を借り物にしない。自社のKnowledgeでAIを育て、その評価と改善を自らの手で担う。",
              },
              {
                theme: "Web3 / RWA",
                en: "Ownership Sovereignty",
                ja: "所有の主権",
                body: "価値の所有と来歴を、自らの手で証明する。なぜ価値があるのかを、説明可能な形で残し、継承する。",
              },
            ].map((c) => (
              <div key={c.theme} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm md:p-8">
                <p className="text-sm font-semibold tracking-wide text-neutral-400">{c.theme}</p>
                <h3 className="mt-2 text-lg font-semibold text-emerald-900">{c.en}</h3>
                <p className="mt-1 text-sm font-semibold text-neutral-700">{c.ja}</p>
                <p className="mt-3 text-sm leading-relaxed text-neutral-700">{c.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-neutral-700">
            これらの潮流の合流点として、私たちは
            <Link href="/sovereignty" className="font-semibold text-emerald-900 underline decoration-emerald-200 underline-offset-4 hover:decoration-emerald-900">
              Pursuit of Sovereignty
            </Link>
            を構想し、事業の中心に据えています。
          </p>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <SectionHeading
            eyebrow="Logo Concept"
            title="「探し続ける動き」と「価値を包み、支える構造」。"
            description="その両方を同時に内包させたい。"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              "未完成であることを恐れず、前進し続ける姿勢",
              "価値の核心だけを選び取り、守る強さ",
              "動きと安定、未来と信頼が共存する佇まい",
            ].map((t) => (
              <div key={t} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <p className="text-sm leading-relaxed text-neutral-700">{t}</p>
              </div>
            ))}
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
