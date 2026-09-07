import Link from "next/link";
import Image from "next/image";
import ArticleCard from "@/components/ArticleCard";
import SectionHeading from "@/components/SectionHeading";
import { getArticles } from "@/lib/microcms";

export const revalidate = 60;

const domains = [
  { title: "Enterprise AI", body: "AIを「使う」から「育てる」へ — Pursuit Sovereignty" },
  { title: "AI / System", body: "設計から実装・定着まで" },
  { title: "Business Design", body: "構想を事業として成立へ" },
];

const members = [
  {
    name: "池本 博則",
    role: "共同代表 / Business Design",
    photo: "/ikemoto.jpg",
    career: [
      "株式会社マイナビにて就職情報事業部総合企画営業本部長を務めた後、新規事業として地方創生領域を立ち上げ、事業部長として「マイナビ農業」を中心とした複数プロダクトを創出・推進。その後独立し、株式会社ユニークピースを創業。",
      "地方創生、アグリテック、公共×民間連携、業務効率化DXなどの分野において、構想設計から社会実装までを一貫して担い、自治体・大手企業との共同プロジェクトを多数主導。エコシステム設計を軸に、実体経済に根ざした事業創造を行ってきた。",
      "戦略設計と実行を横断するプロデューサー型起業家として活動する中、Web3およびRWA領域に着目。現実資産の価値証明を再定義することを目的にPursuitを創業。構想だけで終わらせない。思想と実装を接続し、社会構造を更新する事業を創り続けている。",
    ],
    skills: [
      "戦略営業 / アライアンス構築 / 大型案件クロージング",
      "事業戦略設計 / 新規事業開発",
      "エコシステム設計 / 産業クラスター形成",
      "地方創生 / 官民連携モデル構築",
      "RWA（Real World Assets）構造設計",
      "トークンエコノミクス構想設計",
      "DX設計（業務効率化 / データ活用）",
      "プロジェクト統括 / マルチステークホルダー調整",
    ],
  },
  {
    name: "江口 天",
    role: "共同代表 / Engineering & AI",
    photo: "/eguchi.jpg",
    career: [
      "東京大学大学院修了後、NTT研究所で暗号研究に従事。その後海外に移住し、海外マイクロソフトでオフィス製品の検索エンジンの実装を担当。",
      "帰国後、2018年に自身の創立した会社である株式会社MDIUを設立し、複数社のAI顧問として様々なAI案件に関わる。2022年にMDIUを東証プライム企業へM&A、エンジニアとしてのバックグラウンドだけでなく、EXIT経験を有した連続起業家でもある。",
    ],
    skills: [
      "プログラミング言語（Python, JavaScript）",
      "自然言語処理 / 機械学習 / 深層学習",
      "Web3.0 / Blockchain / 暗号通貨",
      "Web開発（FastAPI, React, Django）",
      "クラウドインフラ（AWS, GCP）",
      "ビジネス英語力（海外でネイティブと渡り合った実践レベル）",
      "金融リテラシー",
    ],
  },
];

export default async function Home() {
  const [news, insights, works] = await Promise.all([
    getArticles("news", { limit: 3 }),
    getArticles("insights", { limit: 3 }),
    getArticles("works", { limit: 3 }),
  ]);

  return (
    <>
      {/* Hero */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <p className="text-sm font-medium tracking-wide text-neutral-500">
            価値を追求し、守る。
          </p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
            まだ形になっていない価値を、追求し続ける。
            <br className="hidden md:block" />
            そして、生まれた価値を、守る。
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-neutral-700 md:text-lg">
            Pursuitは、未定義で不確かな領域に踏み込み、価値を見出し、一過性の流行で終わらせることなく、
            社会に定着する&ldquo;本質的な価値&rdquo;として育て、支え、守り抜くための会社です。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-neutral-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
            >
              相談する
            </Link>
            <Link
              href="/service"
              className="rounded-xl border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-50"
            >
              サービスを見る
            </Link>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {domains.map((d) => (
              <div key={d.title} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold">{d.title}</h2>
                <p className="mt-2 text-sm text-neutral-600">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dual Leadership */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <SectionHeading
            eyebrow="Dual Leadership"
            title="ビジネスと技術、両輪で価値を成立させる。"
            description="Pursuitは、事業構想・意思決定を担うビジネス視点と、実装・技術設計を担うエンジニアリング視点を一体として持つことで、「構想で終わらせない」事業開発を実現します。"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {members.map((m) => (
              <article key={m.name} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm md:p-8">
                <div className="flex items-center gap-5">
                  <Image
                    src={m.photo}
                    alt={m.name}
                    width={96}
                    height={96}
                    className="h-24 w-24 rounded-2xl object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{m.name}</h3>
                    <p className="mt-1 text-sm text-neutral-600">{m.role}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-neutral-500">経歴</h4>
                  {m.career.map((p, i) => (
                    <p key={i} className="mt-3 text-sm leading-relaxed text-neutral-700">
                      {p}
                    </p>
                  ))}
                </div>
                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-neutral-500">スキル・専門分野</h4>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {m.skills.map((s) => (
                      <li key={s} className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs text-neutral-700">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Service */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <SectionHeading
            eyebrow="Business / Service"
            title="価値を、設計し、実装し、定着させる。"
            description="AI開発／業務システム開発／Webアプリ開発／構想設計・伴走支援。"
          />
          <Link
            href="/service"
            className="mt-6 inline-block rounded-xl border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-50"
          >
            Serviceへ
          </Link>
        </div>
      </section>

      {/* Pursuit Sovereignty */}
      <section className="border-b border-neutral-200 bg-emerald-950 text-white">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <p className="text-sm font-medium tracking-wide text-emerald-300">
            Flagship Product — Enterprise AI Sovereignty Platform
          </p>
          <h2 className="mt-2 text-2xl font-semibold leading-snug md:text-3xl">
            Pursuit Sovereignty
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-emerald-50">
            企業のAIを「使うもの」から「育てるもの」へ。自社のKnowledgeをAIに与え（KNOW）、
            AI自身に品質を評価させ（JUDGE）、評価結果から継続的に改善する（IMPROVE）。
            この循環を自社内に構築するEnterprise AI基盤を開発しています。
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/sovereignty"
              className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-semibold text-emerald-950 shadow-sm transition hover:opacity-90"
            >
              Pursuit Sovereigntyを見る
            </Link>
            <span className="rounded-xl border border-emerald-400/50 px-6 py-3 text-sm font-semibold text-emerald-200">
              デモサイト 近日公開
            </span>
          </div>
        </div>
      </section>

      {/* Latest content */}
      {(
        [
          { endpoint: "news", label: "News", title: "お知らせ", list: news.contents },
          { endpoint: "insights", label: "Insights", title: "コラム・考察", list: insights.contents },
          { endpoint: "works", label: "Works", title: "実績・事例", list: works.contents },
        ] as const
      ).map(
        (section) =>
          section.list.length > 0 && (
            <section key={section.endpoint} className="border-b border-neutral-200">
              <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8">
                <div className="flex items-end justify-between">
                  <SectionHeading eyebrow={section.label} title={section.title} />
                  <Link
                    href={`/${section.endpoint}`}
                    className="text-sm font-semibold text-neutral-700 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-900"
                  >
                    一覧へ
                  </Link>
                </div>
                <div className="mt-8 grid gap-5 md:grid-cols-3">
                  {section.list.map((a) => (
                    <ArticleCard key={a.id} endpoint={section.endpoint} article={a} />
                  ))}
                </div>
              </div>
            </section>
          )
      )}

      {/* CTA */}
      <section>
        <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <SectionHeading
            eyebrow="Contact"
            title="価値の芽から、ご相談ください。"
            description="まだ整理できていなくて構いません。Pursuitは「事業として成立させたい」という想いを起点に、最適な形を一緒に追求します。"
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-neutral-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
            >
              お問い合わせ
            </Link>
            <Link
              href="/concept"
              className="rounded-xl border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-50"
            >
              思想を見る
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
