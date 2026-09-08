import Link from "next/link";
import Image from "next/image";
import ArticleCard from "@/components/ArticleCard";
import SectionHeading from "@/components/SectionHeading";
import { getArticles, toEnArticle } from "@/lib/microcms";

export const revalidate = 60;

const domains = [
  { title: "Enterprise AI", body: "From using AI to growing it — Pursuit of Sovereignty" },
  { title: "AI / System", body: "From design to implementation and adoption" },
  { title: "Business Design", body: "Turning concepts into viable businesses" },
];

const members = [
  {
    name: "Hironori Ikemoto",
    role: "Co-CEO / Business Design",
    photo: "/ikemoto.jpg",
    career: [
      "After serving as General Manager of corporate planning and sales in Mynavi's career information division, he launched the company's regional revitalization business and, as division head, created and led multiple products centered on Mynavi Agriculture. He later founded Unique Piece Inc.",
      "Across regional revitalization, agri-tech, public–private partnerships, and operational DX, he has led numerous joint projects with municipalities and major corporations — covering everything from concept design to real-world implementation, with ecosystem design at the core.",
      "As a producer-type entrepreneur bridging strategy and execution, he turned his attention to Web3 and RWA, founding Pursuit to redefine how the value of real-world assets is proven. His mission: connect philosophy with implementation, and keep building businesses that renew the structure of society.",
    ],
    skills: [
      "Strategic sales / alliance building / large-deal closing",
      "Business strategy & new business development",
      "Ecosystem design / industrial cluster formation",
      "Regional revitalization / public–private partnership models",
      "RWA (Real World Assets) structural design",
      "Token economics concept design",
      "DX design (operational efficiency / data utilization)",
      "Program management / multi-stakeholder coordination",
    ],
  },
  {
    name: "Takashi Eguchi",
    role: "Co-CEO / Engineering & AI",
    photo: "/eguchi.jpg",
    career: [
      "After completing graduate studies at the University of Tokyo, he conducted cryptography research at NTT Laboratories, then moved overseas to work at Microsoft on search engine implementation for Office products.",
      "Back in Japan, he founded MDIU Inc. in 2018 and served as an AI advisor to multiple companies across a wide range of AI projects. In 2022, MDIU was acquired by a TSE Prime-listed company — making him a serial entrepreneur with both deep engineering roots and a successful exit.",
    ],
    skills: [
      "Programming (Python, JavaScript)",
      "NLP / machine learning / deep learning",
      "Web3.0 / blockchain / cryptocurrency",
      "Web development (FastAPI, React, Django)",
      "Cloud infrastructure (AWS, GCP)",
      "Professional working English",
      "Financial literacy",
    ],
  },
];

export default async function EnHome() {
  const [news, insights, works] = await Promise.all([
    getArticles("news", { limit: 50 }),
    getArticles("insights", { limit: 50 }),
    getArticles("works", { limit: 50 }),
  ]);
  const enNews = news.contents.map(toEnArticle).filter((a) => a !== null).slice(0, 3);
  const enInsights = insights.contents.map(toEnArticle).filter((a) => a !== null).slice(0, 3);
  const enWorks = works.contents.map(toEnArticle).filter((a) => a !== null).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <p className="text-sm font-medium tracking-wide text-neutral-500">
            Pursue value. Protect value.
          </p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
            Keep pursuing value that has yet to take shape.
            <br className="hidden md:block" />
            And protect the value that emerges.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-neutral-700 md:text-lg">
            Pursuit steps into undefined, uncertain territory to discover value — and
            nurtures, supports, and protects it as essential value that takes root in
            society, rather than letting it end as a passing trend.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/en/contact"
              className="rounded-xl bg-neutral-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
            >
              Talk to us
            </Link>
            <Link
              href="/en/service"
              className="rounded-xl border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-50"
            >
              Our services
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
            title="Business and engineering, driving value together."
            description="Pursuit combines a business perspective — concept and decision-making — with an engineering perspective — implementation and technical design — to build businesses that never stop at the concept stage."
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
                  <h4 className="text-sm font-semibold text-neutral-500">Background</h4>
                  {m.career.map((p, i) => (
                    <p key={i} className="mt-3 text-sm leading-relaxed text-neutral-700">
                      {p}
                    </p>
                  ))}
                </div>
                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-neutral-500">Expertise</h4>
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
            title="Design value. Implement it. Make it stick."
            description="AI development / business systems / web applications / business design & hands-on support."
          />
          <Link
            href="/en/service"
            className="mt-6 inline-block rounded-xl border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-50"
          >
            See our services
          </Link>
        </div>
      </section>

      {/* Pursuit of Sovereignty */}
      <section className="border-b border-neutral-200 bg-emerald-950 text-white">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <p className="text-sm font-medium tracking-wide text-emerald-300">
            Flagship Product — Enterprise AI Sovereignty Platform
          </p>
          <h2 className="mt-2 text-2xl font-semibold leading-snug md:text-3xl">
            Pursuit of Sovereignty
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-emerald-50">
            From using AI to growing it. Feed your enterprise knowledge to AI (KNOW),
            let AI judge the quality of its own output (JUDGE), and continuously improve
            from those evaluations (IMPROVE). We are building the enterprise AI platform
            that establishes this cycle inside your company.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/en/sovereignty"
              className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-semibold text-emerald-950 shadow-sm transition hover:opacity-90"
            >
              Explore Pursuit of Sovereignty
            </Link>
            <span className="rounded-xl border border-emerald-400/50 px-6 py-3 text-sm font-semibold text-emerald-200">
              Demo coming soon
            </span>
          </div>
        </div>
      </section>

      {/* Latest content */}
      {(
        [
          { endpoint: "news", label: "News", title: "News", list: enNews },
          { endpoint: "insights", label: "Insights", title: "Insights", list: enInsights },
          { endpoint: "works", label: "Works", title: "Works", list: enWorks },
        ] as const
      ).map(
        (section) =>
          section.list.length > 0 && (
            <section key={section.endpoint} className="border-b border-neutral-200">
              <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8">
                <div className="flex items-end justify-between">
                  <SectionHeading eyebrow={section.label} title={section.title} />
                  <Link
                    href={`/en/${section.endpoint}`}
                    className="text-sm font-semibold text-neutral-700 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-900"
                  >
                    View all
                  </Link>
                </div>
                <div className="mt-8 grid gap-5 md:grid-cols-3">
                  {section.list.map((a) => (
                    <ArticleCard key={a.id} endpoint={section.endpoint} article={a} locale="en" />
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
            title="Bring us the seed of your idea."
            description="It doesn't have to be fully formed. Pursuit starts from your ambition to build a real business, and pursues the best shape for it together with you."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/en/contact"
              className="rounded-xl bg-neutral-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
            >
              Contact us
            </Link>
            <Link
              href="/en/concept"
              className="rounded-xl border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-50"
            >
              Our philosophy
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
