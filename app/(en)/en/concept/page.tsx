import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Concept",
  description:
    "Keep pursuing value that has yet to take shape. And protect the value that emerges. The philosophy and logo concept of Pursuit inc.",
  alternates: {
    canonical: "/en/concept",
    languages: { ja: "/concept", en: "/en/concept" },
  },
};

export default function EnConceptPage() {
  return (
    <>
      <section className="border-b border-neutral-200">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <p className="text-sm font-medium tracking-wide text-neutral-500">
            Concept / Philosophy
          </p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
            Keep pursuing value that has yet to take shape.
            <br className="hidden md:block" />
            And protect the value that emerges.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-neutral-700 md:text-lg">
            To keep pursuing value that has not yet taken shape. And to protect the value
            that is born. Pursuit is a company that steps into undefined, uncertain
            territory, discovers value, and — rather than letting it end as a passing
            trend — defends it as value that takes root in society.
          </p>
        </div>
      </section>

      {/* Pursuit of Sovereignty — core philosophy */}
      <section className="border-b border-neutral-200 bg-emerald-950 text-white">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <p className="text-sm font-medium tracking-wide text-emerald-300">
            Pursuit of Sovereignty
          </p>
          <h2 className="mt-2 text-2xl font-semibold leading-snug md:text-3xl">
            What we have been pursuing is sovereignty over value.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-emerald-50">
            To pursue value and to protect it — at its core, this means that the people,
            organizations, and regions who create value can understand it, prove it, grow
            it, and pass it on themselves. That state is what we call{" "}
            <strong>sovereignty</strong>.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-emerald-50">
            When sovereignty is lost, value comes to be measured only by someone
            else&apos;s yardstick — and is eventually forgotten. Pursuit uses technology
            to return sovereignty to each person and each company, and{" "}
            <strong>
              will remain a company that empowers those who build the new society.
            </strong>
          </p>
        </div>
      </section>

      {/* The lineage of sovereignty */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <SectionHeading
            eyebrow="The Lineage of Sovereignty"
            title="The evolution of technology is a history of pursuing sovereignty."
            description="Every theme we have worked on lies on a single axis: sovereignty."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              {
                theme: "DAO",
                en: "Economic / Organizational Sovereignty",
                body: "Independence from the center: participants themselves make decisions and share value — returning the very shape of organizations to their members.",
              },
              {
                theme: "Semantic Web",
                en: "Knowledge Sovereignty",
                body: "Structuring scattered information as meaning, turning knowledge into a searchable asset — handled by the very people who created it.",
              },
              {
                theme: "AI",
                en: "Cognitive Sovereignty",
                body: "Never borrowing judgment or intelligence: growing AI on your own knowledge, and owning its evaluation and improvement yourself.",
              },
              {
                theme: "Web3 / RWA",
                en: "Ownership Sovereignty",
                body: "Proving the ownership and provenance of value with your own hands — recording why it matters, in an explainable form, for the next generation.",
              },
            ].map((c) => (
              <div key={c.theme} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm md:p-8">
                <p className="text-sm font-semibold tracking-wide text-neutral-400">{c.theme}</p>
                <h3 className="mt-2 text-lg font-semibold text-emerald-900">{c.en}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-700">{c.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-neutral-700">
            At the confluence of these currents, we conceived{" "}
            <Link href="/en/sovereignty" className="font-semibold text-emerald-900 underline decoration-emerald-200 underline-offset-4 hover:decoration-emerald-900">
              Pursuit of Sovereignty
            </Link>{" "}
            — and placed it at the center of our business.
          </p>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <SectionHeading
            eyebrow="Logo Concept"
            title="The motion of searching, and the structure that holds and protects value."
            description="We wanted our mark to embody both at once."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              "The will to keep moving forward, unafraid of being unfinished",
              "The strength to select and protect only the core of value",
              "A presence where motion and stability, future and trust, coexist",
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
            href="/en/contact"
            className="rounded-xl bg-neutral-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
          >
            Contact us
          </Link>
        </div>
      </section>
    </>
  );
}
