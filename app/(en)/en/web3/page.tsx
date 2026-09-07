import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Web3 / RWA",
  description:
    "Web3.0 / RWA (Real World Asset) token development — not for speculation, but as a mechanism for proving, protecting, and passing on value.",
  alternates: {
    canonical: "/en/web3",
    languages: { ja: "/web3", en: "/en/web3" },
  },
};

export default function EnWeb3Page() {
  return (
    <>
      <section className="border-b border-neutral-200 bg-emerald-950 text-white">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <p className="text-sm font-medium tracking-wide text-emerald-300">Initiative</p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
            Web3.0 / RWA (Real World Asset)
            <br className="hidden md:block" />
            Token Development
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-emerald-50 md:text-lg">
            Pursuit develops new products in the Web3.0 and RWA (Real World Asset) token
            space — not for speculation, but as mechanisms that clarify where value
            resides, secure trust, and pass value on.
          </p>
        </div>
      </section>

      <section className="border-b border-neutral-200">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <SectionHeading
            eyebrow="Our Definition of RWA"
            title="An RWA token is proof of rightful value."
            description="Our RWA token development is not aimed at financial speculation or price movement."
          />
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-neutral-700">
            Value that exists in the real world — businesses, intellectual assets, rights,
            track records, trust — recorded together with{" "}
            <strong>why it has value and how it was created and accumulated</strong>, and
            proven in an explainable form: we design RWA tokens as{" "}
            <strong>infrastructure for proving value</strong>.
          </p>
          <div className="mt-10">
            <h3 className="text-lg font-semibold">What we consider RWA</h3>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {[
                "Track records and histories of businesses and projects",
                "Intellectual property, know-how, and design philosophies",
                "Accumulated brand equity and trust",
                "Value tied to people, organizations, and regions",
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
              <h2 className="text-lg font-semibold">Tokens are not the goal</h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                A token is a <strong>means</strong> of making the location and history of
                value socially explainable. We prioritize designs that can answer: why
                does this value exist, who has been involved and how, and why should it be
                passed on to the next generation?
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-lg font-semibold">RWA tokens as new business development</h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                For Pursuit, RWA token development is not a technical experiment — it is
                new business development that includes{" "}
                <strong>
                  how to make value viable as a business and embed it in society
                </strong>
                .
              </p>
            </div>
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
