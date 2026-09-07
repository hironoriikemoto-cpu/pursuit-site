import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Pursuit Sovereignty | Enterprise AI Sovereignty Platform",
  description:
    "企業のAIを「使うもの」から「育てるもの」へ。Pursuit Sovereigntyは、企業独自のKnowledgeをAIに与え（KNOW）、AI自身に品質を評価させ（JUDGE）、評価結果から継続的に改善する（IMPROVE）ためのEnterprise AI基盤です。",
  alternates: { canonical: "/sovereignty", languages: { ja: "/sovereignty", en: "/en/sovereignty" } },
};

const capabilities = [
  {
    key: "KNOW",
    title: "自社のKnowledgeを与える",
    body: "PDF・Word・Excel・社内Wiki等に分散した企業独自のKnowledgeを構造化し、AIが使える状態にします。どの観点で・何を根拠に構造化したかまで検証できる形にすることで、Knowledge化の過程をブラックボックスにしません。",
  },
  {
    key: "JUDGE",
    title: "AI自身の出力を評価する",
    body: "LLM-as-a-JudgeがAIの出力を「正確性・根拠性・網羅性・社内規程への準拠」の4軸でスコアリング。点数だけでなく「なぜ低いのか」を構造化して返すため、人間による全数チェックに頼らない品質管理が可能になります。",
  },
  {
    key: "IMPROVE",
    title: "評価結果から継続的に改善する",
    body: "評価の指摘事項をもとに検索クエリとプロンプトを自動で再構成し、目標スコアに達するまで再生成を反復。使い続けるほど、企業固有の業務に適応するAIへと育っていきます。",
  },
];

const whyNow = [
  {
    title: "① Enterprise Knowledgeの分散",
    body: "PDF・Word・Excel・SharePoint・Slack・社内Wiki・過去案件……。企業のKnowledgeは分散しており、単純なRAG接続だけでは企業固有の知見を活かしきれません。",
  },
  {
    title: "② AI Qualityを検品しきれない",
    body: "正しいか、根拠があるか、社内ルールに沿っているか。利用量が増えるほど、人間による全数チェックは現実的に不可能になります。",
  },
  {
    title: "③ Continuous Improvementの欠如",
    body: "「PoCで一度精度確認→そのまま本番運用」では、Knowledge・要求・モデルが変化し続ける中で品質を維持できません。",
  },
];

const roadmap = [
  { step: "1. Demo", body: "コンセプトを5分以内に理解できるデモ（現在地）" },
  { step: "2. Enterprise PoC", body: "実企業のKnowledge・Use Caseでベースライン→評価→改善→再評価" },
  { step: "3. Production", body: "認証・データ連携・評価ダッシュボード・ガバナンス・監査を追加" },
  { step: "4. Sovereign AI Platform", body: "企業が自社AIを自ら評価・改善・運用できるOperating Layerへ" },
];

export default function SovereigntyPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-neutral-200 bg-emerald-950 text-white">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <p className="text-sm font-medium tracking-wide text-emerald-300">
            ENTERPRISE AI SOVEREIGNTY PLATFORM
          </p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
            Pursuit Sovereignty
          </h1>
          <p className="mt-6 text-xl font-semibold leading-snug md:text-2xl">
            企業のAIを「使うもの」から「育てるもの」へ。
          </p>
          <p className="mt-3 text-sm font-medium tracking-wide text-emerald-300">
            Own Your Knowledge. Judge Your AI. Improve Continuously.
          </p>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-emerald-50 md:text-lg">
            Pursuit Sovereigntyは、企業独自のKnowledgeをAIに与え、AI自身にその品質を評価させ、
            その評価結果からAIを継続的に改善していくためのEnterprise AI基盤です。
            目指すのは「導入して終わるAI」から「使い続けるほど企業固有の業務に適応するAI」への転換です。
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-emerald-950 shadow-sm transition hover:opacity-90"
            >
              PoC・導入のご相談
            </Link>
            <span className="rounded-xl border border-emerald-400/50 px-6 py-3 text-sm font-semibold text-emerald-200">
              デモサイト 近日公開
            </span>
          </div>
        </div>
      </section>

      {/* KNOW → JUDGE → IMPROVE */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <SectionHeading
            eyebrow="Three Core Capabilities"
            title="KNOW → JUDGE → IMPROVE の循環を、自社内に。"
            description="単なるRAG・チャットボット・AIエージェント・AI評価ツールではありません。3つの能力を1つの循環として自社内に構築します。"
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {capabilities.map((c) => (
              <div key={c.key} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm md:p-8">
                <p className="text-sm font-semibold tracking-widest text-emerald-900">{c.key}</p>
                <h3 className="mt-2 text-lg font-semibold">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-700">{c.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl bg-neutral-50 px-6 py-5 text-center">
            <p className="text-sm font-semibold text-neutral-700">
              評価スコアの推移イメージ:
              <span className="ml-3 font-mono text-neutral-500">Iteration 1</span>
              <span className="mx-2 font-mono text-lg text-neutral-900">63</span>
              <span className="text-neutral-400">→</span>
              <span className="ml-2 font-mono text-neutral-500">Iteration 2</span>
              <span className="mx-2 font-mono text-lg text-neutral-900">91</span>
              <span className="text-neutral-400">→</span>
              <span className="ml-2 font-mono text-neutral-500">Iteration 3</span>
              <span className="mx-2 font-mono text-lg font-semibold text-emerald-900">96</span>
            </p>
            <p className="mt-2 text-xs text-neutral-500">
              評価の指摘をもとに参照Knowledgeとプロンプトを再構成し、スコアが目標に達するまで自動で反復します
            </p>
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <SectionHeading
            eyebrow="Why Now"
            title="なぜ、生成AIのPoCは本番運用に進まないのか。"
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {whyNow.map((w) => (
              <div key={w.title} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold">{w.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-700">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 思想 */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <SectionHeading
            eyebrow="Philosophy"
            title="AIを「借りる」のではなく、自社の資産として育てる。"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 md:p-8">
              <h3 className="text-sm font-semibold tracking-wide text-neutral-500">従来型 Enterprise AI</h3>
              <p className="mt-4 text-sm leading-loose text-neutral-600">
                AI Vendor → AI System → Enterprise
              </p>
              <p className="mt-4 text-sm leading-relaxed text-neutral-700">
                なぜその回答なのか、何を根拠にしたのか、どう改善するのか——
                その主導権をベンダー側に委ね、企業側が掌握しきれない構造。
              </p>
            </div>
            <div className="rounded-2xl border-2 border-emerald-900 bg-white p-6 shadow-sm md:p-8">
              <h3 className="text-sm font-semibold tracking-wide text-emerald-900">Pursuit Sovereignty</h3>
              <p className="mt-4 text-sm leading-loose text-neutral-800">
                Your Knowledge → Your AI → Your Evaluation → Your Improvement ↺
              </p>
              <p className="mt-4 text-sm leading-relaxed text-neutral-700">
                回答の根拠・評価・改善のすべてを企業自身が掌握する。
                それがAIにおける<strong>主権（Sovereignty）</strong>です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <SectionHeading
            eyebrow="Demo"
            title="数分で体験できるMVPデモを開発中。"
            description="ドキュメントのアップロードから、KNOW→JUDGE→IMPROVEの一連の流れ——評価スコアの推移、Before/After比較、改善の履歴——までを数分で体験できるデモを公開予定です。"
          />
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="rounded-xl border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-500">
              デモサイト 近日公開
            </span>
            <Link
              href="/contact"
              className="rounded-xl bg-neutral-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
            >
              先行デモをご希望の方はこちら
            </Link>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <SectionHeading eyebrow="Roadmap" title="デモから、Sovereign AI Platformへ。" />
          <ol className="mt-10 space-y-4">
            {roadmap.map((r) => (
              <li key={r.step} className="flex flex-col gap-1 rounded-2xl border border-neutral-200 bg-white px-6 py-4 shadow-sm md:flex-row md:items-center md:gap-6">
                <span className="w-56 shrink-0 text-sm font-semibold text-emerald-900">{r.step}</span>
                <span className="text-sm text-neutral-700">{r.body}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <SectionHeading
            eyebrow="Contact"
            title="自社のKnowledgeで、AIを育てはじめませんか。"
            description="Enterprise PoC（実企業のKnowledge・Use Caseでのベースライン測定→評価→改善）のご相談を受け付けています。「AIのPoCが本番に進まない」という課題感の段階からで構いません。"
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-neutral-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
            >
              お問い合わせ
            </Link>
            <Link
              href="/web3"
              className="rounded-xl border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-50"
            >
              Web3/RWAの取り組みを見る
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
