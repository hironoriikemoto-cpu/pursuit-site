import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Pursuit of Sovereignty | Enterprise AI Sovereignty Platform",
  description:
    "From using AI to growing it. Pursuit of Sovereignty is an enterprise AI platform that feeds your knowledge to AI (KNOW), lets AI judge its own output (JUDGE), and continuously improves from those evaluations (IMPROVE).",
  alternates: {
    canonical: "/en/sovereignty",
    languages: { ja: "/sovereignty", en: "/en/sovereignty" },
  },
};

const capabilities = [
  {
    key: "KNOW",
    title: "Feed it your knowledge",
    body: "Enterprise knowledge scattered across PDF, Word, Excel, and internal wikis is structured into a form AI can actually use. The structuring process itself — which perspectives were adopted and on what grounds — remains verifiable, so knowledge never becomes a black box.",
  },
  {
    key: "JUDGE",
    title: "Let AI judge its own output",
    body: "An LLM-as-a-Judge scores every output on four axes: correctness, groundedness, completeness, and policy compliance. It returns not just scores but structured reasons why — enabling quality control that doesn't depend on humans reviewing everything.",
  },
  {
    key: "IMPROVE",
    title: "Improve continuously from evaluations",
    body: "Based on the judge's findings, search queries and prompts are automatically reconstructed and the output regenerated until it reaches the target score. The more you use it, the better your AI adapts to your company's specific work.",
  },
];

const whyNow = [
  {
    title: "① Enterprise knowledge is scattered",
    body: "PDF, Word, Excel, SharePoint, Slack, internal wikis, past projects… Enterprise knowledge is dispersed, and a simple RAG connection cannot fully leverage what makes your company unique.",
  },
  {
    title: "② AI quality can't be inspected at scale",
    body: "Is it correct? Is it grounded? Does it follow internal rules? As usage grows, human review of every output becomes practically impossible.",
  },
  {
    title: "③ No continuous improvement",
    body: "\"Verify accuracy once in a PoC, then run it in production as-is\" cannot maintain quality while knowledge, requirements, and models keep changing.",
  },
];

const roadmap = [
  { step: "1. Demo", body: "A demo that communicates the concept in under five minutes (we are here)" },
  { step: "2. Enterprise PoC", body: "Baseline → evaluate → improve → re-evaluate with real enterprise knowledge and use cases" },
  { step: "3. Production", body: "Authentication, data integration, evaluation dashboards, governance, and audit" },
  { step: "4. Sovereign AI Platform", body: "An operating layer where enterprises evaluate, improve, and run their own AI" },
];

export default function EnSovereigntyPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-neutral-200 bg-emerald-950 text-white">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <p className="text-sm font-medium tracking-wide text-emerald-300">
            ENTERPRISE AI SOVEREIGNTY PLATFORM
          </p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
            Pursuit of Sovereignty
          </h1>
          <p className="mt-6 text-xl font-semibold leading-snug md:text-2xl">
            From using AI to growing it.
          </p>
          <p className="mt-3 text-sm font-medium tracking-wide text-emerald-300">
            Own Your Knowledge. Judge Your AI. Improve Continuously.
          </p>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-emerald-50 md:text-lg">
            Pursuit of Sovereignty is an enterprise AI platform that feeds your company&apos;s
            unique knowledge to AI, has the AI evaluate the quality of its own output, and
            continuously improves it from those evaluations. The goal: a shift from
            &ldquo;AI that ends at deployment&rdquo; to &ldquo;AI that adapts to your
            business the more you use it.&rdquo;
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/en/contact"
              className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-emerald-950 shadow-sm transition hover:opacity-90"
            >
              Discuss a PoC
            </Link>
            <span className="rounded-xl border border-emerald-400/50 px-6 py-3 text-sm font-semibold text-emerald-200">
              Demo coming soon
            </span>
          </div>
        </div>
      </section>

      {/* KNOW → JUDGE → IMPROVE */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <SectionHeading
            eyebrow="Three Core Capabilities"
            title="The KNOW → JUDGE → IMPROVE cycle, inside your company."
            description="Not just another RAG, chatbot, AI agent, or evaluation tool. Three capabilities built as one continuous cycle within your organization."
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
              Score progression:
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
              Referenced knowledge and prompts are reconstructed from the judge&apos;s findings, iterating automatically until the target score is reached
            </p>
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <SectionHeading
            eyebrow="Why Now"
            title="Why do generative AI PoCs never reach production?"
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

      {/* Philosophy */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <SectionHeading
            eyebrow="Philosophy"
            title="Don't rent AI. Grow it as your own asset."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 md:p-8">
              <h3 className="text-sm font-semibold tracking-wide text-neutral-500">Conventional Enterprise AI</h3>
              <p className="mt-4 text-sm leading-loose text-neutral-600">
                AI Vendor → AI System → Enterprise
              </p>
              <p className="mt-4 text-sm leading-relaxed text-neutral-700">
                Why this answer? Based on what? How does it improve? — the levers stay
                with the vendor, in a structure the enterprise can never fully grasp.
              </p>
            </div>
            <div className="rounded-2xl border-2 border-emerald-900 bg-white p-6 shadow-sm md:p-8">
              <h3 className="text-sm font-semibold tracking-wide text-emerald-900">Pursuit of Sovereignty</h3>
              <p className="mt-4 text-sm leading-loose text-neutral-800">
                Your Knowledge → Your AI → Your Evaluation → Your Improvement ↺
              </p>
              <p className="mt-4 text-sm leading-relaxed text-neutral-700">
                The grounds, the evaluation, and the improvement of every answer — all in
                your own hands. That is <strong>sovereignty</strong> over your AI.
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
            title="An MVP demo you can experience in minutes — in development."
            description="From document upload through the full KNOW → JUDGE → IMPROVE flow — score progression, before/after comparison, and improvement history — an interactive demo is coming soon."
          />
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="rounded-xl border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-500">
              Demo coming soon
            </span>
            <Link
              href="/en/contact"
              className="rounded-xl bg-neutral-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
            >
              Request early access
            </Link>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <SectionHeading eyebrow="Roadmap" title="From demo to Sovereign AI Platform." />
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
            title="Start growing AI on your own knowledge."
            description="We are accepting enterprise PoC engagements — baseline measurement, evaluation, and improvement with your real knowledge and use cases. It's fine to start from nothing more than 'our AI PoC never made it to production.'"
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/en/contact"
              className="rounded-xl bg-neutral-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
            >
              Contact us
            </Link>
            <Link
              href="/en/web3"
              className="rounded-xl border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-50"
            >
              Our Web3/RWA work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
