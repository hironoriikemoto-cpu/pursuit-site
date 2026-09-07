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
