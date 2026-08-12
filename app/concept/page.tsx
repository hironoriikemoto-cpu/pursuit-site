import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Concept",
  description:
    "まだ形になっていない価値を、追求し続ける。そして、生まれた価値を、守る。Pursuit inc.の思想とロゴコンセプト。",
  alternates: { canonical: "/concept" },
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
